import { Link } from "react-router-dom";
import type { NavItem } from "../../utils/navigation";

export interface NavLinksProps {
    items: NavItem[];
    className?: string;
    onNavigate?: () => void;
}

export function NavLinks({ items, className = '', onNavigate }: Readonly<NavLinksProps>) {
    return (
        <ul className={className}>
            {items.map(item => (
                <li key={item.route}>
                    <Link
                        className="nav-link"
                        to={item.route}
                        onClick={onNavigate}
                        onMouseDown={(e) => e.preventDefault()}
                        draggable={false}
                    >
                        {item.name}
                    </Link>
                </li>
            ))}
        </ul>
    );
}