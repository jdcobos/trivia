import React from "react";
import PropTypes from 'prop-types';

const DescriptionQuestion = ({description}) =>{
    return(
        <div className="description">{description}</div>
    )
}

DescriptionQuestion.propTypes ={
    description: PropTypes.string
}

export default DescriptionQuestion