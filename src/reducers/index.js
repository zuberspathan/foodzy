import { combineReducers } from 'redux';
import  restaurantsReducer from './restaurant_reducer';

const rootReducers = combineReducers({
    restaurants : restaurantsReducer
})

export default rootReducers;