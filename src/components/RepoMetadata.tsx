import React from 'react';
import { Box, Typography, Tooltip } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ForkRightIcon from '@mui/icons-material/ForkRight';
import CircleIcon from '@mui/icons-material/Circle';

interface RepoMetadataProps {
    language: string | null;
    stars: number;
    forks: number;
    updatedAt: string;
}

const RepoMetadata: React.FC<RepoMetadataProps> = ({ language, stars, forks, updatedAt }) => {
    return (
        <>

            {language && (
                <Tooltip title="Language">
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <CircleIcon sx={{ fontSize: 12, marginRight: 0.5 }} />
                        <Typography variant="body2">{language}</Typography>
                    </Box>
                </Tooltip>
            )}


            <Tooltip title="Stars">
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <StarBorderIcon fontSize="small" sx={{ marginRight: 0.5 }} />
                    <Typography variant="body2">{stars}</Typography>
                </Box>
            </Tooltip>


            <Tooltip title="Forks">
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <ForkRightIcon fontSize="small" sx={{ marginRight: 0.5 }} />
                    <Typography variant="body2">{forks}</Typography>
                </Box>
            </Tooltip>


            <Typography variant="body2" color="text.secondary">
                Updated on {new Date(updatedAt).toLocaleDateString()}
            </Typography>
        </>
    );
};

export default RepoMetadata;
