import { apiCafe } from '../../../common/api/api-cafe';

export const getProducts = async (category, limit, offset) => {
  const { data } = await apiCafe.get('/products', {
    params: {
      category,
      limit,
      offset,
    },
  });

  return data;
};
