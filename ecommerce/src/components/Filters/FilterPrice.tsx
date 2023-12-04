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

            if (KeyWord) {

                navigate(`/loja/search?pg=1&keyword=${KeyWord}&keyprice=all`);
            } else {

                navigate(`/loja/search?pg=1&keyword=all&keyprice=all`)
            }


        } else if (value !== '') {

            if (KeyWord != null) {
                navigate(`/loja/search?pg=1&keyword=${KeyWord}&keyprice=${value}`);
            } else {
                navigate(`/loja/search?pg=1&keyword=all&keyprice=${value}`);
            }



        }

    };


    useEffect(() => {
        setFaixaPreco(filterPreco)
    }, [filterPreco])


    const faixaPrecoOptions = [

        { value: '0-40', label: 'Até R$40,00' },
        { value: '40-60', label: 'R$40 a R$60' },
        { value: '100-200', label: 'R$100 a R$200' },
        { value: '200-500', label: 'R$200 a R$500' },
        { value: '500-999999', label: 'Acima de R$500' },
    ];


    return (
        <div className=" mt-8  mb-4 md:w-screen lg:w-60">
            <label htmlFor="faixaPreco" className="text-[#333] text-lg font-bold">Por preço</label>
            <div className="select-wrapper mt-4 md:flex  lg:flex-col ">

                {faixaPrecoOptions.map((option, index) => (
                    <div key={index} className={`option ${faixaPreco.includes(option.value) ? 'selected' : ''} flex items-center md:mr-4 lg:mr-0`}>
                        <Checkbox
                            name="faixaPreco"
                            value={option.value}
                            id={option.value}
                            checked={faixaPreco.includes(option.value)}
                            onChange={handleFaixaPrecoChange}
                            icon={<RadioButtonUncheckedIcon sx={{ fontSize: 20, color: '#C81A78' }} />} // Ícone quando não está marcado
                            checkedIcon={<RadioButtonCheckedIcon sx={{ fontSize: 20, color: '#C81A78' }} />} // Ícone quando está marcado
                            sx={{
                                paddingLeft: '0px',
                                
                            }}
                        />

                        <label htmlFor={option.value} className="text-[#1D1D1B] text-sm text-center">{option.label}</label>

                    </div>

                ))}
  
            </div>
        </div>
    );
}
