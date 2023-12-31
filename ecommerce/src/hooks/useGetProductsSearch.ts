import { useState, useEffect } from 'react';
import { Product } from '../types/types';
import { useSearchParams } from 'react-router-dom';

const isMobile = window.innerWidth > 768 ? false : true;

type FetchFunction = (page: number, keyWord: string, keyPrice: string) => Promise<{ items: Product[]; totalPages: number; totalItems: number, page: number }>;

const useGetProductsSearch = (fetchFunction: FetchFunction) => {
  const [searchParams] = useSearchParams();
  const keyPage = searchParams.get("pg") || '1'
  const [isLoading, setIsLoading] = useState(true);
  const [pageActive, setPageActive] = useState(parseInt(keyPage));
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [products, setProducts] = useState<Product[]>([]);
  const keyword = searchParams.get("keyword");
  const KeyPrice = searchParams.get("keyprice");
  
    
    
  const fetchProducts = async () => {
    setIsLoading(true);
    
    try {
      const result = await fetchFunction(pageActive, keyword as string, KeyPrice as string);
        console.log(result)

      if (isMobile && pageActive > 1) {
        // Adiciona itens ao array existente no modo móvel
        setProducts(() => [...products, ...result.items]);
      } else {
        // Define o array inteiro no modo não móvel
        setProducts(result.items);
      }

     
      setTotalPages(result.totalPages);
      setTotalItems(result.totalItems);
      
      

      
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setIsLoading(false);
    }
  };



  useEffect(() => {

    if(keyPage){
      setPageActive(parseInt(keyPage));
      fetchProducts()
    }else {
      setPageActive(1)
      fetchProducts()
    }
    
    
  }, [keyword, KeyPrice, keyPage, pageActive])

  const handlePageChange = (newPage: number) => {
    setPageActive(newPage);
    if(!isMobile){
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
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
    keyword,
    KeyPrice
  };
};

export default useGetProductsSearch;
