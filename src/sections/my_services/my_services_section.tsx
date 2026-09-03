import GlowOrbitingSphere from '../../components/glow_orbiting_sphere/glow_orbiting_sphere';
import headOfPersonOnABookIcon from '@/assets/svgs/icons/others/head_of_person_with_psychology_sign_on_a_book.svg';
import './my_services_section.scss';

export default function MyServicesSection() {
    return (
        <section className='my-services-section'>
            <h2>Serviciile mele</h2>
            <div>
                <div className="floating-sphere">
                    <GlowOrbitingSphere>
                        <img src={headOfPersonOnABookIcon} alt="Evaluare psihologică" />
                    </GlowOrbitingSphere>
                </div>

                <p>În cadrul cabinetului sunt disponibile servicii de <strong>evaluare psihologică</strong>, <strong>consiliere psihologică</strong> și <strong>intervenție psihologică</strong>, în funcție de nevoile și obiectivele fiecărei persoane.</p>

                <p>Poți apela la aceste servicii pentru înțelegerea și gestionarea dificultăților emoționale, autocunoaștere, dezvoltare personală, relații, perioade de tranziție sau situații care îți afectează echilibrul de zi cu zi. Evaluările psihologice pot fi realizate, de asemenea, în funcție de scopul și contextul pentru care sunt solicitate.</p>

                <h3 className='how-we-can-work'>Cum putem lucra</h3>
                <ul className='how-we-can-work-items'>
                    <li><strong>La cabinet</strong> - pentru cei care preferă întâlnirea față în față și un cadru dedicat procesului psihologic.</li>
                    <li><strong>Online</strong> - o alternativă flexibilă pentru persoanele care nu pot ajunge la cabinet sau preferă ședințele la distanță.</li>
                    <li><strong>Evaluare psihologică</strong> - în funcție de obiectivul evaluării, cu utilizarea instrumentelor psihologice adecvate.</li>
                </ul>
            </div>
        </section>

    );
}