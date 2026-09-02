import type { ReactNode } from 'react';
import './revealing_card.scss';

interface RevealingCardProps {
    title: string;
    description: string;
    icon: ReactNode;
    isListItem?: boolean;
}

export default function RevealingCard({ title, description, icon, isListItem = true }: Readonly<RevealingCardProps>) {
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