import { useState, useEffect, useRef } from 'react';
import './navbar.scss';
import { Link } from 'react-router-dom';
import logo from '@/assets/images/logo.jpg';
import '../../styles/button.scss';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const menuRef = useRef<HTMLElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        let lastScrollY = window.scrollY;
        const scrollThreshold = 100;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const scrollDifference = Math.abs(currentScrollY - lastScrollY);

            if (scrollDifference > scrollThreshold) {
                if (currentScrollY > lastScrollY && currentScrollY > 60) {
                    setIsVisible(false);
                    setIsOpen(false);
                }
                else if (currentScrollY < lastScrollY) {
                    setIsVisible(true);
                }

                lastScrollY = Math.max(currentScrollY, 0);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setIsOpen(false);
                buttonRef.current?.focus();
                return;
            }

            if (e.key === 'Tab' && menuRef.current) {
                const focusable = menuRef.current.querySelectorAll<HTMLElement>(
                    'a[href], button:not([disabled])'
                );
                const first = focusable[0];
                const last = focusable[focusable.length - 1];

                if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                } else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isOpen]);

    return (
        <div className={`nav-wrapper ${isVisible ? 'is-visible' : 'is-hidden'}`}>
            <header className="nav-container">
                <Link className="nav-brand" to="/" onClick={() => setIsOpen(false)}
                    onMouseDown={(e) => e.preventDefault()} draggable={false}>
                    <div className="nav-logo" aria-hidden="true">
                        <img src={logo} alt="" />
                    </div>
                    <span className='nav-brand-text'>Psiholog Posirca Ioana</span>
                </Link>

                <button
                    ref={buttonRef}
                    className="nav-burger"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-expanded={isOpen}
                    aria-label={isOpen ? "Close main menu" : "Open main menu"}
                    type='button'
                >
                    <span className="burger-bars" aria-hidden="true">
                        <i className="bar-1"></i>
                        {/* <i className="bar-2"></i> */}
                        <i className="bar-3"></i>
                    </span>
                </button>

                <nav
                    ref={menuRef}
                    className={`nav-drawer ${isOpen ? 'is-open' : ''}`}
                    aria-label="Main"
                >
                    <Link className="nav-link" to="/despre-mine" onClick={() => setIsOpen(false)}
                        onMouseDown={(e) => e.preventDefault()} draggable={false}>Despre mine</Link>
                    <Link className="nav-link" to="/servicii" onClick={() => setIsOpen(false)}
                        onMouseDown={(e) => e.preventDefault()} draggable={false}>Servicii</Link>
                    <Link className="nav-link" to="/articole" onClick={() => setIsOpen(false)}
                        onMouseDown={(e) => e.preventDefault()} draggable={false}>Articole</Link>
                    <Link className="nav-link" to="/programare" onClick={() => setIsOpen(false)}
                        onMouseDown={(e) => e.preventDefault()} draggable={false}>Programare</Link>
                    <Link className="nav-link" to="/faq" onClick={() => setIsOpen(false)}
                        onMouseDown={(e) => e.preventDefault()} draggable={false}>Întrebări frecvente</Link>
                    <Link className="nav-link" to="/contact" onClick={() => setIsOpen(false)}
                        onMouseDown={(e) => e.preventDefault()} draggable={false}>Contact</Link>
                </nav>

            </header>
        </div>
    );
}