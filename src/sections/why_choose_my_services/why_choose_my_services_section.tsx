import CardLayout from "../../components/card_layout/card_layout";
import RevealCard from "../../components/reveal_card/reveal_card";
import './why_choose_my_services_section.scss';


export default function WhyChooseMyServicesSection() {
    return (
        <section>
            <h2>De ce să alegi serviciile mele</h2>
            <div>
                <p>
                    Pentru că meriți să fii ascultat, nu încadrat într-un tipar.
                </p>
                <p>
                    Cred într-un demers psihologic construit în jurul persoanei, nu al unei rețete prestabilite. Îmi place să înțeleg povestea din spatele unei dificultăți, să privim lucrurile din mai multe perspective și să construim împreună pași care au sens pentru tine.
                </p>

                <h3>O abordare personalizată</h3>
                <p>
                    Fiecare persoană are propriul său context, iar demersul psihologic este construit pornind de la nevoile și obiectivele sale.
                </p>
                <CardLayout mode="grid">
                    <RevealCard
                        icon={<svg>...</svg>}
                        title="Rigoare profesională"
                        description="Formarea și practica mea se bazează pe principii și metode specifice domeniului psihologic..."
                    />
                    <RevealCard
                        icon={<svg>...</svg>}
                        title="Un spațiu în care poți fi tu"
                        description="Fără etichete și fără presiunea de a avea toate răspunsurile..."
                    />
                    <RevealCard
                        icon={<svg>...</svg>}
                        title="Respect pentru ritmul tău"
                        description="Schimbarea nu arată la fel pentru toată lumea..."
                    />
                    <RevealCard
                        icon={<svg>...</svg>}
                        title="O perspectivă integrativă asupra persoanei"
                        description="Dincolo de un simptom sau de o situație punctuală..."
                    />
                </CardLayout>
            </div>
        </section>
    );
}