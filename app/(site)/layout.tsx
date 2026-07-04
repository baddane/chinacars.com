import Header from '@/src/components/layout/Header';
import Footer from '@/src/components/layout/Footer';
import JsonLd from '@/src/components/seo/JsonLd';
import { organizationSchema, websiteSchema } from '@/src/lib/seo/schemas';
import { buildSearchIndex } from '@/src/lib/search';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const searchIndex = buildSearchIndex();
  return (
    <>
      <JsonLd data={[organizationSchema(), websiteSchema()]} id="global" />
      <div className="flex min-h-screen flex-col bg-white">
        <Header searchIndex={searchIndex} />
        <main id="main" className="grow">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
