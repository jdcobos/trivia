import React, { useEffect, Fragment } from 'react'
import { GET_CATEGORY } from '../../actions/generalData.action'
import { connect } from "react-redux";
import { getCategoriesSelector, getDifficultiesSelector } from '../../selectors/generalData.selectors';
import {Input, Select, Form, Button} from 'antd'
import { isEmpty } from 'lodash'

const FormQuestions = ({ getCategory, categories, difficulties }) => {
    
    const {Option} = Select
    const {Item} = Form

    useEffect(() => {
        isEmpty(categories) && getCategory() 
    }, [categories, getCategory])


    const startGame = value =>{
        console.log(value)
    }

        return(
        <Fragment>
            <Form onFinish={startGame}>
               <Item name='name' label="Nombre">
                  <Input placeholder="Ingresa tu nombre"></Input>
               </Item>
               <Item name='category' label="Categoria">
                  <Select placeholder="Selecciona una Categoria" >
                     {categories && 
                     categories.map(({id, name},key) => 
                     <Option key={key} value={id}>{name}</Option>
                     )}
                  </Select>
               </Item>
               <Item name='difficulty' label="Dificultad">
                  <Select placeholder="Selecciona una Dificultad">
                     {difficulties && 
                     difficulties.map((item,key) => 
                     <Option key={key} value={item}>{item}</Option>
                     )}
                  </Select>
               </Item>
               <Button type="primary" htmlType="submit">Ingresar</Button>
            </Form>
         </Fragment>
        )
}

const mapStateToprops = state => ({
    categories: getCategoriesSelector(state),
    difficulties: getDifficultiesSelector(state)
})

const mapDispatchToProps = (dispatch) => ({
    getCategory: () => dispatch(GET_CATEGORY())
})

export default connect(mapStateToprops, mapDispatchToProps)(FormQuestions)