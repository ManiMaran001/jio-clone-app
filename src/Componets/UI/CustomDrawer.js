import React from 'react'
import {Drawer} from 'antd'
const CustomDrawer =(props)=>{
    return (
     <>
      <Drawer title="Basic Drawer" placement="left" visible={props.open} onClose={props.close}  style={{background:"red",width:"400px"}}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
     </>
    )
}
export default CustomDrawer