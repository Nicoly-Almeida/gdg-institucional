import Ambient from '@/components/institucional/Ambient';
import Nav from '@/components/institucional/Nav';
import Hero from '@/components/institucional/Hero';
import StatsStrip from '@/components/institucional/StatsStrip';
import ProximoEvento from '@/components/institucional/ProximoEvento';
import Eventos from '@/components/institucional/Eventos';
import Sobre from '@/components/institucional/Sobre';
import ComunidadeCTA from '@/components/institucional/ComunidadeCTA';
import Footer from '@/components/institucional/Footer';

export default function Home() {
  return (
    <div id="top" style={{ overflowX: 'hidden', position: 'relative' }}>
      <Ambient />
      <Nav />
      <Hero />
      <StatsStrip />
      <ProximoEvento />
      <Eventos />
      <Sobre />
      <ComunidadeCTA />
      <Footer />
    </div>
  );
}
