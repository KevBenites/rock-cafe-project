import { apiCafe } from '../../../../../common/api/api-cafe';

export const getAccesorioById = async (id) => {
  const { data } = await apiCafe.get(`/products/accesorio/${id}`);

  return data;
};
