
import { useRef, type ReactNode } from 'react';
import './card_layout.scss';

interface CardLayoutProps {
    mode?: 'grid' | 'carousel';
    semanticList?: boolean;
    children: ReactNode;
}

export default function CardLayout({ mode = 'grid', semanticList = true, children }: Readonly<CardLayoutProps>) {
    const containerRef = useRef<any>(null);
    const WrapperTag = semanticList ? 'ul' : 'div';

    const handleScroll = (direction: 'left' | 'right') => {
        if (containerRef.current) {
            const scrollAmount = 200;
            containerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="card-layout-container">
            <WrapperTag
                ref={containerRef}
                className={`card-layout ${mode === 'carousel' ? 'layout-carousel' : 'layout-grid'}`}
            >
                {children}
            </WrapperTag>
            {mode === 'carousel' && (
                <div className="carousel-controls" aria-label="Carousel Navigation">
                    <button onClick={() => handleScroll('left')} aria-label="Scroll left" type='button'>
                        &larr;
                    </button>
                    <button onClick={() => handleScroll('right')} aria-label="Scroll right" type='button'>
                        &rarr;
                    </button>
                </div>
            )}

        </div>
    );
}