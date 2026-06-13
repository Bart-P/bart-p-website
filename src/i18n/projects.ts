export const projectsContent = {
    en: {
        meta: {
            title: "Selected work | AI-assisted internal tools and workflows",
            description:
                "Examples of tools, AI-assisted workflows, and business websites built around real e-commerce and operations problems.",
        },
        hero: {
            title: "Selected work",
            subtitle:
                "Tools, AI-assisted workflows, and business websites built around real e-commerce and operations problems.",
            info: "Each project shows the same pattern: messy workflows, scattered data, or repeated decisions turned into something more structured and usable.",
            image: {
                src: "../../assets/projects_hero_image.png",
            },
        },
        projects: [
            {
                name: "Listegy",
                summary:
                    "AI-guided Amazon listing workflow for text, image, and infographic generation.",
                description:
                    "Amazon listing work often spreads across product data, keywords, personas, image folders, prompt documents, and copied AI output. Listegy turns that into a guided workflow with structured selections, keyword checks, saved listing steps, and generation logic behind the scenes.",
                outcome:
                    "Messy AI-assisted content work can become structured software with saved data, repeatable steps, and clear user guidance.",
                stack: [
                    "Laravel",
                    "Vue",
                    "Tailwind",
                    "shadcn-vue",
                    "PostgreSQL",
                ],
                status: "in development",
                images: [
                    "/assets/listegy/listegy_text_generation.png",
                    "/assets/listegy/listegy_selection.png",
                    "/assets/listegy/listegy_generation.png",
                ],
            },
            {
                name: "Infographics Background Generator",
                summary:
                    "n8n workflow for generating persona-based product background scenes for e-commerce visuals.",
                description:
                    "This workflow was used in an e-commerce business to support product infographic creation. It takes product data, brand context, and a product image as input, generates a buyer persona, extracts relevant pain points, and turns them into background scene ideas for product visuals.",
                outcome:
                    "The workflow worked in practice and was useful on a weekly to monthly basis. It also showed the limitation of raw automation: useful for technical users, but not guided enough for non-technical teams. That gap later shaped the direction of Listegy.",
                stack: [
                    "n8n",
                    "Google Drive",
                    "AI workflows",
                    "Image generation",
                ],
                status: "delivered",
                images: [
                    "/assets/infographics-background-generator/workflow.png",
                ],
            },
            {
                name: "Expensior",
                summary:
                    "Expense and payment tool replacing spreadsheet-heavy tracking.",
                description:
                    "Recurring expenses, loan payments, payment statuses, and monthly overviews are easy to start in spreadsheets, but hard to manage once they become part of daily work. Expensior turns that into a database-backed internal tool with structured expenses, recurring payments, loan logic, statuses, filters, and overview pages.",
                outcome:
                    "Spreadsheet-heavy business tracking can become a focused internal tool with clearer data, repeatable processes, and better visibility over open and paid items.",
                stack: ["Laravel", "Vue", "Inertia", "Tailwind", "SQLite"],
                status: "delivered",
                images: [
                    "/assets/expensior/expensior_dashboard.png",
                    "/assets/expensior/expensior_loan_edit.png",
                    "/assets/expensior/expensior_expenses.png",
                ],
            },
        ],
        cta: {
            title: "Have a workflow that should become software?",
            body: "Bring one messy workflow. I’ll help you decide whether it should stay manual, be stabilized, or become reliable software.",
            primaryCta: "Book a call",
        },
    },
    de: {
        meta: {
            title: "Ausgewählte Projekte | KI-gestützte interne Tools und Workflows",
            description:
                "Beispiele für interne Tools, KI-gestützte Workflows und Business-Websites, gebaut rund um echte E-Commerce- und Operations-Probleme.",
        },
        hero: {
            title: "Ausgewählte Projekte",
            subtitle:
                "Einige Beispiele für interne Tools, KI-gestützte Workflows und Business-Websites, die ich gebaut habe oder aktuell baue.",
            info: "Einige Projekte sind intern oder noch in Entwicklung. Deshalb liegt der Fokus hier auf dem Problem, der Struktur und darauf, was die Arbeit zeigt.",
            image: {
                src: "../../assets/projects_hero_image.png",
            },
        },
        projects: [
            {
                name: "Listegy",
                summary:
                    "KI-geführter Amazon-Listing-Workflow für Text-, Bild- und Infografik-Erstellung.",
                description:
                    "Amazon-Listing-Arbeit verteilt sich oft über Produktdaten, Keywords, Personas, Bildordner, Prompt-Dokumente und kopierte KI-Ausgaben. Listegy macht daraus einen geführten Workflow mit strukturierten Auswahlmöglichkeiten, Keyword-Checks, gespeicherten Listing-Schritten und Generierungslogik im Hintergrund.",
                outcome:
                    "Unstrukturierte KI-gestützte Content-Arbeit kann zu strukturierter Software mit gespeicherten Daten, wiederholbaren Schritten und klarer Nutzerführung werden.",
                stack: [
                    "Laravel",
                    "Vue",
                    "Tailwind",
                    "shadcn-vue",
                    "PostgreSQL",
                ],
                status: "In Entwicklung",
                images: [
                    "/assets/listegy/listegy_text_generation.png",
                    "/assets/listegy/listegy_selection.png",
                    "/assets/listegy/listegy_generation.png",
                ],
            },
            {
                name: "Infographics Background Generator",
                summary:
                    "n8n-Workflow zur Erstellung persona-basierter Hintergrundszenen für E-Commerce-Visuals.",
                description:
                    "Dieser Workflow wurde in einem E-Commerce-Unternehmen genutzt, um die Erstellung von Produktinfografiken zu unterstützen. Er nimmt Produktdaten, Markenkontext und ein Produktbild als Input, generiert eine Buyer Persona, leitet relevante Pain Points ab und verwandelt sie in Hintergrundideen für Produktvisuals.",
                outcome:
                    "Der Workflow hat in der Praxis funktioniert und wurde wöchentlich bis monatlich genutzt. Er zeigte außerdem, wie KI-Workflows echte E-Commerce-Content-Arbeit unterstützen können und hat später die Richtung von Listegy mitgeprägt.",
                stack: [
                    "n8n",
                    "Google Drive",
                    "KI-Workflows",
                    "Bildgenerierung",
                ],
                status: "abgeschlossen",
                images: [
                    "/assets/infographics-background-generator/workflow.png",
                ],
            },
            {
                name: "Expensior",
                summary:
                    "Ausgaben- und Zahlungstool statt tabellenlastigem Tracking.",
                description:
                    "Wiederkehrende Ausgaben, Darlehenszahlungen, Zahlungsstatus und Monatsübersichten lassen sich schnell in Tabellen starten, werden aber schwer zu verwalten, sobald sie Teil des Alltags werden. Expensior macht daraus ein datenbankgestütztes internes Tool mit strukturierten Ausgaben, wiederkehrenden Zahlungen, Darlehenslogik, Status, Filtern und Übersichtsseiten.",
                outcome:
                    "Tabellenlastiges Business-Tracking kann zu einem fokussierten internen Tool werden, mit klareren Daten, wiederholbaren Prozessen und besserem Überblick über offene und bezahlte Posten.",
                stack: ["Laravel", "Vue", "Inertia", "Tailwind", "SQLite"],
                status: "abgeschlossen",
                images: [
                    "/assets/expensior/expensior_dashboard.png",
                    "/assets/expensior/expensior_loan_edit.png",
                    "/assets/expensior/expensior_expenses.png",
                ],
            },
        ],
        cta: {
            title: "Hast du einen Workflow, der zu Software werden sollte?",
            body: "Bring einen chaotischen Workflow mit. Ich helfe dir zu entscheiden, ob er manuell bleiben, stabilisiert oder zu verlässlicher Software werden sollte.",
            primaryCta: "Gespräch buchen",
        },
    },
} as const;
