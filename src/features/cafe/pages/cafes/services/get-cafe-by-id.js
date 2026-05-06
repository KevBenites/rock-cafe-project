import axios from 'axios';

export const getCafeById = async (id) => {
  const API_URL = import.meta.env.VITE_API_URL;

  const { data } = await axios.get(`${API_URL}/products/${id}`);

  return data;
};
