import PageHeader from '../../components/page_header/page_header';
import FooterSection from '../../sections/footer/footer_section';
import { usePageHead } from '../../utils/page_head_updater';
import servicesPageCoverImagePath from '@/assets/images/covers/couch_with_a_lamp_and_flower_pot.webp';
import './my_services_page.scss';
import { waitForAssets } from '../../utils/page_loading/wait_for_assets';

export default function ServicesPage() {
    usePageHead(
        'Servicii | Ioana Poșircă',
        'Ofer ședințe de psihologie individuală, consiliere și dezvoltare personală. Vezi lista completă de servicii și alege ce ți se potrivește.'
    );
    // waitForAssets(servicesPageCoverImagePath);

    return (
        <>
            <main className="my-services-page">
                <PageHeader
                    title={'Serviciile mele'}
                    description={'Spațiul în care ne întâlnim. Simplu, deschis și adaptat nevoilor tale.'}
                    imagePath={servicesPageCoverImagePath}>
                </PageHeader>

                <section className="services-section">
                    <div className="services-intro">
                        <p className="big-paragraph">
                            În cadrul cabinetului ofer servicii psihologice în trei arii de specialitate:
                        </p>
                    </div>

                    <div className="services-grid">
                        <div className="service-card">
                            <h2>Psihologie clinică</h2>
                            <ul>
                                <li>evaluare psihologică clinică;</li>
                                <li>evaluarea personalității și a funcționării emoționale;</li>
                                <li>consiliere psihologică;</li>
                                <li>intervenție psihologică primară;</li>
                                <li>autocunoaștere și dezvoltare personală;</li>
                                <li>evaluări și documente psihologice, în funcție de scopul evaluării.</li>
                            </ul>
                        </div>

                        <div className="service-card">
                            <h2>Psihologia muncii și organizațională</h2>
                            <ul>
                                <li>evaluări psihologice pentru angajare și menținerea în activitate;</li>
                                <li>evaluarea aptitudinilor și caracteristicilor psihologice relevante pentru diferite activități profesionale;</li>
                                <li>evaluări psihologice periodice, în condițiile prevăzute de legislația aplicabilă;</li>
                                <li>evaluări pentru schimbarea funcției sau a condițiilor de muncă, atunci când sunt necesare;</li>
                                <li>avize psihologice de aptitudine, în limita competențelor profesionale și a cerințelor aplicabile fiecărui post.</li>
                            </ul>
                        </div>

                        <div className="service-card">
                            <h2>Psihologie aplicată în domeniul securității naționale</h2>
                            <ul>
                                <li>evaluări psihologice specifice domeniului;</li>
                                <li>evaluarea aptitudinilor și a particularităților psihologice relevante pentru activitățile din acest domeniu;</li>
                                <li>emiterea documentelor și avizelor psihologice corespunzătoare, în conformitate cu competențele profesionale și cerințele instituționale aplicabile.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="evaluation-callout">
                        <h2>Evaluare psihologică informatizată</h2>
                        <p>Pentru evaluările care permit acest lucru, utilizez platforma <strong>CAS++</strong>, care facilitează administrarea, cotarea și interpretarea standardizată a instrumentelor psihologice disponibile în cadrul platformei.</p>
                        <p>Fiecare evaluare este realizată în funcție de scopul acesteia, de particularitățile persoanei evaluate și de cerințele profesionale și legislative aplicabile.</p>
                    </div>
                </section>
            </main>

            <FooterSection />
        </>
    );
}