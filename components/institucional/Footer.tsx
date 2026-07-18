import Image from 'next/image';
import logo from '@/public/assets/gdg-jp-logo-black.png';

const navegar = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#proximo', label: 'Próximo evento' },
  { href: '#eventos', label: 'Eventos' },
  { href: '#comunidade', label: 'Comunidade' }
];

const social = [
  { href: '#', label: 'Instagram' },
  { href: '#', label: 'LinkedIn' },
  { href: '#', label: 'Meetup' },
  { href: '#', label: 'YouTube' }
];

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid rgba(0,0,0,.08)',
        padding: '52px 44px 40px',
        background: '#fbfaf7'
      }}
    >
      <div
        className="container-pad"
        style={{
          maxWidth: 1180,
          margin: '0 auto',
          padding: 0,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: 40,
          flexWrap: 'wrap'
        }}
      >
        <div style={{ maxWidth: 340 }}>
          <Image
            src={logo}
            alt="GDG João Pessoa"
            style={{ height: 38, width: 'auto', marginBottom: 18 }}
          />
          <p
            style={{
              fontSize: 14,
              lineHeight: 1.6,
              color: 'rgba(22,22,27,.55)',
              margin: 0
            }}
          >
            Google Developer Groups João Pessoa — comunidade independente de
            desenvolvedores. Comunidade independente, não afiliada à Google LLC; as opiniões
            aqui são da comunidade.
          </p>
        </div>

        <div style={{ display: 'flex', gap: 56, flexWrap: 'wrap' }}>
          <FooterCol title="Navegar" links={navegar} />
          <FooterCol title="Social" links={social} />
        </div>
      </div>

      <div
        style={{
          maxWidth: 1180,
          margin: '40px auto 0',
          paddingTop: 22,
          borderTop: '1px solid rgba(0,0,0,.07)',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 12,
          font: "500 12px var(--font-ibm)",
          color: 'rgba(22,22,27,.4)'
        }}
      >
        <span>© 2026 GDG João Pessoa</span>
        <span>Feito com ☕ em João Pessoa — PB</span>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <div
        style={{
          font: '700 12px/1 var(--font-ibm)',
          letterSpacing: '1px',
          textTransform: 'uppercase',
          color: 'rgba(22,22,27,.45)',
          marginBottom: 16
        }}
      >
        {title}
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 11,
          fontSize: 14,
          color: 'rgba(22,22,27,.72)'
        }}
      >
        {links.map((l) => (
          <a key={l.label} href={l.href}>
            {l.label}
          </a>
        ))}
      </div>
    </div>
  );
}
