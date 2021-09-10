import request from "../axios/axios";
import { generalTypes } from "../types/generalData.types";


export const GET_CATEGORY = () => (dispatch) => {
  request({ url: "/api_category.php", method: "GET", params: {}, data : {} }).then(
    (response) => {
        dispatch({
          type: generalTypes.GET_CATEGORY, 
          payload: response.data.trivia_categories,
        });
      }
  );
};


export const SET_USER_DATA = (param) => (dispatch) => {
    dispatch({
       type: generalTypes.SET_USER_DATA, 
       payload: param,
    });
};