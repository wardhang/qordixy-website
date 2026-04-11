/**
 * After `next build` with `output: "standalone"`, Next.js does not copy
 * `public/` or `.next/static` into `.next/standalone/`. Both are required at runtime.
 * This script copies them, adds deploy helpers, and writes `qordixy-cpanel-deploy.zip`.
 */
import archiver from "archiver";
import { cp, copyFile, mkdir } from "node:fs/promises";
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

const bytesWritten = await new Promise((resolve, reject) => {
  const output = createWriteStream(zipPath);
  const archive = archiver("zip", { zlib: { level: 9 } });
  output.on("close", () => resolve(archive.pointer()));
  archive.on("error", reject);
  archive.pipe(output);
  archive.directory(standalone, false);
  archive.finalize();
});

const mb = (bytesWritten / (1024 * 1024)).toFixed(2);
console.log(`\nCreated ${path.basename(zipPath)} (${mb} MB) — upload and extract on your server.`);
console.log("Extracted folder must contain server.js at the top level.");
console.log("Run: NODE_ENV=production node server.js (set SMTP_* and PORT per your host).\n");
