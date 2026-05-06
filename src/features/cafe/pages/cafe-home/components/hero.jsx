import { Link } from 'react-router';

export function Hero({ title, subtitle }) {
  return (
    <section className="relative bg-[url(/img/Hero-coffee.jpg)] min-h-200 bg-cover">
      <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>
      <div className="relative w-[50%] mx-auto flex flex-col gap-4 justify-center items-center py-70 text-white z-1">
        <h3 className="text-sm tracking-[4px] text-center uppercase animate-fadeUp">
          {subtitle}
        </h3>
        <h1 className="text-7xl font-medium text-center font-grotesque animate-fadeUp [--duration:2s]">
          {title}
        </h1>
        <p className="text-xl text-center animate-fadeUp [--duration:3s] mb-3">
          Descubre el mundo del café de especialidad. Granos seleccionados,
          tostados con precisión, entregados en tu puerta.
        </p>
        <Link
          className="bg-amber-400 rounded-4xl px-6 py-3 uppercase text-sm text-black font-semibold animate-fadeUp [--duration:4s] cursor-pointer transition-all duration-500 transform hover:text-white hover:-translate-y-2 hover:bg-amber-800 hover:scale-110"
          to="/nuestro-cafe"
        >
          Ver Productos
        </Link>
      </div>
    </section>
  );
}
