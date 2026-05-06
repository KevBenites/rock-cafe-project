import { Link } from 'react-router';

export const ProductCard = ({ producto }) => {
  return (
    <div className="flex flex-col border border-gray-400/45 overflow-hidden rounded-2xl gap-2 transition-transform duration-400 hover:-translate-y-4">
      <div className="group card-container">
        <img
          className="w-full h-full object-contain transition duration-700 group-hover:scale-110"
          src={producto.imagen}
        />
        <div className="card-image-hoverColor"></div>
        <p className="card-image-hoverParagraph">{producto.descripcion}</p>
      </div>
      <div className="flex h-40 justify-between items-center px-5 py-3 gap-6 md:gap-10 lg:gap-13 font-grotesque-mono">
        <div className="h-50 flex flex-col justify-center items-start gap-1.5">
          <p className="uppercase text-xs">
            {producto.categoria === 'cafe'
              ? `Filtro - ${producto.origen?.region}`
              : `Marca: ${producto.marca}`}
          </p>
          <h3 className="text-xs font-semibold ${producto.categoria === 'cafe' ? '' : 'hidden'}">
            NOTAS: {producto.notas?.join(', ') || ''}
          </h3>
          <h3 className="text-sm font-semibold uppercase">
            ${producto.nombre}
          </h3>
          <p className="text-sm font-medium">
            {producto.categoria === 'cafe'
              ? `$${producto.precio?.['250g']?.toFixed(2)}`
              : typeof producto.precio === 'number'
                ? `$${producto.precio.toFixed(2)}`
                : 'Sin Precio'}
          </p>
        </div>
        <Link
          to="/shop/nuestro-cafe/40065971-97a0-4b1a-b839-c28660b59c59"
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
