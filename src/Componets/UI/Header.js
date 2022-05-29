import React, { useState, useEffect } from 'react'
import '../CSSDesigns/Header.scss'
import jiosvg from '../../Assert/svg/jio.svg'
import { AiOutlineSearch, AiOutlineMenu } from 'react-icons/ai'
import { BsCartFill, BsFillCartFill } from 'react-icons/bs'
import { MdLiveHelp } from 'react-icons/md'
import { HiUserCircle } from 'react-icons/hi'
const Header = () => {
    const [mobile, setMobile] = useState(false)
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
    return (
        <div>
            <div className='container--spacing container-bg'>
                <div className='header mobile--view'>
                    <div className='d-flex gap-3 align-items-center'>
                        <div>
                            <AiOutlineMenu className="header-icon"/>
                        </div>

                        <div>
                            <img style={{height:"26px"}} src={jiosvg} />
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
                            <HiUserCircle style={{fontSize:"30px"}} />
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