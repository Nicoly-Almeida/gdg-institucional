import Reveal from './Reveal';

export default function ComunidadeCTA() {
  return (
    <Reveal
      as="section"
      id="comunidade"
      className="container-pad"
      style={{
        maxWidth: 1180,
        margin: '0 auto',
        padding: '56px 44px 90px',
        scrollMarginTop: 80
      }}
    >
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: 26,
          background: '#fff',
          border: '1px solid rgba(0,0,0,.08)',
          padding: '64px 52px',
          textAlign: 'center'
        }}
      >
        {/* faixa superior de 5px com as 4 cores GDG */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 5,
            background: 'linear-gradient(90deg,#4285F4,#EA4335 33%,#FBBC04 66%,#34A853)'
          }}
        />
        <h2
          style={{
            margin: '0 auto',
            font: '800 44px/1.05 var(--font-sora)',
            letterSpacing: '-1.5px',
            maxWidth: 640
          }}
        >
          Faça parte da maior comunidade dev da Paraíba
        </h2>
        <p
          style={{
            margin: '20px auto 0',
            maxWidth: 520,
            fontSize: 16.5,
            lineHeight: 1.6,
            color: 'rgba(22,22,27,.64)'
          }}
        >
          Participe dos próximos encontros, receba novidades e conecte-se com quem constrói
          tecnologia por aqui. É de graça.
        </p>
        <div
          style={{
            display: 'flex',
            gap: 14,
            justifyContent: 'center',
            marginTop: 34,
            flexWrap: 'wrap'
          }}
        >
          <a
            href="#"
            style={{
              padding: '16px 32px',
              borderRadius: 999,
              background: '#16161b',
              color: '#fff',
              font: "700 15px var(--font-figtree)"
            }}
          >
            Entrar na comunidade
          </a>
          <a
            href="#"
            style={{
              padding: '16px 30px',
              borderRadius: 999,
              border: '1px solid rgba(0,0,0,.16)',
              font: "600 15px var(--font-figtree)"
            }}
          >
            Seguir no Instagram
          </a>
        </div>
      </div>
    </Reveal>
  );
}
