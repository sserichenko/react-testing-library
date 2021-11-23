import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Search from "./Search"


describe('Search component', () => {
    const onChange = jest.fn();
    it('renders Search component', () => {
        render(<Search value="" onChange={onChange}>
            Find: 
        </Search>)
        expect(screen.getByText(/find/i)).toBeInTheDocument()
    });
    it('renders without children', () => {
        render(<Search value="" onChange={onChange} />)
        expect(screen.getByText(/search/i)).toBeInTheDocument()
    });
    it('renders without placeholder', () => {
        render(<Search value="" onChange={onChange} />)
        expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument()
    });
    it('custom placeholder is working', () => {
        render(<Search value="" onChange={onChange} placeholder="Find post ..."/>);
        expect(screen.getByPlaceholderText(/Find post .../i)).toBeInTheDocument()
    });
    it('onChange works', () => {
        render(<Search value="" onChange={onChange}>
            Find: 
            </Search>
        );
        const textbox = screen.getByRole('textbox')
        userEvent.type(textbox, 'React');

        expect(onChange).toHaveBeenCalledTimes(5)
    });
    it('dunamic styles works', () => {
        render(<Search value="abc" onChange={onChange}>
                </Search>
        );
        expect(screen.getByRole('textbox')).toHaveClass('input')
        expect(screen.getByRole('textbox')).toHaveClass('filled')
        expect(screen.getByText(/search/i)).toHaveClass('label')
    });
    it('Search snapshot', () => {
        const search = render(<Search value="abc" onChange={onChange}>Find: </Search>);
        expect(search).toMatchSnapshot();
    })
})  