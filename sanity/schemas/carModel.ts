import { seoFields } from './seoFields';

export const carModelSchema = {
  name: 'carModel',
  title: 'Modèle de voiture',
  type: 'document',
  fields: [
    { name: 'name', title: 'Nom', type: 'string', validation: (R: any) => R.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name', maxLength: 96 } },
    { name: 'brand', title: 'Marque', type: 'reference', to: [{ type: 'brand' }], validation: (R: any) => R.required() },
    { name: 'year', title: 'Année du modèle', type: 'number' },
    {
      name: 'segment',
      title: 'Segment',
      type: 'string',
      options: {
        list: [
          { title: 'Citadine', value: 'citadine' },
          { title: 'Berline', value: 'berline' },
          { title: 'SUV', value: 'SUV' },
          { title: 'Pickup', value: 'pickup' },
          { title: 'Utilitaire', value: 'utilitaire' },
        ],
      },
    },
    { name: 'bodyType', title: 'Type de carrosserie', type: 'string' },
    {
      name: 'engine',
      title: 'Motorisation',
      type: 'object',
      fields: [
        {
          name: 'type',
          title: 'Type',
          type: 'string',
          options: {
            list: ['thermique', 'hybride', 'hybride-rechargeable', 'electrique'],
          },
        },
        { name: 'displacement', title: 'Cylindrée (cc)', type: 'number' },
        { name: 'power', title: 'Puissance (ch)', type: 'number' },
        { name: 'torque', title: 'Couple (Nm)', type: 'number' },
        { name: 'autonomy', title: 'Autonomie WLTP (km)', type: 'number' },
        { name: 'batteryCapacity', title: 'Batterie (kWh)', type: 'number' },
      ],
    },
    {
      name: 'dimensions',
      title: 'Dimensions',
      type: 'object',
      fields: [
        { name: 'length', title: 'Longueur (mm)', type: 'number' },
        { name: 'width', title: 'Largeur (mm)', type: 'number' },
        { name: 'height', title: 'Hauteur (mm)', type: 'number' },
        { name: 'wheelbase', title: 'Empattement (mm)', type: 'number' },
        { name: 'weight', title: 'Poids à vide (kg)', type: 'number' },
        { name: 'bootSpace', title: 'Volume coffre (L)', type: 'number' },
      ],
    },
    {
      name: 'performance',
      title: 'Performances',
      type: 'object',
      fields: [
        { name: 'acceleration0to100', title: '0-100 km/h (s)', type: 'number' },
        { name: 'topSpeed', title: 'Vitesse max (km/h)', type: 'number' },
      ],
    },
    {
      name: 'consumption',
      title: 'Consommation',
      type: 'object',
      fields: [
        { name: 'combined', title: 'Mixte (L/100km ou kWh/100km)', type: 'number' },
        { name: 'urban', title: 'Urbaine', type: 'number' },
        { name: 'highway', title: 'Extra-urbaine', type: 'number' },
        { name: 'co2', title: 'CO₂ (g/km)', type: 'number' },
      ],
    },
    {
      name: 'pricing',
      title: 'Tarifs',
      type: 'object',
      fields: [
        { name: 'priceMaroc', title: 'Prix Maroc (MAD)', type: 'number' },
        { name: 'priceFrance', title: 'Prix France (€)', type: 'number' },
        { name: 'priceChine', title: 'Prix Chine (¥)', type: 'number' },
      ],
    },
    {
      name: 'gallery',
      title: 'Galerie',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [{ name: 'alt', title: 'Alt', type: 'string' }],
        },
      ],
    },
    { name: 'pros', title: 'Points forts', type: 'array', of: [{ type: 'string' }] },
    { name: 'cons', title: 'Points faibles', type: 'array', of: [{ type: 'string' }] },
    {
      name: 'verdict',
      title: 'Verdict',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'availability',
      title: 'Disponibilité',
      type: 'string',
      options: {
        list: [
          { title: 'Disponible au Maroc', value: 'disponible-maroc' },
          { title: 'Bientôt au Maroc', value: 'bientot-maroc' },
          { title: 'Import uniquement', value: 'import-uniquement' },
        ],
      },
    },
    {
      name: 'rating',
      title: 'Note éditoriale',
      type: 'object',
      fields: [
        { name: 'value', title: 'Valeur (/5)', type: 'number' },
        { name: 'count', title: 'Nombre d\'avis', type: 'number' },
      ],
    },
    seoFields,
  ],
  preview: {
    select: { title: 'name', subtitle: 'brand.name', media: 'gallery.0' },
  },
} as const;
