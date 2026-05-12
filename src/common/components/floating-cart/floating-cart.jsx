import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router';
import { useCart } from '../../../features/cafe/pages/compra/hook/use-cart';

export const FloatingCartButton = () => {
  const { data: cart } = useCart();

  const totalItems =
    cart?.items?.reduce((acc, item) => acc + item.cantidad, 0) || 0;

  return (
    <Link
      to="/carrito"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-15 h-15 rounded-full bg-white shadow-[0_8px_30px_rgba(0,0,0,0.15)] border border-gray-200 hover:scale-105 transition-transform
      "
    >
      <ShoppingCart className="text-black" size={34} strokeWidth={2.2} />

      {totalItems > 0 && (
        <span className="absolute -bottom-1 -left-1 min-w-6 h-6 px-1 flex items-center justify-center rounded-full bg-amber-400  text-black  text-sm  font-bold  shadow-md">
          {totalItems}
        </span>
      )}
    </Link>
  );
};
