import { Link } from 'react-router-dom';
import './intro_section.scss';

export default function IntroSection() {
    return (
        <section className="intro-section">
            <div className="intro-container">
                <h1 className="sr-only">Servicii profesionale de psihologie</h1>
                <img
                    src="/intro-image.jpg"
                    alt="O imagine de introducere ce mă reprezintă"
                    className="intro-image"
                />

                <div className="intro-text">
                    <p style={{ fontSize: 'clamp(1.3rem, 5vw, 1.9rem)' }}>
                        Un loc în care întrebările să nu fie prea mult, emoțiile să nu fie greu de pus în cuvinte, iar ceea ce trăim să poată fi privit cu mai multă înțelegere.
                    </p>
                    <p style={{ fontSize: 'clamp(1.1rem, 4vw, 1.5rem)' }}>
                        Sunt Poșircă Ioana-Claudia, psiholog, și îți ofer un astfel de spațiu — pentru tine, pentru ceea ce simți și pentru ceea ce vrei să descoperi despre tine.
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