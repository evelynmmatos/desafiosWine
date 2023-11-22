/*import { useEffect, useState } from "react";
import { Checkbox, } from "@mui/material";
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useDispatch } from "react-redux";
import { setCountry } from "../../Redux/reducers/filterReducer";



export const FilterCountry = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const filterCountry = useSelector((state: RootState) => state.filter.country)
    const [CountrySelected, setCountrySelected] = useState<string>(filterCountry);


    const handleCountrySelectedChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const value = event.target.value;

        setCountrySelected(value === CountrySelected ? '' : value)
        dispatch(setCountry(value === filterCountry ? '' : value))

        if (value === CountrySelected) {
            navigate('/loja')
        }


    };

    useEffect(() => {
        if (filterCountry !== '') {
            navigate(`/loja/pais?q=${filterCountry}`);
        }
    }, [filterCountry])


    return (
        <div className=" mt-8  mb-4 md:w-screen lg:w-60">
            <label htmlFor="faixaPreco" className="text-[#333] text-lg font-bold">Por país</label>
            <div className="select-wrapper mt-4 md:flex  lg:flex-col ">


                <div className={`option ${CountrySelected.includes('portugal') ? 'selected' : ''} flex items-center md:mr-4 lg:mr-0`}>
                    <Checkbox
                        name="countrySelected"
                        value="portugal"
                        id="portugal"
                        checked={CountrySelected.includes('portugal')}
                        onChange={handleCountrySelectedChange}
                        icon={<RadioButtonUncheckedIcon sx={{ fontSize: 20, color: '#C81A78' }} />} // Ícone quando não está marcado
                        checkedIcon={<RadioButtonCheckedIcon sx={{ fontSize: 20, color: '#C81A78' }} />} // Ícone quando está marcado
                        sx={{
                            paddingLeft: '0px'
                        }}
                    />

                    <label htmlFor="portugal" className="text-[#1D1D1B] text-sm text-center">Portugal</label>

                </div>

                <div className={`option ${CountrySelected.includes('espanha') ? 'selected' : ''} flex items-center md:mr-4 lg:mr-0`}>
                    <Checkbox
                        name="countrySelected"
                        value="espanha"
                        id="espanha"
                        checked={CountrySelected.includes('espanha')}
                        onChange={handleCountrySelectedChange}
                        icon={<RadioButtonUncheckedIcon sx={{ fontSize: 20, color: '#C81A78' }} />} // Ícone quando não está marcado
                        checkedIcon={<RadioButtonCheckedIcon sx={{ fontSize: 20, color: '#C81A78' }} />} // Ícone quando está marcado
                        sx={{
                            paddingLeft: '0px'
                        }}
                    />

                    <label htmlFor="espanha" className="text-[#1D1D1B] text-sm text-center">Espanha</label>

                </div>



                <div className={`option ${CountrySelected.includes('chile') ? 'selected' : ''} flex items-center md:mr-4 lg:mr-0`}>
                    <Checkbox
                        name="countrySelected"
                        value="chile"
                        id="chile"
                        checked={CountrySelected.includes('chile')}
                        onChange={handleCountrySelectedChange}
                        icon={<RadioButtonUncheckedIcon sx={{ fontSize: 20, color: '#C81A78' }} />} // Ícone quando não está marcado
                        checkedIcon={<RadioButtonCheckedIcon sx={{ fontSize: 20, color: '#C81A78' }} />} // Ícone quando está marcado
                        sx={{
                            paddingLeft: '0px'
                        }}
                    />

                    <label htmlFor="chile" className="text-[#1D1D1B] text-sm text-center">Chile</label>

                </div>

            </div>
        </div>
    );
}
*/