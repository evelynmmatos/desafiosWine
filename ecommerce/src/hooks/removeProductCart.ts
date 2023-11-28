/* eslint-disable @typescript-eslint/no-explicit-any */

import { setProduct } from '../Redux/reducers/cartReducer';
import { getAllProducts } from '../services/api';
import { Product } from '../types/types';

const removeProductCart = async (idProduct: number, dispatch: any, quantidade: number = 1) => {
  const storedProdutos: string | null = localStorage.getItem('produtos');
  const listaProdutos:Product[] = storedProdutos ? JSON.parse(storedProdutos) : [];

  if (listaProdutos.length === 0) {
    console.error('O carrinho está vazio.');
    return;
  }

  try {
    const result = await getAllProducts();
    const itemRemover = result.items.find((item : Product) => item.id === idProduct);

    if (itemRemover) {
      // Filtra os produtos a serem removidos com base na quantidade
      const produtosFiltrados = listaProdutos.filter(
        (item) => item.id === idProduct && quantidade > 0
      );

      if (produtosFiltrados.length === 0) {
        console.error('Produto não encontrado no carrinho.');
        return;
      }

      // Remove a quantidade desejada dos produtos filtrados
      for (let i = 0; i < quantidade; i++) {
        const indexToRemove = listaProdutos.findIndex(
          (item) => item.id === idProduct && quantidade > 0
        );

        if (indexToRemove !== -1) {
          listaProdutos.splice(indexToRemove, 1);
        } else {
          break; // Saia do loop se não houver mais produtos a serem removidos
        }
      }

      localStorage.setItem('produtos', JSON.stringify(listaProdutos));
      dispatch(setProduct(listaProdutos));
      //alert(`Produto(s) Removido(s) (${quantidade} unidades)`);
    } else {
      console.error('Produto não encontrado na API.');
    }
  } catch (error) {
    console.error('Erro ao obter produtos da API:', error);
  }
};

export default removeProductCart;
