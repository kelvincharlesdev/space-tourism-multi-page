import { theme } from '@/styles/theme';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Header } from './Header';

jest.mock('react-modal', () => {
  const Modal = ({
    isOpen,
    children
  }: {
    isOpen: boolean;
    children: React.ReactNode;
  }) => {
    return isOpen ? <div>{children}</div> : null;
  };

  Modal.setAppElement = jest.fn();
  return Modal;
});

describe('<Component Header>', () => {
  it('Shoud render component', () => {
    render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    );

    const header = screen.getByTestId('header-container');
    expect(header).toBeInTheDocument();
  });
});
