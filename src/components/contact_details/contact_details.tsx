import React, { useEffect, useRef } from 'react';
import mailIconPath from '@/assets/svgs/icons/contact/email.svg';
import phoneIconPath from '@/assets/svgs/icons/contact/phone.svg';
import locationPinIconPath from '@/assets/svgs/icons/contact/location_pin.svg';
import './contact_details.scss';

interface ContactItem {
    type: 'phone' | 'email' | 'location';
    value: string;
    icon?: React.ReactNode;
    label: string;
    lat?: number;
    lng?: number;
}

interface ContactDetailsProps {
    contacts: ContactItem[];
    showLabels?: boolean;
}

const getHref = (contact: ContactItem) => {
    switch (contact.type) {
        case 'phone':
            // strips spaces, parentheses, and dashes to prevent native dialer errors
            return `tel:${contact.value.replace(/[\s()-]/g, '')}`;
        case 'email':
            return `mailto:${contact.value}`;
        case 'location':
            if (contact.lat !== undefined && contact.lng !== undefined) {
                return `https://www.google.com/maps/search/?api=1&query=${contact.lat},${contact.lng}`;
            }
            return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.value)}`;
        default:
            return '#';
    }
};

export const ContactDetails: React.FC<ContactDetailsProps> = ({ contacts, showLabels = false }) => {
    const ref = useRef<HTMLUListElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        }, { threshold: 0.1, rootMargin: '-100px' });

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <address>
            <ul ref={ref} className="contact-details-container">
                {contacts.map((contact) => (
                    <li key={`${contact.type}-${contact.value}`}>
                        <a
                            href={getHref(contact)}
                            className="contact-blob"
                            target={contact.type === 'location' ? '_blank' : undefined}
                            rel={contact.type === 'location' ? 'noopener noreferrer' : undefined}
                        >
                            {contact.icon && (
                                <div className="contact-blob-icon">
                                    {contact.icon}
                                </div>
                            )}
                            <div className="contact-blob-content">
                                {contact.label && showLabels && (
                                    <p className="contact-blob-label">{contact.label}</p>
                                )}
                                <p className="contact-blob-value">{contact.value}</p>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </address>
    );
};

export const contactData: ContactItem[] = [
    {
        type: 'phone',
        label: 'suna-ma te rog si iti voi raspunde poimarti lmaoooooo',
        icon: <img src={phoneIconPath} alt="telefon" width="40" height="40" />,
        value: '+40712345678'
    },
    {
        type: 'email',
        label: 'acesta este inboxul meu dar pe asta nu raspund nicio data. decat daca-mi trimiti o felicitare prin posta',
        icon: <img src={mailIconPath} alt="email" width="40" height="40" />,
        value: 'email@email.email'
    },
    {
        type: 'location',
        label: 'aici ma aflu. dar poate nu sunt defapt in acest moment aici. cine stie?',
        icon: <img src={locationPinIconPath} alt="locație" width="40" height="40" />,
        value: 'str. Mamaia nr. 42',
        lat: 46.772292,
        lng: 23.581816
    }
];