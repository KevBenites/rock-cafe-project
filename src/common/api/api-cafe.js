import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const apiCafe = axios.create({
  baseURL: API_URL,
});

apiCafe.interceptors.request.use((config) => {
  const storage = localStorage.getItem('auth-storage');

  if (storage) {
    const { state } = JSON.parse(storage);

    if (state.token) {
      config.headers.Authorization = `Bearer ${state.token}`;
    }
  }

  return config;
});
