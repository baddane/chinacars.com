import { Helmet } from 'react-helmet-async';

interface JsonLdProps {
  /** Schema.org object or array of objects. */
  data: Record<string, unknown> | Array<Record<string, unknown>>;
  /** Optional id to make duplicate insertions easier to debug. */
  id?: string;
}

/**
 * Injects one or more JSON-LD blocks in <head> using react-helmet-async.
 * Renders nothing in the DOM body.
 */
export default function JsonLd({ data, id }: JsonLdProps) {
  const payload = Array.isArray(data) ? data : [data];
  return (
    <Helmet>
      {payload.map((item, index) => (
        <script
          key={`${id ?? 'jsonld'}-${index}`}
          type="application/ld+json"
          // JSON.stringify safely escapes </script> via replace below
        >
          {JSON.stringify(item).replace(/</g, '\\u003c')}
        </script>
      ))}
    </Helmet>
  );
}
