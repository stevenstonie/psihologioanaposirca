import fallbackArticleImgPath from '@/assets/images/fallback_article_image.jpg';

const FALLBACK_ARTICLE_IMG_PATH: string = fallbackArticleImgPath;


export const handleArticleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;

    if (!Object.hasOwn(img.dataset, 'fallback')) {
        img.dataset.fallback = 'true';
        img.src = FALLBACK_ARTICLE_IMG_PATH;
    }
};