import Image from "next/image";

// logo.svg viewBox: 800 × 227.74 → aspect ratio ≈ 3.51 : 1
const ASPECT = 800 / 227.74;

interface LogoProps {
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg";
}

export default function Logo({ variant = "dark", size = "md" }: LogoProps) {
  const heights = { sm: 34, md: 42, lg: 54 };
  const h = heights[size];
  const w = Math.round(h * ASPECT);

  // The SVG uses white + cyan on a transparent background.
  // "light" (on dark bg) → render as-is; white/cyan elements are fully visible.
  // "dark"  (on light bg) → convert to black silhouette for legibility.
  const style =
    variant === "dark"
      ? { filter: "brightness(0)" }
      : undefined;

  return (
    <Image
      src="/logo.svg"
      alt="QORDIXY"
      width={w}
      height={h}
      priority
      className="object-contain"
      style={style}
    />
  );
}
