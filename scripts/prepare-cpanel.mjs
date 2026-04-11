/**
 * After `next build` with `output: "standalone"`, Next.js does not copy
 * `public/` or `.next/static` into `.next/standalone/`. Both are required at runtime.
 *
 * Also removes `sharp` + `@img` from `standalone/node_modules`: those packages
 * contain OS/arch-specific binaries. A zip built on macOS will crash on Linux
 * (typical cPanel) if they are left in place.
 *
 * Finally writes `qordixy-cpanel-deploy.zip` for upload.
 */
import archiver from "archiver";
import { cp, copyFile, mkdir, rm } from "node:fs/promises";
import { createWriteStream } from "node:fs";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const standalone = path.join(root, ".next", "standalone");
const publicSrc = path.join(root, "public");
const staticSrc = path.join(root, ".next", "static");
const publicDest = path.join(standalone, "public");
const staticDest = path.join(standalone, ".next", "static");
const zipPath = path.join(root, "qordixy-cpanel-deploy.zip");

if (!existsSync(standalone)) {
  console.error(
    "Missing .next/standalone. Run `npm run build` first (next.config must use output: \"standalone\")."
  );
  process.exit(1);
}

if (!existsSync(staticSrc)) {
  console.error("Missing .next/static. Run `npm run build` first.");
  process.exit(1);
}

if (existsSync(publicSrc)) {
  await cp(publicSrc, publicDest, { recursive: true, force: true });
  console.log("Copied public/ → .next/standalone/public/");
} else {
  console.warn("No public/ folder — skipped.");
}

await mkdir(path.join(standalone, ".next"), { recursive: true });
await cp(staticSrc, staticDest, { recursive: true, force: true });
console.log("Copied .next/static/ → .next/standalone/.next/static/");

const sharpPath = path.join(standalone, "node_modules", "sharp");
const imgPath = path.join(standalone, "node_modules", "@img");
if (existsSync(sharpPath)) {
  await rm(sharpPath, { recursive: true, force: true });
  console.log("Removed standalone node_modules/sharp (OS-specific; not portable in zip).");
}
if (existsSync(imgPath)) {
  await rm(imgPath, { recursive: true, force: true });
  console.log("Removed standalone node_modules/@img (native bindings; not portable in zip).");
}

const deployDoc = path.join(root, "CPANEL-DEPLOY.txt");
const envExample = path.join(root, ".env.local.example");
if (existsSync(deployDoc)) {
  await copyFile(deployDoc, path.join(standalone, "CPANEL-DEPLOY.txt"));
  console.log("Added CPANEL-DEPLOY.txt to bundle.");
}
if (existsSync(envExample)) {
  await copyFile(envExample, path.join(standalone, "env.example"));
  console.log("Added env.example (copy to host env vars; do not commit secrets).");
}

const startHereSrc = path.join(root, "scripts", "cpanel-START-HERE.txt");
const startHere = path.join(standalone, "START-HERE.txt");
if (existsSync(startHereSrc)) {
  await copyFile(startHereSrc, startHere);
  console.log("Added START-HERE.txt to bundle.");
}

const bytesWritten = await new Promise((resolve, reject) => {
  const output = createWriteStream(zipPath);
  const archive = archiver("zip", { zlib: { level: 9 } });

  const fail = (err) => reject(err);
  output.on("error", fail);
  archive.on("error", fail);
  archive.on("warning", (err) => {
    if (err.code !== "ENOENT") fail(err);
  });

  output.on("close", () => resolve(archive.pointer()));

  archive.pipe(output);
  archive.directory(standalone, false);
  archive.finalize();
});

const mb = (bytesWritten / (1024 * 1024)).toFixed(2);
console.log(`\nCreated ${path.basename(zipPath)} (${mb} MB) — upload and extract on your server.`);
console.log("Extracted folder must contain server.js at the top level.");
console.log("Run: NODE_ENV=production node server.js (set SMTP_* and PORT per your host).\n");
