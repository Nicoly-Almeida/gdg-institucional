'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { events, eventFilters, COMMUNITY_URL } from '@/lib/institucional-data';

export default function Eventos() {
  const [filter, setFilter] = useState<(typeof eventFilters)[number]>('Todos');

  const visible = events.filter((e) => filter === 'Todos' || e.type === filter);

  return (
    <motion.section
      id="eventos"
      className="container-pad"
      style={{
        maxWidth: 1180,
        margin: '0 auto',
        padding: '56px 44px 40px',
        scrollMarginTop: 80
      }}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {/* Cabeçalho + filtros */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 16,
          marginBottom: 32
        }}
      >
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
            // Nossas edições
          </div>
          <h2
            style={{
              margin: 0,
              font: '800 44px/1.05 var(--font-sora)',
              letterSpacing: '-1.5px'
            }}
          >
            Eventos que já aconteceram
          </h2>
        </div>

        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {eventFilters.map((t) => {
            const active = filter === t;
            return (
              <button
                key={t}
                onClick={() => setFilter(t)}
                style={{
                  padding: '9px 16px',
                  borderRadius: 999,
                  font: "700 12.5px var(--font-figtree)",
                  cursor: 'pointer',
                  transition: 'all .18s',
                  background: active ? '#16161b' : 'transparent',
                  color: active ? '#fff' : 'rgba(22,22,27,.66)',
                  border: active ? '1px solid #16161b' : '1px solid rgba(0,0,0,.14)'
                }}
              >
                {t}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid de cards */}
      <div className="eventos-grid">
        {visible.map((ev) => (
          <article
            key={ev.title}
            style={{
              background: '#fff',
              border: '1px solid rgba(0,0,0,.08)',
              borderRadius: 20,
              overflow: 'hidden',
              boxShadow: '0 1px 2px rgba(0,0,0,.04)'
            }}
          >
            {/* Capa placeholder (gradiente listrado) */}
            <div
              style={{
                position: 'relative',
                aspectRatio: '16 / 10',
                background: `linear-gradient(135deg,${ev.c1},${ev.c2})`,
                display: 'flex',
                alignItems: 'flex-end',
                padding: 16
              }}
            >
              <span
                style={{
                  position: 'absolute',
                  top: 14,
                  left: 14,
                  padding: '6px 12px',
                  borderRadius: 999,
                  background: 'rgba(255,255,255,.9)',
                  font: '700 11px/1 var(--font-ibm)',
                  letterSpacing: '.5px',
                  color: ev.color
                }}
              >
                {ev.type}
              </span>
              <span
                style={{
                  font: "500 11px var(--font-ibm)",
                  color: 'rgba(255,255,255,.85)'
                }}
              >
                {`[ foto · ${ev.title} ]`}
              </span>
            </div>

            {/* Corpo */}
            <div style={{ padding: '22px 22px 24px' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 10
                }}
              >
                <div style={{ font: '700 20px/1.15 var(--font-sora)' }}>{ev.title}</div>
                <span
                  style={{
                    font: "600 12px var(--font-ibm)",
                    color: 'rgba(22,22,27,.45)',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {ev.date}
                </span>
              </div>
              <p
                style={{
                  margin: '12px 0 0',
                  fontSize: 14,
                  lineHeight: 1.55,
                  color: 'rgba(22,22,27,.6)'
                }}
              >
                {ev.blurb}
              </p>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: 20,
                  paddingTop: 16,
                  borderTop: '1px solid rgba(0,0,0,.07)'
                }}
              >
                <span
                  style={{
                    font: "600 12.5px var(--font-figtree)",
                    color: 'rgba(22,22,27,.55)'
                  }}
                >
                  {ev.attendees}
                </span>
                <span
                  style={{ font: "700 13px var(--font-figtree)", color: '#1a73e8' }}
                >
                  Retrospectiva →
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Chamada para o histórico completo no GDG Community (Bevy) */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 14,
          marginTop: 44,
          textAlign: 'center'
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: 15,
            lineHeight: 1.55,
            color: 'rgba(22,22,27,.6)',
            maxWidth: 460
          }}
        >
          Estas são só algumas edições. Veja o histórico completo, fotos e os
          próximos encontros no nosso GDG Community.
        </p>
        <a
          href={COMMUNITY_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '15px 30px',
            borderRadius: 999,
            background: '#16161b',
            color: '#fff',
            font: "700 14.5px var(--font-figtree)"
          }}
        >
          Ver todas as edições no GDG Community →
        </a>
      </div>
    </motion.section>
  );
}
