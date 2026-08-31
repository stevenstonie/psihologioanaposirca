import { useState, useEffect, useRef } from 'react';
import './navbar.scss';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const menuRef = useRef<HTMLElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 60) {
                setIsVisible(false);
                setIsOpen(false);
            } else {
                setIsVisible(true);
            }
            lastScrollY = currentScrollY;
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

                <a className="nav-brand" href="#intro" onClick={() => setIsOpen(false)}>
                    {/* <span className="nav-logo" aria-hidden="true"></span> */}
                    My Portfolio
                </a>

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
                        <i className="bar-2"></i>
                        <i className="bar-3"></i>
                    </span>
                </button>

                <nav
                    ref={menuRef}
                    className={`nav-drawer ${isOpen ? 'is-open' : ''}`}
                    aria-label="Main"
                >
                    <a className="nav-link" href="#intro" onClick={() => setIsOpen(false)}>Intro</a>
                    <a className="nav-link" href="#specializations" onClick={() => setIsOpen(false)}>Specializations</a>
                    <a className="nav-link" href="#services" onClick={() => setIsOpen(false)}>Services</a>
                    <a className="nav-link" href="#articles" onClick={() => setIsOpen(false)}>Recent Articles</a>
                    <a className="nav-cta" href="#why-choose-me" onClick={() => setIsOpen(false)}>Why Me?</a>
                </nav>

            </header>
        </div>
    );
}