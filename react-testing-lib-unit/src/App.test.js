import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('TEST APP', () => {
  test('renders learn react link', () => {
    render(<App />);
    const helloWorldElem = screen.getByText(/hello world/i);
    const btn = screen.getByRole('button', { name: /click me/i });
    const input = screen.getByPlaceholderText(/enter your name/i);
    expect(helloWorldElem).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(input).toMatchSnapshot();
  });

  test('testing types', async () => {
    render(<App />);
    // const helloWorldElem = screen.queryByText(/hello world2/i);
    // expect(helloWorldElem).toBeNull();

    const helloWorldElem = await screen.findByText(/hello world2/i);
    expect(helloWorldElem).toBeInTheDocument();
    expect(helloWorldElem).toHaveClass('red');
    expect(helloWorldElem).not.toHaveStyle({ color: 'red' });
  });

  test('testing toggle elemnts', async () => {
    render(<App />);
    const toggleBtn = screen.getByTestId('toggle-btn');
    expect(screen.queryByTestId('toggle-elem')).toBeNull();
    fireEvent.click(toggleBtn);
    expect(screen.queryByTestId('toggle-elem')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.queryByTestId('toggle-elem')).not.toBeInTheDocument();
  });

  test('testing input', async () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/enter your name.../i);
    expect(input).toHaveValue('');
    expect(screen.getByTestId('value-elem')).toHaveTextContent('');
    fireEvent.change(input, { target: { value: 'hello world' } });
    expect(input).toHaveValue('hello world');
    expect(screen.getByTestId('value-elem')).toHaveTextContent('hello world');

    userEvent.type(input, ' 42');
    expect(input).toHaveValue('hello world 42');
    expect(screen.getByTestId('value-elem')).toHaveTextContent('hello world 42');
  });
});
