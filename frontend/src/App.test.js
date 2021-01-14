import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe('renders recipes', () => {
  it('renders <App /> component', () => {
    const { getByText } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const linkElement = getByText(/Recipes/i);
    expect(linkElement).toBeInTheDocument();
  })
});
