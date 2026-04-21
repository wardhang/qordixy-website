// logo.png: 1024 × 291 → aspect ratio ≈ 3.5189 : 1
const ASPECT = 1024 / 291;

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
    <img
      src="/logo.png"
      alt="QORDIXY"
      width={w}
      height={h}
      className="object-contain"
      style={style}
      fetchPriority="high"
    />
  );
}
