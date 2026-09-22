import React, { useEffect, useRef, useState } from 'react';
import mailIconPath from '@/assets/svgs/icons/contact/email.svg';
import phoneIconPath from '@/assets/svgs/icons/contact/phone.svg';
import locationPinIconPath from '@/assets/svgs/icons/contact/location_pin.svg';
import copyIconPath from '@/assets/svgs/icons/others/copy.svg';
import checkmarkIconPath from '@/assets/svgs/icons/others/checkmark.svg';
import './contact_details.scss';

const city: string = 'Constanța';
const country: string = 'Romania';
const countryCodeIso2: string = 'RO';
const phoneNumber: string = '+40749900483';
const emailAddress: string = 'psihologioanaposirca@gmail.com';

interface ContactItem {
    type: 'phone' | 'email' | 'location';
    value: string;
    icon: React.ReactNode;
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
    const [copiedValue, setCopiedValue] = useState<string | null>(null);

    const handleCopy = async (e: React.MouseEvent, value: string) => {
        e.preventDefault();
        e.stopPropagation();

        try {
            await navigator.clipboard.writeText(value);
            setCopiedValue(value);
            setTimeout(() => setCopiedValue(null), 2000);
        } catch (err) {
            console.error('Copierea textului a eșuat: ', err);
        }
    };

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
                            <button
                                onClick={(e) => handleCopy(e, contact.value)}
                                className="copy-button"
                                aria-label="Copiază"
                                title="Copiază"
                            >
                                {copiedValue === contact.value ? (
                                    <img src={checkmarkIconPath} width="32" height="32" alt='success' />
                                ) : (
                                    <img src={copyIconPath} width="32" height="32" alt='copy button' />
                                )}
                            </button>
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
        label: '',
        icon: <img src={phoneIconPath} alt="telefon" width="40" height="40" />,
        value: phoneNumber
    },
    {
        type: 'email',
        label: '',
        icon: <img src={mailIconPath} alt="email" width="40" height="40" />,
        value: emailAddress
    },
    {
        type: 'location',
        label: '',
        icon: <img src={locationPinIconPath} alt="locație" width="40" height="40" />,
        value: city + ', ' + country,
    }
];

export const JsonLdForLocalBusiness = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "MedicalClinic",
        "medicalSpecialty": "Psihologie",
        "name": "Cabinet Individual de Psihologie Ioana Poșircă",
        "image": "https://psihologioanaposirca.ro/thumbnail-image.jpg",
        "url": "https://psihologioanaposirca.ro",
        "telephone": phoneNumber,
        "address": {
            "@type": "PostalAddress",
            // "streetAddress": "strada sânzienelor, nr. 101",
            "addressLocality": city,
            // "postalCode": "000000",
            "addressCountry": countryCodeIso2
        },
        "areaServed": {
            "@type": "City",
            "name": city
        },
        // "geo": {
        //     "@type": "GeoCoordinates",
        //     "latitude": 44.444, 
        //     "longitude": 22.2222
        // },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};