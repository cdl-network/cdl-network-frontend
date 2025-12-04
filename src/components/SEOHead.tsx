import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalUrl: string;
  ogImage?: string;
}

const SEOHead = ({ 
  title, 
  description, 
  canonicalUrl,
  ogImage = "https://storage.googleapis.com/gpt-engineer-file-uploads/BWPhKNqb5URRF6WShzTtHrC2ENG3/social-images/social-1762981322470-ChatGPT Image 12 лист. 2025 р., 16_01_50.png"
}: SEOHeadProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Helper to update or create meta tag
    const updateMetaTag = (selector: string, attribute: string, content: string) => {
      let element = document.querySelector(selector) as HTMLMetaElement | null;
      if (element) {
        element.setAttribute(attribute === 'content' ? 'content' : attribute, content);
      } else {
        element = document.createElement('meta');
        if (selector.includes('property=')) {
          const propValue = selector.match(/property="([^"]+)"/)?.[1];
          if (propValue) element.setAttribute('property', propValue);
        } else if (selector.includes('name=')) {
          const nameValue = selector.match(/name="([^"]+)"/)?.[1];
          if (nameValue) element.setAttribute('name', nameValue);
        }
        element.setAttribute('content', content);
        document.head.appendChild(element);
      }
    };

    // Helper to update or create link tag
    const updateLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (element) {
        element.href = href;
      } else {
        element = document.createElement('link');
        element.rel = rel;
        element.href = href;
        document.head.appendChild(element);
      }
    };

    // Update meta description
    updateMetaTag('meta[name="description"]', 'content', description);

    // Update canonical URL
    updateLinkTag('canonical', canonicalUrl);

    // Update Open Graph tags
    updateMetaTag('meta[property="og:title"]', 'content', title);
    updateMetaTag('meta[property="og:description"]', 'content', description);
    updateMetaTag('meta[property="og:url"]', 'content', canonicalUrl);
    updateMetaTag('meta[property="og:image"]', 'content', ogImage);

    // Update Twitter Card tags
    updateMetaTag('meta[name="twitter:title"]', 'content', title);
    updateMetaTag('meta[name="twitter:description"]', 'content', description);
    updateMetaTag('meta[name="twitter:image"]', 'content', ogImage);

  }, [title, description, canonicalUrl, ogImage]);

  return null;
};

export default SEOHead;
