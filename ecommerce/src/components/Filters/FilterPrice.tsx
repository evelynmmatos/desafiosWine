import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";

import { RootState } from "../../store/store";
import { setPrice } from "../../Redux/reducers/filterReducer";

import { Checkbox, } from "@mui/material";
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';




export const FilterPrice = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const filterPreco = useSelector((state: RootState) => state.filter.price)
    const [faixaPreco, setFaixaPreco] = useState<string>(filterPreco);

    const [searchParams] = useSearchParams();
    const KeyWord = searchParams.get("keyword");


    const handleFaixaPrecoChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const value = event.target.value;

        setFaixaPreco(value === faixaPreco ? '' : value)
        dispatch(setPrice(value === filterPreco ? '' : value))

        if (value === faixaPreco) {
            
            if(KeyWord){
                
                navigate(`/loja/search?pg=1&keyword=${KeyWord}&keyprice=all`);
            }else{
                
                navigate(`/loja/search?pg=1&keyword=all&keyprice=all`)
            }
              
            
        }else if(value !== '' ){
          
            if(KeyWord != null){
                navigate(`/loja/search?pg=1&keyword=${KeyWord}&keyprice=${value}`);
            }else {
                navigate(`/loja/search?pg=1&keyword=all&keyprice=${value}`);
            }

            

        }

    };


    useEffect(() => {
        setFaixaPreco(filterPreco)
    }, [filterPreco])


    return (
        <div className=" mt-8  mb-4 md:w-screen lg:w-60">
            <label htmlFor="faixaPreco" className="text-[#333] text-lg font-bold">Por preço</label>
            <div className="select-wrapper mt-4 md:flex  lg:flex-col ">


                <div className={`option ${faixaPreco.includes('0-40') ? 'selected' : ''} flex items-center md:mr-4 lg:mr-0`}>
                    <Checkbox
                        name="faixaPreco"
                        value="0-40"
                        id="0-40"
                        checked={faixaPreco.includes('0-40')}
                        onChange={handleFaixaPrecoChange}
                        icon={<RadioButtonUncheckedIcon sx={{ fontSize: 20, color: '#C81A78' }} />} // Ícone quando não está marcado
                        checkedIcon={<RadioButtonCheckedIcon sx={{ fontSize: 20, color: '#C81A78' }} />} // Ícone quando está marcado
                        sx={{
                            paddingLeft: '0px'
                        }}
                    />

                    <label htmlFor="até40" className="text-[#1D1D1B] text-sm text-center">Até R$40,00</label>

                </div>

                <div className={`option ${faixaPreco.includes('40-60') ? 'selected' : ''} flex items-center md:mr-4 lg:mr-0`}>
                    <Checkbox

                        name="faixaPreco"
                        value="40-60"
                        id="40-60"
                        checked={faixaPreco.includes('40-60')}
                        onChange={handleFaixaPrecoChange}
                        icon={<RadioButtonUncheckedIcon sx={{ fontSize: 20, color: '#C81A78' }} />} // Ícone quando não está marcado
                        checkedIcon={<RadioButtonCheckedIcon sx={{ fontSize: 20, color: '#C81A78' }} />} // Ícone quando está marcado
                        sx={{
                            paddingLeft: '0px'
                        }}
                    />
                    <label htmlFor="40a60" className="text-[#1D1D1B] text-sm text-center">R$40 a R$60</label>
                </div>



                <div className={`option ${faixaPreco.includes('100-200') ? 'selected' : ''} flex items-center md:mr-4 lg:mr-0`}>
                    <Checkbox
                        name="faixaPreco"
                        value="100-200"
                        id="100-200"
                        checked={faixaPreco.includes('100-200')}
                        onChange={handleFaixaPrecoChange}
                        icon={<RadioButtonUncheckedIcon sx={{ fontSize: 20, color: '#C81A78' }} />} // Ícone quando não está marcado
                        checkedIcon={<RadioButtonCheckedIcon sx={{ fontSize: 20, color: '#C81A78' }} />} // Ícone quando está marcado
                        sx={{
                            paddingLeft: '0px'
                        }}
                    />
                    <label htmlFor="100a200" className="text-[#1D1D1B] text-sm text-center">R$100 a R$200</label>

                </div>



                <div className={`option ${faixaPreco.includes('200-500') ? 'selected' : ''} flex items-center md:mr-4 lg:mr-0`}>
                    <Checkbox
                        name="faixaPreco"
                        value="200-500"
                        id="200-500"
                        checked={faixaPreco.includes('200-500')}
                        onChange={handleFaixaPrecoChange}
                        icon={<RadioButtonUncheckedIcon sx={{ fontSize: 20, color: '#C81A78' }} />} // Ícone quando não está marcado
                        checkedIcon={<RadioButtonCheckedIcon sx={{ fontSize: 20, color: '#C81A78' }} />} // Ícone quando está marcado
                        sx={{
                            paddingLeft: '0px'
                        }}
                    />
                    <label htmlFor="200-500" className="text-[#1D1D1B] text-sm text-center" >R$200 a R$500</label>

                </div>


                <div className={`option ${faixaPreco.includes('500-999999') ? 'selected' : ''} flex items-center md:mr-4 lg:mr-0`}>
                    <Checkbox
                        name="faixaPreco"
                        value="500-999999"
                        id="500-999999"
                        checked={faixaPreco.includes('500-999999')}
                        onChange={handleFaixaPrecoChange}
                        icon={<RadioButtonUncheckedIcon sx={{ fontSize: 20, color: '#C81A78' }} />} // Ícone quando não está marcado
                        checkedIcon={<RadioButtonCheckedIcon sx={{ fontSize: 20, color: '#C81A78' }} />} // Ícone quando está marcado
                        sx={{
                            paddingLeft: '0px'
                        }}
                    />
                    <label htmlFor="500-999999" className="text-[#1D1D1B] text-sm text-center">Acima de R$500</label>

                </div>

            </div>
        </div>
    );
}
