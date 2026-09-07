import './intro_section.scss';
import introImage from '@/assets/images/intro-image.jpg';
import { ROUTES } from '../../utils/navigation';
import Button from '../../components/button/button';

export default function IntroSection() {
    return (
        <section className="intro-section">
            <h2 className='sr-only'>Introducere</h2>
            <div className="intro-container">
                <img
                    src={introImage}
                    alt="O imagine de introducere ce mă reprezintă"
                    className="intro-image"
                />

                <div className="intro-text">
                    <blockquote style={{ fontSize: 'clamp(1.5rem, 5vw, 2.4rem)', margin: '1rem 0', fontFamily: 'var(--font-quote)', textShadow: '1px 0' }}>
                        Un loc în care întrebările să nu fie prea mult, emoțiile să nu fie greu de pus în cuvinte, iar ceea ce trăim să poată fi privit <span style={{ color: 'var(--color-secondary)', textDecoration: 'underline' }}>cu mai multă înțelegere</span>.
                    </blockquote>
                    <p style={{ fontSize: 'clamp(1.2rem, 4vw, 1.7rem)', color: 'var(--color-primary-darker)' }}>
                        Sunt Poșircă Ioana-Claudia, psiholog, și îți ofer un astfel de spațiu - pentru tine, pentru ceea ce simți și pentru ceea ce vrei să descoperi despre tine.
                    </p>
                </div>

                <div className="intro-buttons">
                    <Button variant="secondary" size="lg" to={ROUTES.ABOUT_ME}>
                        Despre Mine
                    </Button>
                    <Button variant='primary' size="lg" to={ROUTES.BOOKING}>Programează-te</Button>
                </div>
            </div>
        </section>
    );
}