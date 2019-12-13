import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

const initialState = {};

const middleware = [thunk];
const customCompose = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

export default store  = createStore(
    rootReducer,
    initialState,
    customCompose(applyMiddleware(middleware))
);