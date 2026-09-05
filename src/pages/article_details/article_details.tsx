
import { useParams, Navigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchArticles } from '../../api/sheet_service';
import Markdown from 'react-markdown'

export default function ArticleDetails() {
    const { id } = useParams<{ id: string }>();

    const { data: articles, isLoading } = useQuery({
        queryKey: ['articles'],
        queryFn: fetchArticles,
    });

    if (isLoading) return <div>Se încarcă...</div>;

    const article = articles?.find(a => a.id === id);

    if (!article) return <Navigate to="/404" />;

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