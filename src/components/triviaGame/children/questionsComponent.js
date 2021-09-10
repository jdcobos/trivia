import React from 'react'
import { connect } from "react-redux";
import { getQuestionsSelector } from '../../../selectors/Questions.selectors';
import { getNumberQuestion } from '../../../selectors/generalData.selectors';
import DescriptionQuestion from './descriptionQuestionsComponent';

const Questions = ({questions, numberQuestions}) =>{

    const currentQuestion = questions[numberQuestions]
    const {question} = currentQuestion

    return(
        <div className="contentQuestions">
            {currentQuestion && <DescriptionQuestion description={question} /> }
        </div>
    )
}

const mapStateToprops = state =>({
   questions: getQuestionsSelector(state),
   numberQuestions: getNumberQuestion(state)
})

export default connect(mapStateToprops, null)(Questions)