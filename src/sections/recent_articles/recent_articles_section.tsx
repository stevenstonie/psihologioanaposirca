import './recent_articles_section.scss';
import { ROUTES } from '../../utils/navigation';
import Button from '../../components/button/button';
import { ArticlesPreviewGrid } from '../../components/article_preview/article_preview';
import { queryForArticles } from '../../utils/react_query_hooks';


export default function RecentArticlesSection() {
    const { data: articles, isLoading, error } = queryForArticles();

    if (isLoading) return <div>Se preiau articolele...</div>;
    if (error) return <div>Preluarea articolelor a eșuat.</div>;

    const recentSix = articles?.slice(0, 6) || [];

    return (
        <section className='recent-articles-section'>
            <h2>Articole recente</h2>

            <ArticlesPreviewGrid articles={recentSix} emptyMessage='Niciun articol recent..' />

            <br></br>

            <div className='see-all-articles-btn-container'>
                <Button to={ROUTES.ARTICLES} size="md" variant='secondary'>
                    Vezi toate articolele
                </Button>
            </div>
        </section>
    );
}
