import { useState, useEffect } from 'react';
import { getProducts, } from '../services/api';
import { Product } from '../types/types';




const useGetProducts = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [pageActive, setPageActive] = useState(1);
  const [totalPages, setTotalPages] = useState(1)
  const [totalItems, setTotalItems] = useState(0)
  const [products, setProducts] = useState<Product[]>();

  
  const handlePageChange = (newPage: number) => {
    setPageActive(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    
  };



  const fetchProducts = async (pageActive:number, ) => {
    setIsLoading(true);
    console.log(pageActive)
    try {
      const result = await getProducts(pageActive as number);
      setProducts(result.items);
      setTotalPages(result.totalPages);
      setTotalItems(result.totalItems);
     
    } catch (error) {
      console.error('Error fetching products:', error);
      // Trate o erro de forma adequada (pode ser exibindo uma mensagem de erro, etc.)
    }finally{
        setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(pageActive);

  }, [pageActive]);

  

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
