import { render, screen, within } from '@testing-library/react';
import { MainLayout } from './MainLayout';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';
import { MemoryRouter } from 'react-router-dom';

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

describe('Component <Model/>', () => {
  it('Must render component', () => {
    render(
      <MemoryRouter>
        <ThemeProvider theme={theme}>
          <MainLayout />
        </ThemeProvider>
      </MemoryRouter>
    );

    const mainLayout = screen.getByTestId('main-layout');
    expect(mainLayout).toBeInTheDocument();
  });

  it('Must render the Header component inside the MainLayout component ', () => {
    render(
      <MemoryRouter>
        <ThemeProvider theme={theme}>
          <MainLayout />
        </ThemeProvider>
      </MemoryRouter>
    );

    const mainLayout = screen.getByTestId('main-layout');
    const header = within(mainLayout).getByTestId('header-container');
    expect(header).toBeInTheDocument();
  });
});
