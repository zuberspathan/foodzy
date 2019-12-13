import ActionTypes from "../constants/action_types";
import apiConfig from "../config/api.config";

export function getRestaurants() {
    const request = axios.get(`${apiConfig.ROOT_URL}/getallrestaurants`);
    return {
      type: ActionTypes.GET_RESTAURANTS,
      payload: request
    };
  }
