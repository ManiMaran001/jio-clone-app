import React from 'react'
import { Accordion } from '@mui/material'
const CustomAccordion = (props) => {
    return (
        <>
            <Accordion onChange={props.handles(props.panelType)}
                expanded={props.expand === props.panelType}
            >
               {props.children}
            </Accordion>
        </>
    )
}

export default CustomAccordion