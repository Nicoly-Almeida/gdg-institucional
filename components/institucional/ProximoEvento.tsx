import Image from 'next/image';
import Reveal from './Reveal';
import { proximoEvento } from '@/lib/institucional-data';
import devfestLogo from '@/public/assets/devfest-2026-w3.png';

export default function ProximoEvento() {
  const isExternal = /^https?:\/\//.test(proximoEvento.href);

  return (
    <Reveal
      as="section"
      id="proximo"
      className="container-pad"
      style={{
        maxWidth: 1180,
        margin: '0 auto',
        padding: '56px 44px 40px',
        scrollMarginTop: 80
      }}
    >
      {/* Cabeçalho */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
        <span
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            padding: '7px 14px',
            borderRadius: 999,
            background: 'rgba(52,168,83,.14)',
            color: '#1e8e3e',
            font: '700 11px/1 var(--font-ibm)',
            letterSpacing: '1px',
            textTransform: 'uppercase'
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: '50%',
              background: '#34A853',
              boxShadow: '0 0 8px #34A853'
            }}
          />
          Próximo evento
        </span>
        <span
          style={{
            font: "600 13px var(--font-ibm)",
            color: 'rgba(22,22,27,.45)'
          }}
        >
          // inscrições abertas
        </span>
      </div>

      {/* Card escuro — link para a landing do DevFest (repo/host separado) */}
      <a
        href={proximoEvento.href}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        style={{
          display: 'block',
          position: 'relative',
          overflow: 'hidden',
          borderRadius: 26,
          background: 'radial-gradient(120% 130% at 15% 0%,#171728 0%,#0b0b16 60%)',
          boxShadow: '0 30px 70px -28px rgba(11,11,22,.55)'
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: -70,
            left: '6%',
            width: 300,
            height: 300,
            borderRadius: '50%',
            background: 'radial-gradient(circle,rgba(66,133,244,.34),transparent 62%)'
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            bottom: -90,
            right: '14%',
            width: 340,
            height: 340,
            borderRadius: '50%',
            background: 'radial-gradient(circle,rgba(52,168,83,.26),transparent 62%)'
          }}
        />

        <div className="proximo-grid" style={{ position: 'relative' }}>
          {/* Esquerda */}
          <div style={{ padding: '56px 52px' }}>
            <Image
              src={devfestLogo}
              alt="DevFest 2026"
              style={{ height: 60, width: 'auto', objectFit: 'contain', marginBottom: 8 }}
            />
            <div
              style={{
                font: '700 15px/1 var(--font-sora)',
                letterSpacing: '7px',
                textTransform: 'uppercase',
                paddingLeft: 7,
                marginBottom: 26,
                background: 'linear-gradient(90deg,#4285F4,#34A853 40%,#FBBC04 70%,#EA4335)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}
            >
              João Pessoa
            </div>
            <h2
              style={{
                margin: 0,
                font: '800 40px/1.05 var(--font-sora)',
                letterSpacing: '-1.5px',
                color: '#f2f2f7'
              }}
            >
              {proximoEvento.titulo[0]}
              <br />
              {proximoEvento.titulo[1]}
            </h2>
            <p
              style={{
                margin: '20px 0 0',
                maxWidth: 440,
                fontSize: 16,
                lineHeight: 1.6,
                color: 'rgba(242,242,247,.62)'
              }}
            >
              {proximoEvento.descricao}
            </p>
            <div
              style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 34, flexWrap: 'wrap' }}
            >
              <span
                style={{
                  padding: '15px 30px',
                  borderRadius: 999,
                  background: 'linear-gradient(90deg,#4285F4,#34A853)',
                  color: '#fff',
                  font: "700 15px var(--font-figtree)"
                }}
              >
                Ver a página do evento →
              </span>
              <span
                style={{
                  font: "600 13px var(--font-ibm)",
                  color: 'rgba(242,242,247,.6)'
                }}
              >
                {proximoEvento.lote}
              </span>
            </div>
          </div>

          {/* Direita — info */}
          <div
            className="proximo-info"
            style={{
              position: 'relative',
              borderLeft: '1px solid rgba(255,255,255,.1)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: 22,
              padding: '56px 48px'
            }}
          >
            {proximoEvento.info.map((row) => (
              <div key={row.main} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    background: row.tint,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 24,
                    flexShrink: 0
                  }}
                >
                  {row.icon}
                </div>
                <div>
                  <div style={{ font: '800 22px/1 var(--font-sora)', color: '#f2f2f7' }}>
                    {row.main}
                  </div>
                  <div
                    style={{
                      font: "600 12px var(--font-ibm)",
                      color: 'rgba(242,242,247,.5)',
                      marginTop: 6
                    }}
                  >
                    {row.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </a>
    </Reveal>
  );
}
