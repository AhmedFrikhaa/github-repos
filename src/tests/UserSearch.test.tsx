import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import UserSearch from '../components/UserSearch';
import '@testing-library/jest-dom';

describe('UserSearch Component', () => {
    test('renders input and search button', () => {
        render(<UserSearch onSearch={() => { }} />);
        expect(screen.getByLabelText(/GitHub Username/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
    });

    test('calls onSearch with input value', () => {
        const mockOnSearch = jest.fn();
        render(<UserSearch onSearch={mockOnSearch} />);

        const input = screen.getByLabelText(/GitHub Username/i);
        const button = screen.getByRole('button', { name: /search/i });

        fireEvent.change(input, { target: { value: 'test-user' } });
        fireEvent.click(button);

        expect(mockOnSearch).toHaveBeenCalledWith('test-user');
    });

    test('does not call onSearch when input is empty', () => {
        const mockOnSearch = jest.fn();
        render(<UserSearch onSearch={mockOnSearch} />);

        const button = screen.getByRole('button', { name: /search/i });
        fireEvent.click(button);

        expect(mockOnSearch).not.toHaveBeenCalled();
    });
});
