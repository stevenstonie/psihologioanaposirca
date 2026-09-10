
import { useParams, Navigate } from 'react-router-dom';
import Markdown from 'react-markdown'
import './article_details_page.scss';
import FooterSection from '../../sections/footer/footer_section';
import Button from '../../components/button/button';
import { queryForArticles } from '../../utils/react_query_hooks';
import type { Article } from '../../api/sheet_service';
import { LoaderBreathing } from '../../components/loader_breathing/loader_breathing';
import { handleArticleImageError } from '../../utils/image_helpers';
import { updatePageHead } from '../../utils/page_head_updater';

export default function ArticleDetailsPage() {
    const articleTagClassName: string = "article-details-page";
    const { id } = useParams<{ id: string }>();
    const {
        data: articles,
        isPending,
        isFetching,
        isError
    } = queryForArticles();
    const article: Article | undefined = articles?.find(a => String(a.id).trim() === String(id).trim());
    updatePageHead(
        article ? `${article.title} | Ioana Poșircă` : 'Se încarcă articolul... | Ioana Poșircă',
        article ? getCleanExcerpt(article.contents) : ''
    );

    if (isPending) {
        return (
            <div className={articleTagClassName}>
                <LoaderBreathing text='Se preiau detaliile articolului...' />
            </div>
        );
    }
    if (isError) return <div className={articleTagClassName}>Eroare la conectarea cu serverul.</div>;


    if (!article && isFetching) {
        return <div className={articleTagClassName}><LoaderBreathing text='Se actualizează articolul...' /></div>;
    }
    if (!article) return <Navigate to="/404" replace />;

    const readingTime = estimateReadingTime(article.contents);
    return (
        <>
            <article className={articleTagClassName}>
                <div className="article-hero">
                    <img src={article.imageUrl} alt={article.title} onError={handleArticleImageError} />

                    <div className="article-hero-overlay">
                        <h1>{article.title}</h1>

                        <header className="article-meta">
                            <span className="category-tag">{article.category} • {readingTime} min</span>
                            <p>
                                De {article.authors} • <time dateTime={article.date}>{article.date}</time>
                            </p>
                        </header>
                    </div>
                </div>

                <div className="article-body">
                    <Markdown>{article.contents}</Markdown>
                </div>

                <br />

                {article.fullArticleUrl?.trim() && (
                    <Button variant='secondary' size='lg' to={article.fullArticleUrl}>Citește tot articolul ↗</Button>
                )}
            </article>

            <FooterSection />
        </>
    );
}

function estimateReadingTime(text: string): number {
    const wordsPerMinute = 180;
    const wordCount = text.trim().split(/\s+/).length;
    return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
}

function getCleanExcerpt(markdown: string): string {
    if (!markdown) return '';

    const cleanText = markdown
        .replace(/\]\([^)]{0,200}\)/g, ']')
        .replace(/<[^>]{1,200}>/g, '')
        .replace(/^[ \t]{0,10}[#\-*+0-9.>]{1,10}[ \t]{1,10}/gm, '')
        .replace(/[[\]*_~`!]/g, '')
        .replace(/\s{2,}/g, ' ')
        .trim();

    return cleanText.length > 150
        ? cleanText.substring(0, 150) + '...'
        : cleanText;
}