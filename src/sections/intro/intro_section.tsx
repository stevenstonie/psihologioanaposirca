import './intro_section.scss';
import introImage from '@/assets/images/intro-image.webp';
import { ROUTES } from '../../utils/navigation';
import Button from '../../components/button/button';

export default function IntroSection() {
    return (
        <section className="intro-section">
            <div className="intro-container">
                <h1 className="intro-eyebrow">
                    Cabinet de Psihologie în Constanța
                </h1>

                <div className="intro-media">
                    <img
                        className="intro-image"
                        src={introImage}
                        alt="O imagine de introducere ce mă reprezintă"
                    />
                </div>

                <blockquote className="intro-quote">
                    Un loc în care întrebările să nu fie prea mult, emoțiile să nu fie greu de pus în cuvinte, iar ceea ce trăim să poată fi privit <span className="intro-highlight">cu mai multă înțelegere</span>.
                </blockquote>

                <h2 className="intro-subtext">
                    Sunt Poșircă Ioana-Claudia, psiholog, și îți ofer un astfel de spațiu - pentru tine, pentru ceea ce simți și pentru ceea ce vrei să descoperi despre tine.
                </h2>

                <div className="intro-buttons">
                    <Button variant="secondary" size="lg" to={ROUTES.ABOUT_ME}>
                        Despre Mine
                    </Button>
                    <Button variant='primary' size="lg" to={ROUTES.APPOINTMENT}>Programează-te</Button>
                </div>
            </div>
        </section>
    );
}
