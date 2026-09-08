

export const ROUTES = {
    ABOUT_ME: "/despre-mine",
    SERVICES: "/servicii",
    ARTICLES: "/articole",
    APPOINTMENT: "/programare",
    FAQ: "/faq",
    CONTACT: "/contact",
    ARTICLE: "/articol"
} as const;

const NAV_NAMES = {
    ABOUT: "Despre mine",
    SERVICES: "Servicii",
    ARTICLES: "Articole",
    APPOINTMENT: "Programare",
    FAQ: "Întrebări frecvente",
    CONTACT: "Contact",
} as const;

export const NAV_ITEMS: NavItem[] = [
    { name: NAV_NAMES.ABOUT, route: ROUTES.ABOUT_ME },
    { name: NAV_NAMES.SERVICES, route: ROUTES.SERVICES },
    { name: NAV_NAMES.ARTICLES, route: ROUTES.ARTICLES },
    { name: NAV_NAMES.APPOINTMENT, route: ROUTES.APPOINTMENT },
    { name: NAV_NAMES.FAQ, route: ROUTES.FAQ },
    { name: NAV_NAMES.CONTACT, route: ROUTES.CONTACT },
];

export interface NavItem {
    name: string;
    route: string;
}
