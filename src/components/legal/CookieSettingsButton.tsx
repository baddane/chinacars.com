'use client';

import { OPEN_EVENT } from '@/src/components/legal/CookieConsent';

export default function CookieSettingsButton({ className }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))}
      className={className}
    >
      Gérer les cookies
    </button>
  );
}
