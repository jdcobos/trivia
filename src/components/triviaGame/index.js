import React, {useState} from 'react'
import NavBar from '../general/navbarComponent'
import Sidebar from '../general/sidebarComponent'
import Questions from './children/questionsComponent'
import ButtonGameOver from '../triviaGame/children/buttonGameOverCompoente'
const TriviaGame  = () =>{

    const [stateCurrentQuestion, setSteCurrentQuestion] = useState(0)

    return(
        <div >
            <NavBar/>
            <div className="questions">
                <ButtonGameOver/>
                <div className="contentQuestions">
                    <Questions 
                    currentPosition={stateCurrentQuestion} 
                    setSteCurrentQuestion={setSteCurrentQuestion}
                    />
                </div>
                <div className="contentSidebar">
                    <Sidebar currentPosition={stateCurrentQuestion} />
                </div>
            </div>
        </div>
    )
}

export default TriviaGame