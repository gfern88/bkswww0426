# BKS Conveyancing WA

Premium boutique conveyancing website for BKS Conveyancing WA — a licensed settlement agency servicing property transactions across Western Australia.

## Stack

- **React 18** + **React Router v6**
- **Vite** (build tool)
- **Seravek** font (included in `/public/fonts/`)
- Zero external dependencies — fully self-contained

## Getting Started

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
npm run preview
```

## Deploy

The `dist/` folder after `npm run build` can be deployed to any static host:

- **Vercel**: `vercel --prod`
- **Netlify**: drag & drop `dist/` or connect this repo
- **Cloudflare Pages**: connect repo, build command `npm run build`, output `dist`

## Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/about` | About BKS |
| `/services` | Services |
| `/process` | Settlement Process |
| `/resources` | Resources & Checklists |
| `/quote` | Settlement Quote Calculator |
| `/contact` | Contact |

## Brand

- Blue: `#0096d6`
- Grey: `#455560`
- Font: Seravek (Light 300, Regular 400, Bold 700)

## Notes

- Font files are in `public/fonts/` — served locally, no CDN dependency
- No Base44 or third-party platform dependencies
- Contact form is UI-only — connect to a backend (e.g. EmailJS, Formspree, or a custom API) for production
