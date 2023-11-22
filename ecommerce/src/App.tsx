import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import ImageWine from './assets/wine.svg';
import ImageUser from './assets/user.svg';
import MenuMobile from "./components/MenuMobile";
import ButtonSearch  from "./components/buttons/buttonSearch";
import ButtonCart from "./components/buttons/buttonCart";
import { NavLink } from "./components/NavLink";
import { setPrice } from './Redux/reducers/filterReducer';




function App() {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [activeLink, setActiveLink] = useState<string>(location.pathname);

  const handleLinkClick = () => {

    setActiveLink(location.pathname)
  };

  const handlePageInitial = () => {
    dispatch(setPrice(''))
    navigate('/')
    setActiveLink('/loja')
    
  }



  return (


    <>

      <header className="w-full h-[72px] md:h-[86px]  bg-white flex items-center justify-between border-b-[3px] border-[#D5D5D5] shadow shadow-[rgba(0, 0, 0, 0.35)]">
        <div className="w-full h-full ml-2 md:ml-[30px] lg:ml-[100px] mr-6 md:mr-[30px] lg:mr-[100px] flex items-center justify-between">
          
          {/*navegação Mobile*/}
          <MenuMobile/>

          {/*navegação Desktop*/}
          <div className="hidden md:flex">
            <img src={ImageWine} alt="logo wine" onClick={handlePageInitial} className="cursor-pointer w-20 h-[22px] md:w-[100px] md:h-[28px] " />
          </div>
          <menu className="hidden md:block w-[400] lg:w-[479px] ml-10 lg:ml-20 ">
            <ul className="h-full inline-flex items-center md:gap-5 lg:gap-9">
              <NavLink to="/clube" label="Clube" activeLink={activeLink} onClick={handleLinkClick} />
              <NavLink to="/loja" label="Loja" activeLink={activeLink} onClick={handleLinkClick} />
              <NavLink to="/produtores" label="Produtores" activeLink={activeLink} onClick={handleLinkClick} />
              <NavLink to="/ofertas" label="Ofertas" activeLink={activeLink} onClick={handleLinkClick} />
              <NavLink to="/eventos" label="Eventos" activeLink={activeLink} onClick={handleLinkClick} />
            </ul>
          </menu>

          <ButtonSearch />

          <div className="hidden w-11 h-11 lg:w-14 lg:h-14  md:flex items-center justify-center md:ml-6 lg:ml-11">
            <div className=" w-full h-full rounded-full border-2 border-[#555555] flex items-center justify-center">
              <a href="/user">
                <img src={ImageUser} alt="" className="w-9 h-9 hover:cursor-pointer" />
              </a>
            </div>
          </div>

          <ButtonCart />
        </div>
      </header>

      <div className="flex md:flex-col lg:flex-row ml-6 md:ml-[30px] lg:ml-[100px]  mr-6 md:mr-[30px] lg:mr-[100px] mt-10 ">
        
        <Outlet />
      
      </div>
    
    </>
  )
}

export default App

