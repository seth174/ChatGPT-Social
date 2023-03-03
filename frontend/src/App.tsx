import React from 'react';
import './App.css';
import Grid from '@mui/material/Grid';
import { Link, Route, Routes } from 'react-router-dom';
import SideDrawer from './components/drawer/drawer';
import Feed from './components/feed/feed'
import Discover from './components/discover/discover';
import Profile from './components/profile/profile';
import Bookmarks from './components/bookmarks/Bookmark';

function App() {
  return (
    <Grid container>
      <Grid item lg={3} md={1} sm={2} xs={1}>
        <SideDrawer />
      </Grid>
      <Grid item lg={5} md={6} sm={7} xs={11} sx={{ border: '1px solid black' }}>
        <Routes>
          <Route path="/home" element={<Feed />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/bookmarks" element={<Bookmarks />}></Route>
        </Routes>
        <h1>Main content</h1>

      </Grid>
      <Grid item lg={4} md={5} sm={3} xs={0} sx={{ display: { xs: 'none', md: 'block' } }}>
        <Discover />
      </Grid>
    </Grid >
  );
}

export default App;
