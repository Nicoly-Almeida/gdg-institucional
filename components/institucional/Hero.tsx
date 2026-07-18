import Image from 'next/image';
import Reveal from './Reveal';
import logo from '@/public/assets/gdg-jp-logo-black.png';

export default function Hero() {
  return (
    <header style={{ position: 'relative', padding: '96px 0 84px', overflow: 'hidden' }}>
      {/* blobs decorativos à direita */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: -90,
          right: '8%',
          width: 360,
          height: 360,
          borderRadius: '50%',
          background: 'radial-gradient(circle,rgba(66,133,244,.16),transparent 62%)',
          animation: 'floaty 10s ease-in-out infinite'
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 120,
          right: '26%',
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle,rgba(52,168,83,.13),transparent 62%)',
          animation: 'floaty 12s ease-in-out infinite'
        }}
      />

      <Reveal
        className="hero-grid container-pad"
        style={{
          position: 'relative',
          maxWidth: 1180,
          margin: '0 auto',
          padding: '0 44px'
        }}
      >
        {/* Coluna esquerda: texto */}
        <div style={{ minWidth: 0 }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              padding: '8px 16px',
              border: '1px solid rgba(0,0,0,.12)',
              borderRadius: 999,
              font: '600 11.5px/1 var(--font-ibm)',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              color: 'rgba(22,22,27,.7)',
              marginBottom: 30
            }}
          >
            <span style={{ display: 'inline-flex', gap: 3 }}>
              <Dot color="#4285F4" />
              <Dot color="#EA4335" />
              <Dot color="#FBBC04" />
              <Dot color="#34A853" />
            </span>
            Comunidade oficial · João Pessoa — PB
          </div>

          <h1
            style={{
              margin: 0,
              font: '800 54px/1.02 var(--font-sora)',
              letterSpacing: '-2px'
            }}
          >
            Tecnologia que nasce <span style={{ color: '#4285F4' }}>na</span>{' '}
            <span style={{ color: '#EA4335' }}>comu</span>
            <span style={{ color: '#FBBC04' }}>ni</span>
            <span style={{ color: '#34A853' }}>dade.</span>
          </h1>

          <p
            style={{
              margin: '28px 0 0',
              maxWidth: 540,
              fontSize: 19,
              lineHeight: 1.6,
              color: 'rgba(22,22,27,.66)'
            }}
          >
            O Google Developer Groups João Pessoa reúne pessoas que aprendem, ensinam e
            constroem juntas. Meetups, workshops, study jams e o maior evento de tech da
            Paraíba — o DevFest.
          </p>

          <div style={{ display: 'flex', gap: 14, marginTop: 38, flexWrap: 'wrap' }}>
            <a
              href="#proximo"
              style={{
                padding: '16px 32px',
                borderRadius: 999,
                background: '#16161b',
                color: '#fff',
                font: "700 15px var(--font-figtree)"
              }}
            >
              Ver próximo evento →
            </a>
            <a
              href="#eventos"
              style={{
                padding: '16px 30px',
                borderRadius: 999,
                border: '1px solid rgba(0,0,0,.16)',
                font: "600 15px var(--font-figtree)"
              }}
            >
              Explorar edições
            </a>
          </div>
        </div>

        {/* Coluna direita: logo com aura animada */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px 28px'
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: '-30px -20px',
              borderRadius: 999,
              background:
                'conic-gradient(from 0deg,#4285F4,#EA4335,#FBBC04,#34A853,#4285F4)',
              filter: 'blur(52px)',
              opacity: 0.5,
              animation: 'spin 12s linear infinite,aurapulse 5s ease-in-out infinite'
            }}
          />
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: '10px 30px',
              borderRadius: 999,
              background:
                'conic-gradient(from 180deg,#34A853,#4285F4,#EA4335,#FBBC04,#34A853)',
              filter: 'blur(26px)',
              opacity: 0.4,
              animation: 'spin 8s linear infinite reverse'
            }}
          />
          <div style={{ position: 'relative', animation: 'floaty 6s ease-in-out infinite' }}>
            <Image
              src={logo}
              alt="GDG João Pessoa"
              priority
              style={{
                display: 'block',
                height: 92,
                width: 'auto',
                objectFit: 'contain',
                filter: 'drop-shadow(0 10px 30px rgba(0,0,0,.12))',
                animation: 'logopop 1s cubic-bezier(.2,.8,.2,1) both'
              }}
            />
          </div>
        </div>
      </Reveal>
    </header>
  );
}

function Dot({ color }: { color: string }) {
  return (
    <span
      style={{ width: 7, height: 7, borderRadius: '50%', background: color, display: 'block' }}
    />
  );
}
