import request from "../axios/axios";
import { questionsTypes } from "../types/questions.types";


export const GET_QUESTIONS = (params) => (dispatch) => {
  request({ url: "/api.php?amount=10", method: "GET", params, data : {}}).then(
    (response) => {
        dispatch({
          type: questionsTypes.GET_QUESTIONS, 
          payload: response.data,
        });
      }
  );
};

  