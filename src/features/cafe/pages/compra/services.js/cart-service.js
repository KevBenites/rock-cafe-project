import { apiCafe } from '../../../../../common/api/api-cafe';

export const getCartService = async () => {
  const { data } = await apiCafe.get('/cart');

  return data;
};

export const removeCartItemService = async (itemId) => {
  const { data } = await apiCafe.delete(`/cart/items/${itemId}`);

  return data;
};

export const updateCartItemService = async ({ itemId, cantidad }) => {
  const { data } = await apiCafe.put(`/cart/items/${itemId}`, {
    cantidad,
  });

  return data;
};

export const addCartItemService = async (payload) => {
  const { data } = await apiCafe.post('/cart/items', payload);

  return data;
};
