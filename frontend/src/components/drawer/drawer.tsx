import { FC, useEffect, useState } from "react";
import React from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import { Button, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from "@mui/material";
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import CreateIcon from '@mui/icons-material/Create';
import './drawer.css';

const SideDrawer: FC = () => {

    const navValues: any[][] = [
        [<TwitterIcon fontSize="large" />, '/home', ''],
        [<HomeIcon fontSize="large" />, '/home', 'Home'],
        [<PersonIcon fontSize="large" />, '/profile', 'Profile'],
        [<BookmarkIcon fontSize="large" />, '/bookmarks', 'Bookmarks']

    ]

    const fullDrawer = {
        display: 'flex',
        justifyContent: 'center',
        float: 'none',
    };

    const smallDrawer = {
        float: 'right',
        display: 'inline',
        justifyContent: 'normal'
    }

    const location = useLocation().pathname;

    return (
        <Box sx={{
            display: { lg: fullDrawer.display, md: smallDrawer.display },
            justifyContent: { lg: fullDrawer.justifyContent, md: smallDrawer.justifyContent },
            float: { lg: fullDrawer.float, md: smallDrawer.float }
        }}>
            <Divider />
            <List>
                {navValues.map((navValue, index) => (
                    <ListItem key={index} disablePadding className={location == navValue[1] ? 'button' : 'none'}>
                        <ListItemButton
                            component={Link}
                            to={navValue[1]}
                            sx={{ borderRadius: 10 }}
                        >
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
                <ListItem className={"button"}>
                    <ListItemButton component={Link} to={'/create'} >
                        <CreateIcon className="icon" />
                        <ListItemText
                            primary={"New Chat"}
                            disableTypography
                            className="text-size"
                            sx={{
                                display: { xs: 'none', lg: 'block' },
                            }} />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box >
    );
}

export default SideDrawer;