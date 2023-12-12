import { Provider } from "react-redux";
import { store } from "../../../store/store";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { NavLink } from "..";
import { render, screen, waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event";


type navLinkProps = {
    to: string,
    label: string,
    activeLink?: string,
    onClick: jest.Mock;
};

const mockOnClick = jest.fn();

const renderComponent = ({ to, label, onClick, activeLink }: navLinkProps) => {

    render(
        
       <NavLink to={to} label={label} onClick={onClick} activeLink={activeLink} />
          
    );
}


describe("NavLink", () => {

    it("Shoud render navLink", () => {
        const navLink = {
            to: '/loja',
            label: 'loja',
            onClick: mockOnClick
        };

        renderComponent(navLink);  
        const link = screen.getByRole('link', {name: /loja/i});
        expect(link).toBeVisible();
        expect(link).toHaveClass('text-[#555555] border-[#D5D5D5] border-b-[3px] pb-8 hover:text-[#D14B8F] hover:border-[#D14B8F]')
    })

    it("Should change style with click", async() => {
        const navLink = {
            to: '/loja',
            label: 'loja',
            activeLink: '/loja',
            onClick: mockOnClick
        };

        renderComponent(navLink);  
        const link = screen.getByRole('link', {name: /loja/i});

        expect(link).toHaveClass('text-[#D14B8F] border-[#D14B8F] border-b-[3px] pb-8 hover:text-[#D14B8F] hover:border-[#D14B8F]')
    
    })


    it("Should change style with click", async() => {
        const navLink = {
            to: '/loja',
            label: 'loja',
            onClick: mockOnClick  
        };

        renderComponent(navLink);  
        const link = screen.getByRole('link', {name: /loja/i});

        userEvent.click(link);

        await waitFor(() => {
            expect(mockOnClick).toHaveBeenCalled();
        })
        
    
    })


})
