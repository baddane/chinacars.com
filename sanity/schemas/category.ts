export const categorySchema = {
  name: 'category',
  title: 'Catégorie',
  type: 'document',
  fields: [
    { name: 'title', title: 'Titre', type: 'string', validation: (R: any) => R.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 } },
    { name: 'description', title: 'Description', type: 'text' },
    {
      name: 'color',
      title: 'Couleur d\'accent',
      type: 'string',
      options: {
        list: [
          { title: 'Rouge', value: 'red' },
          { title: 'Vert', value: 'green' },
          { title: 'Bleu', value: 'blue' },
          { title: 'Ambre', value: 'amber' },
          { title: 'Gris', value: 'gray' },
        ],
      },
    },
  ],
} as const;
