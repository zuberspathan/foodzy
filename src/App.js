import React from 'react';
import './App.css';
import Restaurant from './components/restaurant/Restaurant';
import Menu from './components/menu/MenuList';
import Post from './components/restaurant/post';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Restaurant} />
        <Route path="/menu/:id" component={Menu} />
        <Route path="/post/:id" component={Post} />
      </Switch>,
    </Router>
  );
}

export default App;
