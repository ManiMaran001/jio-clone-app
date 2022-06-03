import React, { useState, useEffect } from 'react'
import '../CSSDesigns/Header.scss'
import jiosvg from '../../Assert/svg/jio.svg'
import { AiOutlineSearch, AiOutlineMenu ,AiOutlineClose} from 'react-icons/ai'
import { BsCartFill, BsFillCartFill } from 'react-icons/bs'
import { MdLiveHelp } from 'react-icons/md'
import { HiUserCircle } from 'react-icons/hi'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import CustomDrawer from './CustomDrawer'

function TemporaryDrawer(){
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor, open) =>
    (event) => {
      if (
        event.type === 'keydown' &&
        ((event ).key === 'Tab' ||
          (event).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 900 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {(['left', 'right', 'top', 'bottom']).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
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
    const [anchorEl, setAnchorEl] =useState(false);
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
                           <AiOutlineMenu className="header-icon"/>
                        </div>
                      
          <Button onClick={handleClick}>open</Button>
          <Drawer
            anchor={'left'}
            open={anchorEl}
            sx={{
                '& .MuiDrawer-paper': {
                    position:"fixed",
                    top:"62px !important",
                },
                '& .MuiBackdrop-root':{
                    backgroundColor:"rgba(0, 0, 0, 0) !important"
                }
              }}
            onClose={handleClose}
          >
           <Box className="sidebar">
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
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
