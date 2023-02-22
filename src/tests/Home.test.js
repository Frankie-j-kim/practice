import {render, screen} from '@testing-library/react';
import Home from 'pages/Home';

test('renders Home Component', () => {
  render(<Home />);
  const Homeelement = screen.getByText(/Home/i);
  expect(Homeelement).toBeInTheDocument();
});
