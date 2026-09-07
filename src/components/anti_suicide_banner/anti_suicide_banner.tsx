import './anti_suicide_banner.scss';

export default function AntiSuicideBanner() {
    return (
        <div className="crisis-banner">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="crisis-icon"
                aria-hidden="true"
            >
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            <span className='crisis-text'>
                Dacă te afli într-o situație de urgență sau ai gânduri de a-ți face rău, sună la <a href="tel:112">112</a> sau la Telefonul Copilului <a href="tel:116111">116 111</a>, Asociația Antisuicid <a href="tel:0800801200">0800 801 200</a>.
            </span>
        </div>
    );
}