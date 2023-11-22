import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';

import ImageUser from '../../assets/user.svg';
import ImageWine from '../../assets/wine.svg';
import IconMenuMobile from '../../assets/ic-line.svg';



type Anchor = 'left';

export default function MenuMobile() {
  const navigate = useNavigate();
  const [state, setState] = React.useState({
    left: false,
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

  const list = (anchor: Anchor) => (
    <div 
       
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
      <div className=" w-full h-[72px] p-5 flex items-center  bg-white border-b-[3px] border-[#D5D5D5] shadow shadow-[rgba(0, 0, 0, 0.35)]">
        <img src={ImageUser} alt="" className="w-12 h-12 rounded-full border-2 border-[#555555] " />
          <div className='flex flex-col ml-3'>
            <p className='text-sm'>Acesse sua conta</p>
            <a className='text-xs text-[#C81A78]' href="/user">Entrar &#8594;</a>
          </div>
      </div>

      <nav className='w-full  flex-col'>
        <menu className=" flex-col ">
          <li className=" w-full h-20 flex items-center justify-center border-b border-[#555555]">
            <a className='text-center text-[#B6116E]' href="/clube"> Clube</a>
          </li>

          <li className=" w-full h-20 flex items-center justify-center  border-b border-[#555555]">
            <a className='text-center text-[#B6116E]'href="/loja"> Loja </a>
          </li>

          <li className=" w-full h-20 flex items-center justify-center border-b border-[#555555]">
            <a className='text-center text-[#B6116E]' href="/produtores"> Produtores </a>
          </li>

          <li className=" w-full h-20 flex items-center justify-center  border-b border-[#555555]">
            <a className='text-center text-[#B6116E]' href="/produtores"> Ofertas </a>
          </li>

          <li className=" w-full h-20 flex items-center justify-center  border-b border-[#555555]">
            <a className='text-center text-[#B6116E]' href="/produtores"> Eventos </a>
          </li>
        </menu>
      </nav>
    </div>
  );

  return (
    <div className='md:hidden flex items-center'>
      <Button onClick={toggleDrawer('left', true)}>
      <img src={IconMenuMobile} alt="Icone-Menu"  className=" cursor-pointer" />
      </Button>
      <img src={ImageWine} alt="logo wine" onClick={() => navigate('/loja')} className="cursor-pointer w-20 mr-20 h-[22px] md:w-[100px] md:h-[28px] " />
      <SwipeableDrawer
        anchor="left"
        open={state.left}
        onClose={toggleDrawer('left', false)}
        onOpen={toggleDrawer('left', true)}
      >
        {list('left')}
      </SwipeableDrawer>
    </div>
  );
}
