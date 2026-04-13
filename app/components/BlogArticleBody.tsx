import type { BlogSection } from "@/lib/blog-data";

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export default function BlogArticleBody({ sections }: { sections: BlogSection[] }) {
  return (
    <div className="space-y-5 text-[#0A1F44]/90 text-base sm:text-lg leading-relaxed">
      {sections.map((section, index) => {
        if (section.kind === "h2") {
          const id = slugify(section.text);
          return (
            <h2
              key={index}
              id={id}
              className="font-heading font-bold text-[#0A1F44] text-xl sm:text-2xl pt-4 scroll-mt-28"
            >
              {section.text}
            </h2>
          );
        }
        if (section.kind === "p") {
          return (
            <p key={index} className="text-[#0A1F44]/85">
              {section.text}
            </p>
          );
        }
        return (
          <ul
            key={index}
            className="list-disc pl-6 space-y-2 text-[#0A1F44]/85 marker:text-[#00DDEB]"
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
