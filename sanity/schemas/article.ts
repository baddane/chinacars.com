import { seoFields } from './seoFields';

export const articleSchema = {
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (R: any) => R.required().max(120),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (R: any) => R.required(),
    },
    {
      name: 'excerpt',
      title: 'Chapô (150-160 chars)',
      type: 'text',
      rows: 3,
      validation: (R: any) => R.max(200),
    },
    {
      name: 'body',
      title: 'Contenu',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'Citation', value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: 'Gras', value: 'strong' },
              { title: 'Italique', value: 'em' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Lien',
                fields: [
                  { name: 'href', type: 'url', title: 'URL' },
                  { name: 'blank', type: 'boolean', title: 'Nouvelle fenêtre' },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'alt', title: 'Alt', type: 'string', validation: (R: any) => R.required() },
            { name: 'caption', title: 'Légende', type: 'string' },
          ],
        },
      ],
    },
    {
      name: 'mainImage',
      title: 'Image principale',
      type: 'image',
      options: { hotspot: true },
      fields: [
        { name: 'alt', title: 'Alt', type: 'string', validation: (R: any) => R.required() },
      ],
    },
    { name: 'author', title: 'Auteur', type: 'reference', to: [{ type: 'author' }] },
    { name: 'category', title: 'Catégorie', type: 'reference', to: [{ type: 'category' }] },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    },
    {
      name: 'relatedCars',
      title: 'Modèles liés',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'carModel' }] }],
    },
    {
      name: 'relatedArticles',
      title: 'Articles liés',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'article' }] }],
    },
    {
      name: 'publishedAt',
      title: 'Date de publication',
      type: 'datetime',
      validation: (R: any) => R.required(),
    },
    { name: 'updatedAt', title: 'Dernière mise à jour', type: 'datetime' },
    { name: 'featured', title: 'Article à la une', type: 'boolean', initialValue: false },
    { name: 'readingTime', title: 'Temps de lecture (min)', type: 'number' },
    seoFields,
  ],
  orderings: [
    {
      title: 'Date de publication (récents)',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'category.title', media: 'mainImage' },
  },
} as const;
