

export const ROUTES = {
    ABOUT: "/despre-mine",
    SERVICES: "/servicii",
    ARTICLES: "/articole",
    BOOKING: "/programare",
    FAQ: "/faq",
    CONTACT: "/contact",
} as const;

const NAV_NAMES = {
    ABOUT: "Despre mine",
    SERVICES: "Servicii",
    ARTICLES: "Articole",
    BOOKING: "Programare",
    FAQ: "Întrebări frecvente",
    CONTACT: "Contact",
} as const;

export const NAV_ITEMS: NavItem[] = [
    { name: NAV_NAMES.ABOUT, route: ROUTES.ABOUT },
    { name: NAV_NAMES.SERVICES, route: ROUTES.SERVICES },
    { name: NAV_NAMES.ARTICLES, route: ROUTES.ARTICLES },
    { name: NAV_NAMES.BOOKING, route: ROUTES.BOOKING },
    { name: NAV_NAMES.FAQ, route: ROUTES.FAQ },
    { name: NAV_NAMES.CONTACT, route: ROUTES.CONTACT },
];

export interface NavItem {
    name: string;
    route: string;
}
