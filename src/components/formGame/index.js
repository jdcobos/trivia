import React, { useEffect } from 'react'
import { GET_CATEGORY, SET_USER_DATA } from '../../actions/generalData.action'
import { connect } from "react-redux";
import { getCategoriesSelector, getDifficultiesSelector } from '../../selectors/generalData.selectors';
import { GET_QUESTIONS } from '../../actions/questions.action'
import {Input, Select, Form, Button} from 'antd'
import { isEmpty } from 'lodash'
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";

const FormQuestions = ({ getCategory, categories, difficulties, getQuestions, setUserData}) => {
    
    let history = useHistory();
    const {Option} = Select
    const {Item} = Form

    useEffect(() => {
        isEmpty(categories) && getCategory() 
    }, [categories, getCategory])

    const startGame = value =>{
        setUserData(value)
        delete value.name
        value.difficulty === 'any difficulty' && delete value.difficulty
        getQuestions(value)
        history.push("/triviaGame");
    }

      return(
         <div className="formGame">
            <Form onFinish={startGame}>
               <Item name='name' label="Name"  rules={[{ required: true, message: 'Please enter a name' }]}>
               <Input placeholder="Enter your name"></Input>
               </Item>
               <Item name='category' label="Category" rules={[{ required: true, message: 'Please select a category' }]} >
               <Select placeholder="Select a category" >
                  {categories && 
                  categories.map(({id, name},key) => 
                  <Option key={key} value={id}>{name}</Option>
                  )}
               </Select>
               </Item>
               <Item name='difficulty' label="Difficulty" rules={[{ required: true, message: 'Please select a difficulty' }]}>
               <Select placeholder="Select a Difficulty">
                  {difficulties && 
                  difficulties.map((item,key) => 
                  <Option key={key} value={item}>{item}</Option>
                  )}
               </Select>
               </Item>
               <div className="contentbtnStartGame">
                  <Button type="primary" htmlType="submit" className="btnStartGame">Enter</Button>
               </div>
            </Form>
         </div>
        )
}

const mapStateToprops = state => ({
    categories: getCategoriesSelector(state),
    difficulties: getDifficultiesSelector(state),
})

const mapDispatchToProps = (dispatch) => ({
    getCategory: () => dispatch(GET_CATEGORY()),
    getQuestions: params => dispatch(GET_QUESTIONS(params)),
    setUserData: params => dispatch(SET_USER_DATA(params))
})

FormQuestions.propTypes = {
   getCategory: PropTypes.func,
   categories: PropTypes.array,
   difficulties: PropTypes.array,
   getQuestions: PropTypes.func,
   setUserData: PropTypes.func,
}

export default connect(mapStateToprops, mapDispatchToProps)(FormQuestions)