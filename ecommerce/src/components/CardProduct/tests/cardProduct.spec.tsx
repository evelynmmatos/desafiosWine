
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';
import { CardProduct } from '..';
import { useDispatch } from 'react-redux';
import addProductCart from '../../../hooks/addProductCart';
import userEvent from '@testing-library/user-event';

// Mock das dependências
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));

jest.mock('../../../hooks/addProductCart.ts', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('CardProduct', () => {
  beforeEach(() => {
    // Limpar mocks antes de cada teste
    jest.clearAllMocks();
  });

  it('renders CardProduct correctly', async() => {
    // Configurar mocks de dependências
    const mockNavigate = jest.fn();
    const mockDispatch = jest.fn();
    const mockAddProductCart = jest.fn();

    (useDispatch as jest.Mock).mockReturnValue(mockDispatch);
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
    (addProductCart as jest.Mock).mockImplementation(jest.fn());

    // Propriedades do produto
    const productProps = {
      id: 1,
      image: 'mock-image',
      flag: 'mock-flag',
      title: 'Mock Product',
      price: 100,
      discount: 10,
      priceMember: 90,
      priceNonMember: 100,
    };

    // Renderizar componente
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CardProduct {...productProps} />
        </BrowserRouter>
      </Provider>
    );

    // Verificar se o componente foi renderizado corretamente
    expect(screen.getByTestId('product-container')).toBeInTheDocument();
    expect(screen.getByText('Mock Product')).toBeInTheDocument();

    

    // Simular clique no botão ADICIONAR
    userEvent.click(screen.getByText('ADICIONAR'));

    // Verificar se a função de adicionar ao carrinho foi chamada corretamente
    await waitFor(() => {
        expect(mockAddProductCart).toHaveBeenCalledWith(1, mockDispatch);
    });
  });
});
