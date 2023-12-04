
import * as React from 'react';
import { useState, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';

import ImageCart from '../../assets/Bitmap.png';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

import { Product } from '../../types/types';
import removeProductCart from '../../hooks/removeProductCart';
import { formatarNumero } from '../../hooks/formatter';
import addProductCart from '../../hooks/addProductCart';





type Anchor = 'right';

export default function ButtonCart() {

  const Cart = useSelector((state: RootState) => state.cart.product)
  const [itensCart, setItensCart] = useState<{ item: Product; quantity: number }[]>([]);


  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event &&
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }

        setState({ ...state, [anchor]: open });
      };


  //Removendo Produto Carrinho

  const dispatch = useDispatch();

  const handleRemoveItem = (id: number, quantity :number) => {
    removeProductCart(id, dispatch, quantity)
  }


  const handleNewArray = () => {
    // Consolidar itens por ID e contar suas quantidades usando reduce
    const consolidatedArray = Cart.reduce<{ item: Product; quantity: number }[]>((list, item) => {
      const existingItem = list.find((cartItem) => cartItem.item.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        list.push({ item, quantity: 1 });
      }

      return list;
    }, []);

    setItensCart(consolidatedArray);
  };


  useEffect(() => {
    handleNewArray()
  }, [Cart]);


//Alterar quantidade Carrinho 

const adicionarAoCarrinho = (idProduct: number, quantidade: number) => {
  addProductCart(idProduct, dispatch, quantidade);
};


//Calcular total carrinho
const calcularTotalCarrinho = () => {
  let total = 0;

  // Percorre o array de itens no carrinho
  itensCart.forEach((item) => {
    // Para cada item, multiplica a quantidade pelo preço e adiciona ao total
    total += item.quantity * item.item.priceMember;
  });

  return formatarNumero(total);
};



  const list = (anchor: Anchor) => (
    <div
     
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div data-testid='cart-container' className=" w-[350px] h-screen  flex flex-col relative items-center  overflow-hidden">
        <span className='h-[52px] mt-2 text-lg'>WINE BOX</span>

        <div className='overflow-y-scroll w-full h-full p-5'>
        {itensCart.length === 0 && 
          <div className='w-full h-full flex items-center justify-center'>
            <span className='text-base font-bold text-[#C81A78]'>O carrinho está vazio :(</span>
          </div>
        }
        {itensCart.map((product, index) => (
          <div key={index} className='w-full flex items-center bg-white border-b-[3px] border-[#D5D5D5] shadow shadow-[rgba(0, 0, 0, 0.35)] p-3 mt-2 '>
            <div className='h-28 relative'>
              <img src={product.item.image} alt={product.item.name} className='w-auto h-full' />
            </div>

            <div className='flex-1 h-28 flex flex-col justify-around  relative'>
              <button className='w-5 h-5 flex items-center justify-center text-xs border border-[#aaaa] text-[#aaaa] absolute  rounded-full right-0 top-0 ' onClick={() => handleRemoveItem(product.item.id, product.quantity)}>X</button>
              <h1 className='text-xs font-bold '>{product.item.name}</h1>
              <div className='flex justify-between'>
                <div className='w-12 px-1 flex items-center justify-around rounded border border-[#ccc]'>
                  <button onClick={() => handleRemoveItem(product.item.id, 1)}>-</button>
                  <p className='text-xs'>{product.quantity}</p>
                  <button onClick={() => adicionarAoCarrinho(product.item.id, (1))}>+</button>
                </div>
                <span className='text-lg font-bold text-[#C81A78]'>R$: {formatarNumero(product.quantity * product.item.priceMember)}</span>
              </div>
            </div>
          </div>

        ))}
        </div>

        <div className=' w-full h-40  flex flex-col justify-between bottom-0 p-3 border-t-[1px] border-[#D5D5D5] shadow shadow-[rgba(0, 0, 0, 0.35)]'>
          <div className='w-full flex justify-around items-center'>
            <p className='text-base font-bold '>Valor total: </p>
            <span className='text-2xl font-bold text-[#C81A78]'>R$: {calcularTotalCarrinho()}</span>
          </div>
          <button className='w-full h-12 text-white bg-[#7EBC43]  rounded'>Ir para Pagamento</button>
        </div>
      </div>

      



    </div>
  );

  return (
    <>

      <div className="w-[45px] h-[45px]  md:w-11 md:h-11 lg:w-14 lg:h-14  flex items-center justify-center md:ml-6 lg:ml-11 " onClick={toggleDrawer('right', true)}>
        <div className=" w-full h-full rounded-full  bg-[#F6B554] flex items-center justify-center over hover:cursor-pointer">
          <img src={ImageCart} alt="Cart Icon" className=" w-[33px] md:w-[30px] lg:w-auto rounded-b-[14px]" />
          <span data-testid="cart-quantity" className="w-4 h-4 rounded-full flex items-center justify-center text-[#4FBFA5]  bg-[#F5F5F5] absolute ml-8 mt-10">{Cart.length}</span>
        </div>
      </div>

      <SwipeableDrawer
       
        anchor="right"
        open={state.right}
        onClose={toggleDrawer('right', false)}
        onOpen={toggleDrawer('right', true)}
      >
        {list('right')}
      </SwipeableDrawer>
    </>
  );
}
