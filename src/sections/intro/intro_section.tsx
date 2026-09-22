import './intro_section.scss';
import introImage from '@/assets/images/intro-image.jpg';
import { ROUTES } from '../../utils/navigation';
import Button from '../../components/button/button';

export default function IntroSection() {
    return (
        <div className="intro-container">
            <img
                className="intro-image"
                src={introImage}
                alt="O imagine de introducere ce mă reprezintă"
            />

            <h1 className='intro-eyebrow'
                style={{
                    fontSize: '0.8rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1rem',
                    color: 'var(--color-primary)',
                    marginBottom: '.4rem',
                    fontWeight: 'bold'
                }}>
                Cabinet de Psihologie în Constanța
            </h1>

            <div className="intro-text">
                <blockquote style={{ fontSize: 'clamp(1.5rem, 5vw, 2.4rem)', margin: '.4rem 0 1rem 0', fontFamily: 'var(--font-quote)', textShadow: '1px 0' }}>
                    Un loc în care întrebările să nu fie prea mult, emoțiile să nu fie greu de pus în cuvinte, iar ceea ce trăim să poată fi privit <span style={{ color: 'var(--color-secondary)', textDecoration: 'underline' }}>cu mai multă înțelegere</span>.
                </blockquote>
                <h2 style={{ fontSize: 'clamp(1.2rem, 4vw, 1.7rem)', color: 'var(--color-primary-darker)', fontWeight: 'normal' }}>
                    Sunt Poșircă Ioana-Claudia, psiholog, și îți ofer un astfel de spațiu - pentru tine, pentru ceea ce simți și pentru ceea ce vrei să descoperi despre tine.
                </h2>
            </div>

            <div className="intro-buttons">
                <Button variant="secondary" size="lg" to={ROUTES.ABOUT_ME}>
                    Despre Mine
                </Button>
                <Button variant='primary' size="lg" to={ROUTES.APPOINTMENT}>Programează-te</Button>
            </div>
        </div>
    );
}