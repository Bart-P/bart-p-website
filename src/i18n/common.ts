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
                href: "/de/",
            },
            primaryCta: {
                label: "Book a call",
                href: "/contact",
            },
        },
        footer: {
            brand: "Bartek Para",
            tagline: "Internal tools for e-commerce teams and agencies.",
            links: [
                { label: "Home", href: "/" },
                { label: "Projects", href: "/projects" },
                { label: "Contact", href: "/contact" },
                { label: "Legal Notice", href: "/legal-notice" },
                { label: "Privacy Policy", href: "/privacy-policy" },
                {
                    label: "LinkedIn",
                    href: "https://www.linkedin.com/in/YOUR-LINKEDIN-SLUG/",
                },
            ],
        },
    },
    de: {
        nav: {
            brand: "Bartek Para",
            links: [
                { label: "Start", href: "/de/" },
                { label: "Projekte", href: "/de/projects" },
                { label: "Kontakt", href: "/de/contact" },
            ],
            languageSwitch: {
                current: "DE",
                other: "EN",
                href: "/",
            },
            primaryCta: {
                label: "Gespräch buchen",
                href: "/de/contact",
            },
        },
        footer: {
            brand: "Bartek Para",
            tagline: "Interne Tools für E-Commerce-Teams und Agenturen.",
            links: [
                { label: "Start", href: "/de/" },
                { label: "Projekte", href: "/de/projects" },
                { label: "Kontakt", href: "/de/contact" },
                { label: "Impressum", href: "/de/impressum" },
                { label: "Datenschutz", href: "/de/datenschutz" },
                {
                    label: "LinkedIn",
                    href: "https://www.linkedin.com/in/YOUR-LINKEDIN-SLUG/",
                },
            ],
        },
    },
} as const;
