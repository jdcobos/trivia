import React, {Fragment, useEffect, useState} from 'react'
import { connect } from "react-redux";
import { getQuestionsSelector } from '../../../selectors/Questions.selectors';
import { getNumberQuestion, getUserDataSelector } from '../../../selectors/generalData.selectors';
import DescriptionQuestion from './descriptionQuestionsComponent';
import Answers from './answersComponent';
import Accountant from '../children/accountantComponent'
import ModalCommon from '../../general/modalComponent'

const Questions = ({questions, currentPosition, setSteCurrentQuestion, numberQuestions,userData}) =>{

    const currentQuestion = questions[currentPosition]
    const [stateCurrentAswerSelected, setStateCurrentAswerSelected]  = useState(null)
    const [restartTime, setRestartTime]  = useState(0)
    const [visible, setVisible]  = useState(false)
    useEffect(()=>{
        setRestartTime(numberQuestions)
    },[numberQuestions])


    return(
        <div className="contentQuestions">
            {currentQuestion &&
            <Fragment>
                <Accountant restartTime={restartTime} time={30} onFinished={()=>setVisible(true)}/>
               <DescriptionQuestion description={currentQuestion.question}/> 
               <div className="contentAnswer">
                   {currentQuestion.answers_complete.map((item, key)=>
                    <Answers 
                        key={key} 
                        pos={key} 
                        answer={item} 
                        currentQuestion={currentQuestion} 
                        setSteCurrentQuestion={setSteCurrentQuestion}
                        currentPosition={currentPosition}
                        setStateCurrentAswerSelected={setStateCurrentAswerSelected}
                        stateCurrentAswerSelected={stateCurrentAswerSelected}
                    />
                    )
                   }
               </div>
               <ModalCommon visibleModal={visible} title='Try again' >
                    <div>
                        <label>Upps this far has come {userData.name}</label>
                        <label>your score is {userData.score} </label>
                    </div>
               </ModalCommon>
            </Fragment>    
            }
        </div>
    )
}

const mapStateToprops = state =>({
   questions: getQuestionsSelector(state),
   numberQuestions: getNumberQuestion(state),
   userData: getUserDataSelector(state)
})

export default connect(mapStateToprops, null)(Questions)