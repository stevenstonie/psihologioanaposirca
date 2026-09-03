import NavBrand from "../../components/nav_brand/nav_brand"
import { NavLinks } from "../../components/nav_links/nav_links";
import { NAV_ITEMS, ROUTES } from "../../utils/nav_items";
import './footer_section.scss';


export default function FooterSection() {
    let currentYear: string = new Date().getFullYear().toString();

    return (
        <footer className='footer-section'>
            <div className='footer-content'>
                <NavBrand onClick={() => { }}></NavBrand>

                <nav>
                    <h3>Link-uri utile</h3>
                    <NavLinks items={NAV_ITEMS.filter(item => item.route !== ROUTES.CONTACT)} className="footer-nav-list" />
                </nav>

                <address>
                    <h3>Contact</h3>
                    <p>contact info</p>
                </address>
            </div>

            <div className='footer-copyright'>
                <small style={{ fontSize: '1rem' }}>&copy; {currentYear} Toate drepturile rezervate.</small>
                <small style={{ fontSize: '.8rem' }}>Realizat cu grijă de <a href="https://stevendev.me" target="_blank" rel="noopener noreferrer">stevendev</a>.</small>
            </div>
        </footer>
    );
}
