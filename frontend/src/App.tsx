import React from 'react';
import './App.css';
import Grid from '@mui/material/Grid';
import { Link, Route, Routes } from 'react-router-dom';
import { Home, Profile, Rand } from './test';
import SideDrawer from './components/drawer';

function App() {
  return (
    <Grid container>
      <Grid item lg={2} md={1} sm={2} xs={1}>
        <SideDrawer />
      </Grid>
      <Grid item lg={6} md={6} sm={7} xs={11} sx={{ border: '1px solid black' }}>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/whatever" element={<Rand />}></Route>
        </Routes>
        <h1>Main content</h1>

      </Grid>
      <Grid item lg={4} md={5} sm={3} xs={0} sx={{ display: { xs: 'none', md: 'block' } }}>
        <h1>Hello</h1>
      </Grid>
    </Grid >
  );
}

export default App;
