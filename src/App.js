import React from 'react';
import './App.css';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Restaurant from './components/restaurant/RestaurantList';

function App() {
  return (
    <div>
        <AppBar color="primary" position="static">
          <Toolbar>
            <Typography variant="title"
              color="inherit"
            >
              My header
           </Typography>
          </Toolbar>
          {/* <Restaurant/> */}
        </AppBar>
      </div>
  );
}

export default App;
