import { render, screen } from '@testing-library/react';
import { Model } from './Models';

describe('Component <Model/>', () => {
  it('should render the Model component on the screen', () => {
    render(<Model>Ola</Model>);
    const model = screen.getByText('Ola');
    expect(model).toBeInTheDocument();
  });
});