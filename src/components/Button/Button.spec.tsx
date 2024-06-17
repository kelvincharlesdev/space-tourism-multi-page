import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from './Button';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

describe(' Component <Button/>', () => {
  it('should render the button component on the screen', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button />
      </ThemeProvider>
    );
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('must have variations', () => {
    const { rerender } = render(
      <ThemeProvider theme={theme}>
        <Button text="Button Deafult Primary" />
      </ThemeProvider>
    );
    const button = screen.getByRole('button');

    expect(button).toHaveStyle(`background-color: ${theme.colors.white}`);

    rerender(
      <ThemeProvider theme={theme}>
        <Button variation="secondary" text="Button Secondary" />
      </ThemeProvider>
    );
    const buttonSecondary = screen.getByRole('button');

    expect(buttonSecondary).toHaveStyle(
      `background-color: ${theme.colors.gray100}`
    );

    rerender(
      <ThemeProvider theme={theme}>
        <Button variation="tertiary" text="Button Tertiary" />
      </ThemeProvider>
    );
    const buttonTeriary = screen.getByRole('button');

    expect(buttonTeriary).toHaveStyle(`background-color: transparent`);
    expect(buttonTeriary).toHaveStyle(
      `border: 0.125rem solid ${theme.colors.gray100};`
    );
  });

  it('must be clicked', () => {
    const onClick = jest.fn();
    render(
      <ThemeProvider theme={theme}>
        <Button onClick={onClick} />
      </ThemeProvider>
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
