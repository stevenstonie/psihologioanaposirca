import AvailabilityCalendar from '../../components/availability_calendar/availability_calendar';
import FooterSection from '../../sections/footer/footer_section';
import './make_an_appointment_page.scss';

export default function BookingPage() {

    return (
        <>
            <main className="booking-page">
                <h1>Fă o programare</h1>

                <AvailabilityCalendar></AvailabilityCalendar>
            </main>

            <FooterSection />
        </>
    );
}