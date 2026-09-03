import { Link } from "react-router-dom";
import type { NavItem } from "../../utils/nav_items";

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
                    >
                        {item.name}
                    </Link>
                </li>
            ))}
        </ul>
    );
}