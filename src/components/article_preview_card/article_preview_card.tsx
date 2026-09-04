
import './article_preview_card.scss';
import type { Article } from '../../api/sheet_service';
import { ROUTES } from '../../utils/navigation';

interface Props {
    article: Article;
}

export default function ArticlePreviewCard({ article }: Readonly<Props>) {
    return (
        <article className="article-preview-card">
            <img src={article.imageUrl} alt={article.title} loading="lazy" />
            <div className="card-content">
                <span className="category-tag">{article.category}</span>

                <h3>{article.title}</h3>
                <time>{article.date} | By {article.authors}</time>

                <p className="preview-text">
                    {article.shortDescription}
                </p>

                <a
                    href={`${ROUTES.ARTICLE}/${article.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="read-more"
                >
                    Read Short Article &rarr;
                </a>

                <br></br>

                <a
                    href={article.wholeArticleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="read-more"
                >
                    Read Whole Article &rarr;
                </a>
            </div>
        </article>
    );
}