import { useState, useEffect } from "react";


export const getSafeIsoDate = (dateString: string) => {
    if (!dateString) return undefined;

    let safeString = dateString;

    const euDateRegex = /^(\d{2})[-/](\d{2})[-/](\d{4})$/;
    const match = euDateRegex.exec(dateString);

    if (match) {
        safeString = `${match[3]}-${match[2]}-${match[1]}`;
    }

    const d = new Date(safeString);

    if (Number.isNaN(d.getTime())) {
        return dateString;
    }

    return d.toISOString();
};

// used like useMediaQuery('(max-width: 768px)');
export function useMediaQuery(query: string) {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }

        const listener = () => setMatches(media.matches);
        media.addEventListener('change', listener);

        return () => media.removeEventListener('change', listener);
    }, [matches, query]);

    return matches;
}