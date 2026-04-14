import { seoFields } from './seoFields';

export const guideSchema = {
  name: 'guide',
  title: 'Guide pratique',
  type: 'document',
  fields: [
    { name: 'title', title: 'Titre', type: 'string', validation: (R: any) => R.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    { name: 'excerpt', title: 'Chapô', type: 'text', rows: 3 },
    {
      name: 'coverImage',
      title: 'Image de couverture',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', title: 'Alt', type: 'string' }],
    },
    {
      name: 'format',
      title: 'Format',
      type: 'string',
      options: {
        list: [
          { title: 'How-To (étapes)', value: 'howto' },
          { title: 'FAQ', value: 'faq' },
          { title: 'Article long-format', value: 'longform' },
        ],
      },
      initialValue: 'howto',
    },
    {
      name: 'steps',
      title: 'Étapes (How-To)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Titre', type: 'string' },
            { name: 'text', title: 'Description', type: 'text' },
            { name: 'image', title: 'Illustration', type: 'image', options: { hotspot: true } },
          ],
        },
      ],
    },
    {
      name: 'faq',
      title: 'FAQ',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'question', title: 'Question', type: 'string' },
            { name: 'answer', title: 'Réponse', type: 'text' },
          ],
        },
      ],
    },
    {
      name: 'body',
      title: 'Contenu libre',
      type: 'array',
      of: [{ type: 'block' }],
    },
    { name: 'author', title: 'Auteur', type: 'reference', to: [{ type: 'author' }] },
    { name: 'publishedAt', title: 'Date', type: 'datetime' },
    { name: 'updatedAt', title: 'Mise à jour', type: 'datetime' },
    seoFields,
  ],
} as const;
