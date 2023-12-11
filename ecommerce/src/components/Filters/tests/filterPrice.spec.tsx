import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { FilterPrice } from '../FilterPrice';
import { store } from '../../../store/store';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import userEvent from '@testing-library/user-event';


jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
}));

jest.spyOn(URLSearchParams.prototype, 'get').mockImplementation(() => "all");

const mockDispatch = jest.fn();
const mockNavigate = jest.fn();

(useDispatch as jest.Mock).mockReturnValue(mockDispatch);
(useNavigate as jest.Mock).mockReturnValue(mockNavigate);

const renderComponent = () => {
    render(
        <Provider store={store}>
            <BrowserRouter>
                <FilterPrice />
            </BrowserRouter>
        </Provider>
    );
};

describe('FilterPrice Component', () => {
    it('renders FilterPrice component', () => {
        renderComponent();

    });

    it("handles faixaPreco change", async () => {
        //Arrange
        renderComponent();
        const button40 = screen.getByRole('checkbox', { name: /até r\$40,00/i });
        const button40a60 = screen.getByRole('checkbox', { name: /r\$40 a r\$60/i });

        //act
        userEvent.click(button40);
        userEvent.click(button40a60);

        //Assertion
        await waitFor(() => {
            expect(button40).not.toBeChecked();
            expect(button40a60).toBeChecked();
        })

    })

    it("Should unchecked checkbox", async () => {
        //Arrange
        renderComponent();
        const button40 = screen.getByRole('checkbox', { name: /até r\$40,00/i });

        //Act
        userEvent.click(button40);
        userEvent.click(button40);

        //Assertion
        await waitFor(() => { expect(button40).not.toBeChecked(); })

    })

    it("Should call dispatch", async() => {
        //Arrange
        renderComponent();
        const button40 = screen.getByRole('checkbox', { name: /até r\$40,00/i });
        const button200a500 = screen.getByRole('checkbox', {name: /r\$200 a r\$500/i})

        //Act
        userEvent.click(button40);

        //Assertion
        await waitFor(() => { 
            expect(button40).toBeChecked(); 
            expect(mockDispatch).toHaveBeenCalled();
            expect(mockNavigate).toHaveBeenCalledWith("/loja/search?pg=1&keyword=all&keyprice=0-40");
        })

        //Act 
        userEvent.click(button200a500)

        await waitFor(() => { 
            expect(button40).not.toBeChecked(); 
            expect(button200a500).toBeChecked();
            expect(mockDispatch).toHaveBeenCalled();
            expect(mockNavigate).toHaveBeenCalledWith("/loja/search?pg=1&keyword=all&keyprice=200-500");
        })

    })
});
