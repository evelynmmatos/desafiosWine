
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import { store } from '../../../store/store';
import UsePagination from '../UsePagination';


jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
}));


const mockNavigate = jest.fn();
(useNavigate as jest.Mock).mockReturnValue(mockNavigate);



const renderComponent = (totalPages: number, activePage: number, onclick: () => void) => {

    render(
        <Provider store={store}>
            <BrowserRouter>
                <UsePagination activePage={activePage} onClick={onclick} totalPages={totalPages}/>
            </BrowserRouter>
        </Provider>
    );
}

describe("Load more button", () => {
    it("Should render button perfectly", () => {

        // Arrange
        const pageActive = 2;
        const totalPages = 5;
        const onClickMock = jest.fn();

        renderComponent(totalPages, pageActive, onClickMock)

        //Assertion
        expect(screen.getByRole('button', {name: /1/i})).toBeVisible();
        expect(screen.getByRole('button', {name: /2/i})).toBeVisible();
        expect(screen.getByRole('button', {name: /3/i})).toBeVisible();
        expect(screen.getByRole('button', {name: /4/i})).toBeVisible();
        expect(screen.getByRole('button', {name: /5/i})).toBeVisible();
        expect(screen.getByRole('button', {name: /<< anterior/i})).toBeVisible();
        expect(screen.getByRole('button', {name: /próximo >>/i})).toBeVisible();

       

    })

    it("Should render button active with style active", () => {
         // Arrange
         const pageActive = 2
         const totalPages = 5;
         const onClickMock = jest.fn();
 
         renderComponent(totalPages, pageActive, onClickMock)

         const buttonActive = screen.getByRole('button', {name: /2/i});

         expect(buttonActive).toHaveStyle({
            width: '38px',
            height: '38px',
            fontWeight: 'bold',
            color: 'white',
            backgroundColor:'#B6116E',
            border: '1px solid #B6116E',
         })
    })

    it("Should change page ", () => {
        const pageActive = 2
        const totalPages = 5;
        const onClickMock = jest.fn();

        renderComponent(totalPages, pageActive, onClickMock)

        const button3 = screen.getByRole('button', {name: /3/i});
        const button4 = screen.getByRole('button', {name: /4/i});

        fireEvent.click(button3);
        

        //Assertion
        expect(onClickMock).toHaveBeenCalledWith(3);
        expect(mockNavigate).toHaveBeenCalledWith('/loja?pg=3')

        //Act
        fireEvent.click(button4);
        
        //Assertion
        expect(onClickMock).toHaveBeenCalledWith(4);
        expect(mockNavigate).toHaveBeenCalledWith('/loja?pg=4')
    })

    it("Should hide the button prev", () => {
        const pageActive = 1
        const totalPages = 5;
        const onClickMock = jest.fn();

        renderComponent(totalPages, pageActive, onClickMock)
        
        expect(screen.queryByRole('button', {name: /<< anterior/i})).toBeNull();
        
    })

    it("Should hide the button prev", () => {
        const pageActive = 5
        const totalPages = 5;
        const onClickMock = jest.fn();

        renderComponent(totalPages, pageActive, onClickMock)
        
        expect(screen.queryByRole('button', {name: /próximo >>/i})).toBeNull();
    })
})



