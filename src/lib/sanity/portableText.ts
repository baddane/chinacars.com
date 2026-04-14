import type { PortableTextComponents } from '@portabletext/react';
import { createElement } from 'react';
import { buildImageUrl } from './image';

/**
 * Shared renderer config for Sanity Portable Text.
 *
 * Usage:
 *   <PortableText value={article.body} components={portableTextComponents} />
 */
export const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      const src = buildImageUrl(value, { width: 1200 });
      return createElement(
        'figure',
        { className: 'my-8' },
        createElement('img', {
          src,
          alt: value.alt || '',
          loading: 'lazy',
          decoding: 'async',
          className: 'w-full rounded-2xl',
        }),
        value.caption &&
          createElement(
            'figcaption',
            { className: 'mt-2 text-center text-sm text-gray-500' },
            value.caption,
          ),
      );
    },
  },
  block: {
    h2: ({ children }) =>
      createElement(
        'h2',
        { className: 'mt-12 text-2xl font-bold tracking-tight text-gray-900' },
        children,
      ),
    h3: ({ children }) =>
      createElement(
        'h3',
        { className: 'mt-8 text-xl font-bold text-gray-900' },
        children,
      ),
    h4: ({ children }) =>
      createElement(
        'h4',
        { className: 'mt-6 text-lg font-semibold text-gray-900' },
        children,
      ),
    blockquote: ({ children }) =>
      createElement(
        'blockquote',
        {
          className:
            'my-6 border-l-4 border-red-600 pl-4 italic text-gray-700',
        },
        children,
      ),
    normal: ({ children }) =>
      createElement(
        'p',
        { className: 'mt-4 text-base leading-7 text-gray-700' },
        children,
      ),
  },
  marks: {
    link: ({ value, children }) => {
      const href = value?.href ?? '#';
      const isExternal = /^https?:\/\//.test(href);
      return createElement(
        'a',
        {
          href,
          className: 'text-red-600 underline hover:text-red-500',
          target: value?.blank || isExternal ? '_blank' : undefined,
          rel:
            value?.blank || isExternal ? 'noopener noreferrer' : undefined,
        },
        children,
      );
    },
    strong: ({ children }) =>
      createElement('strong', { className: 'font-semibold' }, children),
    em: ({ children }) => createElement('em', null, children),
  },
  list: {
    bullet: ({ children }) =>
      createElement('ul', { className: 'mt-4 list-disc pl-6 space-y-2' }, children),
    number: ({ children }) =>
      createElement(
        'ol',
        { className: 'mt-4 list-decimal pl-6 space-y-2' },
        children,
      ),
  },
  listItem: {
    bullet: ({ children }) =>
      createElement('li', { className: 'text-base leading-7 text-gray-700' }, children),
    number: ({ children }) =>
      createElement('li', { className: 'text-base leading-7 text-gray-700' }, children),
  },
};
