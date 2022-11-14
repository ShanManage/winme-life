import React from 'react';
import { Box, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import Profile from '../../images/profile.jpeg';
import './TopBar.css';

function TopBar({
    clickedTab,
}) {
    return (
        <Stack direction="row" justifyContent="space-between" alignItems="center" style={{ padding: "20px 0px 40px 0px" }}>
            <Typography variant="h5" color="#7d7e82">{clickedTab}</Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
                <Badge badgeContent={17} color="error" className='notification-badge'>
                    <NotificationsIcon />
                </Badge>

                <img src={Profile} alt="profile" className='profile-image' />
            </Box>
        </Stack>
    )
}

export default TopBar