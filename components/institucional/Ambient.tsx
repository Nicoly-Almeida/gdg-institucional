import type { CSSProperties } from 'react';

/**
 * Camada ambiente "esfumaçada" (assinatura visual): blobs coloridos GDG
 * bem desfocados atrás de todo o conteúdo. Camada absoluta com z-index -1,
 * dentro do container relativo da página. Não interativa.
 */
const blobs: CSSProperties[] = [
  {
    top: 640,
    left: -160,
    width: 540,
    height: 540,
    background: 'radial-gradient(circle,rgba(66,133,244,.30),transparent 62%)',
    filter: 'blur(44px)',
    animation: 'floaty 13s ease-in-out infinite'
  },
  {
    top: 1120,
    right: -150,
    width: 500,
    height: 500,
    background: 'radial-gradient(circle,rgba(234,67,53,.24),transparent 62%)',
    filter: 'blur(48px)',
    animation: 'floaty 16s ease-in-out infinite'
  },
  {
    top: 1780,
    left: '4%',
    width: 580,
    height: 580,
    background: 'radial-gradient(circle,rgba(251,188,4,.22),transparent 62%)',
    filter: 'blur(50px)',
    animation: 'aurapulse 9s ease-in-out infinite'
  },
  {
    top: 2420,
    right: '2%',
    width: 540,
    height: 540,
    background: 'radial-gradient(circle,rgba(52,168,83,.26),transparent 62%)',
    filter: 'blur(46px)',
    animation: 'floaty 15s ease-in-out infinite'
  },
  {
    top: 3080,
    left: -130,
    width: 520,
    height: 520,
    background: 'radial-gradient(circle,rgba(66,133,244,.22),transparent 62%)',
    filter: 'blur(48px)',
    animation: 'aurapulse 11s ease-in-out infinite'
  },
  {
    top: 3620,
    right: '8%',
    width: 480,
    height: 480,
    background: 'radial-gradient(circle,rgba(234,67,53,.2),transparent 62%)',
    filter: 'blur(50px)',
    animation: 'floaty 14s ease-in-out infinite'
  }
];

export default function Ambient() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: -1,
        overflow: 'hidden',
        pointerEvents: 'none'
      }}
    >
      {blobs.map((b, i) => (
        <div key={i} style={{ position: 'absolute', borderRadius: '50%', ...b }} />
      ))}
    </div>
  );
}
