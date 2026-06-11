export const languages = ["en", "de"] as const;
export type Lang = (typeof languages)[number];

export type Project = {
    name: string;
    summary: string;
    description: string;
    outcome: string;
    stack: readonly string[];
    status: string;
    images: readonly string[];
};
