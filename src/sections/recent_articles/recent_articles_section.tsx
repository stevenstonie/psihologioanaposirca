import './recent_articles_section.scss';
import { ROUTES } from '../../utils/navigation';
import Button from '../../components/button/button';
import { useQuery } from '@tanstack/react-query';
import { fetchArticles, type Article } from '../../api/sheet_service';
import ArticlePreviewCard from '../../components/article_preview_card/article_preview_card';


export default function RecentArticlesSection() {
    const { data: articles, isLoading, error } = useQuery({
        queryKey: ['articles'],
        queryFn: fetchArticles,
        staleTime: 5 * 60 * 1000,
    });

    if (isLoading) return <div>Loading articles...</div>;
    if (error) return <div>Failed to load articles.</div>;

    const recentSix = articles?.slice(0, 6) || [];

    return (
        <section className='recent-articles-section'>
            <h2>Articole recente</h2>
            <div className="recent-articles-grid">
                {recentSix.map((article: Article) => (
                    <div key={article.id} className="grid-item">
                        <ArticlePreviewCard article={article} />
                    </div>
                ))}
            </div>

            <br></br>

            <Button to={ROUTES.ARTICLES} size="md">Vezi toate articolele</Button>
        </section>
    );
}
