
const assetCache = new Map<string, Promise<void> | true>();

export function waitForAssets(imageUrl?: string, timeoutMs: number = 7000) {
    // dont run on server (if running on ssr)
    if (typeof window === 'undefined') return;

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

    let timerId: ReturnType<typeof setTimeout>;
    const timeoutPromise = new Promise((resolve) => {
        timerId = setTimeout(resolve, timeoutMs);
    });
    // if not ready, bundle them together, wait for them and then mark as cached (or continue after a max timeout is reached)
    const loadPromise = Promise.race([
        Promise.all(tasks),
        timeoutPromise
    ]).then(() => {
        clearTimeout(timerId);
        assetCache.set(cacheKey, true);
    });

    assetCache.set(cacheKey, loadPromise);

    // stop rendering to show page loader
    throw loadPromise;
}