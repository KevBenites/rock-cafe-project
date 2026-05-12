import { ProductsGrid } from '../../components/products-grid';
import { ProductsSection } from '../../components/products-section';

export const MerchandisingsPage = () => {
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
    <section id="productos-section" className="pt-36 pb-20">
      <ProductsSection
        title="Nuestro Merchandising"
        buttonItems={buttonItems}
      />
      <ProductsGrid productType="merchandising" />
    </section>
  );
};
