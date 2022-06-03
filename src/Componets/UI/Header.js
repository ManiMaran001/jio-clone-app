import React, { useState, useEffect } from 'react'
import '../CSSDesigns/Header.scss'
import jiosvg from '../../Assert/svg/jio.svg'
import { AiOutlineSearch, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { BsCartFill, BsFillCartFill } from 'react-icons/bs'
import { MdLiveHelp } from 'react-icons/md'
import { HiUserCircle } from 'react-icons/hi'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Drawer, Button, List, Divider, ListItem, Typography,Accordion, AccordionSummary, AccordionDetails } from "@mui/material"

const Header = (props) => {
  const [mobile, setMobile] = useState(false)
  // const [open,setOpenNav]=useState(true)
  // function openNav() {
  //     document.getElementById("mySidenav").style.width = "250px";
  //     setOpenNav(false)
  //     window.onscroll = () => { window.scroll(0,0); }
  //   }      
  //   function closeNav() {
  //     document.getElementById("mySidenav").style.width = "0";
  //     setOpenNav(true)
  //     window.onscroll = () => { window.scroll(); }
  //   }

  console.log("screenwidth", [window.screen.width, mobile])
  let screenwidth = window.screen.width
  const resize = () => {
    if (window.screen.width <= 768) {
      setMobile(true)
    }
  }
  useEffect(() => {
    window.addEventListener("resize", resize());
  }, [])
  const [anchorEl, setAnchorEl] = useState(false);
  const handleClick = (event) => {
    setAnchorEl(true)
  };
  const handleClose = () => {
    setAnchorEl(false);
  };

  return (
    <div>
      <div className='container--spacing container-bg'>
        <div className='header mobile--view'>
          <div className='d-flex gap-3 align-items-center'>
            <div>
              <AiOutlineMenu className="header-icon" onClick={handleClick} />
            </div>
            <Drawer
              anchor={'left'}
              open={anchorEl}
              sx={{
                '& .MuiDrawer-paper': {
                  position: "fixed",
                  top: "62px !important",
                },
                '& .MuiBackdrop-root': {
                  backgroundColor: "rgba(0, 0, 0, 0) !important"
                }
              }}
              onClose={handleClose}
            >
              <Box className="sidebar">
                <List>

                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>Accordion 1</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                      </Typography>
                      </AccordionDetails>
                  </Accordion>
                </List>
              </Box>
            </Drawer>




            <div>
              <img style={{ height: "26px" }} src={jiosvg} />
            </div>
          </div>
          <div className='d-flex align-items-center gap-3 '>
            <div className='sm--screen--view'>
              <AiOutlineSearch className='header-icon' />
            </div>
            <div className='header--search m--screen--view'>
              <>
                <AiOutlineSearch className='header-icon' />
                <input className="header-input" placeholder='search' />
              </>
            </div>
            <div>
              <HiUserCircle style={{ fontSize: "30px" }} />
            </div>
          </div>
        </div>
        <div className='header d-flex justify-content-between align-items-center hidden'>
          <div className='header-left d-flex align-items-center'>
            <div className='d-flex gap-md-3 gap-xl-5 gap-xxl-5 align-items-center'>
              <div >
                <img src={jiosvg} />
              </div>
              <div >
                Mobile
              </div>
              <div>
                Jio Fiber
              </div>
              <div >
                Business
              </div>
              <div>
                Shop
              </div>
              <div>
                Apps
              </div>
            </div>
          </div>
          <div className='header-right d-flex gap-md-3 gap-xl-5 gap-xxl-5 align-items-center'>
            <div className='header--search header--right--mobile'>
              <>
                <AiOutlineSearch className='header-icon' />
                <input className="header-input" placeholder='search' />
              </>
            </div>
            <div className='header-mini-icon'>
              <span>
                <MdLiveHelp />
              </span>
            </div>
            <div className='header-mini-icon'>
              <span>
                <BsCartFill />
              </span>
            </div>
            <div className='header-mini-icon'>
              <span className='icons'>
                <HiUserCircle />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='container--spacing mini-container-bg header-li second--nav--hidden'>
        <div className='d-flex gap-5'>
          <div className='mini-li'>
            <span>Discover</span>
          </div>
          <div className='mini-li'>
            <span>Prepaid</span>
          </div>
          <div className='mini-li'>
            <span> PostPaid</span>
          </div>
          <div className='mini-li'>
            <span>  Get Jio Sim</span>
          </div>
          <div className='mini-li'>
            <span>  Recharge</span>
          </div>
          <div className='mini-li'>
            <span>   Pay Bill</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header
