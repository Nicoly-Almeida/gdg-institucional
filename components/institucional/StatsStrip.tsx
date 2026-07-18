import Reveal from './Reveal';
import { stats } from '@/lib/institucional-data';

export default function StatsStrip() {
  return (
    <Reveal
      as="section"
      className="container-pad"
      style={{ maxWidth: 1180, margin: '0 auto', padding: '0 44px 40px' }}
    >
      <div
        className="stats-grid"
        style={{
          gap: 1,
          background: 'rgba(0,0,0,.08)',
          border: '1px solid rgba(0,0,0,.08)',
          borderRadius: 20,
          overflow: 'hidden'
        }}
      >
        {stats.map((s) => (
          <div key={s.label} style={{ background: '#fbfaf7', padding: '30px 26px' }}>
            <div style={{ font: '800 40px/1 var(--font-sora)', color: s.color }}>
              {s.value}
            </div>
            <div
              style={{
                font: "600 13px var(--font-figtree)",
                color: 'rgba(22,22,27,.6)',
                marginTop: 10
              }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
