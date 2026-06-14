import { siteConfig } from "../config/site";

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
                href: siteConfig.bookingHref,
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
                    label: "Cookie Settings",
                    href: "/privacy-policy",
                    dataCc: "c-settings",
                },
                {
                    label: "LinkedIn",
                    href: siteConfig.linkedinHref,
                    target: "_blank",
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
                href: siteConfig.bookingHref,
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
                    label: "Cookie-Einstellungen",
                    href: "/de/privacy-policy",
                    target: "_self",
                    dataCc: "c-settings",
                },
                {
                    label: "LinkedIn",
                    href: siteConfig.linkedinHref,
                    target: "_blank",
                },
            ],
        },
    },
} as const;
