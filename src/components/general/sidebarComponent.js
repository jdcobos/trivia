import React from 'react'
import {SIDEBAR_SCORE} from '../../config/sidebar.config'
const Sidebar = ({currentPosition}) =>{
    return(
        <div className="sidebar">
            {SIDEBAR_SCORE.sort((a,b)=>b.pos-a.pos).map(({pos, score}, key) => 
                <div key={key} className={` options ${currentPosition === pos - 1 && 'optionsActive'}`}>{pos} $ {score}</div>
            )}
        </div>
    )
}

export default Sidebar