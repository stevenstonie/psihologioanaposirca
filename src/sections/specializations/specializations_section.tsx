import CardLayout from "../../components/card_layout/card_layout"
import RevealCard from "../../components/reveal_card/reveal_card";


export default function SpecializationsSection() {

    return (
        <section>
            <h2>Specializări</h2>
            <CardLayout mode="carousel">
                <RevealCard icon={<svg>...</svg>}
                    title="Psiholog clinician."
                    description=""
                />
                <RevealCard icon={<svg>...</svg>}
                    title="Psiholog atestat în specialitatea Psihologie aplicată în domeniul securității naționale."
                    description=""
                />
                <RevealCard icon={<svg>...</svg>}
                    title="Psiholog atestat în Psihologia muncii și organizațională."
                    description=""
                />
                <RevealCard icon={<svg>...</svg>}
                    title="Psiholog Integrativ în formare."
                    description=""
                />
            </CardLayout>
        </section>
    );
}