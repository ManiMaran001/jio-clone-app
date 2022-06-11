import React from 'react'
import './Home.scss'
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
                            heading
                            heading  heading  heading  heading  heading  heading
                            heading  heading  heading
                        </div>
                    </div>
                    <div className="carousel-item ">
                        <div className="image--container">
                            <img alt="pic" className='carousel--image' src={teamsDesktop} />
                        </div>
                    </div>
                    <div className="carousel-item ">
                        <div className="image--container">
                            <img alt="pic" className='carousel--image' src={GirlDesktop} />
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