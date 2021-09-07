
import { questionsTypes } from "../types/questions.types";

const initialState = {
    questions:[]
};

const questions = (state = initialState, action) => {
  switch (action.type) {
    case `${questionsTypes.GET_QUESTIONS}`:
      return {
     
      };
    default:
      return state;
  }
};

export default questions;
