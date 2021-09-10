import React from 'react'
import Logo from '../../resources/logo.png'
import { connect } from "react-redux";
import { getUserDataSelector } from '../../selectors/generalData.selectors';
import PropTypes from 'prop-types';

const NavBar = ({userData}) =>{

    const {name,difficulty,score} = userData
    
    return(
        <div className="navBar">
            <div className="logo">
                <img src={Logo} alt='logo' className="img"></img>
            </div>
            <div>
                <div className="name">
                    Name: {name}
                </div>
                <div className="difficulty">
                    difficulty: {difficulty}
                </div>
                <div className="score">
                    Score: {score}
                </div>
            </div>
        </div>
    )
}

const mapStateToprops = state =>({
    userData: getUserDataSelector(state)
})

NavBar.propTypes = {
    userData: PropTypes.object
}

export default connect(mapStateToprops, null)(NavBar)