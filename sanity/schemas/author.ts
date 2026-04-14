export const authorSchema = {
  name: 'author',
  title: 'Auteur',
  type: 'document',
  fields: [
    { name: 'name', title: 'Nom', type: 'string', validation: (R: any) => R.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name', maxLength: 96 } },
    { name: 'role', title: 'Rôle / Titre', type: 'string' },
    { name: 'bio', title: 'Biographie', type: 'text', rows: 4 },
    { name: 'avatar', title: 'Avatar', type: 'image', options: { hotspot: true } },
    {
      name: 'social',
      title: 'Réseaux sociaux',
      type: 'object',
      fields: [
        { name: 'twitter', type: 'url' },
        { name: 'linkedin', type: 'url' },
        { name: 'instagram', type: 'url' },
      ],
    },
  ],
} as const;
