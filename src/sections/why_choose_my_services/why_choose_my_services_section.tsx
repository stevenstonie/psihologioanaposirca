import CardLayout from "../../components/card_layout/card_layout";
import RevealingCard from "../../components/revealing_card/revealing_card";
import './why_choose_my_services_section.scss';
import certificateIcon from '@/assets/svgs/icons/why_choose_my_services/certificate.svg';
import heartWithHandsIcon from '@/assets/svgs/icons/why_choose_my_services/heart_with_hands_touching_inside.svg';
import personClimbingIcon from '@/assets/svgs/icons/why_choose_my_services/person_climbing_mountain.svg';
import threePeopleIcon from '@/assets/svgs/icons/why_choose_my_services/three_people_one_behind_the_other.svg';
import Button from "../../components/button/button";
import { ROUTES } from "../../utils/nav_items";

export default function WhyChooseMyServicesSection() {
    return (
        <section className="why-choose-my-services-section">
            <h2>De ce să alegi serviciile mele</h2>
            <div className="text-segment">
                <p style={{ fontWeight: 'bold' }}>
                    Pentru că meriți să fii ascultat, nu încadrat într-un tipar.
                </p>
                <p>
                    Cred într-un demers psihologic construit în jurul persoanei, nu al unei rețete prestabilite. Îmi place să înțeleg povestea din spatele unei dificultăți, să privim lucrurile din mai multe perspective și să construim împreună pași care au sens pentru tine.
                </p>

                <h3>O abordare personalizată</h3>
                <p>
                    Fiecare persoană are propriul său context, iar demersul psihologic este construit pornind de la nevoile și obiectivele sale.
                </p>
            </div>
            <CardLayout mode="grid">
                <RevealingCard
                    icon={<img src={certificateIcon} alt="" />}
                    title="Rigoare profesională"
                    description="Formarea și practica mea se bazează pe principii și metode specifice domeniului psihologic."
                />
                <RevealingCard
                    icon={<img src={heartWithHandsIcon} alt="" />}
                    title="Un spațiu în care poți fi tu"
                    description="Fără etichete și fără presiunea de a avea toate răspunsurile."
                />
                <RevealingCard
                    icon={<img src={personClimbingIcon} alt="" />}
                    title="Respect pentru ritmul tău"
                    description="Schimbarea nu arată la fel pentru toată lumea."
                />
                <RevealingCard
                    icon={<img src={threePeopleIcon} alt="" />}
                    title="O perspectivă integrativă asupra persoanei"
                    description="Dincolo de un simptom sau de o situație punctuală."
                />
            </CardLayout>

            <br></br>
            <br></br>

            <div className="make-an-appointment-button-container">
                <Button to={ROUTES.BOOKING} size="lg">Programează-te</Button>
            </div>
        </section>
    );
}