import { ContactDetails, contactData } from '../../components/contact_details/contact_details';
import ContactForm from '../../components/contact_form/contact_form';
import PageHeader from '../../components/page_header/page_header';
import FooterSection from '../../sections/footer/footer_section';
import { updatePageHead } from '../../utils/page_header_updater';
import contactPageCoverImagePath from '@/assets/images/covers/two_coffee_cups_on_a_table.webp';
import './contact_page.scss';

export default function ContactPage() {
    updatePageHead(
        'Contact și Locație Cabinet | Ioana Poșircă',
        'Ai nevoie de sprijin? Contactează-mă pentru a programa o ședință de psihoterapie.'
    );

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
                        <ContactDetails showLabels contacts={contactData} />
                    </div>

                    <ContactForm />
                </section>
            </main>

            <FooterSection />
        </>
    );
}