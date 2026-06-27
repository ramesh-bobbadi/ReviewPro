import { render, screen } from '@testing-library/react';
import App from './App';

test('renders image-based review prompt', () => {
  render(<App />);
  expect(screen.getByText(/image-first review prompt/i)).toBeInTheDocument();
  expect(screen.getByText(/show the image first/i)).toBeInTheDocument();
  expect(screen.getByAltText(/sunset escape/i)).toBeInTheDocument();
});
