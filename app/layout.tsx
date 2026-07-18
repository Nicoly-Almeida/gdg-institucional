import type { Metadata } from 'next';
import { Sora, Figtree, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-sora',
  display: 'swap'
});

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-figtree',
  display: 'swap'
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-ibm',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'GDG João Pessoa — Tecnologia que nasce na comunidade',
  description:
    'O Google Developer Groups João Pessoa reúne pessoas que aprendem, ensinam e constroem juntas. Meetups, workshops, study jams e o DevFest — o maior evento de tech da Paraíba.',
  metadataBase: new URL('https://gdgjoaopessoa.com.br'),
  openGraph: {
    title: 'GDG João Pessoa — Tecnologia que nasce na comunidade',
    description:
      'Comunidade oficial Google Developer Groups em João Pessoa — PB. Meetups, study jams, Build with AI e o DevFest.',
    locale: 'pt_BR',
    type: 'website'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${sora.variable} ${figtree.variable} ${ibmPlexMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
