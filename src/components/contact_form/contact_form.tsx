import { useState, useRef, type SyntheticEvent } from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import './contact_form.scss';
import { PrivacyPolicyLink } from '../../pages/policies_page/policies_page';

interface ContactFormProps {
    selectedTime?: string;
    headingLevel?: 'h2' | 'h3' | 'h4';
}

export default function ContactForm({ selectedTime, headingLevel = 'h2' }: Readonly<ContactFormProps>) {
    const TitleTag = headingLevel;
    const [status, setStatus] = useState<string>('');
    const [isError, setIsError] = useState<boolean>(false);
    const [captchaToken, setCaptchaToken] = useState<string | null>(null);
    const captchaRef = useRef<HCaptcha>(null);

    const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsError(false);

        if (!captchaToken) {
            setStatus('Vă rugăm să bifați căsuța de securitate (captcha).');
            setIsError(true);
            return;
        }

        setStatus('Se trimite...');

        const formElement = e.currentTarget;
        const formData = new FormData(e.currentTarget);
        formData.append('access_key', '458841d5-37e3-4439-89d7-8aa871667bef');
        formData.append('h-captcha-response', captchaToken);

        const messageVal = formData.get('message') as string;
        if (/(http|https|www\.)/i.test(messageVal)) {
            setStatus('Din motive de securitate, link-urile nu sunt permise în mesaj.');
            setIsError(true);
            return;
        }

        const dataObject = Object.fromEntries(formData);
        const jsonPayload = JSON.stringify(dataObject);
        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: jsonPayload,
            });

            const data = await response.json();

            if (data.success) {
                setStatus('Mesajul a fost trimis cu succes!');
                formElement.reset();
                captchaRef.current?.resetCaptcha();
                setCaptchaToken(null);
            } else {
                setStatus(data.message || 'Trimiterea a eșuat. Încercați din nou.');
                setIsError(true);
            }
        } catch (error) {
            console.error('Web3Forms submission failed:', error);
            setStatus('Eroare de rețea. Vă rugăm să încercați din nou.');
            setIsError(true);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="contact-form">
            <TitleTag className="contact-form-title">Formular contact</TitleTag>

            <input type="hidden" name="subject" value="Mesaj de contact de pe psihologioanaposirca.ro" />

            {/* Web3Forms honeypot to silently trap automated bots */}
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

            {selectedTime && (
                <input
                    type="text"
                    name="programare"
                    value={selectedTime}
                    readOnly
                    className="contact-form-input readonly-time"
                />
            )}

            <input
                type="text"
                name="name"
                required
                placeholder="Numele tău"
                className="contact-form-input"
            />

            <input
                type="email"
                name="email"
                required
                placeholder="Email-ul tău"
                className="contact-form-input"
            />

            <input
                type="tel"
                name="phone"
                placeholder="Număr de telefon (opțional)"
                className="contact-form-input"
            />

            <textarea
                name="message"
                required
                placeholder="Mesajul tău"
                rows={4}
                className="contact-form-input textarea"
            />

            <label className="contact-form-checkbox-label">
                <input type="checkbox" name="consent" required />
                <span>Sunt de acord cu Sunt de acord cu <PrivacyPolicyLink /> și ca datele mele să fie folosite pentru a primi un răspuns. și ca datele mele să fie folosite pentru a primi un răspuns.</span>
            </label>

            <div className="captcha-wrapper">
                <HCaptcha
                    ref={captchaRef}
                    sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                    onVerify={setCaptchaToken}
                    reCaptchaCompat={false}
                    languageOverride="ro"
                />
            </div>

            <button
                type="submit"
                disabled={!captchaToken}
                className="contact-form-button"
            >
                Trimite mesajul
            </button>

            {status && (
                <p className={`contact-form-status ${isError ? 'error' : 'success'}`}>
                    {status}
                </p>
            )}
        </form>
    );
}