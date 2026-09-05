
import { useParams, Navigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchArticles } from '../../api/sheet_service';
import Markdown from 'react-markdown'

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

    return (
        <article className="full-article-layout">
            <header>
                <h1>{article.title}</h1>
                <p>{article.date} | {article.category} | By {article.authors}</p>
            </header>
            <img src={article.imageUrl} alt={article.title} />

            <div className="article-body">
                <Markdown>{article.contents}</Markdown>
            </div>
        </article>
    );
}