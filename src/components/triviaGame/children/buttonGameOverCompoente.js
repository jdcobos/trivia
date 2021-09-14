import React from 'react'
import {useHistory} from 'react-router-dom'
import { connect } from "react-redux";
import { SET_CLEAN } from '../../../actions/generalData.action';
import { SET_CLEAN_QUESTIONS } from '../../../actions/questions.action';
import PropTypes from 'prop-types';

const ButtonGameOver = ({setClean,setCleanQuestion}) =>{

    let history = useHistory()

    const exitGame = () =>{
        history.push('/home')
        setClean()
        setCleanQuestion()
    }

    return(
        <div className="ButtonGameOver" onClick={()=>exitGame()}>
            Exit the game
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    setClean: () => dispatch(SET_CLEAN()),
    setCleanQuestion: () => dispatch(SET_CLEAN_QUESTIONS())
})

ButtonGameOver.propTypes ={
    setClean: PropTypes.func,
    setCleanQuestion: PropTypes.func
}

export default connect(null, mapDispatchToProps)(ButtonGameOver)