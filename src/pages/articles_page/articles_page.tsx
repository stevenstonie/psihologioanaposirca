import FooterSection from '../../sections/footer/footer_section';
import './articles_page.scss';
import { ArticlesPreviewGrid } from '../../components/article_preview/article_preview';
import { queryForArticles } from '../../utils/react_query_hooks';
import { LoaderBreathing } from '../../components/loader_breathing/loader_breathing';
import { usePageHead } from '../../utils/page_head_updater';
import articlesPageCoverImagePath from '@/assets/images/covers/hill_with_flock_of_birds_in_line.webp';
import PageHeader from '../../components/page_header/page_header';

export default function ArticlesPage() {
    usePageHead(
        'Articole | Ioana Poșircă',
        'Explorează articole despre gestionarea anxietății, relații de cuplu, dezvoltare personală și sănătate mintală, scrise dintr-o perspectivă psihoterapeutică.'
    );

    const { data: articles, isPending, error } = queryForArticles();

    if (error) return <div>Preluarea articolelor a eșuat.</div>;

    return (
        <>
            <main className='articles-page'>
                <PageHeader
                    title="Articole"
                    description="Cuvinte așezate cu grijă, de citit în ritmul tău."
                    imagePath={articlesPageCoverImagePath}
                />

                <section className="articles-grid-container">
                    {isPending ? (
                        <LoaderBreathing text='Se preiau articolele...' />
                    ) : (
                        <ArticlesPreviewGrid articles={articles || []} />
                    )}
                </section>
            </main>

            <FooterSection />
        </>
    );
}
