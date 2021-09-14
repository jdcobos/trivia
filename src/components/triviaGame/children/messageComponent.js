import React from 'react'
import PropTypes from 'prop-types';

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

Mssage.propTypes = {
    name: PropTypes.string,
    score: PropTypes.number,
    message: PropTypes.string
}

export default Mssage