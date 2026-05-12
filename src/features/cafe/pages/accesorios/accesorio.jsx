import { useNavigate, useParams } from 'react-router';
import { useAccesorioById } from './hooks/use-accesorio-by-id';
import { useState } from 'react';
import { useAddCartItem } from '../compra/hook/use-add-cart-item';

export const AccesorioPage = () => {
  const { idAccesorio } = useParams();

  const navigate = useNavigate();

  const { data: producto, isLoading, error } = useAccesorioById(idAccesorio);

  const addCartItemMutation = useAddCartItem();

  const [cantidadProducto, setCantidadProducto] = useState(1);

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

  const variante = producto.variantes[0];

  const stockProducto = producto.variantes[0].stock;
  const precioProducto = producto.variantes[0].precio;

  const handleAddToCart = () => {
    addCartItemMutation.mutate(
      {
        variante_id: variante.variante_id,

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
          alt={`Fotografia del producto accesorio ${producto.nombre}`}
        />
      </div>

      <div className="flex-1 flex flex-col gap-6 font-grotesque-mono">
        <h1 className="text-4xl">{producto.nombre}</h1>
        <p className="text-sm">{producto.descripcion}</p>
        <ul className="text-sm flex flex-col gap-1.5">
          <li>
            <strong>Marca: </strong>
            {producto.marca}
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
