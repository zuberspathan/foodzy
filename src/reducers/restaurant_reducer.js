
//import ActionTypes  from '../constants/action_types';

//const restaurant = (state = {}, action) =>  {
export default function (state = {}, action){
  switch (action.type) {
    case 'GET_RESTAURANTS':
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
//export default restaurant;
