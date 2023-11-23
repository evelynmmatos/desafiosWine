import { useState, useEffect } from 'react';
import { Product } from '../types/types';
import { useSearchParams } from 'react-router-dom';

type FetchFunction = (page: number, query: string) => Promise<{ items: Product[]; totalPages: number; totalItems: number }>;

const useGetProducts = (fetchFunction: FetchFunction) => {
  
  const [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [pageActive, setPageActive] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [products, setProducts] = useState<Product[]>();
  const query = searchParams.get("q");

  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const result = await fetchFunction(pageActive, query as string);
      setProducts(result.items);
      setTotalPages(result.totalPages);
      setTotalItems(result.totalItems);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [pageActive, query]);

  const handlePageChange = (newPage: number) => {
    setPageActive(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return {
    products,
    pageActive,
    totalPages,
    totalItems,
    setPageActive,
    handlePageChange,
    fetchProducts,
    isLoading,
  };
};

export default useGetProducts;
