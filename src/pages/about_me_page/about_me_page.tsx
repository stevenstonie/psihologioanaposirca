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
import { usePageHead } from '../../utils/page_head_updater';
import certificationImagePath from '@/assets/images/about_me/certificate.png';
import practicalExperienceImagePath from '@/assets/images/about_me/three-hands-in-union.png';
import aboutMeImage from '@/assets/images/about_me/standing-up.webp';
import howIWorkImage from '@/assets/images/about_me/striking-a-pose-looking-to-the-right.webp';
import { waitForAssets } from '../../utils/page_loading/wait_for_assets';
import Button from '../../components/button/button';
import { ROUTES } from '../../utils/navigation';

export default function AboutMePage() {
    usePageHead(
        'Despre mine | Ioana Poșircă | Constanța',
        'Află mai multe despre formarea mea ca psiholog, abordarea mea în cabinet și cum te pot susține în procesul tău de vindecare emoțională.'
    );
    // waitForAssets();

    return (
        <>
            <main className="about-me-page">
                <h1>Despre Mine</h1>

                <section className="who-am-i-section">
                    <img
                        src={aboutMeImage}
                        alt="O imagine cu mine in care stau in picioare"
                    />

                    <h2 className='sr-only'>Cabinet Psihologie particulară Constanța</h2>
                    <p className='bigger-paragraph'>Bună! Sunt Poșircă Ioana-Claudia, psiholog, și mă bucur sincer că ai ajuns aici.</p>
                    <p className='big-paragraph'>Am ales psihologia dintr-o curiozitate care nu m-a părăsit niciodată: aceea de a înțelege cum se formează oamenii, cum se schimbă și cum ajung să se raporteze la ei înșiși și la cei din jur. Cu timpul, am înțeles că psihologia nu înseamnă doar teorii și instrumente de lucru - înseamnă, mai presus de orice, <strong>întâlnirea cu un om și cu povestea lui</strong>.</p>

                    <h2>Educație și Formare</h2>
                    <p className='medium-paragraph'>Sunt absolventă a Facultății de Psihologie și Științele Educației din cadrul Universității „Ovidius” din Constanța, iar pe parcursul studiilor am avut șansa de a fi studentă internațională la Universitatea din Córdoba, Spania. </p>
                    <p className='medium-paragraph'>Formarea mea a continuat prin două programe de master - Psihodiagnoza Personalității și Masteratul Didactic în Psihologie și se va întregi prin pregătirea în <strong>psihoterapie integrativă</strong>, în cadrul Institutului Român de Psihoterapie Integrativă (IRPI).</p>

                </section>

                <section className='how-i-work-section'>
                    <img
                        src={howIWorkImage}
                        alt="O imagine cu mine uitându-mă în dreapta"
                    />
                    <h2>Cum lucrez</h2>
                    <p className='big-paragraph'>Drumul acesta m-a apropiat de oameni și contexte foarte diferite: copii și adolescenți, persoane cu dificultăți de dezvoltare, vârstnici și mediul educațional. Fiecare experiență m-a învățat același lucru: <strong>un om NU poate fi redus la o dificultate sau la o etichetă</strong>.</p>
                    <p className='big-paragraph' style={{ fontFamily: 'var(--font-quote)', fontWeight: 'bold' }}>Nu cred în rețete universale și nici în ideea că există un singur fel „corect” de a fi. Cred în explorare, în înțelegerea propriei povești și în crearea unui spațiu în care lucrurile pot fi privite cu mai multă claritate.</p>
                    <p className='big-paragraph'>Ofer în prezent <strong>intervenție psihologică primară</strong> — un sprijin în care rigoarea psihologiei nu pierde din partea ei umană. Dacă, pe parcurs, apare nevoia unui demers terapeutic mai amplu, te pot îndruma către un specialist potrivit.</p>
                </section>

                <section className="certifications-section">
                    <h2>Atestate</h2>
                    <div className='content-with-image-container'>
                        <img src={certificationImagePath} alt='Certificari profesionale' />
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
                    </div>
                </section>

                <section className="practical-experience-section">
                    <h2>Experiență practică</h2>
                    <div className='content-with-image-container'>
                        <img src={practicalExperienceImagePath} alt='Experienta practica' />
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
                    </div>
                </section>

                <section className="cta-section">
                    <p className="big-paragraph">Dacă simți că a venit momentul să te oprești puțin și să te privești cu mai multă atenție, <span style={{ fontFamily: 'var(--font-quote)', fontWeight: 'bold' }}>te invit să facem loc, împreună, acestui proces.</span ></p>
                    <Button variant='primary' size="lg" to={ROUTES.APPOINTMENT}>Scrie-mi un mesaj</Button>
                </section>
            </main>

            <FooterSection></FooterSection>
        </>
    );
}
