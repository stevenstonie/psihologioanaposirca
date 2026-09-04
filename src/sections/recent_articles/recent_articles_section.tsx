import './recent_articles_section.scss';
import { ROUTES } from '../../utils/nav_items';
import Button from '../../components/button/button';


export default function RecentArticlesSection() {

    return (
        <section className='recent-articles-section'>
            <h2>Articole recente</h2>
            <div style={{ height: '300px' }}>
                <p>content</p>
                <p>content</p>
                <p>content</p>
                <p>content</p>
                <p>content</p>
                <p>content</p>
            </div>

            <br></br>

            <Button to={ROUTES.ARTICLES} size="md">Vezi toate articolele</Button>
        </section>
    );
}