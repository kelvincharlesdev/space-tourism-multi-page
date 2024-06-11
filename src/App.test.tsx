import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('App test', () => {
  it('should render App component', () => {
    render(<App />);
    expect(screen.getByText('Vite + React')).toBeInTheDocument();
  });

  it('should start with count 0', () => {
    render(<App />);
    expect(screen.getByText('count is 0')).toBeInTheDocument();
  });

  it('should increment count when button is clicked', () => {
    render(<App />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(screen.getByText('count is 1')).toBeInTheDocument();
    fireEvent.click(button);
    expect(screen.getByText('count is 2')).toBeInTheDocument();
  });
});
