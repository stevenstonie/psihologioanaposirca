import CardLayout from "../../components/card_layout/card_layout"
import RevealingCard from "../../components/revealing_card/revealing_card";
import eyeWithGrowingArrowIcon from '@/assets/svgs/icons/specializations/eye_with_growing_arrow_inside.svg';
import handsProtectingBrainIcon from '@/assets/svgs/icons/specializations/hands_protecting_a_brain.svg';
import silhouetteWithLockInsideIcon from '@/assets/svgs/icons/specializations/silhouette_with_lock_inside.svg';
import peopleConnectedByGearIcon from '@/assets/svgs/icons/specializations/people_connected_by_gear.svg';

export default function SpecializationsSection() {

    return (
        <section>
            <h2>Specializări</h2>
            <CardLayout mode="carousel">
                <RevealingCard icon={<img src={handsProtectingBrainIcon} alt="" />}
                    title="Psiholog clinician."
                    description=""
                />
                <RevealingCard icon={<img src={silhouetteWithLockInsideIcon} alt="" />}
                    title="Psiholog atestat în specialitatea Psihologie aplicată în domeniul securității naționale."
                    description=""
                />
                <RevealingCard icon={<img src={peopleConnectedByGearIcon} alt="" />}
                    title="Psiholog atestat în Psihologia muncii și organizațională."
                    description=""
                />
                <RevealingCard icon={<img src={eyeWithGrowingArrowIcon} alt="" />}
                    title="Psiholog Integrativ în formare."
                    description=""
                />
            </CardLayout>
        </section>
    );
}