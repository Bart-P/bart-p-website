# bart-p.com

Personal website for Bartek Para, built with Astro and Tailwind CSS.

The site presents my freelance work around AI-assisted internal tools, automation workflows, and selected software projects. It is published at [bart-p.com](https://bart-p.com).

## Stack

- Astro
- TypeScript
- Tailwind CSS
- ESLint
- Prettier
- npm

## Project Structure

```txt
src/
  components/   Reusable Astro components
  config/       Site-wide links and contact settings
  i18n/         English and German copy
  layouts/      Base and site layouts
  pages/        Astro routes
  styles/       Global styles

public/
  assets/       Static images and screenshots
```

## Development

Install dependencies:

```bash
npm install
```

Start the local dev server:

```bash
npm run dev
```

Run validation before publishing changes:

```bash
npm run validate
```

This runs formatting checks, Astro type checks, linting, and a production build.

## Scripts

- `npm run dev` - start the Astro dev server
- `npm run build` - build the site
- `npm run preview` - preview the production build locally
- `npm run check` - run Astro checks
- `npm run lint` - run ESLint
- `npm run format` - format the codebase
- `npm run validate` - run all validation steps

## Notes

The `scripts/dev-tmux.sh` script is an optional personal workflow helper for starting my local tmux-based development setup. It is not required to work on the site.

## License

This is the source code for a personal website. Unless a license is added, the contents are not licensed for reuse.
