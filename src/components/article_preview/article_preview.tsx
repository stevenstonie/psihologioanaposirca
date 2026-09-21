
import './article_preview.scss';
import type { Article } from '../../api/sheet_service';
import { ROUTES } from '../../utils/navigation';
import { Link } from 'react-router-dom';
import { handleArticleImageError } from '../../utils/image_helpers';

interface ArticlesPreviewGridProps {
    articles: Article[];
    articleTitleHeadingLevel?: 'h2' | 'h3' | 'h4';
    emptyMessage?: string;
}

export function ArticlesPreviewGrid({
    articles,
    articleTitleHeadingLevel = 'h2',
    emptyMessage = "Niciun articol publicat."
}: Readonly<ArticlesPreviewGridProps>) {
    return (
        <>
            {articles.length == 0 ? (
                <p>{emptyMessage}</p>
            ) : (
                <ul className="articles-preview-grid">
                    {articles.map((article: Article) => (
                        <li key={article.id} className="grid-item">
                            <ArticlePreviewCard article={article} titleHeadingLevel={articleTitleHeadingLevel} />
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}

interface Props {
    article: Article;
    titleHeadingLevel: 'h2' | 'h3' | 'h4';
}

export function ArticlePreviewCard({ article, titleHeadingLevel }: Readonly<Props>) {
    const TitleTag = titleHeadingLevel;

    return (
        <Link
            to={`${ROUTES.ARTICLE}/${article.id}`}
            className="article-preview-card"
        >
            <span className="category-tag">{article.category}</span>
            <img src={article.imageUrl} alt={article.title} loading="lazy"
                onError={handleArticleImageError} style={{ borderRadius: '5px' }} />
            <TitleTag>{article.title}</TitleTag>
            <time>{article.date} | Autori: {article.authors}</time>
            <span style={{ color: 'var(--color-secondary-darker)' }}>Citește fragmentul →</span> {/* sau pasajul */}
        </Link>
    );
}