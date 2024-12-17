import React from 'react';
import {
    Card,
    CardContent,
    Typography,
    Box,
    Link,
    Grid,
    Stack,
    Tooltip,
} from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ForkRightIcon from '@mui/icons-material/ForkRight';
import CircleIcon from '@mui/icons-material/Circle';

interface Repo {
    id: number;
    name: string;
    language: string | null;
    description: string | null;
    url: string;
    stargazerCount: number;
    forkCount: number;
    updatedAt: string;
}

interface RepoListProps {
    repos: Repo[];
}

const RepoList: React.FC<RepoListProps> = ({ repos }) => {
    if (repos.length === 0) {
        return <Typography>No repositories found.</Typography>;
    }

    return (
        <Grid container spacing={2}>
            {repos.map((repo) => (
                <Grid item xs={12} key={repo.id}>
                    <Card
                        variant="outlined"
                        sx={{
                            padding: 2,
                            ':hover': { boxShadow: 3, backgroundColor: '#f9f9f9' },
                        }}
                    >
                        <CardContent>
                            {/* Repository Name and Description */}
                            <Typography variant="h6" component="div" sx={{ fontWeight: 600 }}>
                                <Link href={repo.url} target="_blank" underline="none" color="primary">
                                    {repo.name}
                                </Link>
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ marginTop: 1 }}>
                                {repo.description || 'No description provided'}
                            </Typography>

                            {/* Repository Metadata */}
                            <Stack direction="row" spacing={2} alignItems="center" sx={{ marginTop: 1 }}>
                                <Tooltip title="Language">
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        {repo.language && (
                                            <>
                                                <CircleIcon sx={{ fontSize: 12, marginRight: 0.5 }} />
                                                <Typography variant="body2">{repo.language}</Typography>
                                            </>
                                        )}
                                    </Box>
                                </Tooltip>
                                <Tooltip title="Stars">
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <StarBorderIcon fontSize="small" sx={{ marginRight: 0.5 }} />
                                        <Typography variant="body2">{repo.stargazerCount}</Typography>
                                    </Box>
                                </Tooltip>
                                <Tooltip title="Forks">
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <ForkRightIcon fontSize="small" sx={{ marginRight: 0.5 }} />
                                        <Typography variant="body2">{repo.forkCount}</Typography>
                                    </Box>
                                </Tooltip>
                                <Typography variant="body2" color="text.secondary">
                                    Updated on {new Date(repo.updatedAt).toLocaleDateString()}
                                </Typography>
                            </Stack>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default RepoList;
