# LLM Astro Starter Setup

This document instructs an LLM or coding agent how to create a clean Astro landing page starter in an empty directory.

## Goal

Create a small, static Astro starter for business websites and landing pages.

The starter should include:

- Astro
- Tailwind CSS v4 via `@tailwindcss/vite`
- TypeScript strict mode
- `astro check` support via `@astrojs/check` and `typescript`
- Prettier with Astro formatting and Tailwind class sorting
- ESLint with Astro and TypeScript support
- npm scripts for local validation
- Node version pinning via `mise.toml`

## Assumptions

- The target directory is empty or intended to become a new project.
- npm is used as the package manager.
- `package-lock.json` should be committed.
- GitHub Actions are not required by default.
- Tests are not required by default.
- Sitemap and robots setup should wait until the final domain is known.

## Setup Steps

### 1. Create The Astro Project

Create a new Astro project with the minimal template in the current directory:

```sh
npm create astro@latest . -- --template minimal
```

Choose:

- Package manager: npm
- Template: minimal
- TypeScript: strict
- Install dependencies: yes
- Initialize git: optional

After project creation, ensure `tsconfig.json` uses Astro's strict TypeScript config:

```json
{
    "extends": "astro/tsconfigs/strict",
    "include": [".astro/types.d.ts", "**/*"],
    "exclude": ["dist"]
}
```

Install the dependencies required for `astro check`:

```sh
npm install --save-dev @astrojs/check typescript
```

### 2. Install Tailwind CSS v4

Install runtime dependencies:

```sh
npm install tailwindcss @tailwindcss/vite
```

Configure `astro.config.mjs` to use the Tailwind Vite plugin:

```js
// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },
});
```

Create `src/styles/global.css`:

```css
@import "tailwindcss";
```

Import `src/styles/global.css` from the base layout.

### 3. Install Prettier Tooling

Install development dependencies:

```sh
npm install --save-dev prettier prettier-plugin-astro prettier-plugin-tailwindcss
```

Create `prettier.config.mjs`:

```js
/** @type {import("prettier").Config} */
export default {
    plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
    overrides: [
        {
            files: "*.astro",
            options: {
                parser: "astro",
            },
        },
    ],
};
```

Create `.prettierignore`:

```txt
dist/
.astro/
node_modules/
package-lock.json
```

### 4. Install ESLint Tooling

Install development dependencies:

```sh
npm install --save-dev eslint @eslint/js typescript-eslint eslint-plugin-astro eslint-config-prettier globals
```

Create `eslint.config.mjs`:

```js
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
```

### 5. Add npm Scripts

The final `package.json` scripts should include:

```json
{
    "scripts": {
        "dev": "astro dev",
        "build": "astro build",
        "check": "astro check",
        "format": "prettier --write .",
        "format:check": "prettier --check .",
        "lint": "eslint \"src/**/*.{astro,js,jsx,ts,tsx}\" \"*.{js,mjs,cjs,ts}\"",
        "validate": "npm run format:check && npm run check && npm run lint && npm run build",
        "preview": "astro preview",
        "astro": "astro"
    }
}
```

### 6. Pin Node Version

Create `mise.toml`:

```toml
[tools]
node = "22"
```

### 7. Create Base Project Structure

Recommended structure:

```txt
src/
  config/
  data/
  layouts/
    BaseLayout.astro
  pages/
    index.astro
  styles/
    global.css
  env.d.ts
public/
docs/
assets/
  source-material/
```

Create a minimal `src/layouts/BaseLayout.astro`:

```astro
---
import "../styles/global.css";

interface Props {
    title: string;
    description: string;
}

const { title, description } = Astro.props;
---

<!doctype html>
<html lang="de">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={description} />
        <meta name="generator" content={Astro.generator} />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <title>{title}</title>
    </head>
    <body class="min-h-screen bg-slate-50 text-slate-900 antialiased">
        <main class="mx-auto max-w-5xl px-6 py-16">
            <slot />
        </main>
    </body>
</html>
```

Create a minimal `src/pages/index.astro`:

```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
---

<BaseLayout
    title="Astro Landing Page Starter"
    description="A clean Astro and Tailwind starter for a static landing page."
>
    <section class="space-y-6">
        <p class="text-sm font-semibold tracking-wide text-slate-500 uppercase">
            Starter
        </p>
        <h1
            class="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl"
        >
            Astro Landing Page Starter
        </h1>
        <p class="max-w-2xl text-lg text-slate-700">
            Replace this page with project-specific content, sections, assets,
            and SEO metadata.
        </p>
    </section>
</BaseLayout>
```

### 8. Validate The Setup

Run:

```sh
npm run validate
```

The setup is complete only when validation passes.

## Not Included By Default

Do not add these unless the user explicitly asks:

- GitHub Actions
- Vitest
- Playwright
- Stylelint
- Husky
- lint-staged
- sitemap integration
- `robots.txt`
- CMS integrations
- deployment-specific config

## Notes For Future LLMs

Keep the starter minimal. Prefer standard Astro conventions over custom abstractions. Add project-specific SEO, content, components, assets, integrations, and deployment details only after the actual website and domain are known.
