import { FC } from "react";
import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import Box from '@mui/material/Box';
import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from "@mui/material";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const SideDrawer: FC = () => {
    const drawerWidth = 240;
    return (
        // <ul>
        //     <li><Link to='/home'>home</Link></li>
        //     <li><Link to='/profile'>profile</Link></li>
        //     <li><Link to='/whatever'>home</Link></li>
        // </ul>
        <Box sx={{
            float: { sm: 'right', lg: 'right' },
            position: { xs: 'relative' },
            mr: { lg: 5 }

        }}>
            <Divider />
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} sx={{
                                display: { xs: 'none', lg: 'block' },
                            }} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}

export default SideDrawer;