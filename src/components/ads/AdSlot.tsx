'use client';

import { useEffect, useRef } from 'react';

type AdFormat = 'auto' | 'rectangle' | 'horizontal' | 'vertical';

interface AdSlotProps {
  slot: string;
  format?: AdFormat;
  responsive?: boolean;
  className?: string;
}

declare global {
  interface Window {
    adsbygoogle?: Array<Record<string, unknown>>;
  }
}

export default function AdSlot({
  slot,
  format = 'auto',
  responsive = true,
  className = '',
}: AdSlotProps) {
  const adRef = useRef<HTMLModElement>(null);
  const pushed = useRef(false);
  const pubId = process.env.NEXT_PUBLIC_ADSENSE_PUB_ID;

  useEffect(() => {
    if (!pubId || pushed.current) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushed.current = true;
    } catch {
      // AdSense not loaded yet
    }
  }, [pubId]);

  if (!pubId) return null;

  return (
    <div className={`ad-container my-8 flex justify-center ${className}`}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={pubId}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive}
      />
    </div>
  );
}
