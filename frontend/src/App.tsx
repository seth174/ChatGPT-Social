import React from 'react';
import './App.css';
import Grid from '@mui/material/Grid';
import { Link, Route, Routes } from 'react-router-dom';
import { Home, Profile, Rand } from './test';

function App() {
  return (
    <Grid container>
      <Grid item sm={3} xs={2}>
        <ul>
          <li><Link to='/home'>home</Link></li>
          <li><Link to='/profile'>profile</Link></li>
          <li><Link to='/whatever'>home</Link></li>
        </ul>
      </Grid>
      <Grid item sm={6} xs={9}>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/whatever" element={<Rand />}></Route>
        </Routes>

      </Grid>
      <Grid item sm={3} xs={1}>
        <h1>Hello</h1>
      </Grid>
    </Grid >
  );
}

export default App;
