import { Pagination } from '../../../common/components/pagination/pagination';
import { useProducts } from '../hooks/use-products';
import { ProductCard } from './product-card';

export function ProductsGrid({ productType }) {
  const { data, isLoading, error } = useProducts(productType);

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

  const productos = data.data;
  const paginacion = data.pagination;

  return (
    <div className="w-[90%] mx-auto mt-14 mb-14">
      <div className="flex flex-wrap gap-12 justify-center">
        {productos.map((producto) => (
          <ProductCard key={producto.id} producto={producto} />
        ))}
      </div>
      <Pagination totalProducts={paginacion.total} />
    </div>
  );
}
