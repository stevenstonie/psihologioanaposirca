import AvailabilityCalendar from '../../components/availability_calendar/availability_calendar';
import FooterSection from '../../sections/footer/footer_section';
import { updatePageHeader } from '../../utils/page_header_updater';
import './make_an_appointment_page.scss';

export default function AppointmentPage() {
    updatePageHeader(
        'Programări | Ioana Poșircă',
        'Programează o ședință. Vezi calendarul cu orele disponibile și alege un interval.'
    );

    return (
        <>
            <main className="make-appointment-page">
                <h1>Fă o programare</h1>

                <AvailabilityCalendar></AvailabilityCalendar>
            </main>

            <FooterSection />
        </>
    );
}