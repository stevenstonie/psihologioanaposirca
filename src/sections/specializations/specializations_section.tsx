import CardLayout from "../../components/card_layout/card_layout"
import RevealingCard from "../../components/revealing_card/revealing_card";
import eyeWithGrowingArrowIconPath from '@/assets/svgs/icons/specializations/eye_with_growing_arrow_inside.svg';
import handsProtectingBrainIconPath from '@/assets/svgs/icons/specializations/hands_protecting_a_brain.svg';
import shieldWithPersonIconPath from '@/assets/svgs/icons/specializations/shield_with_person_inside.svg';
import peopleConnectedByGearIconPath from '@/assets/svgs/icons/specializations/people_connected_by_gear.svg';
import { ROUTES } from "../../utils/nav_items";
import Button from "../../components/button/button";
import './specializations_section.scss';

export default function SpecializationsSection() {

    return (
        <section className="specializations-section">
            <h2>Specializări</h2>
            <CardLayout mode="carousel">
                <RevealingCard icon={<img src={handsProtectingBrainIconPath} alt="hands protecting a brain" />}
                    title="Psiholog clinician."
                    description=""
                />
                <RevealingCard icon={<img src={shieldWithPersonIconPath} alt="shield with a person" />}
                    title="Psiholog atestat în specialitatea Psihologie aplicată în domeniul securității naționale."
                    description=""
                />
                <RevealingCard icon={<img src={peopleConnectedByGearIconPath} alt="people connected by gear" />}
                    title="Psiholog atestat în Psihologia muncii și organizațională."
                    description=""
                />
                <RevealingCard icon={<img src={eyeWithGrowingArrowIconPath} alt="eye with a growing arrow inside" />}
                    title="Psiholog Integrativ în formare."
                    description=""
                />
            </CardLayout>

            <br></br>

            <div className="learn-more-button-container">
                <Button to={ROUTES.ABOUT_ME} size="lg">Află mai multe</Button>
            </div>
        </section>
    );
}