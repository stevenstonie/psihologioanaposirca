

export const getSafeIsoDate = (dateString: string) => {
    if (!dateString) return undefined;

    const d = new Date(dateString);
    if (Number.isNaN(d)) {
        return dateString;
    }

    return d.toISOString();
};