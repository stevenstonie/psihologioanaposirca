import { Accordion, AccordionList } from '../../components/accordion/accordion';
import PageHeader from '../../components/page_header/page_header';
import FooterSection from '../../sections/footer/footer_section';
import { updatePageHead } from '../../utils/page_header_updater';
import faqPageCoverImagePath from '@/assets/images/covers/calm_ocean_with_sky.webp';

import './faq_page.scss';

export default function FAQPage() {
    updatePageHead(
        'Întrebări Frecvente (FAQ) | Ioana Poșircă',
        'Ai întrebări despre cum decurge o ședință de psihologie, confidențialitate sau alte detalii? Găsești aici răspunsuri la cele mai frecvente neclarități.'
    );

    return (
        <>
            <main className='faq-page'>
                <PageHeader
                    title={'Întrebări frecvente'}
                    description={'Clarificări simple, ca să știi la ce să te aștepți.'}
                    imagePath={faqPageCoverImagePath}>
                </PageHeader>

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