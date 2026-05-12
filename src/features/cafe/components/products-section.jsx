import ProductsFilter from './products-filter';

export function ProductsSection({ title }) {
  return (
    <div className="mb-8">
      <div className="w-[60%] mx-auto flex flex-col items-center gap-1.5 mb-6">
        <h2 className="font-grotesque-mono text-5xl font-bold text-center">
          {title}
        </h2>
      </div>
      <ProductsFilter />
    </div>
  );
}
