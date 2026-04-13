import type { BlogSection } from "@/lib/blog-data";

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export default function BlogArticleBody({
  sections,
  variant = "light",
}: {
  sections: BlogSection[];
  variant?: "light" | "dark";
}) {
  const isDark = variant === "dark";
  return (
    <div
      className={`space-y-5 text-base sm:text-lg leading-relaxed ${
        isDark ? "text-white/85" : "text-[#0A1F44]/90"
      }`}
    >
      {sections.map((section, index) => {
        if (section.kind === "h2") {
          const id = slugify(section.text);
          return (
            <h2
              key={index}
              id={id}
              className={`font-heading font-bold text-xl sm:text-2xl pt-4 scroll-mt-28 ${
                isDark ? "text-white" : "text-[#0A1F44]"
              }`}
            >
              {section.text}
            </h2>
          );
        }
        if (section.kind === "p") {
          return (
            <p key={index} className={isDark ? "text-white/80" : "text-[#0A1F44]/85"}>
              {section.text}
            </p>
          );
        }
        return (
          <ul
            key={index}
            className={`list-disc pl-6 space-y-2 marker:text-[#00DDEB] ${
              isDark ? "text-white/80" : "text-[#0A1F44]/85"
            }`}
          >
            {section.items.map((item, j) => (
              <li key={j}>{item}</li>
            ))}
          </ul>
        );
      })}
    </div>
  );
}
