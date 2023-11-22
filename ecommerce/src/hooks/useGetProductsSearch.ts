import { useState, useEffect } from 'react';
import { getProductSearch} from '../services/api';
import { Product } from '../types/types';
import { useSearchParams } from 'react-router-dom';




const useGetProductsSearch = () => {

    const [searchPrarams] = useSearchParams();

    const [isLoading, setIsLoading] = useState(true);
    const [pageActive, setPageActive] = useState(1);
    const [totalPages, setTotalPages] = useState(1)
    const [totalItems, setTotalItems] = useState(0)
    const [products, setProducts] = useState<Product[]>();
  
    const query = searchPrarams.get("q")
  
    const fetchProducts = async () => {
  
  
      try {
        const result = await getProductSearch(pageActive, query as string);
        setProducts(result.items);
        setTotalPages(result.totalPages)
        setTotalItems(result.totalItems)
  
  
  
      } catch (error) {
        console.error('Error fetching products:', error);
        // Trate o erro de forma adequada (pode ser exibindo uma mensagem de erro, etc.)
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

export default useGetProductsSearch;
