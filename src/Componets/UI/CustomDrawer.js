import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { AiOutlineMinus } from 'react-icons/ai'
import { Box, Drawer, Button, List, Divider, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material"

const AccordionData = [
  { id: 1, Title: "Mobile", MiniList: [{ id: 1, list: "Discover" }, { id: 2, list: "Prepaid" }, { id: 3, list: "Postpaid" }, { id: 4, list: "Recharge" }, { id: 5, list: "Get Jio SIM" }, { id: 6, list: "Pay Bills" }], PanelType: "panel-1" },
  { id: 2, Title: "JioFiber", MiniList: [{ id: 1, list: "Discover" }, { id: 2, list: "Prepaid" }, { id: 3, list: "Postpaid" }, { id: 4, list: "Recharge" }, { id: 5, list: "Get JioFiber" }, { id: 6, list: "Pay Bills" }, { id: 6, list: "Services" }], PanelType: "panel-2" },
  { id: 3, Title: "Business", MiniList: [{ id: 1, list: "Discover" }, { id: 2, list: "Services" }, { id: 3, list: "Enquire" }, { id: 4, list: "JioBusiness Solution" }, { id: 5, list: "Resources" }, { id: 6, list: "Contact us" }], PanelType: "panel-3" },
  { id: 4, Title: "Smartphone", MiniList: [{ id: 1, list: "Smart Devices" }, { id: 2, list: "Accessories" }, { id: 3, list: "Postpaid" }, { id: 4, list: "Recharge" }, { id: 5, list: "Get Jio SIM" }, { id: 6, list: "Pay Bills" }], PanelType: "panel-4" },
]

const CustomDrawer = (props) => {
  const [expand, setExpand] = useState("" || false)
  const handleChange =
    (panel) => (event, Expanded) => {
      setExpand(Expanded ? panel : false);
    };
  return (
    <>
      <Drawer
        anchor={'left'}
        open={props.openDrawer}
        sx={{
          '& .MuiDrawer-paper': {
            width: "100%",
            position: "fixed",
            top: "62px !important",
          },
          '& .MuiBackdrop-root': {
            backgroundColor: "rgba(0, 0, 0, 0) !important"
          }
        }}
        onClose={props.closeDrawer}
      >
        <Box>
          <List>
            {
              AccordionData?.map((item) => {
                return (
                  <Accordion
                    onChange={handleChange(item.PanelType)}
                    expanded={expand === item.PanelType}
                    sx={{ p: 2 }}
                  >
                    <AccordionSummary
                      expandIcon={expand === item.PanelType ? <AiOutlineMinus /> : <AddIcon />}
                    >
                      <Typography>{item.Title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ ml: 2 }}>
                      {
                        item?.MiniList.map((val, index) => {
                          return (
                            <React.Fragment key={index}>
                              <Typography sx={{ mb: 2 }}>{val.list}</Typography>
                            </React.Fragment>
                          )
                        })
                      }
                    </AccordionDetails>
                  </Accordion>
                )
              })
            }
          </List>
        </Box>
      </Drawer>

    </>
  )
}
export default CustomDrawer