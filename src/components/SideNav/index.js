import React from "react";
import { styled } from "@mui/material/styles";
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import WinMe from '../../images/winme.jpg';
import './SideNav.css';

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    ...theme.mixins.toolbar,
    marginBottom: "-15px",
}));

function SideNav({
    clickedTab,
}) {
    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <DrawerHeader>
                <img src={WinMe} className="sidenav-logo" alt="sidenav-logo" />
                <div className="sidenav-title">WinMe Life</div>
            </DrawerHeader>

            <div className="sidenav-subtitle">Navigation</div>

            <List>
                {['Dashboard', 'Client Management', 'Product Managemnt', 'Ticket Management', 'User Management', 'Promotion Management', 'Reports'].map((text, index) => (
                    <ListItem key={text} className='list-item'>
                        <ListItemButton
                            selected={clickedTab === text}
                            style={{ color: clickedTab === text ? "#cb3a27" : "#000" }}
                        >
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

            <Divider className="sidenav-divider" />

            <List>
                {['Settings', 'Help'].map((text, index) => (
                    <ListItem key={text}>
                        <ListItemButton>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
}

export default SideNav