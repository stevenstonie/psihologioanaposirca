import FooterSection from "../../sections/footer/footer_section";
import IntroSection from "../../sections/intro/intro_section";
import RecentArticlesSection from "../../sections/recent_articles/recent_articles_section";
import ServicesSection from "../../sections/services/services_section";
import SpecializationsSection from "../../sections/specializations/specializations_section";
import WhyChooseMyServicesSection from "../../sections/why_choose_my_services/why_choose_my_services_section";
import './home_page.scss';

export default function HomePage() {
    return (
        <main className="home-page">
            <h1 className="sr-only">Servicii profesionale de psihologie</h1>

            <IntroSection></IntroSection>
            <SpecializationsSection></SpecializationsSection>
            <ServicesSection></ServicesSection>
            <RecentArticlesSection></RecentArticlesSection>
            <WhyChooseMyServicesSection></WhyChooseMyServicesSection>
            <FooterSection></FooterSection>
        </main>
    );
}