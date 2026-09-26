import { Accordion, AccordionList } from '../../components/accordion/accordion';
import PageHeader from '../../components/page_header/page_header';
import FooterSection from '../../sections/footer/footer_section';
import { usePageHead } from '../../utils/page_head_updater';
import faqPageCoverImagePath from '@/assets/images/covers/calm_ocean_with_sky.webp';

import './faq_page.scss';

export default function FAQPage() {
    usePageHead(
        'Întrebări Frecvente (FAQ) | Ioana Poșircă | Constanța',
        'Ai întrebări despre cum decurge o ședință de psihologie, confidențialitate sau alte detalii? Găsești aici răspunsuri la cele mai frecvente neclarități.'
    );
    // waitForAssets(faqPageCoverImagePath);

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
                        <Accordion title="Cu ce mă poate ajuta intervenția psihologică primară?"
                            description="Te poate ajuta să pui în cuvinte ceea ce simți, să înțelegi mai bine o situație care te apasă și să găsești un prim reper atunci când lucrurile par confuze sau copleșitoare. Nu este psihoterapie, ci un prim pas de sprijin și clarificare." />
                        <Accordion title="Cum știu dacă am nevoie de sprijin psihologic?"
                            description="Nu trebuie să treci printr-o criză ca să apelezi la un psiholog. Uneori e vorba de o perioadă mai grea, alteori doar de nevoia de a înțelege mai bine ce simți sau de ce iei anumite decizii. Dacă te-ai întrebat dacă ar putea ajuta, acesta este deja un semn bun că merită încercat." />
                        <Accordion title="Cât durează o ședință și cât de des ne întâlnim?"
                            description="O ședință durează, de regulă, 50 de minute, iar frecvența întâlnirilor o stabilim împreună, în funcție de nevoile tale." />
                        <Accordion title="Ședințele se pot desfășura și online?"
                            description="Da, în funcție de cum îți e mai confortabil, putem avea ședințe atât față în față, cât și online." />
                        <Accordion title="Ce se întâmplă la prima întâlnire?"
                            description="Prima întâlnire este, în principal, una de cunoaștere. Vorbim despre ce te aduce aici, despre așteptările tale și despre cum putem lucra împreună. Nu e nevoie să vii cu ceva pregătit, e suficient să vii așa cum ești." />
                        <Accordion title="Este confidențial tot ce discutăm?"
                            description="Da. Confidențialitatea este un principiu fundamental în practica psihologică, iar tot ce vorbim rămâne între noi, cu excepțiile prevăzute de lege (de exemplu, situațiile în care este vorba despre un pericol iminent pentru tine sau pentru altcineva)." />
                        <Accordion title="Cum programez o întâlnire?"
                            description="Mă poți contacta direct, iar împreună vom stabili cea mai potrivită modalitate și oră pentru prima întâlnire." />
                    </AccordionList>
                </section>
            </main>

            <FooterSection />
        </>
    );
}