import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalPath?: string;
}

const DEFAULT_TITLE = 'Bihar Librarian LET 2026 — Syllabus, 150Q Mock Tests & MCQs';
const DEFAULT_DESC =
  'Comprehensive preparation portal for Bihar Librarian Eligibility Test (LET) 2026. Practice 210+ topic-wise MCQs, Dr. Ranganathan 5 Laws, DDC/CC classification, and full 150Q timed mock tests.';

export function useSEO({ title, description, keywords, canonicalPath }: SEOProps = {}) {
  useEffect(() => {
    // 1. Update Title
    const fullTitle = title
      ? `${title} | Bihar Librarian LET 2026`
      : DEFAULT_TITLE;
    document.title = fullTitle;

    // 2. Update Meta Description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description || DEFAULT_DESC);
    }

    // 3. Update OG Title & Description
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', fullTitle);
    }

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', description || DEFAULT_DESC);
    }

    // 4. Update Keywords if provided
    if (keywords) {
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      }
    }

    // 5. Update Canonical Link if provided
    if (canonicalPath) {
      const canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        canonical.setAttribute('href', `https://biharlibrarian.in${canonicalPath}`);
      }
    }
  }, [title, description, keywords, canonicalPath]);
}
