import { Suspense, useMemo } from "react";
import { LoaderBreathing } from "../../components/loader_breathing/loader_breathing";

const LOADING_PAGE_MESSAGES = [
    "Ia o gură de aer cât timp se încarcă pagina...",
    "Lucrurile bune au nevoie de timp...",
    "Acordă-ți un moment de liniște...",
    "Relaxează-ți umerii pentru o secundă...",
    "Se pregătește spațiul pentru tine...",
    "Respiră adânc. Suntem aproape gata...",
    "Fiecare pas contează. Se încarcă..."
];

export const Suspended = ({ children }: { children: React.ReactNode }) => {
    const randomPageLoadingMessage = useMemo(() => {
        const randomBuffer = new Uint32Array(1);
        window.crypto.getRandomValues(randomBuffer);

        const randomIndex = randomBuffer[0] % LOADING_PAGE_MESSAGES.length;
        return LOADING_PAGE_MESSAGES[randomIndex];
    }, []);

    return (
        <Suspense fallback={
            <div style={{ height: '80svh', display: 'grid', placeItems: 'center' }}>
                <LoaderBreathing text={randomPageLoadingMessage} />
            </div>
        }>
            <div className="page-transition-fade">
                {children}
            </div>
        </Suspense>
    );
};