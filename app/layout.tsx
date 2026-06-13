import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { SITE } from '@/src/lib/constants';
import { absoluteUrl } from '@/src/lib/seo/metadata';
import Analytics from '@/src/components/ads/Analytics';
import AdSenseScript from '@/src/components/ads/AdSenseScript';
import CookieConsent from '@/src/components/ads/CookieConsent';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | L'actualité des voitures chinoises au Maroc`,
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
    title: `${SITE.name} | L'actualité des voitures chinoises au Maroc`,
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
        <Analytics />
        <AdSenseScript />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
