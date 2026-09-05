
import { useParams, Navigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchArticles } from '../../api/sheet_service';
import Markdown from 'react-markdown'
import './article_details_page.scss';
import FooterSection from '../../sections/footer/footer_section';
import Button from '../../components/button/button';

export default function ArticleDetailsPage() {
    const { id } = useParams<{ id: string }>();
    const {
        data: articles,
        isPending,
        isFetching,
        isError
    } = useQuery({
        queryKey: ['articles'],
        queryFn: fetchArticles,
    });
    if (isPending) return <div>Se încarcă...</div>;
    if (isError) return <div>Eroare la conectarea cu serverul.</div>;

    const article = articles?.find(a => String(a.id).trim() === String(id).trim());
    if (!article && isFetching) {
        return <div>Se actualizează articolul...</div>;
    }
    if (!article) return <Navigate to="/404" replace />;

    const readingTime = estimateReadingTime(article.contents);
    return (
        <>
            <article className="article-details-page">
                <div className="article-hero">
                    <img src={article.imageUrl} alt={article.title} />

                    <div className="article-hero-overlay">
                        <h1>{article.title}</h1>

                        <header className="article-meta">
                            <span className="category-tag">{article.category} • {readingTime} min</span>
                            <p>
                                De {article.authors} • {article.date}
                            </p>
                            {/* add <time >{article.date}</time> instead */}
                        </header>
                    </div>
                </div>

                <div className="article-body">
                    <Markdown>{article.contents}</Markdown>
                </div>

                <br />

                <Button variant='secondary' size='lg' to={article.wholeArticleUrl}>Citește tot articolul ↗</Button>
            </article>

            <FooterSection />
        </>
    );
}

export function estimateReadingTime(text: string): number {
    const wordsPerMinute = 180;
    const wordCount = text.trim().split(/\s+/).length;
    return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
}