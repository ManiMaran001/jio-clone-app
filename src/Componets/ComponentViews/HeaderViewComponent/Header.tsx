/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import './Header.scss'
import { AiOutlineSearch, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { RiArrowLeftSLine } from 'react-icons/ri'
import { BsCartFill } from 'react-icons/bs'
import { MdLiveHelp } from 'react-icons/md'
import { HiUserCircle } from 'react-icons/hi'
import CustomDrawer from '../../CustomComponentModel/CustomDrawer';
import { Modal, Typography, Box } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom'
const jiosvg = require('../../../Assert/svg/jio.svg') as string
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Header = (props: any) => {
  const [mobile, setMobile] = useState(false)
  const [openDrawer, setDrawer] = useState(false);
  const [openSearchModal, setSearchModal] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  let navigate = useNavigate()
  let location=useLocation()
  const handleClick = () => {
    setDrawer(true)
  };
  const handleDrawerClose = () => {
    setDrawer(false);
  };
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
  // const resize = () => {
  //   if (window.screen.width <= 768) {
  //     setMobile(true)
  //   }
  // }
  // useEffect(() => {
  //   window.addEventListener("resize", resize());
  // }, [])
  const handleSearchModal = () => {
    setSearchModal(!openSearchModal)
  }
  const headerOpenModal = () => {
    setOpenModal(true)
  }
  const handleCloseModal = () => {
    setOpenModal(false)
    setSearchModal(false)
  }
  return (
    <div>
      {
        openSearchModal ? (
          <div className='header--search--modal container-bg d-flex justify-content-center align-items-center'>
            <div className='modal--search--box'>
              <>
                <RiArrowLeftSLine className='header-icon-arrow' />
                <input className="header-input--modal" placeholder='search' onClick={headerOpenModal} />
              </>
            </div>
            <Modal
              open={openModal}
              onClose={handleCloseModal}
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Text in a modal
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography>
              </Box>
            </Modal>
          </div>
        ) : (
          <>
            <div>
              <div className='container--spacing container-bg'>
                <div className='header mobile--view'>
                  <div className='d-flex gap-3 align-items-center'>
                    <div>
                      {openDrawer ? <AiOutlineClose className="header-icon" onClick={handleDrawerClose} /> : <AiOutlineMenu className="header-icon" onClick={handleClick} />}
                    </div>
                    <CustomDrawer openDrawer={openDrawer} closeDrawer={handleDrawerClose} />

                    <div>
                      <img style={{ height: "26px" }} src={jiosvg} />
                    </div>
                  </div>
                  <div className='d-flex align-items-center gap-3 '>
                    <div className='sm--screen--view'>
                      <AiOutlineSearch className='header-icon' onClick={handleSearchModal} />
                    </div>
                    <div className='header--search m--screen--view'>
                      <>
                        <AiOutlineSearch className='header-icon' onClick={handleSearchModal} />
                        <input className="header-input" placeholder='search' onClick={handleSearchModal} />
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
                        <img src={jiosvg} onClick={() => navigate("/")} />
                      </div>
                      <div onClick={() => navigate("/MobilePage")}>
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
                        <input className="header-input" placeholder='search' onClick={handleSearchModal} />
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
              {
                location.pathname!=="/" && (
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
                )
              }
            </div>
          </>
        )
      }
    </div>
  )
}
export default Header
