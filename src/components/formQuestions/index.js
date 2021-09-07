import React, {useEffect, useState} from 'react'
import { GET_CATEGORY } from '../../actions/generalData.action'
import { connect } from "react-redux";
import { getCategoriesSelector } from '../../selectors/generalData.selectors';
import {isEmpty} from 'lodash'
const FormQuestions = ({getCategory, categories}) =>{

    const [stateCategory, setStateCategory] = useState([])

    useEffect(()=>{
        isEmpty(categories) ? getCategory() : setStateCategory(categories)
    },[categories, getCategory, setStateCategory])

    return(
        <div>
            {stateCategory &&                                    
                stateCategory.map(item => 
                <label>{item.name}</label>)
            }
        </div>
    )
}

const mapStateToprops = state =>({
    categories: getCategoriesSelector(state)
})

const mapDispatchToProps = (dispatch) =>({
   getCategory: ()=> dispatch(GET_CATEGORY())
})

export default connect(mapStateToprops, mapDispatchToProps)(FormQuestions)