
import * as React from 'react';
import {useState, useEffect} from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';

import ImageCart from '../../assets/Bitmap.png';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

import { Product } from '../../types/types';
import removeProductCart from '../../hooks/removeProductCart';





type Anchor = 'right';

export default function ButtonCart() {

  const Cart = useSelector((state: RootState)=> state.cart.product)
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

    const handleRemoveItem = (id: number) => {
        removeProductCart(id, dispatch)
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



 



  const list = (anchor: Anchor) => (
    <div 
        
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
    <div className=" w-[350px] h-[72px] p-5 flex flex-col items-center ">
        <span>Carrinho </span>

        {itensCart.length === 0 && <span>O carrinho está vazio</span>}
        {itensCart.map((product, index) => (
            <div key={index} className='w-full h-72 flex items-center bg-white border-b-[3px] border-[#D5D5D5] shadow shadow-[rgba(0, 0, 0, 0.35)] p-3 mt-2'>
            <div className='h-14 relative'>
              <img src={product.item.image} alt="" className='w-auto h-full' />
              <div className="absolute bg-[#D14B8F] w-5 h-5 rounded-full flex items-center justify-center top-[40px] left-7">
                <span className='text-xs text-white'>{product.quantity}</span>
              </div>
            </div>
            <div className='flex-1 ml-3'>
              <h1 className='text-xs font-bold text-center'>{product.item.name}</h1>
            </div>
            <button className='text-xs bg-red-500 p-1 ml-5 rounded-md text-white' onClick={() => handleRemoveItem(product.item.id)}>Remover</button>
          </div>
            
        ))}
    </div>


     
    </div>
  );

  return (
    <>
      
      <div className="w-[45px] h-[45px]  md:w-11 md:h-11 lg:w-14 lg:h-14  flex items-center justify-center md:ml-6 lg:ml-11 " onClick={toggleDrawer('right', true)}>
          <div className=" w-full h-full rounded-full  bg-[#F6B554] flex items-center justify-center over hover:cursor-pointer">
            <img src={ImageCart} alt="" className=" w-[33px] md:w-[30px] lg:w-auto rounded-b-[14px]"  />
          <span className="w-4 h-4 rounded-full flex items-center justify-center text-[#4FBFA5]  bg-[#F5F5F5] absolute ml-8 mt-10">{Cart.length}</span>
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
