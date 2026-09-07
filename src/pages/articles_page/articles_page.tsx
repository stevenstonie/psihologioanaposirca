import FooterSection from '../../sections/footer/footer_section';
import './articles_page.scss';
import { ArticlesPreviewGrid } from '../../components/article_preview/article_preview';
import { queryForArticles } from '../../utils/react_query_hooks';
import { LoaderBreathing } from '../../components/loader_breathing/loader_breathing';

export default function ArticlesPage() {
    const { data: articles, isPending, error } = queryForArticles();

    if (error) return <div>Preluarea articolelor a eșuat.</div>;

    return (
        <>
            <main className='articles-page'>
                <h1>Articole</h1>

                {isPending ? (
                    <LoaderBreathing text='Se preiau articolele...' />
                ) : (
                    <ArticlesPreviewGrid articles={articles || []} />
                )}
            </main>

            <FooterSection />
        </>
    );
}
