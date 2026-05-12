import { apiCafe } from '../../../../../common/api/api-cafe';

export const getCafeById = async (id) => {
  const { data } = await apiCafe.get(`/products/${id}`);

  return data;
};
