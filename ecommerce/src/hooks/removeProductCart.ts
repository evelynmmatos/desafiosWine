import { setProduct } from '../Redux/reducers/cartReducer';
import { Product } from '../types/types';

const removeProductCart = async (idProduct: number, dispatch: any) => {
 
  const storedProdutos: string | null = localStorage.getItem('produtos');
  const listaProdutos: Product[] = storedProdutos ? JSON.parse(storedProdutos) : [];

  
  if (listaProdutos.length === 0) {
    console.error('O carrinho está vazio.');
    return;
  }

  
  const indexesToRemove = listaProdutos.reduce((lista, item, index) => {
    if (item.id === idProduct) {
      lista.push(index);
    }
    return lista;
  }, []);

  
  indexesToRemove.reverse().forEach((index) => {
    listaProdutos.splice(index, 1);
  });

  
  localStorage.setItem('produtos', JSON.stringify(listaProdutos));

  
  dispatch(setProduct(listaProdutos));
  alert(`Produtos Removidos (${indexesToRemove.length} itens)`);
};

export default removeProductCart;
