import FooterSection from '../../sections/footer/footer_section';
import { updatePageHeader } from '../../utils/page_header_updater';
import './contact_page.scss';

export default function ContactPage() {
    updatePageHeader(
        'Contact și Locație Cabinet | Ioana Poșircă',
        'Ai nevoie de sprijin? Contactează-mă pentru a programa o ședință de psihoterapie.'
    );

    return (
        <>
            <main className="contact-page">
                <h1>Contact</h1>
            </main>

            <FooterSection />
        </>
    );
}