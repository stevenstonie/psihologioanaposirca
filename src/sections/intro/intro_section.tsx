import { Link } from 'react-router-dom';
import './intro_section.scss';
import introImage from '@/assets/images/intro-image.jpg';

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
                    <blockquote style={{ fontSize: 'clamp(1.5rem, 5vw, 2.4rem)', margin: '1rem 0' }}>
                        Un loc în care întrebările să nu fie prea mult, emoțiile să nu fie greu de pus în cuvinte, iar ceea ce trăim să poată fi privit <span style={{ color: 'var(--color-secondary)', textDecoration: 'underline' }}>cu mai multă înțelegere</span>.
                    </blockquote>
                    <p style={{ fontSize: 'clamp(1.2rem, 4vw, 1.7rem)', color: 'var(--color-primary-darker)' }}>
                        Sunt Poșircă Ioana-Claudia, psiholog, și îți ofer un astfel de spațiu - pentru tine, pentru ceea ce simți și pentru ceea ce vrei să descoperi despre tine.
                    </p>
                </div>

                <div className="intro-buttons">
                    <Link to="/despre-mine" className="btn secondary"
                        onMouseDown={(e) => e.preventDefault()} draggable={false}>
                        Despre Mine
                    </Link>
                    <Link to="/programare" className="btn primary"
                        onMouseDown={(e) => e.preventDefault()} draggable={false}>
                        Programează-te
                    </Link>
                </div>

                <br></br>
                <br></br>
                <br></br>
            </div>
        </section>
    );
}