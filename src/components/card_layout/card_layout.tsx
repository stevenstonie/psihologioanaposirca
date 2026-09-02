
import type { ReactNode } from 'react';
import './card_layout.scss';

interface CardLayoutProps {
    mode?: 'grid' | 'carousel';
    children: ReactNode;
}

export default function CardLayout({ mode = 'grid', children }: Readonly<CardLayoutProps>) {
    return (
        <ul className={`card-layout ${mode === 'carousel' ? 'layout-carousel' : 'layout-grid'}`}>
            {children}
        </ul>
    );
}