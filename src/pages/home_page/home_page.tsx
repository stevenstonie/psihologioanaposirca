import FooterSection from "../../sections/footer/footer_section";
import IntroSection from "../../sections/intro/intro_section";
import RecentArticlesSection from "../../sections/recent_articles/recent_articles_section";
import MyServicesSection from "../../sections/my_services/my_services_section";
import SpecializationsSection from "../../sections/specializations/specializations_section";
import WhyChooseMyServicesSection from "../../sections/why_choose_my_services/why_choose_my_services_section";
import './home_page.scss';
import { usePageHead } from "../../utils/page_head_updater";

export default function HomePage() {
    usePageHead(
        'Ioana Poșircă | Cabinet Psihologie Constanța',
        'Cabinet de consiliere psihologică (în Constanța și online). Te ajut să gestionezi anxietatea, stresul și să îți regăsești echilibrul.'
    );

    return (
        <>
            <main className="home-page">
                <section className="intro-section">
                    <IntroSection></IntroSection>
                </section>
                <section className="specializations-section">
                    <SpecializationsSection></SpecializationsSection>
                </section>
                <section className='my-services-section'>
                    <MyServicesSection></MyServicesSection>
                </section>
                <section className='recent-articles-section'>
                    <RecentArticlesSection></RecentArticlesSection>
                </section>
                <section className="why-choose-my-services-section">
                    <WhyChooseMyServicesSection></WhyChooseMyServicesSection>
                </section>
            </main>

            <FooterSection></FooterSection>
        </>
    );
}