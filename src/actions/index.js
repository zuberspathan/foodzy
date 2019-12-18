//import ActionTypes from "../constants/action_types";
import apiConfig from "../config/api.config";
import axios from 'axios';

export const getRestaurants = function () {
  return dispatch => {
    axios.get(`${apiConfig.ROOT_URL}/getallrestaurants`)
    .then(response => {
      dispatch({
        type: 'GET_RESTAURANTS',
        payload: response.data
      })
    }).catch(err => console.log(err));
  }
};

// export default getRestaurants;
