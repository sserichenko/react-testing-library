import {render, screen} from "@testing-library/react"

import List from "./List"

const data = ['html', 'css', 'js', 'react']

describe("List component", () => {
    it('List renders', () => {
        render(<List items={data} />);
        expect(screen.getByRole('list')).toBeInTheDocument();
        expect(screen.getByText(/html/)).toBeInTheDocument();
    });
    it("List renders without data", () => {
        render(<List />);
        expect(screen.queryByRole('list')).toBeNull();
    });
    it("List empty snapshot", () => {
        const listEmpty = render(<List />);
        expect(listEmpty).toMatchSnapshot()
    });
    it("List snapshot", () => {
        const list = render(<List items={data}/>);
        expect(list).toMatchSnapshot();
    });
    
})