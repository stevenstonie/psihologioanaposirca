
const assetCache = new Map<string, Promise<void> | true>();

export function waitForAssets(imageUrl?: string) {
    const cacheKey = imageUrl || 'fonts-only';
    // already checked this page?
    if (assetCache.get(cacheKey) === true) return;

    // doesnt support fonts or fonts are downloaded
    const fontsReady = !('fonts' in document) || document.fonts.status === 'loaded';
    let imageReady = !imageUrl;
    if (imageUrl) {
        const img = new Image();
        img.src = imageUrl;
        if (img.complete) imageReady = true;
    }

    // are fonts and image already in browser RAM?
    if (fontsReady && imageReady) {
        assetCache.set(cacheKey, true);
        return;
    }

    // is already downloading asset?
    const existingPromise = assetCache.get(cacheKey);
    if (existingPromise instanceof Promise) throw existingPromise;

    // build missing assets
    const tasks: Promise<unknown>[] = [];
    if (!fontsReady) {
        tasks.push(document.fonts.ready);
    }
    if (imageUrl && !imageReady) {
        tasks.push(
            new Promise((resolve) => {
                const img = new Image();
                img.src = imageUrl;
                img.onload = resolve;
                img.onerror = resolve;
            })
        );
    }

    // if not ready, bundle them together, wait and then mark as cached
    const loadPromise = Promise.all(tasks).then(() => {
        assetCache.set(cacheKey, true);
    });

    assetCache.set(cacheKey, loadPromise);

    // stop rendering to show page loader
    throw loadPromise;
}