import { Link } from 'react-router';

export const ProductCard = ({ producto }) => {
  const precios = producto.variantes.map((variante) => variante.precio);

  const precioMinimo = Math.min(...precios);

  const precioMaximo = Math.max(...precios);

  return (
    <div className="max-w-90 flex flex-col border border-gray-400/45 overflow-hidden rounded-2xl gap-2 transition-transform duration-400 hover:-translate-y-4">
      <div className="group card-container">
        <img
          className="w-full h-full object-contain transition duration-700 group-hover:scale-110"
          src={producto.imagen_url}
        />
        <div className="card-image-hoverColor"></div>
        <p className="card-image-hoverParagraph">{producto.descripcion}</p>=
      </div>
      <div className="flex h-40 justify-between items-center px-5 py-3 gap-6 md:gap-10 lg:gap-13 font-grotesque-mono">
        <div className="h-50 flex flex-col justify-center items-start gap-1.5">
          <p className="uppercase text-xs">
            {producto.categoria_producto === 'cafe'
              ? `Filtro - ${producto.region}`
              : `Marca: ${producto.marca}`}
          </p>
          <h3
            className={`text-xs font-semibold ${producto.categoria_producto === 'cafe' ? '' : 'hidden'}`}
          >
            NOTAS: {producto.notas?.join(', ') || ''}
          </h3>
          <h3
            className={`text-sm font-semibold uppercase ${producto.categoria_producto !== 'cafe' ? '' : 'hidden'}`}
          >
            {producto.nombre}
          </h3>
          <p className="text-sm font-medium">
            {producto.categoria_producto === 'cafe'
              ? `S/${precioMinimo.toFixed(2)} - S/${precioMaximo.toFixed(2)}`
              : `S/${precioMinimo.toFixed(2)}`}
          </p>
        </div>
        <Link
          to={
            producto.categoria_producto === 'cafe'
              ? `/shop/nuestro-cafe/${producto.id}`
              : producto.categoria_producto === 'accesorio'
                ? `/shop/accesorios/${producto.id}`
                : `/shop/merchandising/${producto.id}`
          }
          className="text-xs text-center text-emerald-800 font-semibold border border-emerald-800 rounded-4xl px-4 py-2 transition duration-400 ease-out hover:bg-emerald-800 hover:text-white hover:scale-105"
        >
          {producto.categoria === 'cafe'
            ? 'Escoge una Opción'
            : 'Añadir al Carrito'}
        </Link>
      </div>
    </div>
  );
};
