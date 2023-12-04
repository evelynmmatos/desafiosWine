
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"

import { formatarNumero } from "../../hooks/formatter"
import addProductCart from "../../hooks/addProductCart"


type Props= {
    id: number
    image: string
    flag: string
    title: string
    price: number
    discount: number
    priceMember: number
    priceNonMember: number
}


export const CardProduct = ({id, image, flag, title, price, discount, priceMember, priceNonMember}:Props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleNavigate = (id:number) => {
        navigate(`/vinhos/${id}`)
    }



    const handleProductCart = (id:number ) => {
        addProductCart(id, dispatch);
        
    }
   
    
    return (
        <div data-testid='product-container' className="w-40 md:w-56 lg:w-64 h-[387px] flex flex-col justify-center">
            <div className="w-full h-[333px]  bg-white shadow-lg flex flex-col items-center justify-center pt-6 pb-6 cursor-pointer" id={id.toString()} onClick={() => handleNavigate(id)} >
                <div className="flex">
                    <img src={image} alt={title} className="md:ml-7 md:mr-7 h-44"/>
                    <img src={flag} alt="" className="w-8 h-8 mt-32 ml-[-10px]  md:w-10 md:h-10 absolute md:ml-36 md:mt-32" />
                </div>
                <h3 className="w-[140px] md:w-56  md:h-10 text-[#1D1D1B] text-sm md:text-base font-bold text-center">{title}</h3>
                <div className="mt-[6px]">
                    <p className="inline-block text-[#888] text-[10px] font-bold line-through mr-2">R${formatarNumero(price)} </p>
                    <p className="inline-block text-white text-[10px] font-bold bg-[#F79552] rounded-sm p-[2px]">{discount}% OFF</p>
                </div>
                
                <div className="w-36 mt-2">
                    <p className=" text-[#1D1D1B] text-center uppercase text-[11px] font-bold">Sócio Wine <p className="text-[#B6116E] inline-block"> R$ </p><span className="text-lg text-[#B6116E]"> {formatarNumero(priceMember)}</span></p>
                    <p className="text-[#888] text-[11px] text-center font-bold uppercase mt-2">Não Sócio R$ {formatarNumero(priceNonMember)}</p>
                </div>
                
            </div>

            <button className="w-full pt-[11px] pb-[11px] pr-6 pl-6 bg-[#7EBC43] mt-4  rounded-lg text-white text-sm" onClick={() => handleProductCart(id)} >ADICIONAR</button>
        </div>
    )
}