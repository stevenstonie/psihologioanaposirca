import { useRef, useState } from 'react';
import AvailabilityCalendar from '../../components/availability_calendar/availability_calendar';
import { ContactDetails, contactData } from '../../components/contact_details/contact_details';
import ContactForm from '../../components/contact_form/contact_form';
import FooterSection from '../../sections/footer/footer_section';
import { usePageHead } from '../../utils/page_head_updater';
import './make_an_appointment_page.scss';
import appointmentPageCoverImagePath from '@/assets/images/covers/journal_on_a_table.webp';
import PageHeader from '../../components/page_header/page_header';

export default function AppointmentPage() {
    usePageHead(
        'Programări | Ioana Poșircă | Constanța',
        'Programează o ședință. Vezi calendarul cu orele disponibile și alege un interval.'
    );
    // waitForAssets(appointmentPageCoverImagePath);

    const [selectedTime, setSelectedTime] = useState<string>('');
    const formRef = useRef<HTMLElement>(null);

    const handleTimeSelection = (timeString: string) => {
        setSelectedTime(timeString);
        formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <>
            <main className="make-appointment-page">
                <PageHeader
                    title={'Fă o programare'}
                    description={'Un timp și un spațiu doar pentru tine. Alege când vrei să vorbim.'}
                    imagePath={appointmentPageCoverImagePath}
                >
                </PageHeader>

                <div className='page-contents'>
                    <section className='calendar-and-contact-section'>
                        <AvailabilityCalendar onSlotSelect={handleTimeSelection} />
                        <ContactDetails contacts={contactData} />
                    </section>

                    <section className='contact-form-section' ref={formRef}>
                        <ContactForm selectedTime={selectedTime} onFormSubmitted={() => setSelectedTime('')} />
                    </section>
                </div>
            </main>

            <FooterSection />
        </>
    );
}