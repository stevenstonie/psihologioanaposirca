import FooterSection from '../../sections/footer/footer_section';
import { updatePageHeader } from '../../utils/page_header_updater';
import './my_services_page.scss';

export default function ServicesPage() {
    updatePageHeader(
        'Servicii | Ioana Poșircă',
        'Ofer ședințe de psihologie individuală, consiliere și dezvoltare personală. Vezi lista completă de servicii și alege ce ți se potrivește.'
    );

    return (
        <>
            <main className="my-services-page">
                <h1>Serviciile mele</h1>
            </main>

            <FooterSection />
        </>
    );
}