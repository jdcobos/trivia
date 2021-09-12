import React, {useEffect, useState} from 'react'
import {Modal, Button} from 'antd'
import {useHistory} from 'react-router-dom'

const ModalCommon = ({visibleModal, children, title}) =>{

    let history = useHistory()

    const [visible, setVisible] = useState(visibleModal)

    useEffect(()=>{
        setVisible(visibleModal)
    },[visibleModal])

    const handleOk = () => {
        history.push('/home')
        setVisible(!visible)
    }

    const footer = (
       <Button onClick={handleOk}>
           Volver a Jugar
       </Button> 
    ) 

    return(
        <Modal 
            title={title} 
            visible={visible} 
            onOk={handleOk} 
            onCancel={false} 
            footer={footer} 
            closable={false}
        >
            {children}
        </Modal>
    )
}

export default ModalCommon