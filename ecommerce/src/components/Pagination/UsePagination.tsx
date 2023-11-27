
import usePagination from '@mui/material/usePagination';
import { styled } from '@mui/material/styles';
import { useNavigate, useSearchParams } from 'react-router-dom';


const List = styled('ul')({
  listStyle: 'none',
  padding: 10,
  margin: 20,
  display: 'flex',
  
});

type Props = {
  totalPages: number
  activePage: number
  onClick: (newPage: number) => void
  
}

export default function UsePagination({totalPages, activePage, onClick}:Props) {
  const isMobile = window.innerWidth < 768;
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const keyword = searchParams.get("keyword");
  const KeyPrice = searchParams.get("keyprice");

  const handlePageClick = (newPage: number) => {
    
    onClick(newPage);
    if(keyword || KeyPrice){
      navigate(`/loja/search?pg=${newPage}&keyword=${keyword}&keyprice=${KeyPrice}`)
    }else {
      navigate(`/loja?pg=${newPage}`)
    }
  };
  
  

  const { items } = usePagination({
    count: totalPages,
    page: activePage,
  });

  return (
    <nav className='w-full flex items-center justify-center text-[#B6116E]'>
         
      <List>
        {items.map(({ page, type, selected, disabled,   }, index) => {
          let children  = null;
          
           
          if (type === 'start-ellipsis' || type === 'end-ellipsis') {
            children = '…';
          } else if (type === 'page') {
            children = (
              <button
                onClick={() => handlePageClick(page as number)}
                type="button"
                style={{
                    width: isMobile ? (selected ? '38px' : '30px') : '38px',
                    height: isMobile ? (selected ? '38px' : '30px') : '38px',
                    padding: '5px',
                    margin: '5px',
                    textAlign: 'center',
                    fontWeight: selected ? 'bold' : undefined,
                    color: selected ? 'white' : '#B6116E',
                    backgroundColor: selected ? '#B6116E' : 'white',
                    border: '1px solid #B6116E',
                    borderRadius: '3px',
                    outline: 'none'
                  
                }}
               
              >
                {page}
              </button>
            );


          } else if(page == 0 || page === items.length -1 || isMobile){

            children = (
                disabled
            )
          }else{

            children = (
                
              <button 
                onClick={() => handlePageClick(page as number)}
                type="button" 
                style={{
                    padding: '5px',
                    margin: '5px',  
                    color:'#B6116E'  ,

                }}

                     >
                {type == 'next' ? 'Próximo >>' : '<< Anterior '}
              </button>
            );
          }

          return <li key={index}>{children}</li>;
        })}
      </List>
    </nav>
  );
}