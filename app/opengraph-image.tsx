import { ImageResponse } from 'next/og';
import { SITE } from '@/src/lib/constants';

export const runtime = 'edge';
export const alt = `${SITE.name} — L'actualité des voitures chinoises`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #111827 0%, #1f2937 60%, #7f1d1d 100%)',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 24,
            padding: '0 80px',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              background: '#e11d48',
              color: 'white',
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: 4,
              textTransform: 'uppercase',
              padding: '8px 24px',
              borderRadius: 99,
            }}
          >
            vehiculeschinois.com
          </div>
          <div
            style={{
              color: 'white',
              fontSize: 56,
              fontWeight: 800,
              lineHeight: 1.1,
            }}
          >
            Véhicules Chinois
          </div>
          <div
            style={{
              color: '#9ca3af',
              fontSize: 28,
              fontWeight: 400,
            }}
          >
            BYD · MG · Zeekr · NIO · XPeng · Chery
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
