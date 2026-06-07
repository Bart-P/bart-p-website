export const commonContent = {
    en: {
        nav: {
            brand: "Bartek Para",
            links: [
                { label: "Home", href: "/" },
                { label: "Projects", href: "/projects" },
                { label: "Contact", href: "/contact" },
            ],
            languageSwitch: {
                current: "EN",
                other: "DE",
            },
            primaryCta: {
                label: "Book a call",
                href: "/",
            },
        },
        footer: {
            brand: "Bartek Para",
            tagline: "Internal tools for e-commerce teams and agencies.",
            links: [
                { label: "Home", href: "/" },
                { label: "Projects", href: "/" },
                { label: "Contact", href: "/" },
                { label: "Impressum", href: "/" },
                { label: "Datenschutz", href: "/" },
                { label: "LinkedIn", href: "/" },
            ],
        },
    },
} as const;
