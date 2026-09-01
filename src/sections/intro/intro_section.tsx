import { Link } from 'react-router-dom';
import './intro_section.scss';

export default function IntroSection() {
    return (
        <section className="intro-section">
            <h2 className='sr-only'>Introducere</h2>
            <div className="intro-container">
                <img
                    src="/intro-image.jpg"
                    alt="O imagine de introducere ce mă reprezintă"
                    className="intro-image"
                />

                <div className="intro-text">
                    <blockquote style={{ fontSize: 'clamp(1.4rem, 5vw, 1.9rem)', margin: '1rem 0'}}>
                        Un loc în care întrebările să nu fie prea mult, emoțiile să nu fie greu de pus în cuvinte, iar ceea ce trăim să poată fi privit cu mai multă înțelegere.
                    </blockquote>
                    <p style={{ fontSize: 'clamp(1.2rem, 4vw, 1.5rem)' }}>
                        Sunt Poșircă Ioana-Claudia, psiholog, și îți ofer un astfel de spațiu - pentru tine, pentru ceea ce simți și pentru ceea ce vrei să descoperi despre tine.
                    </p>
                    <p style={{ fontSize: '1rem' }}>
                        Psiholog clinician, Psiholog atestat în specialitatea Psihologie aplicată în domeniul securității naționale, Psiholog atestat în Psihologia muncii și organizațională, Psiholog Integrativ în formare.
                    </p>
                </div>

                <div className="intro-buttons">
                    <Link to="/despre-mine" className="btn secondary">
                        Despre Mine
                    </Link>
                    <Link to="/programare" className="btn primary">
                        Programează-te
                    </Link>
                </div>
            </div>
        </section>
    );
}