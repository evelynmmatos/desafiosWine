/* eslint-disable @typescript-eslint/no-explicit-any */
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import ButtonCart from '../buttonCart';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { RootState, store } from '../../../store/store';
import { Product } from '../../../types/types';
import { setProduct } from '../../../Redux/reducers/cartReducer';
import userEvent from '@testing-library/user-event';
import removeProductCart from '../../../hooks/removeProductCart';
import { useDispatch } from 'react-redux';
import addProductCart from '../../../hooks/addProductCart';


//MockCart 
const mockCart: Product[] = [
    { id: 1, name: 'Produto 1', image: 'imagem1.png', priceMember: 50, country: 'Portugal', avaliations: 4, classification: 'tinto', discount: 30, flag: 'im2.png', price: 200, priceNonMember: 200, rating: 4, region: 'porto', size: '250ml', sommelierComment: 'muito bom', type: 'seco', volume: '750' },
    { id: 1, name: 'Produto 1', image: 'imagem1.png', priceMember: 50, country: 'Portugal', avaliations: 4, classification: 'tinto', discount: 30, flag: 'im2.png', price: 200, priceNonMember: 200, rating: 4, region: 'porto', size: '250ml', sommelierComment: 'muito bom', type: 'seco', volume: '750' },
   
];


// Mocks 

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: jest.fn(),
}));

jest.mock('../../../hooks/removeProductCart.ts');
jest.mock('../../../hooks/addProductCart.ts');

const mockDispatch = jest.fn();
const mockAddProductCart = jest.fn();
const mockRemoveProductCart = jest.fn();

(useDispatch as jest.Mock).mockReturnValue(mockDispatch);
(addProductCart as jest.Mock).mockImplementation(mockAddProductCart);
(removeProductCart as jest.Mock).mockImplementation(mockRemoveProductCart);


//Renderizar o Component

const renderComponent = (initialCartState: RootState['cart']['product']) => {
    // Dispatch a ação para alterar o estado inicial do carrinho
    store.dispatch(setProduct(initialCartState));

    render(
        <Provider store={store}>
            <BrowserRouter>
                <ButtonCart />
            </BrowserRouter>
        </Provider>
    );
}

describe("ButtonCart", () => {

    beforeEach(() => {
        // Limpar mocks antes de cada teste
        jest.clearAllMocks();
    });

    it("Should render the cart icon", () => {
        //Arrange
        renderComponent([]);
        const cartIcon = screen.getByAltText("Cart Icon");
        const quantityElement = screen.getByTestId("cart-quantity");

        //Assert
        expect(cartIcon).toBeInTheDocument();
        expect(cartIcon).toBeVisible();
        expect(quantityElement).toHaveTextContent('0')
    });


    it("should open and close the cart when clicked", async () => {
        // Arrange 
        renderComponent([]);
        const cartContainer = screen.getByTestId('cart-container');

        // Act 
        expect(cartContainer).not.toBeVisible();
        fireEvent.click(screen.getByAltText('Cart Icon'));

        // Assert 
        expect(cartContainer).toBeVisible();
        expect(screen.getByText('WINE BOX')).toBeVisible();

        // Act
        fireEvent.click(cartContainer);

        // Assert
        await waitFor(() => {
            expect(screen.queryByTestId('cart-container')).not.toBeVisible();
        });
    });

    it("Should show the message of cart is empty", () => {
        renderComponent([]);
        fireEvent.click(screen.getByAltText('Cart Icon'));

        expect(screen.getByText('O carrinho está vazio :(')).toBeVisible();
    })

    it("Should render the cart icon with items", () => {
        // Arrange
        renderComponent(mockCart);

        const cartIcon = screen.getByAltText("Cart Icon");
        const quantityElement = screen.getByTestId("cart-quantity");

        // Assert
        expect(cartIcon).toBeInTheDocument();
        expect(cartIcon).toBeVisible();
        expect(quantityElement).toHaveTextContent('2'); // ou a quantidade esperada com base no mockCart
    });

    it("Should show itens in the cart", () => {
        //Arrange
        renderComponent(mockCart);
        fireEvent.click(screen.getByAltText('Cart Icon'));

        const nameProduct = screen.getByRole('heading', { name: /produto 1/i });
        const imageProduct = screen.getByRole('img', { name: /produto 1/i });
        const valueProduct = screen.getAllByTestId("total-item");
        const textValorTotal = screen.getByText('Valor total:');
        const valueTotalCart = screen.getByTestId('total-cart');
        const buttonPagar = screen.getByRole('button', { name: /ir para pagamento/i })

        //Assertions
        expect(valueProduct.length).toBeGreaterThan(0);
        expect(nameProduct).toBeVisible();
        expect(imageProduct).toBeVisible();

        valueProduct.forEach((elemento) => {
            expect(elemento).toBeVisible()
        });

        expect(textValorTotal).toBeVisible();
        expect(valueTotalCart).toBeVisible();
        expect(buttonPagar).toBeVisible();


    })


    it("Should remove the item of the cart", async () => {

        //Arrange
        renderComponent(mockCart);
        fireEvent.click(screen.getByAltText('Cart Icon'));
        const buttonRemove = screen.getAllByRole('button', { name: /X/i });
        const qtdItensPerId = screen.getAllByTestId('qtd-item')
        

        //Assertion
        expect(buttonRemove.length).toBeGreaterThan(0);
        expect(qtdItensPerId[0]).toBeVisible();


        //Act
        userEvent.click(buttonRemove[0]);

        //Assertion
        await waitFor(() => {
            expect(mockRemoveProductCart).toHaveBeenCalledWith(1, mockDispatch, parseInt(qtdItensPerId[0].textContent as string));
        });
        
    })


    it("Should increase / descrease of itens in the cart", async () => {
        //Arrange
        renderComponent(mockCart);
        fireEvent.click(screen.getByAltText('Cart Icon'));
        const buttonIncremente = screen.getByRole('button', { name: /-/i });
        const buttonDecrement = screen.getByRole('button', { name: /\+/i })

        //Act
        userEvent.click(buttonDecrement)
        userEvent.click(buttonIncremente)

        //Assertion
        await waitFor(() => {
            expect(mockRemoveProductCart).toHaveBeenCalledWith(1, mockDispatch, 1);
            expect(mockAddProductCart).toHaveBeenCalledWith(1, mockDispatch, 1);
        });
        
        
    })

})


