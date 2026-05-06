import { ProductsGrid } from '../../components/products-grid';
import { ProductsSection } from '../../components/products-section';

export const AccesoriosPage = () => {
  const buttonItems = [
    {
      btnId: 'btn-todos',
      btnContent: 'Todos',
    },
    {
      btnId: 'btn-cafes',
      btnContent: 'Cafés',
    },
    {
      btnId: 'btn-merchandising',
      btnContent: 'Merchandising',
    },
    {
      btnId: 'btn-accesorios',
      btnContent: 'Accesorios',
    },
  ];

  return (
    <section id="productos-section" className="pt-30 pb-20">
      <ProductsSection title="Nuestros Accesorios" buttonItems={buttonItems} />
      <ProductsGrid productType="accesorios" />
    </section>
  );
};
