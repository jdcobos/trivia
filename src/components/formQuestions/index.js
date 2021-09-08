import React, { useEffect, useState } from 'react'
import { GET_CATEGORY } from '../../actions/generalData.action'
import { connect } from "react-redux";
import { getCategoriesSelector, getDifficultiesSelector } from '../../selectors/generalData.selectors';
import { isEmpty } from 'lodash'
const FormQuestions = ({ getCategory, categories, difficulties }) => {

    const [stateCategory, setStateCategory] = useState([])

    useEffect(() => {
        isEmpty(categories) ? getCategory() : setStateCategory(categories)
    }, [categories, getCategory, setStateCategory])

    if (stateCategory && difficulties) {

        return (
            <div>
                <label>aca iria el formulario</label>
            </div>
        )
    } else {
        return (
            <div>
                <label>aca iria el loadin</label>
            </div>
        )
    }
}

const mapStateToprops = state => ({
    categories: getCategoriesSelector(state),
    difficulties: getDifficultiesSelector(state)
})

const mapDispatchToProps = (dispatch) => ({
    getCategory: () => dispatch(GET_CATEGORY())
})

export default connect(mapStateToprops, mapDispatchToProps)(FormQuestions)