import React, {Fragment, useState} from 'react'
import { connect } from "react-redux";
import {  SET_USER_DATA } from '../../../actions/generalData.action'
import ModalCommon from '../../general/modalComponent';
import Accountant from './accountantComponent';
import DefeatMessage from './defeatMessageComponent';

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
     setStart,
     userData
    }) =>{
        
    const letters = ['A', 'B', 'C', 'D']
    const [visible, setVisible] = useState(false)
    const [correctAnswer, setCorrectAnswer]  = useState(false)
  
    const selectedAnswer = value =>{
       setStateCurrentAswerSelected(value)
       const selectedAnswer = currentQuestion.answers_complete[value]
       setVisible(!visible)
       setStart(false)
      if(selectedAnswer === currentQuestion.correct_answer){
        setCorrectAnswer(true)
      }else{
        setCorrectAnswer(false)
      }
    }

    const nextQuestion = () =>{
        setVisible(false)
        setStart(true)
        setSteCurrentQuestion(currentPosition + 1)
        setUserData({numberQuestion: currentPosition + 1})
    }

    const seletedCorrectAnswer = ( 
        <div className="correctAnswer">
            <string>Correct answer, next question in:</string>
            <div>
                <Accountant 
                isPlaying={true} 
                restartTime={Math.random()}
                time={5}
                onFinished={nextQuestion}
                />
            </div> 
        </div>
    )

    return(
        <Fragment>
            <div className={`answer 
                ${stateCurrentAswerSelected === pos && 'answerSelected'}`}  
                onClick={()=>selectedAnswer(pos)}>
                <label>{letters[pos]}.</label> 
                {answer}
            </div>
            <ModalCommon visibleModal={visible} footerVisible={!correctAnswer && true }>
                    {correctAnswer ? seletedCorrectAnswer: 
                    <DefeatMessage {...userData} />
                    }
            </ModalCommon>
        </Fragment>
    )
}

const mapDispatchToProps = (dispatch) => ({
    setUserData: params => dispatch(SET_USER_DATA(params)),
})


export default connect(null, mapDispatchToProps)(Answers)