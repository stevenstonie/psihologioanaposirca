import { Link } from 'react-router-dom';
import './policies_page.scss';
import { ROUTES } from '../../utils/navigation';

export function PrivacyPolicyLink() {
    return (
        <Link
            to={ROUTES.POLICIES}
            target="_blank"
            rel="noopener noreferrer"
        >
            Politica de Confidențialitate
        </Link>
    );
}

export default function PoliciesPage() {
    return (
        <main className="policies-page">
            <div className="policies-container">
                <h1>Politici și Termeni</h1>

                <section className="policy-section">
                    <h2>Politica de Confidențialitate</h2>

                    <h3>Ce date colectez și de ce?</h3>
                    <p>
                        Prin intermediul formularului de contact, colectez numele, adresa de e-mail, numărul de telefon și mesajul dumneavoastră. Am nevoie de aceste informații exclusiv pentru a vă putea răspunde la solicitare și pentru a stabili detaliile primei noastre ședințe.
                    </p>

                    <h3>Confidențialitatea comunicării</h3>
                    <p>
                        Știu cât de importantă este discreția în acest domeniu. Datele dumneavoastră sunt transmise în siguranță, prin intermediul serviciului Web3Forms, direct și doar către căsuța mea de e-mail personală și securizată. Nu stochez aceste date pe niciun alt server public și, în niciun caz, nu le voi transmite mai departe către terți.
                    </p>

                    <h3>Securitatea site-ului</h3>
                    <p>
                        Pentru a proteja acest site de mesaje spam automate, folosesc serviciul de securitate hCaptcha. Acesta analizează strict tehnic traficul pentru a face diferența între oameni și roboți.
                    </p>

                    <h3>Drepturile dumneavoastră</h3>
                    <p>
                        Aveți control deplin. Dacă doriți să șterg orice e-mail pe care mi l-ați trimis, este suficient să îmi scrieți, iar eu voi șterge conversația noastră din căsuța mea de e-mail.
                    </p>
                </section>

                <hr className="policy-divider" />

                <section className="policy-section">
                    <h2>Termeni și Condiții</h2>

                    <h3>Statutul programărilor</h3>
                    <p>
                        Selectarea unui interval orar din calendar și trimiterea formularului reprezintă o solicitare de programare. Vă rog să rețineți că programarea devine fermă doar după ce v-o confirm personal, prin e-mail sau telefon.
                    </p>

                    <h3>Modificarea programărilor</h3>
                    <p>
                        Timpul este valoros pentru amândoi. Dacă intervine ceva și nu mai puteți ajunge la o ședință confirmată, vă rog să mă anunțați cu cel puțin 24 de ore înainte, pentru a putea oferi acel interval altei persoane care are nevoie.
                    </p>

                    <h3>Situații de urgență</h3>
                    <p className="emergency-warning">
                        Vă rog să folosiți formularul de contact exclusiv pentru programări și întrebări administrative. <strong>Acest formular nu este destinat situațiilor de urgență majore.</strong> Dacă vă aflați într-o situație de criză, vă rog să apelați numărul unic de urgență 112.
                    </p>
                </section>
            </div>
        </main>
    );
}