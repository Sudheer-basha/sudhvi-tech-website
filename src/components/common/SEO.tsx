import { useEffect } from 'react';

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogType?: 'website' | 'article';
  jsonLd?: Record<string, unknown> | null;
}

/**
 * SEO component to dynamically manage page-level metadata,
 * OpenGraph tags, and JSON-LD structured data per route.
 */
export function SEO({
  title,
  description,
  keywords,
  ogType = 'website',
  jsonLd = null,
}: SEOProps) {
  useEffect(() => {
    // 1. Update Document Title
    const fullTitle = title.includes('SUDHVI TECH')
      ? title
      : `${title} | SUDHVI TECH — From Campus to Career`;
    document.title = fullTitle;

    // Helper to set or create meta tag
    const setMetaTag = (attribute: string, attributeValue: string, content: string) => {
      let element = document.querySelector(`meta[${attribute}="${attributeValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Standard Meta Tags
    setMetaTag('name', 'description', description);
    if (keywords) {
      setMetaTag('name', 'keywords', keywords);
    }

    // 3. OpenGraph Social Tags
    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:type', ogType);

    // 4. Twitter Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', fullTitle);
    setMetaTag('name', 'twitter:description', description);

    // 5. Dynamic JSON-LD Structured Data
    const scriptId = 'dynamic-jsonld-schema';
    let scriptElement = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (jsonLd) {
      if (!scriptElement) {
        scriptElement = document.createElement('script');
        scriptElement.id = scriptId;
        scriptElement.type = 'application/ld+json';
        document.head.appendChild(scriptElement);
      }
      scriptElement.textContent = JSON.stringify(jsonLd);
    } else if (scriptElement) {
      scriptElement.remove();
    }

    // Cleanup on unmount or page change
    return () => {
      // Keep title and base meta or let the next route override
    };
  }, [title, description, keywords, ogType, jsonLd]);

  return null;
}
