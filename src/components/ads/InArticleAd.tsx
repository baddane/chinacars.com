'use client';

import AdSlot from './AdSlot';

interface InArticleAdProps {
  slot?: string;
  className?: string;
}

export default function InArticleAd({ slot, className = '' }: InArticleAdProps) {
  const adSlot = slot || process.env.NEXT_PUBLIC_ADSENSE_ARTICLE_SLOT || '';
  if (!adSlot) return null;

  return (
    <div className={`not-prose border-y border-gray-200 py-4 my-10 ${className}`}>
      <p className="text-[10px] text-gray-400 uppercase tracking-widest text-center mb-2">
        Publicité
      </p>
      <AdSlot slot={adSlot} format="rectangle" />
    </div>
  );
}
