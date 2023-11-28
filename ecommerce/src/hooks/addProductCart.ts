/* eslint-disable @typescript-eslint/no-explicit-any */
import { setProduct } from '../Redux/reducers/cartReducer';
import { getAllProducts } from '../services/api';
import { Product } from '../types/types';

const addProductCart = async (idProduct: number, dispatch: any, quantidade: number = 1) => {
  
  const storedProdutos: string | null = localStorage.getItem('produtos');
  let listaProdutos: Product[] = storedProdutos ? JSON.parse(storedProdutos) : [];

  
  if (listaProdutos.length === 0) {
    
    try {
      const result = await getAllProducts();
      const itemAdicionar = result.items.find((item: Product) => item.id === idProduct);

      
      if (itemAdicionar) {
        
        listaProdutos = Array(quantidade).fill(itemAdicionar); 
        localStorage.setItem('produtos', JSON.stringify(listaProdutos));

        dispatch(setProduct(listaProdutos));
        //alert(`Produto Adicionado (${quantidade} unidades)`);

      } else {
        console.error('Produto não encontrado na API.');
      }
    } catch (error) {
      console.error('Erro ao obter produtos da API:', error);
     
    }
  } else {
   
    try {
      const result = await getAllProducts();
      const itemAdicionar = result.items.find((item: Product) => item.id === idProduct);

      
      if (itemAdicionar) {
        listaProdutos.push(...Array(quantidade).fill(itemAdicionar)); 
        localStorage.setItem('produtos', JSON.stringify(listaProdutos));

        dispatch(setProduct(listaProdutos));
        //alert(`Produto Adicionado (${quantidade} unidades)`);
      } else {
        console.error('Produto não encontrado na API.');
      }
    } catch (error) {
      console.error('Erro ao obter produtos da API:', error);
      
    }
  }
};

export default addProductCart;
