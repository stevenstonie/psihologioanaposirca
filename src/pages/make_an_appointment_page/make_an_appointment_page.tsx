import { useRef, useState } from 'react';
import AvailabilityCalendar from '../../components/availability_calendar/availability_calendar';
import { ContactDetails, contactData } from '../../components/contact_details/contact_details';
import ContactForm from '../../components/contact_form/contact_form';
import FooterSection from '../../sections/footer/footer_section';
import { updatePageHeader } from '../../utils/page_header_updater';
import './make_an_appointment_page.scss';

export default function AppointmentPage() {
    updatePageHeader(
        'Programări | Ioana Poșircă',
        'Programează o ședință. Vezi calendarul cu orele disponibile și alege un interval.'
    );

    const [selectedTime, setSelectedTime] = useState<string>('');
    const formRef = useRef<HTMLElement>(null);

    const handleTimeSelection = (timeString: string) => {
        setSelectedTime(timeString);
        formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <>
            <main className="make-appointment-page">
                <h1>Fă o programare</h1>

                <div className='page-contents'>
                    <section className='calendar-and-contact-section'>
                        <AvailabilityCalendar onSlotSelect={handleTimeSelection} />
                        <ContactDetails contacts={contactData} />
                    </section>

                    <section className='contact-form-section' ref={formRef}>
                        <ContactForm selectedTime={selectedTime} />
                    </section>
                </div>
            </main>

            <FooterSection />
        </>
    );
}