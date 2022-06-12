import React from 'react'
import './Home.scss'
import {MdPlayCircleOutline} from 'react-icons/md'
const GirlDesktop = require("../../../Assert/img/GirlDesk.jpg")
const teamsDesktop = require("../../../Assert/img/heroDesk.jpg")
const MicrosoftDesktop = require("../../../Assert/img/MicroSoftDesk.png")
const HomePage = () => {
    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="image--container">
                            <img alt="pic" className='carousel--image' src={MicrosoftDesktop} />
                        </div>
                        <div className="content">
                            <div className="layout--width">
                                <div className="Header--content mx-16 mt-14">
                                    <h2 className="tracking-tighter	text-7xl leading-none text-white font-black">Digital life for every Indian</h2>
                                    <div className="text-primary-grey mt-2 text-lg leading-7">Created with Google, your JioPhone Next is a fully-featured 4G smartphone. </div>
                                    <div className="mt-4 flex gap-4">
                                        <button className='px-3 py-3 font-bold rounded-full  bg-brand-blu text-white'>
                                        &#8377; Get for 1499
                                        </button>
                                        <button className='px-3 py-1 font-bold rounded-full flex gap-1 items-center text-white border-1 border-brand-gr'>
                                            <span>Experience it</span>
                                            <MdPlayCircleOutline className="text-white rounded-full text-xl"/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item ">
                        <div className="image--container">
                            <img alt="pic" className='carousel--image' src={teamsDesktop} />
                        </div>
                        <div className="content">
                            <div className="layout--width">
                                <div className="Header--content mx-16 mt-14">
                                    <h2 className="tracking-tighter	text-7xl leading-none text-white font-black">The future of connected living</h2>
                                    <div className="text-primary-grey mt-2 text-lg leading-7">Superfast home internet with unlimited data, FREE Jio Set-top Box, and more.</div>
                                    <div className="mt-4 flex gap-4">
                                        <button className='px-3 py-3 font-bold rounded-full  bg-brand-blu text-white'>
                                        Get JioFiber
                                        </button>
                                        <button className='px-3 py-1 font-bold rounded-full flex gap-1 items-center text-white border-1 border-brand-gr'>
                                            <span>Surprises inside</span>
                                            <MdPlayCircleOutline className="text-white rounded-full text-xl"/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item ">
                        <div className="image--container">
                            <img alt="pic" className='carousel--image' src={GirlDesktop} />
                        </div>
                        <div className="content">
                            <div className="layout--width">
                                <div className="Header--content mx-16 mt-14">
                                    <h2 className="tracking-tighter	text-7xl leading-none text-white font-black">The best things in life are FREE</h2>
                                    <div className="text-primary-grey mt-2 text-lg leading-7">High-speed connectivity, digital delights, and many priceless moments.</div>
                                    <div className="mt-4 flex gap-4">
                                        <button className='px-3 py-3 font-bold rounded-full  bg-brand-blu text-white'>
                                          Get Jio Sim
                                        </button>
                                        <button className='px-3 py-1 font-bold rounded-full flex gap-1 items-center text-white border-1 border-brand-gr'>
                                            <span>Let's celebrate</span>
                                            <MdPlayCircleOutline className="text-white rounded-full text-xl"/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
            </div>
        </div>
    )
}

export default HomePage