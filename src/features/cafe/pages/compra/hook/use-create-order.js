import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createOrderService } from '../services.js/order-service';

export const useCreateOrder = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createOrderService,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['cart'],
      });
    },
  });
};
