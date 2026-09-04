import { useState, useEffect, useRef } from 'react';
import './navbar.scss';
import NavBrand from '../nav_brand/nav_brand';
import { NavLinks } from '../nav_links/nav_links';
import { NAV_ITEMS } from '../../utils/nav_items';

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

    useEffect(() => {
        if (!isOpen) return;

        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node;

            if (
                menuRef.current &&
                !menuRef.current.contains(target) &&
                buttonRef.current &&
                !buttonRef.current.contains(target)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);

    return (
        <header className={`nav-container ${isVisible ? 'is-visible' : 'is-hidden'}`}>
            <NavBrand onClick={() => setIsOpen(false)} />

            <nav ref={menuRef}>
                <div className={`nav-drawer ${isOpen ? 'is-open' : ''}`}>
                    <NavLinks
                        items={NAV_ITEMS}
                        onNavigate={() => setIsOpen(false)}
                    />
                </div>
            </nav>

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
        </header>
    );
}