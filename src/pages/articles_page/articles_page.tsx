import { useQuery } from '@tanstack/react-query';
import FooterSection from '../../sections/footer/footer_section';
import './articles_page.scss';
import { fetchArticles } from '../../api/sheet_service';
import { ArticlesPreviewGrid } from '../../components/article_preview/article_preview';

export default function ArticlesPage() {
    const { data: articles, isLoading, error } = useQuery({
        queryKey: ['articles'],
        queryFn: fetchArticles,
        staleTime: 5 * 60 * 1000,
    });

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