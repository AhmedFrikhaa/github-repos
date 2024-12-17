import React from 'react';
import {
    Card,
    CardContent,
    Typography,
    Link,
    Stack,
    Box,
} from '@mui/material';
import RepoMetadata from './RepoMetadata';

interface RepoCardProps {
    name: string;
    description: string | null;
    url: string;
    language: string | null;
    stargazerCount: number;
    forkCount: number;
    updatedAt: string;
}

const RepoCard: React.FC<RepoCardProps> = ({
    name,
    description,
    url,
    language,
    stargazerCount,
    forkCount,
    updatedAt,
}) => {
    return (
        <Card
            variant="outlined"
            sx={{
                padding: { xs: 1, sm: 2 },
                margin: 'auto',
                ':hover': { boxShadow: 3, backgroundColor: '#f9f9f9' },
                maxWidth: { xs: '100%', sm: '600px' },
            }}
        >
            <CardContent>
                {/* Repository Name */}
                <Typography
                    variant="h6"
                    component="div"
                    sx={{
                        fontWeight: 600,
                        fontSize: { xs: '1rem', sm: '1.25rem' },
                        overflowWrap: 'break-word',
                    }}
                >
                    <Link
                        href={url}
                        target="_blank"
                        underline="none"
                        color="primary"
                        sx={{
                            display: 'inline-block',
                            wordWrap: 'break-word',
                        }}
                    >
                        {name}
                    </Link>
                </Typography>

                {/* Description */}
                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                        marginTop: 1,
                        fontSize: { xs: '0.8rem', sm: '1rem' },
                        overflowWrap: 'break-word',
                    }}
                >
                    {description || 'No description provided'}
                </Typography>

                {/* Metadata */}
                <Box
                    sx={{
                        marginTop: 2,
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' }, // Stack vertically on phones
                        gap: { xs: 1, sm: 2 },
                        alignItems: { xs: 'flex-start', sm: 'center' },
                    }}
                >
                    <RepoMetadata
                        language={language}
                        stars={stargazerCount}
                        forks={forkCount}
                        updatedAt={updatedAt}
                    />
                </Box>
            </CardContent>
        </Card>
    );
};

export default RepoCard;
