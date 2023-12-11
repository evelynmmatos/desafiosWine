import { Provider } from 'react-redux';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { store } from '../../../store/store';
import ChipsFilters from '../chipsFilters';
import { useDispatch } from 'react-redux';



jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
}));





const mockDispatch = jest.fn();
const mockNavigate = jest.fn();
(useDispatch as jest.Mock).mockReturnValue(mockDispatch);
(useNavigate as jest.Mock).mockReturnValue(mockNavigate);

const renderComponent = (price: string, search: string) => {

    render(
        <Provider store={store}>
            <BrowserRouter>
                <ChipsFilters price={price} search={search} />
            </BrowserRouter>
        </Provider>
    );
}

describe("Render Chips", () => {
    it("Should not render chips", () => {
        const price = 'all';
        const search = 'all';

        renderComponent(price, search);
        const textSearch = screen.queryByText(/all/i);
        expect(textSearch).toBeNull();

    })

    it("Should render chips", () => {
        const price = '100-200';
        const search = 'canepa';
        renderComponent(price, search);

        const textPrice = screen.getByText(/r\$ 100-200/i);
        const textSearch = screen.getByText(/canepa/i);
        const buttonCancel = screen.getAllByTestId('CancelIcon');


        expect(textPrice).toBeVisible();
        expect(textSearch).toBeVisible();
        expect(buttonCancel.length).toBeGreaterThan(1);

        buttonCancel.forEach((item) => {
            expect(item).toBeVisible();
        })


    })


    it("Should remove chip search", () => {
        const price = '100-200';
        const search = 'canepa';
        renderComponent(price, search);

        const textPrice = screen.getByText(/r\$ 100-200/i);
        const textSearch = screen.getByText(/canepa/i);
        const buttonremove = screen.getAllByTestId('CancelIcon');

        expect(textPrice).toBeVisible();
        expect(textSearch).toBeVisible();
        expect(buttonremove.length).toBeGreaterThan(1);

        buttonremove.forEach((item) => {
            expect(item).toBeVisible();
        })

        //Act

        fireEvent.click(buttonremove[0]);

        expect(mockNavigate).toHaveBeenCalled()
        expect(mockNavigate).toHaveBeenCalledWith('/loja/search?pg=1&keyword=all&keyprice=null');


    })

    it("Should remove chip price", async () => {
        const price = '100-200';
        const search = 'canepa';
        renderComponent(price, search);

        const textPrice = screen.getByText(/r\$ 100-200/i);
        const textSearch = screen.getByText(/canepa/i);
        const buttonremove = screen.getAllByTestId('CancelIcon');

        expect(textPrice).toBeVisible();
        expect(textSearch).toBeVisible();
        expect(buttonremove.length).toBeGreaterThan(1);

        buttonremove.forEach((item) => {
            expect(item).toBeVisible();
        })

        //Act

        fireEvent.click(buttonremove[1]);

        //Assertion
        await waitFor(() => {
            expect(mockDispatch).toHaveBeenCalled();
            expect(mockNavigate).toHaveBeenCalledWith('/loja/search?pg=1&keyword=null&keyprice=all');
            
        })



    })





})