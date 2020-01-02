import React from "react";
import "./index.css";
import App from "./App";
import ReactDOM from 'react-dom';
import * as serviceWorker from "./serviceWorker";
import store from './store/store';
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./reducers', () => {
    store.replaceReducer(require('./reducers').default); 
  });
}
serviceWorker.unregister();
