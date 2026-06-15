export const videoContent = {
    en: {
        meta: {
            title: "Personal Video",
            description: "",
        },
        hero: {
            title: "Personal video",
            heading: "I recorded a short video for you",
            description:
                "I noticed a few things that might be relevant for your team and recorded a short video. Watch it below. If it makes sense, book a call.",
        },
        video: {
            title: "Click to play video",
            warning:
                "Clicking loads YouTube. Data may be transferred to YouTube/Google.",
            error: {
                title: "Something went wrong with the video link.",
                description:
                    "It looks like the video link is missing or incomplete. Send me a quick message by email or LinkedIn and I’ll send you the correct link.",
                apology: "Sorry for the inconvenience.",
                emailLabel: "Email me",
                linkedinLabel: "Message me on LinkedIn",
                bookACallTitle: "Still want to talk?",
            },
        },
        cta: {
            title: "Watched the video? Let’s talk.",
        },
    },
    de: {
        meta: {
            title: "Persönliches Video",
            description: "",
        },
        hero: {
            title: "Persönliches Video",
            heading: "Ich habe ein kurzes Video für dich aufgenommen",
            description:
                "Mir sind ein paar Dinge aufgefallen, die für dein Team relevant sein könnten. Ich habe sie in einem kurzen Video zusammengefasst. Schau es dir unten an. Wenn es sinnvoll ist, buche gerne ein Gespräch.",
        },
        video: {
            title: "Video abspielen",
            warning:
                "Beim Klick wird YouTube geladen. Dabei können Daten an YouTube/Google übertragen werden.",
            error: {
                title: "Mit dem Videolink stimmt etwas nicht.",
                description:
                    "Es sieht so aus, als wäre der Videolink unvollständig. Schreib mir kurz per E-Mail oder LinkedIn, dann sende ich dir den richtigen Link.",
                apology: "Sorry für die Umstände.",
                emailLabel: "E-Mail",
                linkedinLabel: "LinkedIn",
                bookACallTitle: "Termin trotzdem buchen?",
            },
        },
        cta: {
            title: "Video gesehen? Lass uns sprechen.",
        },
    },
} as const;
