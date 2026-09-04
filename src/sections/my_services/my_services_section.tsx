import GlowOrbitingSphere from '../../components/glow_orbiting_sphere/glow_orbiting_sphere';
import headOfPersonOnABookIconPath from '@/assets/svgs/icons/my_services/head_of_person_with_psychology_sign_on_a_book.svg';
import './my_services_section.scss';
import { StrapWithInfo } from '../../components/strap_with_info/strap_with_info';
import computerWithPersonIconPath from '@/assets/svgs/icons/my_services/computer_with_a_person_and_a_globe.svg';
import evaluationFileIconPath from '@/assets/svgs/icons/my_services/evaluation_file_with_an_a_plus.svg';
import twoHeadsTalkingIconPath from '@/assets/svgs/icons/my_services/two_heads_talking_about_something.svg';
import { ROUTES } from '../../utils/nav_items';
import Button from '../../components/button/button';

export default function MyServicesSection() {
    return (
        <section className='my-services-section'>
            <h2>Serviciile mele</h2>
            <div>
                <div className="floating-sphere">
                    <GlowOrbitingSphere>
                        <img src={headOfPersonOnABookIconPath} alt="Evaluare psihologică" />
                    </GlowOrbitingSphere>
                </div>

                <p>În cadrul cabinetului sunt disponibile servicii de <strong>evaluare psihologică</strong>, <strong>consiliere psihologică</strong> și <strong>intervenție psihologică</strong>, în funcție de nevoile și obiectivele fiecărei persoane.</p>

                <p>Poți apela la aceste servicii pentru înțelegerea și gestionarea dificultăților emoționale, autocunoaștere, dezvoltare personală, relații, perioade de tranziție sau situații care îți afectează echilibrul de zi cu zi. Evaluările psihologice pot fi realizate, de asemenea, în funcție de scopul și contextul pentru care sunt solicitate.</p>

                <h3 className='how-we-can-work'>Cum putem lucra</h3>
                <ul className='how-we-can-work-options'>
                    <StrapWithInfo icon={<img src={twoHeadsTalkingIconPath} alt='two heads having a discussion' />} title={<><strong>La cabinet</strong> - pentru cei care preferă întâlnirea față în față și un cadru dedicat procesului psihologic.</>}></StrapWithInfo>
                    <StrapWithInfo icon={<img src={computerWithPersonIconPath} alt='video call with a person' />} title={<><strong>Online</strong> - o alternativă flexibilă pentru persoanele care nu pot ajunge la cabinet sau preferă ședințele la distanță.</>}></StrapWithInfo>
                    <StrapWithInfo icon={<img src={evaluationFileIconPath} alt='evaluation file' />} title={<><strong>Evaluare psihologică</strong> - în funcție de obiectivul evaluării, cu utilizarea instrumentelor psihologice adecvate.</>}></StrapWithInfo>
                </ul>
            </div>

            <br></br>

            <div className='see-more-details-container'>
                <Button to={ROUTES.SERVICES} size="lg">Vezi mai multe detalii</Button>
            </div>
        </section>

    );
}