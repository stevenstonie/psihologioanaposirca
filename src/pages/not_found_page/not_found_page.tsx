import './not_found_page.scss';
import lostPersonIcon from '@/assets/svgs/icons/others/lost_person_next_to_a_sign.svg';

export default function NotFoundPage() {

    return (
        <main className="not-found-page-container">
            <h1>Hopaa!</h1>
            <img src={lostPersonIcon} alt='icon with a lost person'
                style={{ aspectRatio: '1/1', width: '150px'}} />
            <h2>Te-ai rătăcit în drumul descoperirii de sine?</h2>
            <h3>Aici nu se află nimic</h3>
            <h3>Folosește bara de navigație de mai sus pentru a ajunge unde îți dorești.</h3>
        </main>
    );
}