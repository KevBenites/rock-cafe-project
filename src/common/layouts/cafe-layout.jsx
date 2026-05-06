import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';
import { Outlet } from 'react-router';

export function CafeLayout() {
  return (
    <div className="max-w-dvw min-h-dvh font-grotesque-mono">
      <Header />
      <main className="min-h-dvh">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
