import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter, useNavigate } from "react-router-dom";
import MenuMobile from "..";
import { store } from "../../../store/store";



jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

const mockNavigate = jest.fn();
(useNavigate as jest.Mock).mockReturnValue(mockNavigate);

const renderComponent = () => {
    render(
        <Provider store={store}>
            <BrowserRouter>
                <MenuMobile />
            </BrowserRouter>
        </Provider>
    );
};

describe('FilterPrice Component', () => {
    it('renders FilterPrice component', () => {
        renderComponent();

        //Arrange
        const IconMenu = screen.getByRole('img', { name: /icone-menu/i });
        const IconLogo = screen.getByRole('img', { name: /logo wine/i });

        //Assert

        expect(IconMenu).toBeVisible();
        expect(IconLogo).toBeVisible();
        expect(screen.getByText('Acesse sua conta')).not.toBeVisible();

    });

    it('toggleDrawer opens and closes correctly', async () => {
        renderComponent();

        // Arrange
        const toggleDrawer = screen.getByTestId('toggleDrawer');
        const openButton = screen.getByTestId('openButton');

        // Assert
        expect(toggleDrawer).not.toBeVisible();

        // Act
        fireEvent.click(openButton);

        // Assert
        expect(toggleDrawer).toBeInTheDocument();
        expect(toggleDrawer).toBeVisible();

        // Act
        fireEvent.click(toggleDrawer);

        // Assert
        await waitFor(() => {
            expect(toggleDrawer).not.toBeVisible();
        })

    });


    it("Shoud render links", async() => {
    
        //Arrange
        renderComponent();
        const openButton = screen.getByTestId('openButton');

        //Act
        fireEvent.click(openButton);

        //Arrange
        const buttonEntrar = screen.getByRole('link', {name: /entrar →/i});
        const buttonClube = screen.getByRole('link', {name: /clube/i});
        const buttonLoja = screen.getByRole('link', {name: /loja/i});
        const buttonProdutores = screen.getByRole('link', {name: /produtores/i});
        const buttonOfertas = screen.getByRole('link', {name: /ofertas/i});
        const buttonEventos = screen.getByRole('link', {name: /eventos/i});

       //Assertions

       expect(buttonEntrar).toBeVisible();
       expect(buttonClube).toBeVisible();
       expect(buttonLoja).toBeVisible();
       expect(buttonProdutores).toBeVisible();
       expect(buttonOfertas).toBeVisible();
       expect(buttonEventos).toBeVisible();

       const link = screen.getByText("Clube");

       // Simule o clique no link
       fireEvent.click(link);
     
       // Verifique se a URL mudou
       
       
       await waitFor(() => {
        expect(window.location.pathname).toBe("/clube");
       })

        
    });

})