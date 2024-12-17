import React from 'react';
import { Box, TextField, Autocomplete } from '@mui/material';

interface FilterBarProps {
    searchTerm: string;
    languageFilter: string;
    onFilterChange: (name: string, language: string) => void;
}

const languages = ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'C#', 'Go', 'Ruby', 'PHP', 'Other'];

const FilterBar: React.FC<FilterBarProps> = ({ searchTerm, languageFilter, onFilterChange }) => {
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onFilterChange(e.target.value, languageFilter);
    };

    const handleLanguageChange = (event: React.ChangeEvent<{}>, value: string | null) => {
        onFilterChange(searchTerm, value || '');
    };

    return (
        <Box
            sx={{
                display: 'flex',
                gap: 2,
                marginBottom: 4,
            }}
        >
            <TextField
                label="Filter by name"
                variant="outlined"
                value={searchTerm}
                onChange={handleNameChange}
                fullWidth
            />
            <Autocomplete
                options={languages}
                value={languageFilter}
                onChange={handleLanguageChange}
                renderInput={(params) => <TextField {...params} label="Filter by language" variant="outlined" />}
                fullWidth
            />
        </Box>
    );
};

export default FilterBar;
