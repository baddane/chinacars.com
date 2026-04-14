import { seoFields } from './seoFields';

export const comparisonSchema = {
  name: 'comparison',
  title: 'Comparatif',
  type: 'document',
  fields: [
    { name: 'title', title: 'Titre', type: 'string', validation: (R: any) => R.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    { name: 'excerpt', title: 'Chapô', type: 'text', rows: 3 },
    {
      name: 'models',
      title: 'Modèles comparés',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'carModel' }] }],
      validation: (R: any) => R.min(2).max(5),
    },
    {
      name: 'body',
      title: 'Analyse',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'winner',
      title: 'Modèle préféré',
      type: 'reference',
      to: [{ type: 'carModel' }],
    },
    {
      name: 'coverImage',
      title: 'Image de couverture',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', title: 'Alt', type: 'string' }],
    },
    { name: 'publishedAt', title: 'Date', type: 'datetime' },
    seoFields,
  ],
} as const;
