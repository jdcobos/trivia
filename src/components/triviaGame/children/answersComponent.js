import React from 'react'

const Answers = ({pos, answer, currentQuestion, setSteCurrentQuestion, currentPosition}) =>{

    const letters = ['A', 'B', 'C', 'D']

    const selectedAnswer = value =>{
       const selectedAnswer = currentQuestion.answers_complete[value]
      if(selectedAnswer === currentQuestion.correct_answer){
        setSteCurrentQuestion(currentPosition + 1)
      } 
    }
    
    return(
        <div className="answer"  onClick={()=>selectedAnswer(pos)}>
            <label>{letters[pos]}.</label> 
            {answer}
        </div>
    )
}


export default Answers