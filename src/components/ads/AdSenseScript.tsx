import Script from 'next/script';

export default function AdSenseScript() {
  const pubId = process.env.NEXT_PUBLIC_ADSENSE_PUB_ID;
  if (!pubId) return null;

  return (
    <Script
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${pubId}`}
      strategy="afterInteractive"
      crossOrigin="anonymous"
    />
  );
}
