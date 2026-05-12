import { useMutation } from '@tanstack/react-query';

import { useQueryClient } from '@tanstack/react-query';
import { removeCartItemService } from '../services.js/cart-service';

export const useRemoveCartItem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: removeCartItemService,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['cart'],
      });
    },
  });
};
