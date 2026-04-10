import { useEffect } from 'react';

export const useSeo = ({ title, description, canonical }) => {
  useEffect(() => {
    if (typeof document === 'undefined') {
      return;
    }

    if (title) {
      document.title = title;
    }

    const metaDescription = document.querySelector('meta[name="description"]');

    if (metaDescription && description) {
      metaDescription.setAttribute('content', description);
    }

    if (canonical) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');

      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }

      canonicalLink.setAttribute('href', canonical);
    }
  }, [title, description, canonical]);
};
