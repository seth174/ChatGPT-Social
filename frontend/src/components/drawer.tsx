import { FC } from "react";
import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import Box from '@mui/material/Box';
import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from "@mui/material";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { OverridableComponent } from "@mui/material/OverridableComponent";

const SideDrawer: FC = () => {

    const navValues: any[][] = [
        [<TwitterIcon fontSize="large" />, '/home', ''],
        [<HomeIcon fontSize="large" />, '/home', 'Home'],
        [<PersonIcon fontSize="large" />, '/profile', 'Profile'],
        [<BookmarkIcon fontSize="large" />, '/bookmarks', 'Bookmarks']

    ]

    return (
        <Box sx={{
            float: { sm: 'right', lg: 'right' },
            position: { xs: 'relative' }
        }}>
            <Divider />
            <List>
                {navValues.map((navValue, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton component={Link} to={navValue[1]}>
                            <ListItemIcon >
                                {navValue[0]}
                            </ListItemIcon>
                            <ListItemText primary={navValue[2]} sx={{
                                display: { xs: 'none', lg: 'block' },
                                fontSize: 'small'
                            }} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}

export default SideDrawer;