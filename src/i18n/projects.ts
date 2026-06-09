export const projectsContent = {
    en: {
        meta: {
            title: "Selected work | AI-assisted internal tools and workflows",
            description:
                "Examples of internal tools, AI-assisted workflows, and simple business websites built around real e-commerce and operations problems.",
        },
        hero: {
            title: "Selected work",
            subtitle: "A few examples of internal tools, AI-assisted workflows, and simple business websites I have built or am currently building.",
            info: "Some projects are internal or still in progress, so the focus here is on the problem, structure, and what the work proves.",
            image: {
                src: "../../assets/projects_hero_image.png"
            }
        },
        project1: {
            name: "Listegy",
            summary:
                "AI-guided Amazon listing workflow for text, image, and infographic generation.",
            description:
                "Amazon listing work often spreads across product data, keywords, personas, image folders, prompt documents, and copied AI output. Listegy turns that into a guided workflow with structured selections, keyword checks, saved listing steps, and generation logic behind the scenes.",
            proof:
                "Messy AI-assisted content work can become structured software with saved data, repeatable steps, and clear user guidance.",
            stack: ["Laravel", "Vue", "Tailwind", "shadcn-vue", "PostgreSQL"],
            status: "In development",
        }

    },
    de: {
        meta: {
            title: "Ausgewählte Projekte | KI-gestützte interne Tools und Workflows",
            description:
                "Beispiele für interne Tools, KI-gestützte Workflows und einfache Business-Websites, gebaut rund um echte E-Commerce- und Operations-Probleme.",
        },
    }
} as const;
