import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        // base — tema light
        bg: '#f5f4f0',
        surface: '#ffffff',
        'surface-2': '#fbfaf7',
        text: '#16161b',
        'text-muted': 'rgba(22,22,27,0.66)',
        'text-dim': 'rgba(22,22,27,0.45)',
        hairline: 'rgba(0,0,0,0.08)',
        link: '#1a73e8',
        // marca GDG / Google
        gblue: '#4285F4',
        gred: '#EA4335',
        gyellow: '#FBBC04',
        ggreen: '#34A853',
        // variantes "escuras" p/ chips sobre fundo claro
        'gblue-d': '#1a73e8',
        'ggreen-d': '#1e8e3e',
        'gyellow-d': '#f9ab00',
        'gred-d': '#d93025'
      },
      fontFamily: {
        sora: ['var(--font-sora)', 'sans-serif'],
        figtree: ['var(--font-figtree)', 'sans-serif'],
        ibm: ['var(--font-ibm)', 'monospace']
      },
      boxShadow: {
        feature: '0 30px 70px -28px rgba(11,11,22,0.55)'
      }
    }
  },
  plugins: []
};

export default config;
