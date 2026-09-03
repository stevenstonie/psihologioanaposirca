import NavBrand from "../../components/nav_brand/nav_brand"
import './footer_section.scss';


export default function FooterSection() {
    let currentYear: string = new Date().getFullYear().toString();

    return (
        <footer className='footer-section'>
            <div className='footer-content'>
                <NavBrand onClick={() => { }}></NavBrand>

                <nav>
                    <h3>Link-uri utile</h3>
                    <ul>
                        <li><a href="/a">Link 1</a></li>
                        <li><a href="/b">Link 2</a></li>
                    </ul>
                </nav>

                <address>
                    <h3>Contact</h3>
                    <p>contact info</p>
                </address>
            </div>

            <div className='footer-copyright'>
                <small style={{ fontSize: '1rem'}}>&copy; {currentYear} Toate drepturile rezervate.</small>
                <small style={{ fontSize: '.8rem' }}>Realizat cu grijă de <a href="https://stevendev.me" target="_blank" rel="noopener noreferrer">stevendev</a>.</small>
            </div>
        </footer>
    );
}
