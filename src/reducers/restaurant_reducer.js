
//import ActionTypes  from '../constants/action_types';

//const restaurant = (state = {}, action) =>  {
export default function (state = [], action){
  console.log("actions",action);
  switch (action.type) {
    case 'GET_RESTAURANTS':
      return [...state, ...action.payload.data ];
    default:
      return state;
  }
}
//export default restaurant;
