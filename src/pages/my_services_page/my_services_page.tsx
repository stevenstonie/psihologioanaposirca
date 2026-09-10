import PageHeader from '../../components/page_header/page_header';
import FooterSection from '../../sections/footer/footer_section';
import { usePageHead } from '../../utils/page_head_updater';
import servicesPageCoverImagePath from '@/assets/images/covers/couch_with_a_lamp_and_flower_pot.webp';
import './my_services_page.scss';

export default function ServicesPage() {
    usePageHead(
        'Servicii | Ioana Poșircă',
        'Ofer ședințe de psihologie individuală, consiliere și dezvoltare personală. Vezi lista completă de servicii și alege ce ți se potrivește.'
    );

    return (
        <>
            <main className="my-services-page">
                <PageHeader
                    title={'Serviciile mele'}
                    description={'Spațiul în care ne întâlnim. Simplu, deschis și adaptat nevoilor tale.'}
                    imagePath={servicesPageCoverImagePath}>
                </PageHeader>
            </main>

            <FooterSection />
        </>
    );
}