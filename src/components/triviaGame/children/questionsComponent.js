import React, {Fragment, useEffect, useState} from 'react'
import { connect } from "react-redux";
import { getQuestionsSelector } from '../../../selectors/Questions.selectors';
import { getNumberQuestion, getUserDataSelector } from '../../../selectors/generalData.selectors';
import DescriptionQuestion from './descriptionQuestionsComponent';
import Answers from './answersComponent';
import Accountant from '../children/accountantComponent'
import ModalCommon from '../../general/modalComponent'
import DefeatMessage from './defeatMessageComponent';

const Questions = ({questions, currentPosition, setSteCurrentQuestion, numberQuestions,userData}) =>{

    const currentQuestion = questions[currentPosition]
    const [stateCurrentAswerSelected, setStateCurrentAswerSelected]  = useState(null)
    const [restartTime, setRestartTime]  = useState(0)
    const [visible, setVisible]  = useState(false)
    const [start, setStart]  = useState(true)

    useEffect(()=>{
        setRestartTime(numberQuestions)
    },[numberQuestions])

    return(
        <div className="contentQuestions">
            {currentQuestion &&
            <Fragment>
                <Accountant isPlaying={start} restartTime={restartTime} time={30} onFinished={()=>setVisible(true)}/>
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
                        setStart={setStart}
                        userData={userData}
                    />
                    )
                   }
               </div>
               <ModalCommon visibleModal={visible} title='Try again' footerVisible={true}>
                    <DefeatMessage {...userData}/>
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