import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = "ChinaCarsMA — L'actualité des voitures chinoises au Maroc";
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #111827 0%, #1f2937 60%, #7f1d1d 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          padding: '72px 80px',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Red accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '6px',
            background: '#e11d48',
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              background: '#e11d48',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '28px',
            }}
          >
            🚗
          </div>
          <span style={{ fontSize: '36px', fontWeight: 800, color: '#ffffff' }}>
            ChinaCars<span style={{ color: '#f87171' }}>MA</span>
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: '52px',
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1.1,
            maxWidth: '900px',
          }}
        >
          L&apos;actualité des voitures chinoises au Maroc
        </div>

        {/* Subline */}
        <div
          style={{
            marginTop: '24px',
            fontSize: '26px',
            color: '#9ca3af',
            maxWidth: '800px',
          }}
        >
          Essais · Comparatifs · Prix · Guides d&apos;achat
        </div>

        {/* URL */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            right: '80px',
            fontSize: '20px',
            color: '#6b7280',
          }}
        >
          chinacarsma.com
        </div>
      </div>
    ),
    { ...size },
  );
}
