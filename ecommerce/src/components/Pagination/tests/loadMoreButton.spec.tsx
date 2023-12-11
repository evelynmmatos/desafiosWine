
import { render, screen, fireEvent } from '@testing-library/react';
import LoadMoreButton from '../LoadMoreButton';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../../../store/store';


const renderComponent = (totalPages: number, onclick: () => void) => {

    render(
        <Provider store={store}>
            <BrowserRouter>
                <LoadMoreButton totalPages={totalPages} onClick={onclick} />
            </BrowserRouter>
        </Provider>
    );
}

describe("Load more button", () => {
    it("Should render button enabled", () => {

        // Arrange
        const totalPages = 3;
        const onClickMock = jest.fn();

        renderComponent(totalPages, onClickMock)

        const button = screen.getByText('Ver mais');

        //Act
        fireEvent.click(button);

        // Assertion
        expect(button).toBeEnabled();
        expect(onClickMock).toHaveBeenCalledWith(2);

    })

    it("Should render button disable", () => {
        // Arrange
        const totalPages = 2;
        const onClickMock = jest.fn();

        renderComponent(totalPages, onClickMock)

        const button = screen.getByText('Ver mais');

        //Act
        fireEvent.click(button);

        //Assertion
        expect(onClickMock).toHaveBeenCalledWith(2);
        expect(button).toBeDisabled();
    })

    it("Should render button with style correct", () => {
        const totalPages = 2;
        const onClickMock = jest.fn();

        renderComponent(totalPages, onClickMock)

        const button = screen.getByText('Ver mais');

        expect(button).toBeEnabled();
        expect(button).toHaveStyle({
            width: '100%',
            border: '2px solid #C81A78',
            borderRadius: '4px',
            padding: '8px',
        });

        //Act
        fireEvent.click(button);

        //Assertion
        expect(button).toBeDisabled();
        expect(button).toHaveStyle({
            width: '100%',
            border: '1px solid #888',
            borderRadius: '4px',
            padding: '8px',
        });
    })

    it("should stay disabled when clicked", () => {
        const totalPages = 2;
        const onClickMock = jest.fn();

        renderComponent(totalPages, onClickMock)

        const button = screen.getByText('Ver mais');

        //Act
        fireEvent.click(button);
        fireEvent.click(button);
        fireEvent.click(button);

        //Assertion
        expect(button).toBeDisabled();
    })
})


