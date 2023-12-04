import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPrice } from "../../Redux/reducers/filterReducer";

import ImageSearch from '../../assets/search.svg';
import ImageSearchPink from '../../assets/searchPink.svg';
import { useSearchParams } from 'react-router-dom';






export default function ButtonSearch(){
    const navigate = useNavigate();
    const dispatch = useDispatch();

    
    
    
    const [searchParams] = useSearchParams();
    const [openSearch, setOpenSeach] = useState(false)
    const [inputSearch, setInputSearch] = useState('')

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
       
        if(inputSearch  == ''){
            return
        }


        
        

        const KeyPrice = searchParams.get("keyprice");

        if(KeyPrice != null){
            navigate(`/loja/search?pg=1&keyword=${inputSearch}&keyprice=${KeyPrice}`);
        }else {
            dispatch(setPrice(''))
            navigate(`/loja/search?pg=1&keyword=${inputSearch}&keyprice=all`);
        }

        
        setInputSearch('');
        setOpenSeach(!openSearch);
      
    }
    
    
    return (
        <>
        <div className=" w-[45px] h-[45px] md:w-11 md:h-11 lg:w-14 lg:h-14 flex items-center justify-center md:ml-6  lg:ml-40 ">
            <button onClick={() => setOpenSeach(!openSearch)} className={`w-full h-full rounded-full border-2  flex items-center justify-center  outline-none ${openSearch ? "border-[#d14d8f]" : "border-[#555555]"}`} >
               {openSearch == true ? <img src={ImageSearchPink} alt="lupa-open" className=""/> : <img src={ImageSearch} alt="lupa-close" className=""/>}
            </button>
        </div>

        {openSearch &&
        <form  data-testid='form-search' onSubmit={handleSearch} className=" absolute z-10 w-full p-4 flex items-center justify-center  h-15 border left-0 top-[85px]  bg-[#F5F5F5] shadow shadow-[rgba(0, 0, 0, 0.35)]">
            <input  type='text' placeholder="Digite o vinho que você procura" className="bg-white text-[#555555] w-full h-10 p-2 rounded-md outline-none box-border " value={inputSearch} onChange={(e) => setInputSearch(e.target.value)}/>
            <button data-testid='submit' type="submit" className="absolute flex items-center right-0 mr-5">   
                <img src={ImageSearchPink} alt="" className=""/>
            </button>
        </form>
        }
        </>
    )
}