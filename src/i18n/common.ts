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
                href: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0eEY05Vnb93KJ0RNbf2JA9uqTkll3iPTRUvgzghKgDeCphHN3jHVJtfCVeLoT5b1m02D4YI4rJ",
            },
        },
        footer: {
            brand: "Bartek Para",
            tagline: "Internal tools for e-commerce teams and agencies.",
            links: [
                { label: "Home", href: "/" },
                { label: "Projects", href: "/projects" },
                { label: "Contact", href: "/contact" },
                { label: "Legal Notice", href: "/contact" },
                { label: "Privacy Policy", href: "/privacy-policy" },
                {
                    label: "LinkedIn",
                    href: "https://www.linkedin.com/in/bartek-para-bb43411b/",
                    target: "_blank"
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
                href: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0eEY05Vnb93KJ0RNbf2JA9uqTkll3iPTRUvgzghKgDeCphHN3jHVJtfCVeLoT5b1m02D4YI4rJ",
            },
        },
        footer: {
            brand: "Bartek Para",
            tagline: "Interne Tools für E-Commerce-Teams und Agenturen.",
            links: [
                {
                    label: "Start",
                    href: "/de/",
                    target: "_self",
                },
                {
                    label: "Projekte",
                    href: "/de/projects",
                    target: "_self",
                },
                {
                    label: "Kontakt",
                    href: "/de/contact",
                    target: "_self",
                },
                {
                    label: "Impressum",
                    href: "/de/contact",
                    target: "_self",
                },
                {
                    label: "Datenschutz",
                    href: "/de/privacy-policy",
                    target: "_self",
                },
                {
                    label: "LinkedIn",
                    href: "https://www.linkedin.com/in/bartek-para-bb43411b/",
                    target: "_blank",
                },
            ],
        },
    },
} as const;
