import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import astro from "eslint-plugin-astro";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
    {
        ignores: [".astro/", "dist/", "node_modules/"],
    },
    js.configs.recommended,
    ...tseslint.configs.recommended,
    ...astro.configs["flat/recommended"],
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
    },
    {
        files: ["**/*.d.ts"],
        rules: {
            "@typescript-eslint/triple-slash-reference": "off",
        },
    },
    eslintConfigPrettier,
];
