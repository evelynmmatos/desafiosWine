import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';

const StyledButton = styled(Button)({
  padding: '5px',
  margin: '5px',
  color: '#B6116E',
});

type Props = {
  onLoadMore: (pageActive: number) => void;
  totalPages: number;
};

export default function LoadMoreButton({ onLoadMore, totalPages }: Props) {
  const [pageActive, setPageActive] = useState(1);

  useEffect(() => {
    
  }, [pageActive]);

  const handleLoadMore = () => {
    if (pageActive < totalPages) {
      
      onLoadMore(pageActive + 1);
      setPageActive((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className="w-full flex items-center justify-center mt-8 rounded border-2 border-[#C81A78]">
      <StyledButton
        style={{width: '100%'}}
        onClick={handleLoadMore}
        type="button"
        disabled={pageActive >= totalPages}
      >
        Ver mais
      </StyledButton>
    </div>
  );
}
