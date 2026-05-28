# Sebastian Parkin — Development Portfolio

A personal portfolio website showcasing projects in machine learning, computational biophysics, and frontend development.

Link: https://sebparkin-portfolio.vercel.app

## Tech Stack

### Core

- **React 19** — component-based UI with hooks
- **Vite 8** — development server and build tooling
- **Tailwind CSS v4** — utility-first styling via the Vite plugin

### UI & Interaction

- **Lucide React** — icon library
- **EmailJS** — client-side contact form email delivery
- **clsx / tailwind-merge** — conditional and merged class utilities

### Typography

- **Roboto Slab** — headings, loaded via Google Fonts
- **Open Sans** — body text, loaded via Google Fonts

## Features

- Light / dark mode toggle with system preference detection
- Animated hero section with staggered fade-in text
- Expandable project cards — slide-up panel with autoplay video, project details, and links
- Responsive layout across mobile, tablet, and desktop
- Scroll-locked modal with scrollbar-width compensation to prevent layout shift

## Getting Started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```
