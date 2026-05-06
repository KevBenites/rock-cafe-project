import { useParams } from 'react-router';
import { useCafe } from './hooks/useCafe';
import { useState } from 'react';

export const CafePage = () => {
  const { idCafe } = useParams();
  const { data: producto, isLoading, error } = useCafe(idCafe);

  const [molienda, setMolienda] = useState('Grano');
  const [peso, setPeso] = useState('250g');
  const [cantidadProducto, setCantidadProducto] = useState(1);
  console.log(molienda);

  console.log(producto);

  if (isLoading) {
    return (
      <div className="w-full h-[70vh] flex items-center justify-center">
        <span className="text-3xl font-bold">Cargando ☕...</span>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const varianteSeleccionada = producto.variantes.find(
    (variante) => variante.peso === peso,
  );

  const stockProducto = varianteSeleccionada.stock ?? 0;
  const precioProducto = varianteSeleccionada.precio ?? 0;

  return (
    <section className="w-[90%] mx-auto flex flex-col lg:flex-row mt-30 mb-15 gap-10">
      <div className="flex-1 flex justify-center items-center">
        <img
          className="h-auto lg:h-170"
          src={`${producto.imagen_url}`}
          alt={`Fotografia del empaque del cafe ${producto.nombre}`}
        />
      </div>

      <div className="flex-1 flex flex-col gap-6 font-grotesque-mono">
        <h1 className="text-4xl">
          {producto.nombre} - {producto.detalle.proceso}
        </h1>
        <p className="text-sm">{producto.descripcion}</p>
        <ul className="text-sm flex flex-col gap-1.5">
          <li>
            <strong>Origen: </strong>
            {producto.detalle.finca} - {producto.detalle.region} -{' '}
            {producto.detalle.pais}
          </li>

          <li>
            <strong>Altitud: </strong>
            {producto.detalle.altitud}
          </li>

          <li>
            <strong>Notas: </strong>
            {producto.notas
              .map(
                (nota) =>
                  nota.nombre.charAt(0).toUpperCase() + nota.nombre.slice(1),
              )
              .join(', ')}
          </li>

          <li>
            <strong>Presentación: </strong>
            {producto.variantes
              .map(
                (tipo) =>
                  tipo.molienda.charAt(0).toUpperCase() +
                  tipo.molienda.slice(1),
              )
              .join(' o ')}
          </li>

          <li>
            <strong>Tueste: </strong>
            {producto.detalle.tueste.charAt(0).toUpperCase() +
              producto.detalle.tueste.slice(1)}
          </li>

          <li>
            <strong>Puntaje: </strong>
            {producto.detalle.puntaje_cata} puntos
          </li>
          <li>
            <strong>Peso: </strong>
            {producto.variantes
              .map(
                (tipo) =>
                  tipo.peso.charAt(0).toUpperCase() + tipo.peso.slice(1),
              )
              .join(', ')}
          </li>
        </ul>

        <p id="precio" className="text-2xl font-bold">
          ${precioProducto.toFixed(2)}
        </p>

        <p
          className={`text-lg font-bold ${
            stockProducto === 0
              ? 'text-red-800'
              : stockProducto <= 5
                ? 'text-red-600/70'
                : stockProducto <= 10
                  ? 'text-orange-600/70'
                  : 'text-black'
          }`}
        >
          {stockProducto} stock
        </p>

        <div className="flex flex-col gap-2">
          <p className="text-sm uppercase font-bold">
            Elige la molienda y peso
          </p>
          <div className="text-sm flex items-center gap-1.5">
            <label>Molienda:</label>
            <select
              className="border border-black/80 rounded-lg px-1 py-0.5"
              value={molienda}
              name="moliendaCompra"
              id="moliendaCompra"
              onChange={(e) => setMolienda(e.target.value)}
            >
              {producto.variantes.map((tipo) => (
                <option key={tipo.molienda} value={tipo.molienda}>
                  {tipo.molienda}
                </option>
              ))}
            </select>
          </div>
          <div className="text-sm flex items-center gap-1.5">
            <label>Peso:</label>
            <select
              className="border border-black/80 rounded-lg px-1 py-0.5"
              value={peso}
              name="pesoCompra"
              id="pesoCompra"
              onChange={(e) => setPeso(e.target.value)}
            >
              {producto.variantes.map((tipo) => (
                <option key={tipo.peso} value={tipo.peso}>
                  {tipo.peso}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex justify-start gap-6">
          <input
            className="border border-gray-700/60 w-12 text-center rounded-md"
            type="number"
            defaultValue="1"
            min="1"
            name="cantidadCompra"
            value={cantidadProducto}
            onChange={(e) => setCantidadProducto(e.target.value)}
          />
          <a
            className="text-xs text-center bg-emerald-800 text-white font-semibold border-2 border-black rounded-4xl px-4 py-2 transition-transform hover:scale-110 cursor-pointer"
            id="btn-agregar"
          >
            Añadir al carrito
          </a>
        </div>
      </div>
    </section>
  );
};
