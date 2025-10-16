import { useEffect } from "react";

interface SeoProps {
  title: string;
  description?: string;
  canonical?: string;
  schema?: Record<string, any> | Record<string, any>[];
}

export function Seo({ title, description, canonical, schema }: SeoProps) {
  useEffect(() => {
    // Title
    if (title) document.title = title;

    // Meta description
    if (description) {
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", "description");
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", description);
    }

    // Canonical
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", canonical);
    }

    // Structured data
    const existing = Array.from(document.querySelectorAll('script[type="application/ld+json"]'));
    const current = document.createElement("script");
    current.type = "application/ld+json";
    if (schema) current.text = JSON.stringify(schema);
    document.head.appendChild(current);

    return () => {
      // Leave canonical and description; remove only our structured data node
      if (current && current.parentNode) current.parentNode.removeChild(current);
    };
  }, [title, description, canonical, JSON.stringify(schema)]);

  return null;
}
