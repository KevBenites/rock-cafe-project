import { useMutation } from '@tanstack/react-query';
import { createOrderService } from '../services.js/order-service';

export const useCreateOrder = () => {
  return useMutation({
    mutationFn: createOrderService,
  });
};
