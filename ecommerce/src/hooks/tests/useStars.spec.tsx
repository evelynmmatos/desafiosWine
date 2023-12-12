import { render, screen } from '@testing-library/react';
import { UseStars } from '../useStars';

describe('UseStars', () => {
  it('should render stars for a valid rating', () => {
    render(<UseStars rating={3} />);

    const filledStars = screen.getAllByAltText('estrela');
    const emptyStars = screen.getAllByAltText('estrela vazia');
    const ratingText = screen.getByText('(3)');

    expect(filledStars).toHaveLength(3);
    expect(emptyStars).toHaveLength(2);
    expect(ratingText).toBeInTheDocument();
  });

  it('should handle invalid rating gracefully', () => {
    render(<UseStars rating={6} />);

    const invalidMessage = screen.getByText('Classificação inválida');

    expect(invalidMessage).toBeInTheDocument();
  });

  it('should handle undefined rating gracefully', () => {
    render(<UseStars rating={undefined} />);
    const invalidMessage = screen.getByText('Sem classificação');
    
    expect(invalidMessage).toBeInTheDocument();
    screen.logTestingPlaygroundURL();
  });
});
