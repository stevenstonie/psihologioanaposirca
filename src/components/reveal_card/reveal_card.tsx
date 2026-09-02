import type { ReactNode } from 'react';
import './reveal_card.scss';

interface RevealCardProps {
    title: string;
    description: string;
    icon: ReactNode;
    isListItem?: boolean;
}

export default function RevealCard({ title, description, icon, isListItem = true }: Readonly<RevealCardProps>) {
    const Tag = isListItem ? 'li' : 'div';
    return (
        <Tag className="reveal-card">
            <span className="reveal-card-icon" aria-hidden="true">
                {icon}
            </span>
            <h3 className="reveal-card-title">{title}</h3>
            <p className="reveal-card-description">{description}</p>
        </Tag>
    );
}