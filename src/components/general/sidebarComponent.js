import React, {useEffect} from 'react'
import {SIDEBAR_SCORE} from '../../config/sidebar.config'
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { SET_USER_DATA } from '../../actions/generalData.action';
import { getUserDataSelector } from '../../selectors/generalData.selectors';

const Sidebar = ({currentPosition, userData, setUserData }) =>{

    useEffect(() =>{
        if(currentPosition <= 10){
            const score = SIDEBAR_SCORE.find((item)=> item.pos === currentPosition)
            currentPosition === 0 ? setUserData({score: 0}) :
            setUserData({score: userData.score + score.score})
        }
    },[currentPosition])

    return(
        <div className="sidebar">
            {SIDEBAR_SCORE.sort((a,b)=>b.pos-a.pos).map(({pos, score}, key) => 
                <div key={key} className={` options ${currentPosition === pos - 1 
                    && 'optionsActive'}`}>
                        {pos} $ {score}
                </div>
            )}
        </div>
    )
}

const mapStateToProps = state => ({
    userData: getUserDataSelector(state)
})

const mapDispatchToProps = (dispatch) => ({
    setUserData: params => dispatch(SET_USER_DATA(params)),
})

Sidebar.propTypes = {
    currentPosition: PropTypes.number,
    userData: PropTypes.object,
    setUserData: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)