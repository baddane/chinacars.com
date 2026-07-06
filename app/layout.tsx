import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { SITE } from '@/src/lib/constants';
import { absoluteUrl } from '@/src/lib/seo/metadata';
import CookieConsent from '@/src/components/legal/CookieConsent';
import './globals.css';

const ADSENSE_CLIENT = 'ca-pub-1436679935240248';

// Google Consent Mode v2 : cookies publicitaires refusés par défaut, tant que
// l'utilisateur n'a pas donné son accord via le bandeau (conformité EEE/RGPD).
const CONSENT_DEFAULT_SCRIPT = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
var c = 'denied';
try { if (localStorage.getItem('cookie-consent') === 'granted') c = 'granted'; } catch (e) {}
gtag('consent', 'default', {
  ad_storage: c,
  ad_user_data: c,
  ad_personalization: c,
  analytics_storage: c,
  wait_for_update: 500
});
`;

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | L'actualité des voitures chinoises`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  referrer: 'origin-when-cross-origin',
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    apple: '/favicon.svg',
  },
  manifest: '/manifest.webmanifest',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: SITE.locale,
    siteName: SITE.name,
    title: `${SITE.name} | L'actualité des voitures chinoises`,
    description: SITE.description,
    url: SITE.url,
    images: [{ url: absoluteUrl(SITE.defaultOgImage), width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: SITE.twitterHandle,
    title: SITE.name,
    description: SITE.description,
    images: [absoluteUrl(SITE.defaultOgImage)],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  other: {
    'google-adsense-account': ADSENSE_CLIENT,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#e11d48',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={SITE.defaultLanguage} className={inter.variable}>
      <body>
        <Script
          id="consent-default"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: CONSENT_DEFAULT_SCRIPT }}
        />
        {children}
        <CookieConsent />
        <Script
          id="google-adsense"
          async
          strategy="afterInteractive"
          crossOrigin="anonymous"
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
        />
      </body>
    </html>
  );
}
