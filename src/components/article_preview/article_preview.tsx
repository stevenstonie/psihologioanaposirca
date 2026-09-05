
import './article_preview.scss';
import type { Article } from '../../api/sheet_service';
import { ROUTES } from '../../utils/navigation';
import { Link } from 'react-router-dom';

interface ArticlesPreviewGridProps {
    articles: Article[];
    emptyMessage?: string;
}

export function ArticlesPreviewGrid({
    articles,
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
                            <ArticlePreviewCard article={article} />
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}

interface Props {
    article: Article;
}

export function ArticlePreviewCard({ article }: Readonly<Props>) {
    return (
        <Link
            to={`${ROUTES.ARTICLE}/${article.id}`}
            className="article-preview-card"
        >
            <span className="category-tag">{article.category}</span>
            <img src={article.imageUrl} alt={article.title} loading="lazy" />
            <h3>{article.title}</h3>
            <time>{article.date} | Autori: {article.authors}</time>
            <p style={{ color: 'var(--color-secondary-darker)' }}>Citește articolul</p>
        </Link>
    );
}