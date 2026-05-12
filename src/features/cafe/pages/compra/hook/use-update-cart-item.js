import { useMutation } from '@tanstack/react-query';

import { useQueryClient } from '@tanstack/react-query';
import { updateCartItemService } from '../services.js/cart-service';

export const useUpdateCartItem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateCartItemService,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['cart'],
      });
    },
  });
};
