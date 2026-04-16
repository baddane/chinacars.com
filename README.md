# VehiculesChinois.com

> Site média spécialisé sur les voitures et utilitaires chinois en France — actualités, essais,
> comparatifs, fiches modèles et guides d'achat.

## Stack technique

- **Framework** : Vite + React 19 + React Router 7
- **Styling** : Tailwind CSS v4
- **CMS** : Sanity (headless, via `@sanity/client`)
- **SEO** : `react-helmet-async`, composants JSON-LD (`components/seo/*`)
- **Animations** : `motion`
- **TypeScript** : strict

> ℹ️ L'architecture cible (voir `docs/ARCHITECTURE.md` si présent) prévoit une
> migration vers **Next.js 14 App Router** pour bénéficier du SSR/SSG/ISR et
> d'une meilleure indexation. Le code actuel jette les fondations
> (helpers SEO, schémas Sanity, composants réutilisables) de façon
> portable.

## Démarrage

```bash
# 1. Installer les dépendances
npm install

# 2. Copier la config et renseigner les clefs Sanity
cp .env.example .env.local

# 3. Lancer le serveur de dev
npm run dev
# → http://localhost:3000
```

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Serveur de dev Vite (port 3000) |
| `npm run build` | Build de production |
| `npm run preview` | Prévisualise le build |
| `npm run lint` | Type-check TypeScript (`tsc --noEmit`) |
| `npm run sitemap` | Génère `public/sitemap.xml` depuis Sanity |

## Structure

```
src/
├── components/
│   ├── articles/     # Cartes & rendu Portable Text
│   ├── cars/         # Fiches & cartes modèles
│   ├── layout/       # Header, Footer, Breadcrumb
│   ├── seo/          # JsonLd & helpers Schema.org
│   └── ui/           # Button, Badge, Pagination, etc.
├── lib/
│   ├── sanity/       # Client + queries GROQ
│   ├── seo/          # metadata, schemas, og
│   ├── constants.ts  # Marques, catégories, config site
│   └── utils.ts
├── pages/            # Routes top-level
└── index.css         # Tailwind + tokens
sanity/
└── schemas/          # Schémas de contenu (Article, CarModel, Brand…)
```

## SEO

- Balises Open Graph & Twitter Card par défaut dans `index.html`
- `robots.txt` + `sitemap.xml` servis depuis `public/`
- JSON-LD via `<JsonLd>` (`NewsArticle`, `Product`, `BreadcrumbList`,
  `FAQPage`, `Organization`, `WebSite`)
- Breadcrumbs sur toutes les pages hors accueil
- URLs slug-based (ex: `/actualites/byd-seal-prix-france-2026`)

## Déploiement Vercel

Le projet est prêt pour Vercel (framework `vite` détecté automatiquement).
Configuration : voir `vercel.json` (rewrites SPA, cache headers, security headers).

### Étapes

1. Importer le repo GitHub dans Vercel.
2. Vercel détecte `framework: vite` et utilise la commande `vercel-build`
   (définie dans `package.json`) qui génère le sitemap puis build.
3. Renseigner les variables d'environnement dans **Settings → Environment Variables** :
   - `VITE_SANITY_PROJECT_ID`
   - `VITE_SANITY_DATASET` (défaut : `production`)
   - `NEXT_PUBLIC_SITE_URL` (ex: `https://vehiculeschinois.com`)
4. Déployer.

### Revalidation du sitemap

À chaque publish dans Sanity, déclenchez un rebuild via un
[Deploy Hook](https://vercel.com/docs/git/deploy-hooks) Vercel ou via un
webhook Sanity → Vercel. Le script `generate-sitemap.ts` ira alors requêter
les contenus publiés et régénérera `public/sitemap.xml`.

## Licence

Propriétaire — tous droits réservés.
