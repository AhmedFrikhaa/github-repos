import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FilterBar from '../components/FilterBar';

describe('FilterBar Component', () => {
    test('calls onFilterChange when a language is selected', async () => {
        const mockOnFilterChange = jest.fn();
        render(<FilterBar searchTerm="" languageFilter="" onFilterChange={mockOnFilterChange} />);

        // Simulate selecting a language from the dropdown
        const languageInput = screen.getByRole('combobox'); // Assuming the language filter uses a combobox
        await userEvent.click(languageInput);

        const languageOption = screen.getByText('JavaScript');
        await userEvent.click(languageOption);

        expect(mockOnFilterChange).toHaveBeenCalledWith('', 'JavaScript');
    });
});
