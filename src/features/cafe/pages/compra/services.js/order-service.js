import { apiCafe } from '../../../../../common/api/api-cafe';

export const createOrderService = async (payload) => {
  const { data } = await apiCafe.post('/orders', payload);

  return data;
};
