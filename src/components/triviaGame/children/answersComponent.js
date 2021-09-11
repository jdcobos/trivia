import React from 'react'
import { connect } from "react-redux";
import {  SET_USER_DATA } from '../../../actions/generalData.action'
import {  getUserDataSelector } from '../../../selectors/generalData.selectors'

const Answers = (
    {
     pos, 
     answer, 
     currentQuestion, 
     setSteCurrentQuestion, 
     currentPosition, 
     setUserData,
     userData
    }) =>{
        
    const letters = ['A', 'B', 'C', 'D']
    const selectedAnswer = value =>{
       const selectedAnswer = currentQuestion.answers_complete[value]
      if(selectedAnswer === currentQuestion.correct_answer){
        setSteCurrentQuestion(currentPosition + 1)
        setUserData({numberQuestion: currentPosition + 1})
      } 
    }

    return(
        <div className="answer"  onClick={()=>selectedAnswer(pos)}>
            <label>{letters[pos]}.</label> 
            {answer}
        </div>
    )
}


const mapStateToProps = state => ({
    userData: getUserDataSelector(state)
})

const mapDispatchToProps = (dispatch) => ({
    setUserData: params => dispatch(SET_USER_DATA(params)),
})


export default connect(mapStateToProps, mapDispatchToProps)(Answers)