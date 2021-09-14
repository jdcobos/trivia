import request from "../axios/axios";
import { questionsTypes } from "../types/questions.types";


export const GET_QUESTIONS = (params) => (dispatch) => {
  request({ url: "/api.php?amount=10", method: "GET", params, data : {}}).then(
    (response) => {
      const answers = [] 
      const  {data:{results}} = response
      results.map((item) => {
        answers.push({...item, answers_complete: [...item.incorrect_answers,item.correct_answer].sort(()=> Math.random() - 0.5) })
      })
        dispatch({
          type: questionsTypes.GET_QUESTIONS, 
          payload: answers,
        });
      }
  );
};


export const SET_CLEAN_QUESTIONS = () => (dispatch) => {
    dispatch({type: questionsTypes.SET_CLEAN_QUESTIONS});
};


  