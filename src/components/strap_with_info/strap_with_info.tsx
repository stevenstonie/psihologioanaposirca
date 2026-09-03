import { useEffect, useRef } from 'react';
import './strap_with_info.scss';

interface StrapListProps {
    icon?: React.ReactNode;
    title: React.ReactNode;
    description?: React.ReactNode;
}

export const StrapWithInfo: React.FC<StrapListProps> = ({
    icon,
    title,
    description,
}) => {
    const ref = useRef<HTMLLIElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        }, { threshold: 0.1, rootMargin: '-100px' });

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <li ref={ref} className="strap-with-info">
            {icon && <div className="strap-with-info-icon">{icon}</div>}
            <div className="strap-with-info-content">
                <p className="strap-with-info-title">{title}</p>
                <p className="strap-with-info-description">{description}</p>
            </div>
        </li>
    );
};