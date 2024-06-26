import { render, screen } from '@testing-library/react';
import { Links } from './Links';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';

interface MenuItem {
  id: number;
  label: string;
  link: string;
  number: string;
}

describe('Component <Links />', () => {
  it('should render the Links component on the screen', () => {
    const mockMenu: MenuItem[] = [
      { id: 1, label: 'Home', link: '/', number: '1' },
      { id: 2, label: 'About', link: '/about', number: '2' }
    ];
    render(
      <ThemeProvider theme={theme}>
        {mockMenu.map(menu => (
          <Links key={menu.id} menu={menu} />
        ))}
      </ThemeProvider>
    );

    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(mockMenu.length);
  });
});
