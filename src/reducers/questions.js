
import { questionsTypes } from "../types/questions.types";

const initialState = {
    questions:[]
};

const questions = (state = initialState, action) => {
  switch (action.type) {
    case `${questionsTypes.GET_QUESTIONS}`:
      return {
          ...initialState,
          questions: action.payload
      };
    case `${questionsTypes.SET_CLEAN_QUESTIONS}`:
      return {
          ...initialState,
          questions: []
      };
    default:
      return state;
  }
};

export default questions;
