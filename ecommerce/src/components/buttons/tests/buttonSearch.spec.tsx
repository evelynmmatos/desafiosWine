import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';
import ButtonSearch from '../buttonSearch';

const renderComponent = () => {
    render(
        <Provider store={store}>
            <BrowserRouter>
                <ButtonSearch />
            </BrowserRouter>
        </Provider>
    );
}

describe("ButtonSearch", () => {

    it("Should render the lupa icon", () => {

        //Arrange
        renderComponent();
        const lupaIconClose = screen.getByAltText("lupa-close");

        //Assertion
        expect(lupaIconClose).toBeInTheDocument();
        expect(lupaIconClose).toBeVisible();

    });



    it("Should show/hide the input search", () => {
        renderComponent();

        //Arrange
        const lupaClose = (screen.getByAltText("lupa-close"));

        //Act
        fireEvent.click(lupaClose);

        //Assertion
        const formSearch = screen.getByTestId("form-search");
        expect(screen.getByTestId("form-search")).toBeVisible();

        //Act
        fireEvent.click(screen.getByAltText("lupa-open"));

        //Assertion
        expect(formSearch).not.toBeVisible();


    })

    it("Should update input value when typing", async() => {
        renderComponent();

        //Arrange
        const searchButton = screen.getByAltText('lupa-close');

        //Act
        fireEvent.click(searchButton);

        //Assertion
        expect(screen.getByTestId("form-search")).toBeVisible();
        expect(screen.getByPlaceholderText("Digite o vinho que você procura")).toBeVisible()

        //Arrange
        const input = screen.getByPlaceholderText("Digite o vinho que você procura");
        const buttonSubmit = screen.getByTestId('submit');

        //Act
        userEvent.click(input);
        input.focus();

        //Assertion
        expect(input).toHaveFocus();

        //Act
        userEvent.type(input, 'cabernet');

        //Assertion
        await waitFor(() => {
            // Valor esperado no input como value
            expect(input).toHaveValue("cabernet");
          });

        
    
        //Act
        fireEvent.click(buttonSubmit)

        //Assertion
        await waitFor(() => {
            expect(screen.queryByTestId("form-search")).toBeNull();
        })
        
    })

})