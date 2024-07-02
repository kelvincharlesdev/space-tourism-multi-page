// SideBar.spec.tsx
import { theme } from '../../../styles/theme';
import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { SideBar } from './SideBar';

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

describe('Component SideBar', () => {
  it('should render the SideBar component on the screen', () => {
    const closeModalMock = jest.fn();
    const modalIsOpen = true;

    render(
      <ThemeProvider theme={theme}>
        <SideBar closeModal={closeModalMock} modalIsOpen={modalIsOpen} />
      </ThemeProvider>
    );

    const sideBar = screen.getByTestId('sideBar');
    expect(sideBar).toBeInTheDocument();
  });

  it('must be clicked', () => {
    const closeModalMock = jest.fn();
    const modalIsOpen = true;

    render(
      <ThemeProvider theme={theme}>
        <SideBar closeModal={closeModalMock} modalIsOpen={modalIsOpen} />
      </ThemeProvider>
    );

    const closeIcon = screen.getByTestId('close');
    expect(closeIcon).toBeInTheDocument();

    fireEvent.click(closeIcon);
    expect(closeModalMock).toHaveBeenCalled();
  });
});
