import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router';
import { getProducts } from '../services/get-products';

export const useProducts = (category) => {
  const [searchParams] = useSearchParams();

  const limit = searchParams.get('limit') || 8;
  const page = searchParams.get('page') || 1;

  const offset = (Number(page) - 1) * Number(limit);

  return useQuery({
    queryKey: ['products', { category, limit, offset }],
    queryFn: () => getProducts(category, limit, offset),
    staleTime: 1000 * 60 * 5,
  });
};
