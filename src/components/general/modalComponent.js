import React, {useEffect, useState} from 'react'
import {Modal, Button} from 'antd'
import {useHistory} from 'react-router-dom'
import { connect } from "react-redux";
import {  SET_CLEAN } from '../../actions/generalData.action'
import { SET_CLEAN_QUESTIONS } from '../../actions/questions.action';
import PropTypes from 'prop-types';

const ModalCommon = ({
    visibleModal, 
    children, 
    title, 
    footerVisible, 
    setClean, 
    setCleanQuestions
    }) =>{

    let history = useHistory()

    const [visible, setVisible] = useState(visibleModal)

    useEffect(()=>{
        setVisible(visibleModal)
    },[visibleModal])

    const handleOk = () => {
        history.push('/home')
        setClean()
        setCleanQuestions()
        setVisible(!visible)
    }

    const footer = (
       <Button onClick={handleOk}>
           Try again
       </Button> 
    ) 

    return(
        <Modal 
            destroyOnClose
            title={title} 
            visible={visible} 
            onOk={handleOk} 
            onCancel={false} 
            footer={footerVisible && footer} 
            closable={false}
        >
            {children}
        </Modal>
    )
}


const mapDispatchToProps = (dispatch) => ({
    setClean: () => dispatch(SET_CLEAN()),
    setCleanQuestions: () => dispatch(SET_CLEAN_QUESTIONS())
})

ModalCommon.propTypes = {
    visibleModal: PropTypes.bool, 
    children: PropTypes.any, 
    title: PropTypes.string, 
    footerVisible: PropTypes.bool, 
    setClean: PropTypes.func, 
    setCleanQuestions: PropTypes.func
}
export default connect(null, mapDispatchToProps)(ModalCommon)