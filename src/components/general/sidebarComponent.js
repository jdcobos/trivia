import React from 'react'
import {SIDEBAR_SCORE} from '../../config/sidebar.config'
import PropTypes from 'prop-types';
const Sidebar = ({currentPosition}) =>{
    return(
        <div className="sidebar">
            {SIDEBAR_SCORE.sort((a,b)=>b.pos-a.pos).map(({pos, score}, key) => 
                <div key={key} className={` options ${currentPosition === pos - 1 && 'optionsActive'}`}>{pos} $ {score}</div>
            )}
        </div>
    )
}

Sidebar.propTypes = {
    currentPosition: PropTypes.number
}

export default Sidebar