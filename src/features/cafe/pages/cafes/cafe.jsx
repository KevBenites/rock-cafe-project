import { useNavigate, useParams } from 'react-router';
import { useCafeById } from './hooks/use-cafe-by-id';
import { useState } from 'react';
import { useAddCartItem } from '../compra/hook/use-add-cart-item';

export const CafePage = () => {
  const { idCafe } = useParams();
  const navigate = useNavigate();

  const { data: producto, isLoading, error } = useCafeById(idCafe);

  const [molienda, setMolienda] = useState('');
  const [peso, setPeso] = useState('');
  const [cantidadProducto, setCantidadProducto] = useState(1);

  const addCartItemMutation = useAddCartItem();

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

  const varianteInicial = producto?.variantes?.[0];

  const pesoSeleccionado = peso || varianteInicial?.peso || '';

  const moliendaSeleccionada = molienda || varianteInicial?.molienda || '';

  const pesos = [
    ...new Set(producto.variantes.map((variante) => variante.peso)),
  ];

  const moliendas = [
    ...new Set(producto.variantes.map((variante) => variante.molienda)),
  ];

  const existeCombinacion = (peso, molienda) => {
    return producto.variantes.some(
      (variante) => variante.peso === peso && variante.molienda === molienda,
    );
  };

  const varianteSeleccionada = producto.variantes.find(
    (variante) =>
      variante.peso === pesoSeleccionado &&
      variante.molienda === moliendaSeleccionada,
  );

  const stockProducto = varianteSeleccionada?.stock ?? 0;

  const precioProducto = varianteSeleccionada?.precio ?? 0;

  const handlePesoChange = (nuevoPeso) => {
    setPeso(nuevoPeso);

    const existe = existeCombinacion(nuevoPeso, moliendaSeleccionada);

    if (!existe) {
      const nuevaVariante = producto.variantes.find(
        (variante) => variante.peso === nuevoPeso,
      );

      setMolienda(nuevaVariante?.molienda ?? '');
    }
  };

  const handleMoliendaChange = (nuevaMolienda) => {
    setMolienda(nuevaMolienda);

    const existe = existeCombinacion(pesoSeleccionado, nuevaMolienda);

    if (!existe) {
      const nuevaVariante = producto.variantes.find(
        (variante) => variante.molienda === nuevaMolienda,
      );

      setPeso(nuevaVariante?.peso ?? '');
    }
  };

  const handleAddToCart = () => {
    if (!varianteSeleccionada) {
      return;
    }

    addCartItemMutation.mutate(
      {
        variante_id: varianteSeleccionada.id,

        cantidad: Number(cantidadProducto),
      },

      {
        onSuccess: () => {
          navigate('/carrito');
        },
      },
    );
  };

  return (
    <section className="w-[90%] mx-auto flex flex-col lg:flex-row pt-40 pb-5 gap-10">
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
            {moliendas.join(' o ')}
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
            {pesos.join(', ')}
          </li>
        </ul>

        <p id="precio" className="text-2xl font-bold">
          S/ {precioProducto.toFixed(2)}
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
          {stockProducto} {stockProducto > 1 ? 'unidades' : 'unidad'}
        </p>

        <div className="flex flex-col gap-2">
          <p className="text-sm uppercase font-bold">
            Elige la molienda y peso
          </p>
          <div className="text-sm flex items-center gap-1.5">
            <label>Molienda:</label>
            <select
              value={moliendaSeleccionada}
              onChange={(e) => handleMoliendaChange(e.target.value)}
              className="border p-2 rounded-lg"
            >
              {moliendas.map((molienda) => (
                <option key={molienda} value={molienda}>
                  {molienda}
                </option>
              ))}
            </select>
          </div>
          <div className="text-sm flex items-center gap-1.5">
            <label>Peso:</label>
            <select
              value={pesoSeleccionado}
              onChange={(e) => handlePesoChange(e.target.value)}
              className="border p-2 rounded-lg"
            >
              {pesos.map((peso) => (
                <option key={peso} value={peso}>
                  {peso}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex justify-start gap-6">
          <input
            className="border border-gray-700/60 w-12 text-center rounded-md"
            type="number"
            min="1"
            name="cantidadCompra"
            value={cantidadProducto}
            onChange={(e) => setCantidadProducto(e.target.value)}
          />
          <button
            onClick={handleAddToCart}
            disabled={addCartItemMutation.isPending}
            className="text-xs text-center bg-emerald-800 text-white font-semibold border-2 border-black rounded-4xl px-4 py-2 transition-transform hover:scale-110 cursor-pointer"
            id="btn-agregar"
          >
            {addCartItemMutation.isPending
              ? 'Agregando...'
              : 'Añadir al carrito'}
          </button>
        </div>
      </div>
    </section>
  );
};
