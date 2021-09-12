import React from 'react'
import { connect } from "react-redux";
import {  SET_USER_DATA } from '../../../actions/generalData.action'

const Answers = (
    {
     pos, 
     answer, 
     currentQuestion, 
     setSteCurrentQuestion, 
     currentPosition, 
     setUserData,
     setStateCurrentAswerSelected,
     stateCurrentAswerSelected,
     setTimeQuestion
    }) =>{
        
    const letters = ['A', 'B', 'C', 'D']
  
    const selectedAnswer = value =>{
       setStateCurrentAswerSelected(value)
       const selectedAnswer = currentQuestion.answers_complete[value]
      if(selectedAnswer === currentQuestion.correct_answer){
        setSteCurrentQuestion(currentPosition + 1)
        setUserData({numberQuestion: currentPosition + 1})
      } 
    }

    return(
        <div className={`answer 
            ${stateCurrentAswerSelected === pos && 'answerSelected'}`}  
            onClick={()=>selectedAnswer(pos)}>
            <label>{letters[pos]}.</label> 
            {answer}
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    setUserData: params => dispatch(SET_USER_DATA(params)),
})


export default connect(null, mapDispatchToProps)(Answers)