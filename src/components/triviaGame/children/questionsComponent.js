import React, {Fragment} from 'react'
import { connect } from "react-redux";
import { getQuestionsSelector } from '../../../selectors/Questions.selectors';
import { getNumberQuestion } from '../../../selectors/generalData.selectors';
import DescriptionQuestion from './descriptionQuestionsComponent';
import Answers from './answersComponent';

const Questions = ({questions, currentPosition, setSteCurrentQuestion}) =>{

    const currentQuestion = questions[currentPosition]
    
    return(
        <div className="contentQuestions">
            {currentQuestion &&
            <Fragment>
               <DescriptionQuestion description={currentQuestion.question}/> 
               <div className="contentAnswer">
                   {currentQuestion.answers_complete.sort(()=> Math.random() - 0.5).map((item, key)=>
                    <Answers 
                        key={key} 
                        pos={key} 
                        answer={item} 
                        currentQuestion={currentQuestion} 
                        setSteCurrentQuestion={setSteCurrentQuestion}
                        currentPosition={currentPosition}
                    />
                    )
                   }
               </div>
            </Fragment>    
            }
        </div>
    )
}

const mapStateToprops = state =>({
   questions: getQuestionsSelector(state),
   numberQuestions: getNumberQuestion(state)
})

export default connect(mapStateToprops, null)(Questions)