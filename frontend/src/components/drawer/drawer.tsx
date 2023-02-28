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
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import './drawer.css';
import NewChatModal from "../new-chat-modal/new-chat-modal";

const SideDrawer: FC = () => {

    const [open, setOpen] = useState<boolean>(false);

    const navValues: any[][] = [
        [<TwitterIcon fontSize="large" className="twitter-icon" />, <TwitterIcon fontSize="large" className="twitter-icon" />, '/home', ''],
        [<HomeIcon fontSize="large" className="list-icon" />, <HomeOutlinedIcon fontSize="large" className="list-icon" />, '/home', 'Home'],
        [<PersonIcon fontSize="large" className="list-icon" />, <PersonOutlineOutlinedIcon fontSize="large" className="list-icon" />, '/profile', 'Profile'],
        [<BookmarkIcon fontSize="large" className="list-icon" />, <BookmarkBorderOutlinedIcon fontSize="large" className="list-icon" />, '/bookmarks', 'Bookmarks']

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
            <List className="list">
                {navValues.map((navValue, index) => (
                    <ListItem
                        key={index}
                        disablePadding
                        className=
                        {
                            location == navValue[2] && navValue[3] != '' ? 'button selected-button nav-button' : 'button unselected-button nav-button'
                        }
                    >
                        <ListItemButton
                            component={Link}
                            to={navValue[2]}
                        >
                            <ListItemIcon >
                                {location == navValue[2] ? navValue[0] : navValue[1]}
                            </ListItemIcon>
                            <ListItemText
                                primary={navValue[3]}
                                disableTypography
                                className="text-size"
                                sx={{
                                    display: { xs: 'none', lg: 'block' },
                                }}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
                <ListItem className={"button chat-button"} disablePadding>
                    <ListItemButton onClick={() => setOpen(true)} >
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
            {open && <NewChatModal open={open} setOpen={setOpen} />}
        </Box >
    );
}

export default SideDrawer;