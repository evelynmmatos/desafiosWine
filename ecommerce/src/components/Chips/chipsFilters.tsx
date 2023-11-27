
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { useDispatch } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { setPrice } from '../../Redux/reducers/filterReducer';



type ChipsType = {
    price: string | null
    search: string | null
}


export default function ChipsFilters({price, search}: ChipsType) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [searchParams] = useSearchParams();
    const KeyPrice = searchParams.get("keyprice");
    const KeyWord = searchParams.get("keyword")

  const handleDelete = (type: string) => {
    
    if(type == 'search'){
        navigate(`/loja/search?pg=1&keyword=all&keyprice=${KeyPrice}`);
    }

    if(type == 'price'){
        dispatch(setPrice(''))
        navigate(`/loja/search?pg=1&keyword=${KeyWord}&keyprice=all`);
    }

  }

  return (
    <Stack direction="row" spacing={1} sx={{display: 'inline-block', marginLeft: '15px', marginBottom: '10px'}}>
        {search != 'all' &&
            <Chip 
                label={search} 
                onDelete={() => handleDelete('search')} 
                sx={{
                    border: '1px solid #C81A78',
                    backgroundColor: 'white',
                    '& .MuiSvgIcon-root': {
                        fill: '#C81A78'
                    }
                }}
               
            />
        }

        {price != 'all' && 
            <Chip 
                label={`R$ ${price}`} 
                onDelete={() => handleDelete('price')} 
                sx={{
                    border: '1px solid #C81A78',
                    backgroundColor: 'white',
                    '& .MuiSvgIcon-root': {
                        fill: '#C81A78'
                    }
                }}
            />
        }
      
    </Stack>
  );
}
