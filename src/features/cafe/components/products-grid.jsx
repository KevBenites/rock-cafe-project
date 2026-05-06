import { productos } from '../mocks/productos';
import { ProductCard } from './product-card';

export function ProductsGrid({ productType }) {
  const productosCafe = productos.filter(
    (producto) => producto.categoria === productType,
  );

  return (
    <div className="w-[90%] mx-auto grid grid-cols-1 grid-rows-6 md:grid-cols-2 md:grid-rows-3 xl:grid-cols-3 xl:grid-rows-2 gap-x-10 gap-y-10 mt-20 mb-20">
      {productosCafe.map((producto) => (
        <ProductCard key={producto.id} producto={producto} />
      ))}
    </div>
  );
}
