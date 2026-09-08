import CardLayout from '../../components/card_layout/card_layout';
import RevealingCard from '../../components/revealing_card/revealing_card';
import fourPuzzlePiecesIconPath from '@/assets/svgs/icons/about_me/four_puzzle_pieces.svg';
import globeWithGraduationCapIconPath from '@/assets/svgs/icons/about_me/globe_with_a_graduation_cap.svg';
import graduationCapIconPath from '@/assets/svgs/icons/about_me/graduation_cap.svg';
import handHoldingLeavesIconPath from '@/assets/svgs/icons/about_me/hand_holding_two_leaves.svg';
import personHoldingBookIconPath from '@/assets/svgs/icons/about_me/person_holding_a_book.svg';
import personTeachingChildIconPath from '@/assets/svgs/icons/about_me/person_teaching_child.svg';
import './about_me_page.scss';
import { StrapWithInfo } from '../../components/strap_with_info/strap_with_info';
import FooterSection from '../../sections/footer/footer_section';
import { updatePageHeader } from '../../utils/page_header_updater';

export default function AboutMePage() {
    updatePageHeader(
        'Despre mine | Ioana Poșircă',
        'Află mai multe despre formarea mea ca psiholog, abordarea mea în cabinet și cum te pot susține în procesul tău de vindecare emoțională.'
    );

    return (
        <>
            <main className="about-me-page">
                <h1>Despre Mine</h1>

                <section className="about-me-section">
                    <p>detalii despre mine........</p>
                    <p>.............</p>
                    <p>.............</p>
                </section>

                <section className="education-section">
                    <h2>Studii și formare profesională</h2>
                    <CardLayout mode='grid'>
                        <RevealingCard icon={<img src={graduationCapIconPath} alt='a graduation cap' />}
                            title="Licență în Psihologie"
                            description="Universitatea „Ovidius” din Constanța"
                        />
                        <RevealingCard icon={<img src={globeWithGraduationCapIconPath} alt='a globe with a graduation cap' />}
                            title="Student internațional - Psihologie"
                            description="Universitatea din Córdoba, Spania"
                        />
                        <RevealingCard icon={<img src={personTeachingChildIconPath} alt='a person teaching a child' />}
                            title="Modul psihopedagogic - Nivel I"
                            description="Universitatea „Ovidius” din Constanța"
                        />
                        <RevealingCard icon={<img src={fourPuzzlePiecesIconPath} alt='four puzzle pieces' />}
                            title="Master Psihodiagnoza Personalității"
                            description="Universitatea „Ovidius” din Constanța"
                        />
                        <RevealingCard icon={<img src={personHoldingBookIconPath} alt='person holding a book' />}
                            title="Masterat Didactic în Psihologie"
                            description="Universitatea „Ovidius” din Constanța"
                        />
                        <RevealingCard icon={<img src={handHoldingLeavesIconPath} alt='hand holding a leaf (the leaf is actually levitating on top of the hand holy moly)' />}
                            title="Formare în Psihoterapie Integrativă"
                            description="Institutul Român de Psihoterapie Integrativă (IRPI), București (în curs)"
                        />
                    </CardLayout>
                </section>

                <section className="certifications-section">
                    <h2>Atestate</h2>
                    <ul>
                        <StrapWithInfo
                            icon={''}
                            title={<>Atestat de liberă practică în <strong>Psihologie Clinică</strong>.</>}
                        />
                        <StrapWithInfo
                            icon={''}
                            title={<>Atestat de liberă practică în <strong>Psihologia Muncii și Organizațională</strong>.</>}
                        />
                        <StrapWithInfo
                            icon={''}
                            title={<>Atestat de liberă practică în <strong>Psihologie aplicată în domeniul securității naționale</strong>.</>}
                        />
                    </ul>
                </section>

                <section className="practical-experience-section">
                    <h2>Experiență practică</h2>
                    <ul>
                        <StrapWithInfo
                            icon={''}
                            title={<>Centre și servicii pentru copii cu tulburări din spectrul autist și dificultăți de dezvoltare.</>}
                        />
                        <StrapWithInfo
                            icon={''}
                            title={<>Servicii și centre dedicate persoanelor vârstnice și persoanelor cu dizabilități.</>}
                        />
                        <StrapWithInfo
                            icon={''}
                            title={<>Instituții de învățământ primar, gimnazial și liceal.</>}
                        />
                        <StrapWithInfo
                            icon={''}
                            title={<>Organizații și servicii din domeniul sănătății și asistenței sociale.</>}
                        />
                    </ul>
                </section>

            </main>

            <FooterSection></FooterSection>
        </>
    );
}
