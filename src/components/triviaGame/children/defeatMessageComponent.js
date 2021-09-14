import React from 'react'

const DefeatMessage  = ({name, score}) =>{
    return (
     <div className="wrongAnswer">
        <div className="wrongAnswerName">
            <div>
                Upps this far has come     
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

export default DefeatMessage