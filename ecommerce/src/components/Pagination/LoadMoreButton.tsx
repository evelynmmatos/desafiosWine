import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useState } from 'react';

const StyledButton = styled(Button)({
  padding: '5px',
  margin: '5px',
  color: '#B6116E',
});

type Props = {
  totalPages: number
  
  onClick: (newPage: number) => void
};

export default function LoadMoreButton({ totalPages, onClick }: Props) {
  const [pageActive, setPageActive] = useState(1);
  
  const handleLoadMore = () => {
    if (pageActive < totalPages) {
     setPageActive(pageActive + 1)
      
     onClick(pageActive + 1)
    }

  
  };


  

  return (
    <div className="w-full flex items-center justify-center mt-8 rounded">
      <StyledButton
        style={{
          width: '100%', 
          border: pageActive >= totalPages ? '1px solid #888' : '2px solid #C81A78' , 
          borderRadius: '4px', 
          padding: '8px'
        }}

        onClick={handleLoadMore}
        type="button"
        disabled={pageActive >= totalPages}
      >
        Ver mais
      </StyledButton>
    </div>
  );
}
