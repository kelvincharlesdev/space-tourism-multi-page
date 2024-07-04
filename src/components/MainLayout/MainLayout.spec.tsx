import { render, screen, within } from '@testing-library/react';
import { MainLayout } from './MainLayout';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';

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
      <ThemeProvider theme={theme}>
        <MainLayout>
          <h1>Testando</h1>
        </MainLayout>
      </ThemeProvider>
    );

    const mainLayout = screen.getByTestId('main-layout');
    expect(mainLayout).toBeInTheDocument();
  });

  it('Must render the Header component inside the MainLayout component ', () => {
    render(
      <ThemeProvider theme={theme}>
        <MainLayout>
          <h1>Testando</h1>
        </MainLayout>
      </ThemeProvider>
    );

    const mainLayout = screen.getByTestId('main-layout');
    const header = within(mainLayout).getByTestId('header-container');
    expect(header).toBeInTheDocument();
  });

  it('Must render Children ', () => {
    render(
      <ThemeProvider theme={theme}>
        <MainLayout>
          <h1>Testando</h1>
        </MainLayout>
      </ThemeProvider>
    );

    const children = screen.getByText('Testando');
    expect(children).toBeInTheDocument();
  });

  it('Must contain style props ', () => {
    render(
      <ThemeProvider theme={theme}>
        <MainLayout bgImageMobile="/teste">
          <h1>Testando</h1>
        </MainLayout>
      </ThemeProvider>
    );

    const mainLayout = screen.getByTestId('main-layout');
    expect(mainLayout).toHaveStyle('background-image: url(/teste)');
  });
});
