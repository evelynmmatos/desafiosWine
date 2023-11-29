import { useState, } from "react";
import { useDispatch } from "react-redux";

import { SkeletonLoadingProduct } from "../components/SkeletonLoading/SkeletonLoadingProduct";
import { ProductNotFind } from "../components/ProductNotFind";

import { UseStars } from "../hooks/useStars";
import { formatarNumero } from "../hooks/formatter";

import addProductCart from "../hooks/addProductCart";
import useGetProductId from "../hooks/useGetProductId";
import { useNavigate } from "react-router-dom";


export const PageProduct = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { product, isLoading, productNotFind } = useGetProductId();

    const [quantidade, setQuantidade] = useState(1);

    const aumentarQuantidade = () => {
        setQuantidade(quantidade + 1);
    };

    const diminuirQuantidade = () => {
        if (quantidade > 1) {
            setQuantidade(quantidade - 1);
        }
    };

    //Adicionar ao carrinho

    const adicionarAoCarrinho = (idProduct: number, quantidade: number) => {
        addProductCart(idProduct, dispatch, quantidade);
    };

    const handleBackPage = () => {
        navigate(-1)
    }

    return (
        <>
            {isLoading ? <SkeletonLoadingProduct /> : productNotFind == true && <ProductNotFind />}

            {product &&

                <div className="hidden md:flex w-full relative mt-8 mb-8  ">
                    <button onClick={handleBackPage} className="text-xl text-[#e43fa0] absolute mt-[-50px] "> &lt; VOLTAR </button>
                    <div className="w-full flex justify-between ">
                        <div className="flex-1    justify-center">
                            <img src={product?.image} alt="" className="w-[345px] h-[524px]" />
                        </div>

                        <div className="flex-1 flex-col justify-between items-center">
                            <a href="/loja" className="text-sm text-[#C81A78] font-bold inline-block">Vinhos</a>
                            <span className="text-[15px] text-[#888] mr-2 ml-2">&gt;</span>
                            <p className="text-sm text-[#C81A78] font-bold inline-block">{product?.country} </p>
                            <span className="text-[15px] text-[#888] mr-2 ml-2">&gt;</span>
                            <p className="text-sm text-[#888] inline-block">{product?.region}</p>

                            <h1 className="font-sans text-[28px] font-bold mt-[18px]">{product?.name}</h1>
                            <ul className="flex mt-2 items-center">
                                <li className="mr-2">
                                    <img src={product?.flag} alt={`Bandeira do país da ${product?.country}`} className="w-4 h-4" />
                                </li>
                                <li className="inline-block mr-2 ml-2 text-sm text-[#555]">{product?.country}</li>
                                <li className="inline-block mr-2 ml-2 text-sm text-[#555]">{product?.type}</li>
                                <li className="inline-block mr-2 ml-2 text-sm text-[#555]">{product?.classification}</li>
                                {product?.size ?
                                    <li className="inline-block mr-2 ml-2 text-sm text-[#555]">{product?.size}</li>
                                    :
                                    <li className="inline-block mr-2 ml-2 text-sm text-[#555]">{product?.volume}</li>
                                }
                                <UseStars rating={product?.rating} />
                            </ul>

                            <div className="mt-8">
                                <p className="text-2xl font-black text-[#C81A78] ">R$ <span className="text-[40px] font-black text-[#C81A78]">{formatarNumero(product.priceMember)}</span></p>
                                <p className="text-[#888] text-base uppercase">Não Sócio R$ {formatarNumero(product?.price as number)}/UN</p>
                            </div>

                            <div className="mt-8 w-[448px]">
                                <h2 className="text-base text-[#111] font-bold ">Comentário do Sommelier</h2>
                                <p className="text-sm text-[#666] mt-1 ">{product?.sommelierComment}</p>
                            </div>

                            <div className="flex mt-8 mb-8 w-[328px] h-14 rounded bg-[#7EBC43] items-center justify-around">
                                <button className="w-7 h-7 border border-white text-white p-1 rounded-full flex items-center justify-center disabled:border-[#ffffff19]" onClick={diminuirQuantidade} disabled={quantidade === 1}>-</button>
                                <p className="text-white">{quantidade}</p>
                                <button className="w-7 h-7 border border-white text-white p-1 rounded-full flex items-center justify-center" onClick={aumentarQuantidade}>+</button>
                                <button className="text-white" onClick={() => adicionarAoCarrinho(product.id, quantidade)}>Adicionar</button>
                            </div>
                        </div>
                    </div>


                </div>
            }


            {/* VERSÃO MOBILE*/}


            {product &&
                <div className="flex   md:hidden mr-2 ml-2 flex-col items-center relative">
                    <div className="mt-2 flex flex-col items-center justify-center">
                        <div>
                            <a href="/loja" className="text-sm text-[#C81A78] font-bold ">Vinhos</a>
                            <span className="text-[15px] text-[#888] mr-2 ml-2 inline-block">&gt;</span>
                            <p className="text-sm text-[#C81A78] font-bold inline-block">{product?.country} </p>
                            <span className="text-[15px] text-[#888] mr-2 ml-2">&gt;</span>
                            <p className="text-sm text-[#888] inline-block">{product?.region}</p>
                        </div>

                        <h1 className="font-sans text-[20px] font-bold mt-[16px] text-center">{product?.name}</h1>
                        <ul className="flex mt-2 items-center">
                            <li className="mr-2">
                                <img src={product?.flag} alt={`Bandeira do país da ${product?.country}`} className="w-4 h-4" />
                            </li>
                            <li className="inline-block mr-2 ml-2 text-sm text-[#555]">{product?.country}</li>
                            <li className="inline-block mr-2 ml-2 text-sm text-[#555]">{product?.type}</li>
                            <li className="inline-block mr-2 ml-2 text-sm text-[#555]">{product?.classification}</li>
                            {product?.size ?
                                <li className="inline-block mr-2 ml-2 text-sm text-[#555]">{product?.size}</li>
                                :
                                <li className="inline-block mr-2 ml-2 text-sm text-[#555]">{product?.volume}</li>
                            }
                        </ul>
                    </div>
                    <div>
                        <img src={product.image} alt='Imagem garrafa vinho' className="w-[218px] h-[333px] mt-4 mb-4" />
                    </div>

                    <div className="mb-32">
                        <h2 className="text-xl text-[#333] font-bold">Descrição</h2>
                        <p className="text-base text-[#555] mt-2">{product.sommelierComment}</p>
                    </div>

                    <div className="h-24 w-screen absolute  flex justify-between items-center pl-10 pr-10 bg-white bottom-0 border-t-[3px] border-[#D5D5D5] shadow shadow-[rgba(0, 0, 0, 0.35)] ">
                        <div className="">
                            <div className="flex flex-col absolute top-[-15px] ">
                                <span className=" p-1 bg-[#F26649] rounded-md text-center text-[10px] text-white">{product.discount}% OFF</span>
                                <p className="inline-block text-[#888] text-[10px] font-bold line-through mr-2">R$ {formatarNumero(product.price)} </p>
                            </div>
                            <div className="flex flex-col items-start">
                                <span className="text-[#C81A78] text-sm">R$ <strong className="text-2xl text-[#c81a78]">{formatarNumero(product.priceMember)}</strong></span>
                                <span className="text-[10px] text-[##555] font-bold uppercase">Preço não-sócio R$ {formatarNumero(product.priceNonMember)}</span>
                            </div>
                        </div>
                        <button className=" w-36 text-white p-3 rounded bg-[#7EBC43] items-center justify-end" onClick={() => adicionarAoCarrinho(product.id, 1)}>Adicionar</button>
                    </div>
                </div>

            }
        </>
    )
}