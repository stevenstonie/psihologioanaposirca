import CardLayout from "../../components/card_layout/card_layout"
import eyeWithGrowingArrowIconPath from '@/assets/svgs/icons/specializations/eye_with_growing_arrow_inside.svg';
import handsProtectingBrainIconPath from '@/assets/svgs/icons/specializations/hands_protecting_a_brain.svg';
import shieldWithPersonIconPath from '@/assets/svgs/icons/specializations/shield_with_person_inside.svg';
import peopleConnectedByGearIconPath from '@/assets/svgs/icons/specializations/people_connected_by_gear.svg';
import { ROUTES } from "../../utils/navigation";
import Button from "../../components/button/button";
import './specializations_section.scss';
import { StrapWithInfo } from "../../components/strap_with_info/strap_with_info";

export default function SpecializationsSection() {

    return (
        <section className="specializations-section">
            <h2>Specializări</h2>
            <CardLayout mode="carousel">
                <StrapWithInfo icon={<img src={handsProtectingBrainIconPath} alt="hands protecting a brain" />}
                    title={<strong>Psiholog clinician</strong>}
                    description=""
                />
                <StrapWithInfo icon={<img src={shieldWithPersonIconPath} alt="shield with a person" />}
                    title={<strong>Psiholog atestat în specialitatea Psihologie aplicată în domeniul securității naționale.</strong>}
                    description=""
                />
                <StrapWithInfo icon={<img src={peopleConnectedByGearIconPath} alt="people connected by gear" />}
                    title={<strong>Psiholog atestat în Psihologia muncii și organizațională.</strong>}
                    description=""
                />
                <StrapWithInfo icon={<img src={eyeWithGrowingArrowIconPath} alt="eye with a growing arrow inside" />}
                    title={<strong>Psiholog Integrativ în formare.</strong>}
                    description=""
                />
            </CardLayout>

            <br />

            <div className="learn-more-button-container">
                <Button to={ROUTES.ABOUT_ME} size="md">Află mai multe</Button>
            </div>
        </section>
    );
}