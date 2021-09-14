import React from 'react'
 
const Mssage  = ({name, score, message}) =>{
    return (
     <div className="wrongAnswer">
        <div className="wrongAnswerName">
            <div>
               {message}    
            </div>
            <strong> {name}</strong>
        </div>
        <label>your score is</label>
        <div>
            <strong>{score}</strong>
        </div>
    </div>
    )
}

export default Mssage