import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter, useLocation, useNavigate } from "react-router-dom";
import App from "../App";
import { Provider, useDispatch } from "react-redux";
import { store } from "../store/store";
import userEvent from "@testing-library/user-event";

// Mock das dependências
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
    useLocation: jest.fn()
}));

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: jest.fn(),
}));


const mockNavigate = jest.fn();
const mockLocation = jest.fn();
const mockDispatch = jest.fn();

(useDispatch as jest.Mock).mockReturnValue(mockDispatch);
(useNavigate as jest.Mock).mockReturnValue(mockNavigate);
(useLocation as jest.Mock).mockReturnValue(mockLocation);

jest.spyOn(URLSearchParams.prototype, 'get').mockImplementation(() => "/");


const renderComponent = () => {
    render(
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    );
}



describe("App", () => {
    it("should handle page initial on logo click", async () => {
        renderComponent()

        const logo = screen.getAllByRole('img', {name: /logo wine/i})

        userEvent.click(logo[0]);

        await waitFor(() => {
            expect(mockNavigate).toHaveBeenCalledWith('/loja');
            
        });

        userEvent.click(logo[1]);

        await waitFor(() => {
            expect(mockNavigate).toHaveBeenCalledWith('/loja');
            
        });


        screen.logTestingPlaygroundURL();
    });
    
    it("should render desktop navigation links", async() => {
        renderComponent();

        const clubeLink = screen.getByRole("link", { name: /clube/i });
        const lojaLink = screen.getByRole("link", { name: /loja/i });
        const produtoresLink = screen.getByRole("link", { name: /produtores/i });
        const ofertasLink = screen.getByRole("link", { name: /ofertas/i });
        const eventosLink = screen.getByRole("link", { name: /eventos/i });

        expect(clubeLink).toBeInTheDocument();
        expect(lojaLink).toBeInTheDocument();
        expect(produtoresLink).toBeInTheDocument();
        expect(ofertasLink).toBeInTheDocument();
        expect(eventosLink).toBeInTheDocument();

       
        expect(clubeLink).toHaveAttribute('href', '/clube')
        expect(lojaLink).toHaveAttribute('href', '/loja')
        expect(produtoresLink).toHaveAttribute('href', '/produtores')
        expect(ofertasLink).toHaveAttribute('href', '/ofertas')
        expect(eventosLink).toHaveAttribute('href', '/eventos')
            
     
        
    });
    
    it("should render search and cart buttons", () => {
        renderComponent();

        const searchButton = screen.getByTestId("buttonSearch");
        const cartButton = screen.getByTestId("cart-container");
        const userButton = screen.getByRole("link", { name: /user/i });

        expect(searchButton).toBeInTheDocument();
        expect(cartButton).toBeInTheDocument();
        expect(userButton).toHaveAttribute("href", "/user");

        // Adicione expectativas adicionais conforme necessário
    })
});
