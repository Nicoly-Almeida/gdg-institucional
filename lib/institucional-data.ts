// ===================== Dados do site institucional GDG João Pessoa =====================

/**
 * Link do próximo evento (DevFest 2026).
 * O DevFest vive num repositório separado — quando hospedado, troque por
 * a URL pública do site do evento. Enquanto isso, aponta para um placeholder.
 */
export const DEVFEST_URL = 'https://devfest.gdgjoaopessoa.com.br';

/** Página da comunidade no GDG Community, com o histórico de edições. */
export const COMMUNITY_URL = 'https://gdg.community.dev/gdg-joao-pessoa/';

// ----- Stats strip -----
export type Stat = { value: string; label: string; color: string };

export const stats: Stat[] = [
  { value: '9', label: 'Anos de comunidade', color: '#4285F4' },
  { value: '60+', label: 'Eventos realizados', color: '#EA4335' },
  { value: '600', label: 'Membros na comunidade', color: '#FBBC04' },
  { value: '300+', label: 'Palestras & talks', color: '#34A853' }
];

// ----- Próximo evento (DevFest 2026) -----
export const proximoEvento = {
  href: DEVFEST_URL,
  lote: 'Lote 1 · a partir de R$ 99,99',
  titulo: ['A comunidade de tecnologia', 'e inovação se encontra aqui.'],
  descricao:
    'Dois dias de palestras, código ao vivo e networking. Quatro trilhas: IA, Web, Mobile e Cloud.',
  info: [
    { icon: '📅', tint: 'rgba(66,133,244,.16)', main: '20 & 21 Nov 2026', sub: 'Quinta e sexta' },
    { icon: '📍', tint: 'rgba(52,168,83,.16)', main: 'Uniesp', sub: 'João Pessoa · PB' },
    { icon: '🎟️', tint: 'rgba(251,188,4,.16)', main: '600 vagas', sub: '1ª edição' }
  ]
};

// ----- Eventos passados (vitrine) -----
export type EventType = 'DevFest' | 'I/O Extended' | 'Build with AI' | 'Study Jams';

export type PastEvent = {
  title: string;
  type: EventType;
  date: string;
  blurb: string;
  attendees: string;
  color: string; // cor do chip de tipo
  c1: string; // gradiente da capa placeholder
  c2: string;
};

export const events: PastEvent[] = [
  {
    title: 'DevFest 2025',
    type: 'DevFest',
    date: 'Nov 2025',
    blurb:
      'A 4ª edição reuniu a comunidade com trilhas de IA, Web e Mobile e recorde de público.',
    attendees: '900+ participantes',
    color: '#1a73e8',
    c1: '#3b6fd4',
    c2: '#1e8e3e'
  },
  {
    title: 'Build with AI 2025',
    type: 'Build with AI',
    date: 'Ago 2025',
    blurb: 'Workshop hands-on de IA generativa com Gemini e casos práticos de aplicação.',
    attendees: '180 participantes',
    color: '#d93025',
    c1: '#d93025',
    c2: '#f9ab00'
  },
  {
    title: 'Google I/O Extended 2025',
    type: 'I/O Extended',
    date: 'Mai 2025',
    blurb: 'As novidades do Google I/O revividas localmente, com watch party e debates.',
    attendees: '320 participantes',
    color: '#1e8e3e',
    c1: '#1e8e3e',
    c2: '#3b6fd4'
  },
  {
    title: 'DevFest 2024',
    type: 'DevFest',
    date: 'Nov 2024',
    blurb: 'Dois palcos, codelabs e a energia de sempre — nossa maior edição até então.',
    attendees: '750 participantes',
    color: '#1a73e8',
    c1: '#f9ab00',
    c2: '#d93025'
  },
  {
    title: 'Android Study Jams 2024',
    type: 'Study Jams',
    date: 'Set 2024',
    blurb: 'Trilha de estudos guiados de Android com Kotlin, do zero ao primeiro app.',
    attendees: '140 participantes',
    color: '#f9ab00',
    c1: '#1e8e3e',
    c2: '#f9ab00'
  },
  {
    title: 'Google I/O Extended 2024',
    type: 'I/O Extended',
    date: 'Mai 2024',
    blurb: 'Comunidade reunida para acompanhar e destrinchar os anúncios do I/O.',
    attendees: '260 participantes',
    color: '#1e8e3e',
    c1: '#3b6fd4',
    c2: '#d93025'
  }
];

// Filtros da vitrine — 'Todos' mostra todos; senão filtra por `type`.
export const eventFilters: Array<'Todos' | EventType> = [
  'Todos',
  'DevFest',
  'I/O Extended',
  'Build with AI',
  'Study Jams'
];

// ----- Formatos (seção Sobre) -----
export const formatos = [
  { emoji: '🎤', title: 'Meetups', desc: 'Encontros mensais com talks e trocas.' },
  { emoji: '🧑‍💻', title: 'Study Jams', desc: 'Estudo guiado em grupo, mão na massa.' },
  { emoji: '🤖', title: 'Build with AI', desc: 'Hands-on com IA generativa e Gemini.' },
  { emoji: '🎉', title: 'DevFest', desc: 'Nosso evento anual, o maior da PB.' }
];
