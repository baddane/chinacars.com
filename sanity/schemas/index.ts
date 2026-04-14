import { articleSchema } from './article';
import { authorSchema } from './author';
import { brandSchema } from './brand';
import { carModelSchema } from './carModel';
import { categorySchema } from './category';
import { comparisonSchema } from './comparison';
import { guideSchema } from './guide';

/**
 * Register in `sanity.config.ts`:
 *   import { schemaTypes } from './sanity/schemas';
 *   schema: { types: schemaTypes }
 */
export const schemaTypes = [
  articleSchema,
  authorSchema,
  brandSchema,
  carModelSchema,
  categorySchema,
  comparisonSchema,
  guideSchema,
];
