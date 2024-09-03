import { render, screen } from '@testing-library/react';
import Note from './Note';

test('renders learn react link', () => {
  render(<Note />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
