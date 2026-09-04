import { Accordion, AccordionList } from '../../components/accordion/accordion';
import FooterSection from '../../sections/footer/footer_section';
import './faq_page.scss';

export default function FAQPage() {
    return (
        <>
            <main className='faq-page'>
                <br></br>
                <h1>Întrebări frecvente</h1>

                <section className='faq-questions-section'>
                    <AccordionList>
                        <Accordion title="what i eat" description="picha" />
                        <Accordion title="what i shit" description="caca" />
                        <Accordion title="where i sit" description="maka" />
                        <Accordion title="lol" description="ol" />
                    </AccordionList>
                </section>
            </main>

            <FooterSection />
        </>
    );
}