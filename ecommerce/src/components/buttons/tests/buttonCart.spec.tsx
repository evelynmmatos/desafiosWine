/* eslint-disable @typescript-eslint/no-explicit-any */
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import ButtonCart from '../buttonCart';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';


const renderComponent = () => {
    render(
        <Provider store={store}>
            <BrowserRouter>
                <ButtonCart />
            </BrowserRouter>
        </Provider>
    );
}

describe("ButtonCart", () => {

    it("Should render the cart icon", () => {
        //Arrange
        renderComponent();
        const cartIcon = screen.getByAltText("Cart Icon");
        const quantityElement = screen.getByTestId("cart-quantity");

        //Assert
        expect(cartIcon).toBeInTheDocument();
        expect(cartIcon).toBeVisible();
        expect(quantityElement).toHaveTextContent('0')
    });


    it("should open and close the cart when clicked", async () => {
        // Arrange 
        renderComponent();
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


})



