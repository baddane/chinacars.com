import { seoFields } from './seoFields';

export const brandSchema = {
  name: 'brand',
  title: 'Marque',
  type: 'document',
  fields: [
    { name: 'name', title: 'Nom', type: 'string', validation: (R: any) => R.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name', maxLength: 96 } },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', title: 'Alt', type: 'string' }],
    },
    { name: 'country', title: 'Pays', type: 'string', initialValue: 'Chine' },
    { name: 'founded', title: 'Année de création', type: 'number' },
    { name: 'headquarters', title: 'Siège social', type: 'string' },
    { name: 'website', title: 'Site officiel', type: 'url' },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'heroImage',
      title: 'Image Hero',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', title: 'Alt', type: 'string' }],
    },
    seoFields,
  ],
  preview: {
    select: { title: 'name', media: 'logo' },
  },
} as const;
