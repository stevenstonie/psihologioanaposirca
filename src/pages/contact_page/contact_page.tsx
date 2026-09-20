import { ContactDetails, contactData } from '../../components/contact_details/contact_details';
import ContactForm from '../../components/contact_form/contact_form';
import PageHeader from '../../components/page_header/page_header';
import FooterSection from '../../sections/footer/footer_section';
import { usePageHead } from '../../utils/page_head_updater';
import contactPageCoverImagePath from '@/assets/images/covers/two_coffee_cups_on_a_table.webp';
import './contact_page.scss';
import { waitForAssets } from '../../utils/page_loading/wait_for_assets';

export default function ContactPage() {
    usePageHead(
        'Contact și Locație Cabinet | Ioana Poșircă',
        'Ai nevoie de sprijin? Contactează-mă pentru a programa o ședință de psihoterapie.'
    );
    // waitForAssets(contactPageCoverImagePath);

    return (
        <>
            <main className="contact-page">
                <PageHeader
                    title={'Contact'}
                    description={'Scrie-mi câteva rânduri, fără presiune.'}
                    imagePath={contactPageCoverImagePath}>
                </PageHeader>

                <section className='page-contents'>
                    <div>
                        <h2>Detalii contact</h2>
                        <p style={{ maxWidth: '500px' }}>Îți las mai jos datele de contact. Nu ezita să îmi scrii sau să mă suni, iar eu revin cu un răspuns în cel mai scurt timp.</p>
                        <ContactDetails showLabels contacts={contactData} />
                    </div>

                    <ContactForm />
                </section>
            </main>

            <FooterSection />
        </>
    );
}