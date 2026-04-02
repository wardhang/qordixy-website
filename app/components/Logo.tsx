import Image from "next/image";

interface LogoProps {
  variant?: "dark" | "light" | "png";
  size?: "sm" | "md" | "lg";
}

// ─── Geometric Q ────────────────────────────────────────────────────────────
// Bold near-complete circle with a deliberate angular gap at bottom-right
// and a short diagonal tail that slices through the opening.
function GeometricQ({ color, size }: { color: string; size: number }) {
  const sw = size * 0.165;           // stroke width
  const pad = sw / 2;
  const cx = size * 0.45 + pad;     // circle centre x
  const cy = size * 0.44 + pad;     // circle centre y
  const r  = size * 0.38;           // radius

  // Gap at 4–5 o'clock (SVG angles: 0° = right, clockwise)
  const gapTopDeg  = 22;   // top edge of the gap
  const gapBotDeg  = 68;   // bottom edge of the gap
  const toRad = (d: number) => (d * Math.PI) / 180;

  // Arc starts at bottom-of-gap, sweeps 294° clockwise, ends at top-of-gap
  const arcSX = cx + r * Math.cos(toRad(gapBotDeg));
  const arcSY = cy + r * Math.sin(toRad(gapBotDeg));
  const arcEX = cx + r * Math.cos(toRad(gapTopDeg));
  const arcEY = cy + r * Math.sin(toRad(gapTopDeg));

  // Geometric tail: a straight diagonal stroke slicing out through the gap
  const midDeg  = (gapTopDeg + gapBotDeg) / 2;   // 45°
  const tailIX  = cx + r * 0.38 * Math.cos(toRad(midDeg));
  const tailIY  = cy + r * 0.38 * Math.sin(toRad(midDeg));
  const tailOX  = cx + r * 1.45 * Math.cos(toRad(midDeg));
  const tailOY  = cy + r * 1.45 * Math.sin(toRad(midDeg));

  const svgW = tailOX + pad + 1;
  const svgH = size + pad * 2;

  return (
    <svg
      width={svgW}
      height={svgH}
      viewBox={`0 0 ${svgW} ${svgH}`}
      fill="none"
      style={{ display: "inline-block", verticalAlign: "middle", marginBottom: "0.04em" }}
      aria-hidden="true"
    >
      {/* Main arc — 294° sweep, gap at bottom-right */}
      <path
        d={`M ${arcSX} ${arcSY} A ${r} ${r} 0 1 1 ${arcEX} ${arcEY}`}
        stroke={color}
        strokeWidth={sw}
        strokeLinecap="round"
        fill="none"
      />
      {/* Geometric tail slicing through the gap */}
      <line
        x1={tailIX} y1={tailIY}
        x2={tailOX} y2={tailOY}
        stroke={color}
        strokeWidth={sw}
        strokeLinecap="square"
      />
    </svg>
  );
}

// ─── Bold Italic X with top-right cut ───────────────────────────────────────
// Falling stroke (\) in wordmark colour — full.
// Rising stroke (/) in Electric Cyan — bold italic, severed near the top-right
// leaving a deliberate gap then a floating detached tip.
function StylizedX({ color, size }: { color: string; size: number }) {
  const cyan  = "#00DDEB";
  const sw    = size * 0.175;           // stroke width (bold)
  const pad   = sw / 2;
  const shift = size * 0.11;            // italic lean (top points offset right)
  const w     = size * 0.78;            // base width before italic

  // Falling stroke (\) — top-left to bottom-right
  const fx1 = pad + shift, fy1 = pad;
  const fx2 = w - pad + shift, fy2 = size - pad;

  // Rising stroke (/) — bottom-left to top-right (with italic offset at top)
  const rx1 = pad, ry1 = size - pad;
  const rx2 = w - pad + shift * 2, ry2 = pad;

  // Cut the rising stroke: main body runs to 65%, gap, floating tip from 80%
  const cutFrac  = 0.65;
  const tipFrac  = 0.80;
  const cutX = rx1 + (rx2 - rx1) * cutFrac;
  const cutY = ry1 + (ry2 - ry1) * cutFrac;
  const tipX = rx1 + (rx2 - rx1) * tipFrac;
  const tipY = ry1 + (ry2 - ry1) * tipFrac;

  const svgW = w + shift * 2 + pad;

  return (
    <svg
      width={svgW}
      height={size}
      viewBox={`0 0 ${svgW} ${size}`}
      fill="none"
      style={{ display: "inline-block", verticalAlign: "middle", marginBottom: "0.04em" }}
      aria-hidden="true"
    >
      {/* Falling stroke — full, wordmark colour */}
      <line
        x1={fx1} y1={fy1} x2={fx2} y2={fy2}
        stroke={color} strokeWidth={sw} strokeLinecap="round"
      />
      {/* Rising stroke — cyan, body (bottom-left → cut point) */}
      <line
        x1={rx1} y1={ry1} x2={cutX} y2={cutY}
        stroke={cyan} strokeWidth={sw} strokeLinecap="round"
      />
      {/* Rising stroke — cyan, detached floating tip (gap → top-right) */}
      <line
        x1={tipX} y1={tipY} x2={rx2} y2={ry2}
        stroke={cyan} strokeWidth={sw} strokeLinecap="round"
      />
    </svg>
  );
}

// ─── Logo ────────────────────────────────────────────────────────────────────
export default function Logo({ variant = "dark", size = "md" }: LogoProps) {
  // PNG variant — renders the actual image asset directly (use on white/light backgrounds)
  if (variant === "png") {
    const pngSizes = { sm: [130, 36], md: [168, 46], lg: [210, 58] };
    const [w, h] = pngSizes[size];
    return (
      <Image
        src="/logo.png"
        alt="QORDIXY"
        width={w}
        height={h}
        priority
        className="object-contain"
      />
    );
  }

  const navyColor = variant === "light" ? "#FFFFFF" : "#0A1F44";
  const cyanColor = "#00DDEB";

  const cfg = {
    sm: { icon: 28, letterH: 17, textClass: "text-lg",  gap: "gap-2"   },
    md: { icon: 36, letterH: 22, textClass: "text-2xl", gap: "gap-2.5" },
    lg: { icon: 48, letterH: 28, textClass: "text-3xl", gap: "gap-3"   },
  };

  const { icon, letterH, textClass, gap } = cfg[size];

  return (
    <div className={`flex items-center ${gap}`}>
      {/* Hexagonal Core Icon */}
      <svg
        width={icon} height={icon}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="QORDIXY icon"
      >
        <polygon points="24,3 42,13.5 42,34.5 24,45 6,34.5 6,13.5"
          stroke={navyColor} strokeWidth="1.5" fill="none" opacity="0.3" />
        <polygon points="24,10 37,17.5 37,30.5 24,38 11,30.5 11,17.5"
          stroke={cyanColor} strokeWidth="1.5" fill="none" opacity="0.6" />
        <circle cx="24" cy="24" r="3.5" fill={cyanColor} />
        <line x1="24" y1="20.5" x2="24" y2="10"  stroke={cyanColor} strokeWidth="1.5" opacity="0.9" />
        <line x1="20"  y1="21.5" x2="14" y2="15" stroke={cyanColor} strokeWidth="1"   opacity="0.5" />
        <line x1="28"  y1="21.5" x2="34" y2="15" stroke={cyanColor} strokeWidth="1"   opacity="0.5" />
        <line x1="11"  y1="24"   x2="24" y2="24" stroke={navyColor} strokeWidth="1"   opacity="0.4" />
        <line x1="24"  y1="24"   x2="37" y2="24" stroke={navyColor} strokeWidth="1"   opacity="0.4" />
        <line x1="24"  y1="27.5" x2="14" y2="33" stroke={navyColor} strokeWidth="1"   opacity="0.3" />
        <line x1="24"  y1="27.5" x2="34" y2="33" stroke={navyColor} strokeWidth="1"   opacity="0.3" />
        <circle cx="24" cy="10"   r="1.5" fill={cyanColor} opacity="0.8" />
        <circle cx="37" cy="17.5" r="1.2" fill={navyColor} opacity="0.5" />
        <circle cx="11" cy="17.5" r="1.2" fill={navyColor} opacity="0.5" />
      </svg>

      {/* Wordmark */}
      <span
        className={`font-heading font-bold tracking-widest uppercase ${textClass} inline-flex items-center`}
        style={{ color: navyColor, letterSpacing: "0.1em" }}
      >
        {/* Geometric Q */}
        <GeometricQ color={navyColor} size={letterH} />
        {/* Regular letters */}
        <span style={{ marginLeft: "0.04em" }}>ORDI</span>
        {/* Bold italic X with top-right cut */}
        <span className="mx-[0.02em]">
          <StylizedX color={navyColor} size={letterH} />
        </span>
        Y
      </span>
    </div>
  );
}
