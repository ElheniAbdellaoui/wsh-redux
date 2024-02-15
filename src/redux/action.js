import axios from "axios";
import { FETCH_DATA } from "./actionType";

export const fetchdata = (options) => async (dispatch) => {
  try {
    const response = await axios.request(options);
    dispatch({
      type: FETCH_DATA,
      payload: response.data.hints,
    });
  } catch (error) {
    console.log(error);
  }
};
