import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders initial todos correctly', () => {
    render(<TodoList />);
    
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getByText('Write Tests')).toBeInTheDocument();
    expect(screen.getAllByRole('button', { name: /delete/i })).toHaveLength(3);
  });

  test('adds a new todo', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText('Add a new todo...');
    const addButton = screen.getByText('Add Todo');

    await user.type(input, 'New Test Todo');
    await user.click(addButton);

    expect(screen.getByText('New Test Todo')).toBeInTheDocument();
    expect(screen.getAllByRole('button', { name: /delete/i })).toHaveLength(4);
  });

  test('toggles todo completion status', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    const todoText = screen.getByText('Learn React');
    await user.click(todoText);

    expect(todoText).toHaveStyle('text-decoration: line-through');
    
    await user.click(todoText);
    expect(todoText).not.toHaveStyle('text-decoration: line-through');
  });

  test('deletes a todo', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    const deleteButtons = screen.getAllByRole('button', { name: /delete/i });
    const initialCount = deleteButtons.length;
    
    await user.click(deleteButtons[0]);

    expect(screen.getAllByRole('button', { name: /delete/i })).toHaveLength(initialCount - 1);
    expect(screen.queryByText('Learn React')).not.toBeInTheDocument();
  });

  test('does not add empty todo', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    const initialTodoCount = screen.getAllByRole('button', { name: /delete/i }).length;
    const addButton = screen.getByText('Add Todo');

    await user.click(addButton);

    expect(screen.getAllByRole('button', { name: /delete/i })).toHaveLength(initialTodoCount);
  });
});
