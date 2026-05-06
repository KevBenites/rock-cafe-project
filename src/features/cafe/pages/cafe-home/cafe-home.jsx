import { Hero } from './components/hero';
import { History } from './components/history';

export function CafeHome() {
  return (
    <>
      <Hero title="Rock Café" subtitle="Cafeteria de Especialidad" />
      <History />
    </>
  );
}
