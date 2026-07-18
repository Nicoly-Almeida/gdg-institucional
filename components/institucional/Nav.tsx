import Image from 'next/image';
import logo from '@/public/assets/gdg-jp-logo-black.png';

const links = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#proximo', label: 'Próximo evento' },
  { href: '#eventos', label: 'Eventos' },
  { href: '#comunidade', label: 'Comunidade' }
];

export default function Nav() {
  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '15px 44px',
        background: 'rgba(245,244,240,.8)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(0,0,0,.07)'
      }}
    >
      <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <Image
          src={logo}
          alt="GDG João Pessoa"
          className="nav-logo"
          style={{ height: 34, width: 'auto', objectFit: 'contain' }}
          priority
        />
      </a>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 30,
          font: "600 13.5px/1 var(--font-figtree)",
          color: 'rgba(22,22,27,.7)'
        }}
      >
        {links.map((l) => (
          <a key={l.href} href={l.href}>
            {l.label}
          </a>
        ))}
        <a
          href="#comunidade"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            padding: '11px 22px',
            borderRadius: 999,
            background: '#16161b',
            color: '#fff',
            fontWeight: 700
          }}
        >
          Participar
        </a>
      </div>
    </nav>
  );
}
