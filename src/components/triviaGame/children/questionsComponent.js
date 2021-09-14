import React, {Fragment, useEffect, useState} from 'react'
import { connect } from "react-redux";
import { getQuestionsSelector } from '../../../selectors/Questions.selectors';
import { getNumberQuestion, getUserDataSelector } from '../../../selectors/generalData.selectors';
import DescriptionQuestion from './descriptionQuestionsComponent';
import Answers from './answersComponent';
import Accountant from '../children/accountantComponent'
import ModalCommon from '../../general/modalComponent'
import Message from './messageComponent';

const Questions = ({
    questions, 
    currentPosition, 
    setSteCurrentQuestion, 
    numberQuestions,
    userData
    }) =>{

    const currentQuestion = questions[currentPosition]
    const [stateCurrentAswerSelected, setStateCurrentAswerSelected]  = useState(null)
    const [restartTime, setRestartTime]  = useState(0)
    const [visible, setVisible]  = useState(false)
    const [start, setStart]  = useState(true)
    const [winner, setWinner]  = useState(false)
    useEffect(()=>{
        setRestartTime(numberQuestions)
        if(numberQuestions > 9){
            setVisible(true)
            setWinner(!winner)
        }
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
            </Fragment>    
            }
            <ModalCommon visibleModal={visible} title='Try again' footerVisible={true}>
                <Fragment>
                    {winner && <div className="labelWinner">winner</div>}
                    <Message {...userData} message={!winner ? 'Upps this far has come': 'Congratulations you have won'}/>
                </Fragment>
            </ModalCommon>
        </div>
    )
}

const mapStateToprops = state =>({
   questions: getQuestionsSelector(state),
   numberQuestions: getNumberQuestion(state),
   userData: getUserDataSelector(state)
})

export default connect(mapStateToprops, null)(Questions)