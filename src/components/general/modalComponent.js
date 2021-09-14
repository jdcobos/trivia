import React, {useEffect, useState} from 'react'
import {Modal, Button} from 'antd'
import {useHistory} from 'react-router-dom'
import { connect } from "react-redux";
import {  SET_CLEAN } from '../../actions/generalData.action'

const ModalCommon = ({visibleModal, children, title, footerVisible, setClean}) =>{

    let history = useHistory()

    const [visible, setVisible] = useState(visibleModal)

    useEffect(()=>{
        setVisible(visibleModal)
    },[visibleModal])

    const handleOk = () => {
        history.push('/home')
        setClean()
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
    setClean: () => dispatch(SET_CLEAN())
})


export default connect(null, mapDispatchToProps)(ModalCommon)