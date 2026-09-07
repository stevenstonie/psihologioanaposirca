import './recent_articles_section.scss';
import { ROUTES } from '../../utils/navigation';
import Button from '../../components/button/button';
import { ArticlesPreviewGrid } from '../../components/article_preview/article_preview';
import { queryForArticles } from '../../utils/react_query_hooks';
import { LoaderBreathing } from '../../components/loader_breathing/loader_breathing';


export default function RecentArticlesSection() {
    const { data: articles, isPending, error } = queryForArticles();

    if (error) return <div>Preluarea articolelor a eșuat.</div>;

    return (
        <section className='recent-articles-section'>
            <h2>Articole recente</h2>

            {isPending ? (
                <LoaderBreathing text='Se preiau articolele...' />
            ) : (
                <>
                    <ArticlesPreviewGrid articles={articles?.slice(0, 6) || []} emptyMessage='Niciun articol recent..' />

                    <br></br>

                    <div className='see-all-articles-btn-container'>
                        <Button to={ROUTES.ARTICLES} size="md" variant='secondary'>
                            Vezi toate articolele
                        </Button>
                    </div>
                </>
            )}
        </section>
    );
}
