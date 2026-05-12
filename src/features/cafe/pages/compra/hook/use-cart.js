import { useQuery } from '@tanstack/react-query';
import { getCartService } from '../services.js/cart-service';

export const useCart = () => {
  return useQuery({
    queryKey: ['cart'],
    queryFn: getCartService,
  });
};
