# burt-portfolio

My personal dev portfolio. Built with Nuxt 4 and Tailwind.

- Repo: https://github.com/bortsigan/burt-portfolio
- Live: https://burt-portfolio.vercel.app/

## Goal

I wanted a single place to point people to when they ask "what have you worked on?" without having to dig through old chat threads or LinkedIn. So this site covers:

- who I am and where I'm based
- the projects I've actually shipped at work
- a few small sample builds with code + live demos
- my experience, skills and a way to contact me

I also use it as a sandbox. Whenever I want to try a new Nuxt feature or a UI idea, it usually lands here first before going into client work.

## Stack

- Nuxt 4 (Vue 3, `<script setup>`)
- Tailwind CSS v4 via `@tailwindcss/vite`
- Nuxt UI for a few components
- Heroicons

Content for each section lives in plain JS files under `app/assets/js/` (for example `projects-section.js`, `skills-section.js`) so updating the site is mostly editing a data file, not the markup.

## Project structure

```
app/
  app.vue
  layouts/default.vue        # navbar + footer
  pages/index.vue            # single page, stitches sections together
  components/                # one file per section
  assets/
    css/main.css
    js/                      # data + config for each section
public/
  manifest.json
  robots.txt
```

## Run it locally

You'll need Node 18+.

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

Other scripts:

```bash
npm run build      # production build
npm run preview    # preview the production build
npm run generate   # static generate
```

## Editing content

Most copy changes don't need you to touch a `.vue` file. Look in `app/assets/js/` first:

- `hero-section.js` – name, tagline, social links
- `about-section.js` – the "about me" copy
- `projects-section.js` – featured projects with metrics and tech stack
- `experience-section.js` – work history
- `skills-section.js` – skills grouped by category
- `contact-section.js` – contact methods
- `seo-config.js` – title and meta description

The Sample Works list is inline in `app/components/SampleWorksSection.vue` since it's short.

## Deploy

Any Node host works. I usually push to Vercel and let it handle the rest. For static hosting, run `npm run generate` and ship the `.output/public` folder.

## License

Code is free to reference. Please don't copy the content (bio, projects, experience) wholesale and pass it off as your own.
