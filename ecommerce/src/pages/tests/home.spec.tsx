import { render, screen } from '@testing-library/react';
import { BrowserRouter} from 'react-router-dom';
import { Home } from '../Home';
import useGetProducts from '../../hooks/useGetProducts';
import { Provider } from 'react-redux';
import { store } from '../../store/store';


// Mock do hook useGetProducts para simular o comportamento
jest.mock('../../hooks/useGetProducts.ts')

// Mock dos dados retornados pelo hook
const mockProductsData = {
    products: [
        { id: 1, name: 'Produto 1', image: 'imagem1.png', priceMember: 50, country: 'Portugal', avaliations: 4, classification: 'tinto', discount: 30, flag: 'im2.png', price: 200, priceNonMember: 200, rating: 4, region: 'porto', size: '250ml', sommelierComment: 'muito bom', type: 'seco', volume: '750' },
        { id: 2, name: 'Produto 2', image: 'imagem1.png', priceMember: 150, country: 'Portugal', avaliations: 4, classification: 'tinto', discount: 30, flag: 'im2.png', price: 200, priceNonMember: 200, rating: 4, region: 'porto', size: '250ml', sommelierComment: 'muito bom', type: 'seco', volume: '750' },
    ],
    pageActive: 1,
    totalPages: 3,
    totalItems: 15,
    handlePageChange: jest.fn(),
    isLoading: false,
};

// Simula a função useGetProducts para retornar os dados mockados
beforeEach(() => {
    (useGetProducts as jest.Mock).mockReturnValue(mockProductsData);
});


const renderComponent = () => {
    render(
        <Provider store={store}>
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        </Provider>
    );
}


describe("Home", () => {
    it('renders Home component with products', async () => {
        renderComponent()

        const totalItemsElement = screen.getByTestId('findProducts');
        expect(totalItemsElement).toHaveTextContent(`${mockProductsData.totalItems}`);
    })


    it("renders Home component with no products", async () => {
        const mockNoProductsData = { ...mockProductsData, products: [], totalPages: 0, pageActive: 0, totalItems: 0 };
        (useGetProducts as jest.Mock).mockReturnValue(mockNoProductsData);

        renderComponent();

        const noProductsElement = screen.getByRole('heading', {
            name: /opa! o produto que você está tentando acessar não existe ou não está disponível\./i
          })
        //const noProductsElement = screen.getByTitle('Opa! O produto que você está tentando acessar não existe ou não está disponível.');
        expect(noProductsElement).toBeInTheDocument();
        
        
    })

    
    it("renders Home component with no is loading true", async () => {
        const mockNoProductsData = { ...mockProductsData, products: [], totalPages: 0, pageActive: 0, totalItems: 0 , isLoading: true};
        (useGetProducts as jest.Mock).mockReturnValue(mockNoProductsData);

        renderComponent();

        const skeletonLoading = screen.getByTestId('skeletonLoading');
        expect(skeletonLoading).toBeVisible();
        
        
    })
})

