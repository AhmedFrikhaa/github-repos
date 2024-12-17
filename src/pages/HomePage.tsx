import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { Container, CircularProgress, Typography, Box } from '@mui/material';
import UserSearch from '../components/UserSearch';
import FilterBar from '../components/FilterBar';
import RepoList from '../components/RepoList';
import { GET_REPOSITORIES } from '../services/queries';
import client from '../services/apolloClient';
import { ApolloProvider } from '@apollo/client';

const HomePage: React.FC = () => {
    const [username, setUsername] = useState<string | null>(null);
    const [nameFilter, setNameFilter] = useState('');
    const [languageFilter, setLanguageFilter] = useState('');

    const { loading, error, data } = useQuery(GET_REPOSITORIES, {
        variables: { username },
        skip: !username,    // Skip the query if username is null
    });

    const handleSearch = (name: string) => {
        setUsername(name);
    };

    const handleFilterChange = (name: string, language: string) => {
        setNameFilter(name);
        setLanguageFilter(language);
    };

    // Apply filters locally to the fetched data
    const filteredRepos = data?.user?.repositories?.nodes.filter((repo: any) => {
        return (
            (repo.name.toLowerCase().includes(nameFilter.toLowerCase()) || nameFilter === '') &&
            (repo.primaryLanguage?.name === languageFilter || languageFilter === '')
        );
    });

    return (
        <ApolloProvider client={client}>
            <Container maxWidth="md" sx={{ marginTop: 4 }}>
                <UserSearch onSearch={handleSearch} />
                {username && (
                    <FilterBar
                        searchTerm={nameFilter}
                        languageFilter={languageFilter}
                        onFilterChange={handleFilterChange}
                    />
                )}

                {loading && (
                    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
                        <CircularProgress />
                    </Box>
                )}

                {error && (
                    <Typography color="error" align="center" sx={{ marginTop: 2 }}>
                        Error: {error.message}
                    </Typography>
                )}

                {filteredRepos && <RepoList repos={filteredRepos} />}
            </Container>
        </ApolloProvider>
    );
};

export default HomePage;
