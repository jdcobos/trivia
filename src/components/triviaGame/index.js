import React from 'react'
import NavBar from '../general/navbarComponent'
import Sidebar from '../general/sidebarComponent'
import Questions from './children/questionsComponent'
const TriviaGame  = () =>{
    return(
        <div >
            <NavBar/>
            <div className="questions">
                <div className="contentQuestions">
                    <Questions/>
                </div>
                <div className="contentSidebar">
                    <Sidebar currentPosition={0}/>
                </div>
            </div>
        </div>
    )
}

export default TriviaGame