import { fireEvent, render, screen, waitFor, } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import { BrowserRouter, useNavigate } from "react-router-dom";
import { PageProduct } from "../Product";
import userEvent from "@testing-library/user-event";
import addProductCart from "../../hooks/addProductCart";
import { useDispatch } from "react-redux";
import { formatarNumero } from "../../hooks/formatter";



jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
}));

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: jest.fn(),
}));

jest.mock('../../hooks/formatter.ts');
jest.mock('../../hooks/addProductCart.ts');
jest.mock('../../hooks/useGetProductId.ts', () => ({
    __esModule: true,
    default: jest.fn(() => ({
        product: {
            id: 1,
            image: 'mock.png',
            name: 'Cabernet suave',
            price: 200,
            discount: 30,
            priceMember: 150,
            priceNonMember: 200,
            type: 'seco',
            classification: 'suave',
            size: '750ml',
            volume: '750ml',
            rating: 4,
            avaliations: 4,
            country: 'portugal',
            region: 'porto',
            flag: 'mock.png',
            sommelierComment: 'muito bom'
        },
        isLoading: false,
        productNotFind: false,
    })),
}));

const mockDispatch = jest.fn();
const mockNavigate = jest.fn();
const mockFormatter = jest.fn();
const mockAddProductCart = jest.fn();

(useDispatch as jest.Mock).mockReturnValue(mockDispatch);
(useNavigate as jest.Mock).mockReturnValue(mockNavigate);
(addProductCart as jest.Mock).mockImplementation(mockAddProductCart);
(formatarNumero as jest.Mock).mockImplementation(mockFormatter)

const renderComponent = () => {
    render(
        <Provider store={store}>
            <BrowserRouter>
                <PageProduct />
            </BrowserRouter>
        </Provider>
    );
}


describe("Page Product", () => {


    it("Should render the page Product", () => {
        //Arrange
        renderComponent();

    });

    it("Should come back page vinhos", async () => {
        renderComponent();

        const linkPageVinhos = screen.getAllByRole('link', { name: /vinhos/i });

        //Act
        linkPageVinhos.forEach((item) => { expect(item).toHaveAttribute('href', '/loja'); });

    })

    it("Should add product in cart", async () => {
        renderComponent();

        const addCart = screen.getAllByRole('button', { name: /Adicionar/i });
        const quantidadeItens = screen.getByTestId('quantidadeItens');

        //Act
        userEvent.click(addCart[0]);

        //assertion
        await waitFor(() => {
            expect(mockAddProductCart).toHaveBeenCalledWith(1, mockDispatch, parseInt(quantidadeItens.textContent as string));
        })


    })


    it("Should increase amount itens cart ", async () => {
        renderComponent();

        const addCart = screen.getAllByRole('button', { name: /Adicionar/i });
        const increaseItens = screen.getAllByRole('button', { name: /\+/i });
        const resultIncrease = 2;


        //Act
        userEvent.click(increaseItens[0]);
        userEvent.click(addCart[0]);

        //assertion
        await waitFor(() => {
            expect(screen.getByTestId('quantidadeItens')).toHaveTextContent(resultIncrease.toString())
            expect(mockAddProductCart).toHaveBeenCalledWith(1, mockDispatch, resultIncrease)
        })

    })


    it("Should decrease amount itens cart ", async () => {
        renderComponent();

        const addCart = screen.getAllByRole('button', { name: /Adicionar/i });
        const decreaseItens = screen.getAllByRole('button', { name: /-/i });
        const increaseItens = screen.getAllByRole('button', { name: /\+/i });
        const result = 2;

        //Act
        userEvent.click(increaseItens[0]); //aumentando qtd = 2
        userEvent.click(increaseItens[0]); //aumentando qtd = 3
        userEvent.click(decreaseItens[0]); // diminuindo qtd = 2
        userEvent.click(addCart[0]);

        //assertion
        await waitFor(() => {
            expect(screen.getByTestId('quantidadeItens')).toHaveTextContent(result.toString())
            expect(mockAddProductCart).toHaveBeenCalledWith(1, mockDispatch, result)
        })

    })

    it("Should reder button abled/disabled", async () => {
        renderComponent();
        const increaseItens = screen.getByRole('button', { name: /\+/i });
        const decreaseItens = screen.getByRole('button', { name: /-/i });

        expect(decreaseItens).toBeDisabled();

        //Act
        userEvent.click(increaseItens);

        await waitFor(() => {
            expect(decreaseItens).not.toBeDisabled();
        })


        //Act
        userEvent.click(decreaseItens);

        await waitFor(() => {
            expect(decreaseItens).toBeDisabled();
        })


    })

    it("should call the hook formatter", () => {
        renderComponent()
        expect(mockFormatter).toHaveBeenCalled();
    })

    it("Should verify if all itens are document", () => {
        renderComponent();
        const img = screen.getByRole('img', { name: /imagem garrafa vinho/i });
        const flag = screen.getAllByRole('img', { name: /bandeira do país da portugal/i })
        const title = screen.getAllByRole('heading', { name: /cabernet suave/i });
        const country = screen.getAllByText('portugal');
        const region = screen.getAllByText('porto');
        const priceMember = screen.getByTestId('pricemember');
        const priceNoMember = screen.getByTestId('priceNoMember')


        expect(img).toBeVisible();
        flag.forEach((item) => { expect(item).toBeTruthy(); });
        title.forEach((item) => { expect(item).toBeVisible(); });
        country.forEach((item) => { expect(item).toBeVisible() });
        region.forEach((item) => { expect(item).toBeVisible() });

        expect(priceMember).toBeVisible();
        expect(priceNoMember).toBeVisible()


    })

    it("Shoud add product in cart version mobile", () => {
        renderComponent();

        const addCart = screen.getAllByRole('button', { name: /Adicionar/i });

        fireEvent.click(addCart[1])

        expect(mockAddProductCart).toHaveBeenCalledWith(1, mockDispatch, 1)
    })


})