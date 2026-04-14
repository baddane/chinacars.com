/**
 * Reusable SEO fieldset — include via `{ ...seoFields }` spread or as a
 * nested object field on any document schema.
 *
 * Framework-agnostic JS object. When the Sanity Studio is wired up, import
 * this from `sanity/schemas` and register in `sanity.config.ts`.
 */
export const seoFields = {
  name: 'seo',
  title: 'SEO',
  type: 'object',
  options: { collapsible: true, collapsed: true },
  fields: [
    {
      name: 'metaTitle',
      title: 'Meta title (50–60 chars)',
      type: 'string',
      validation: (Rule: { max: (n: number) => { warning: (msg: string) => unknown } }) =>
        Rule.max(65).warning('Idéalement ≤ 60 caractères.'),
    },
    {
      name: 'metaDescription',
      title: 'Meta description (150–160 chars)',
      type: 'text',
      rows: 3,
      validation: (Rule: { max: (n: number) => { warning: (msg: string) => unknown } }) =>
        Rule.max(165).warning('Idéalement ≤ 160 caractères.'),
    },
    {
      name: 'ogImage',
      title: 'Image Open Graph (1200×630)',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'noIndex',
      title: 'Ne pas indexer cette page',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'canonicalUrl',
      title: 'URL canonique (si différente)',
      type: 'url',
    },
  ],
} as const;
