import Header from '@/src/components/layout/Header';
import Footer from '@/src/components/layout/Footer';
import CookieConsent from '@/src/components/layout/CookieConsent';
import JsonLd from '@/src/components/seo/JsonLd';
import { organizationSchema, websiteSchema } from '@/src/lib/seo/schemas';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={[organizationSchema(), websiteSchema()]} id="global" />
      <div className="flex min-h-screen flex-col bg-white">
        <Header />
        <main id="main" className="grow">
          {children}
        </main>
        <Footer />
      </div>
      <CookieConsent />
    </>
  );
}
