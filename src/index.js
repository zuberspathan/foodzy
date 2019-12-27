import React from "react";
import "./index.css";
import App from "./App";
import Resturant from './components/restaurant/RestaurantList';
import ReactDOM from 'react-dom';
import * as serviceWorker from "./serviceWorker";
import  store  from './store/store';
import { Provider } from "react-redux";
import Menu from './components/menu/MenuList';
import Post from './components/restaurant/post';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
//import { createBrowserHistory } from "history";
//const customHistory = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Switch>
          <Route path="/post" component={Resturant} />
          <Route path="/menu/:id" component={Menu}/>
          <Route path="/" component={Post}/>
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./reducers', () => {
    store.replaceReducer(require('./reducers').default); // eslint-disable-line global-require
  });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
