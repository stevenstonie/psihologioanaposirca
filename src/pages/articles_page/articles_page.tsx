import FooterSection from '../../sections/footer/footer_section';
import './articles_page.scss';
import { ArticlesPreviewGrid } from '../../components/article_preview/article_preview';
import { queryForArticles } from '../../utils/react_query_hooks';

export default function ArticlesPage() {
    const { data: articles, isLoading, error } = queryForArticles();

    if (isLoading) return <div>Se preiau articolele...</div>;
    if (error) return <div>Preluarea articolelor a eșuat.</div>;

    return (
        <>
            <main className="articles-page">
                <h1>Articole</h1>

                <ArticlesPreviewGrid articles={articles || []} />
            </main>

            <FooterSection />
        </>
    );
}