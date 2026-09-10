import { useEffect } from "react";


export function usePageHead(title: string, description?: string, jsonLd?: Record<string, any>) {
    useEffect(() => {
        document.title = title;

        if (description) {
            let metaDescription = document.querySelector('meta[name="description"]');
            if (!metaDescription) {
                metaDescription = document.createElement('meta');
                metaDescription.setAttribute('name', 'description');
                document.head.appendChild(metaDescription);
            }
            metaDescription.setAttribute('content', description);
        }

        let scriptTag = document.querySelector('script[type="application/ld+json"]');

        if (jsonLd) {
            if (!scriptTag) {
                scriptTag = document.createElement('script');
                scriptTag.setAttribute('type', 'application/ld+json');
                document.head.appendChild(scriptTag);
            }
            scriptTag.textContent = JSON.stringify(jsonLd);
        }

        return () => {
            if (scriptTag) {
                scriptTag.remove();
            }
        };
    }, [title, description, jsonLd]);
}