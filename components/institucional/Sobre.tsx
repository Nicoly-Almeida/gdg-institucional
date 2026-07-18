import Reveal from './Reveal';
import { formatos } from '@/lib/institucional-data';

export default function Sobre() {
  return (
    <Reveal
      as="section"
      id="sobre"
      className="container-pad"
      style={{
        maxWidth: 1180,
        margin: '0 auto',
        padding: '70px 44px 40px',
        scrollMarginTop: 80
      }}
    >
      <div className="sobre-grid">
        {/* Esquerda: texto */}
        <div>
          <div
            style={{
              font: '600 12px/1 var(--font-ibm)',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: '#1a73e8',
              marginBottom: 14
            }}
          >
            // Sobre a comunidade
          </div>
          <h2
            style={{
              margin: 0,
              font: '800 42px/1.06 var(--font-sora)',
              letterSpacing: '-1.5px'
            }}
          >
            Aprender fazendo,
            <br />
            junto com gente real.
          </h2>
          <p
            style={{
              margin: '24px 0 0',
              fontSize: 16.5,
              lineHeight: 1.7,
              color: 'rgba(22,22,27,.66)'
            }}
          >
            Somos parte da rede global de Google Developer Groups — comunidades
            independentes que conectam pessoas interessadas em tecnologias Google e
            desenvolvimento de software. Em João Pessoa, promovemos encontros gratuitos,
            abertos e para todos os níveis.
          </p>
          <p
            style={{
              margin: '16px 0 0',
              fontSize: 16.5,
              lineHeight: 1.7,
              color: 'rgba(22,22,27,.66)'
            }}
          >
            Do estudante curioso ao profissional sênior, aqui todo mundo tem espaço pra
            aprender, palestrar e crescer.
          </p>
        </div>

        {/* Direita: grid 2×2 de formatos */}
        <div className="formatos-grid">
          {formatos.map((f) => (
            <div
              key={f.title}
              style={{
                padding: '26px 22px',
                background: '#fff',
                border: '1px solid rgba(0,0,0,.08)',
                borderRadius: 18
              }}
            >
              <div style={{ fontSize: 26 }}>{f.emoji}</div>
              <div style={{ font: "700 16px var(--font-sora)", marginTop: 14 }}>
                {f.title}
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: 'rgba(22,22,27,.6)',
                  marginTop: 6,
                  lineHeight: 1.5
                }}
              >
                {f.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
