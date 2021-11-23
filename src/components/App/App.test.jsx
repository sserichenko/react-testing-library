import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import App from './App';

describe("App component", () => {
  it("App render", () => {
      render(<App />);
    const linkElement = screen.getByText(/react/i);
    expect(linkElement).toBeInTheDocument();
    expect(screen.getByText(/Find course:/i)).toBeInTheDocument();
  });
  it("typing in searchBox works", () => {
    render(<App />);
    expect(screen.queryByDisplayValue(/React/)).toBeNull();
    userEvent.type(screen.getByRole('textbox'), 'React');
    expect(screen.queryByDisplayValue(/React/)).toBeInTheDocument();
  });
  it('search filter works', () => {
    render(<App />);
    expect(screen.getByText(/Vue/)).toBeInTheDocument();
    expect(screen.getByText(/JavaScript/)).toBeInTheDocument();
    userEvent.type(screen.getByRole('textbox'), 'React');
    expect(screen.queryByText(/Vue/)).not.toBeInTheDocument();
    expect(screen.queryByText(/React/i)).toBeInTheDocument();

  })
  it('App snapshot', () => {
    const app = render(<App />);
    expect(app).toMatchSnapshot();
  })
})


