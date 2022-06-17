import React from "react";
import "./Home.scss";
import { MdPlayCircleOutline, MdPortableWifiOff } from "react-icons/md";
import Recharge from "../../../Assert/svg/recharge.svg";
import Paybills from "../../../Assert/svg/paybills.svg";
import JioFiber from "../../../Assert/svg/jiofiber.svg";
import JioSim from "../../../Assert/svg/jiosim.svg";
import Port from "../../../Assert/svg/port.svg";
import Support from "../../../Assert/svg/support.svg";
const GirlDesktop = require("../../../Assert/img/GirlDesk.jpg");
const teamsDesktop = require("../../../Assert/img/heroDesk.jpg");
const MicrosoftDesktop = require("../../../Assert/img/MicroSoftDesk.png");
const GirlTablet = require("../../../Assert/img/girlTab.jpg");
const teamsTablet = require("../../../Assert/img/heroTab.jpg");
const MicrosoftTablet = require("../../../Assert/img/MicosoftTab.jpg");
const vertical1 =require("../../../Assert/img/Vertical-3.png");
const vertical2=require("../../../Assert/img/Vertical-2.png");
const vertical3=require("../../../Assert/img/Vertical-1.png");

const HomePage = () => {
  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="image--container Desktop--view">
              <img
                alt="pic"
                className="carousel--image"
                src={MicrosoftDesktop}
              />
            </div>
            <div className="content Desktop--view">
              <div className="layout--width">
                <div className="Header--content mx-16 mt-14 ">
                  <h2 className="tracking-tighter	text-7xl leading-none text-white font-black">
                    Digital life for every Indian
                  </h2>
                  <div className="text-primary-grey mt-2 text-lg leading-7">
                    Created with Google, your JioPhone Next is a fully-featured
                    4G smartphone.{" "}
                  </div>
                  <div className="mt-4 flex gap-4">
                    <button className="px-3 py-3 font-bold rounded-full  bg-brand-blu text-white">
                      &#8377; Get for 1499
                    </button>
                    <button className="px-3 py-1 font-bold rounded-full flex gap-1 items-center text-white border-1 border-brand-gr">
                      <span>Experience it</span>
                      <MdPlayCircleOutline className="text-white rounded-full text-xl" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/*tablet---view--------------------tablet--view*/}
            <div className="image--container Tablet--view">
              <img
                alt="pic"
                className="carousel--image"
                src={MicrosoftTablet}
              />
            </div>
            <div className="Tablet--view">
              <div className="content">
                <div className="layout--width">
                  <div className="Header--content mx-10 mt-16 md:mt-28 sm:mt-24">
                    <h2 className="tracking-tighter	text-4xl leading-none text-white font-black">
                      Digital life for every Indian
                    </h2>
                    <div className="text-primary-grey mt-2 text-md leading-7">
                      Created with Google, your JioPhone Next is a
                      fully-featured 4G smartphone.
                    </div>
                    <div className="mt-3 flex--tablet--container">
                      <button className="px-2 py-2 font-bold rounded-full bg-brand-blu text-white">
                        &#8377; Get for 1499
                      </button>
                      <button className="px-3 py-1 Tablet--btn font-bold rounded-full flex gap-1 items-center text-white border-1 border-brand-gr">
                        <span>Experience it</span>
                        <MdPlayCircleOutline className="text-white rounded-full text-xl" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item ">
            <div className="image--container Desktop--view">
              <img alt="pic" className="carousel--image" src={teamsDesktop} />
            </div>
            <div className="content Desktop--view">
              <div className="layout--width">
                <div className="Header--content mx-16 mt-14">
                  <h2 className="tracking-tighter	text-7xl leading-none text-white font-black">
                    The future of connected living
                  </h2>
                  <div className="text-primary-grey mt-2 text-lg leading-7">
                    Superfast home internet with unlimited data, FREE Jio
                    Set-top Box, and more.
                  </div>
                  <div className="mt-4 flex gap-4">
                    <button className="px-3 py-3 font-bold rounded-full  bg-brand-blu text-white">
                      Get JioFiber
                    </button>
                    <button className="px-3 py-1 font-bold rounded-full flex gap-1 items-center text-white border-1 border-brand-gr">
                      <span>Surprises inside</span>
                      <MdPlayCircleOutline className="text-white rounded-full text-xl" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/*tablet---view--------------------tablet--view*/}
            <div className="image--container Tablet--view">
              <img alt="pic" className="carousel--image" src={teamsTablet} />
            </div>
            <div className="Tablet--view">
              <div className="content">
                <div className="layout--width">
                  <div className="Header--content mx-10 mt-16 md:mt-28 sm:mt-24">
                    <h2 className="tracking-tighter	text-4xl leading-none text-white font-black">
                      The future of connected living
                    </h2>
                    <div className="text-primary-grey mt-2 text-md leading-7">
                      Superfast home internet with unlimited data, FREE Jio
                      Set-top Box, and more.
                    </div>
                    <div className="mt-3 flex--tablet--container">
                      <button className="px-2 py-2 font-bold rounded-full bg-brand-blu text-white">
                        Get JioFiber
                      </button>
                      <button className="px-3 py-1 Tablet--btn font-bold rounded-full flex gap-1 items-center text-white border-1 border-brand-gr">
                        <span>Surprises inside</span>
                        <MdPlayCircleOutline className="text-white rounded-full text-xl" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="image--container Desktop--view">
              <img alt="pic" className="carousel--image" src={GirlDesktop} />
            </div>
            <div className="content Desktop--view">
              <div className="layout--width">
                <div className="Header--content mx-16 mt-14">
                  <h2 className="tracking-tighter	text-7xl  leading-none text-white font-black">
                    The best things in life are FREE
                  </h2>
                  <div className="text-primary-grey mt-2 text-lg leading-7">
                    High-speed connectivity, digital delights, and many
                    priceless moments.
                  </div>
                  <div className="mt-4 sm:flex sm:gap-2">
                    <button className="px-3 py-3 font-bold rounded-full bg-brand-blu text-white">
                      Get Jio Sim
                    </button>
                    <button className="px-3 py-1 font-bold rounded-full flex gap-1 items-center text-white border-1 border-brand-gr">
                      <span>Let's celebrate</span>
                      <MdPlayCircleOutline className="text-white rounded-full text-xl" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/*tablet view----------------tablet view*/}
            <div className="image--container Tablet--view">
              <img alt="pic" className="carousel--image" src={GirlTablet} />
            </div>
            <div className="Tablet--view">
              <div className="content">
                <div className="layout--width">
                  <div className="Header--content mx-10 mt-16 md:mt-28 sm:mt-24">
                    <h2 className="tracking-tighter	text-4xl leading-none text-white font-black">
                      The best things in life are FREE
                    </h2>
                    <div className="text-primary-grey mt-2 text-md leading-7">
                      High-speed connectivity, digital delights, and many
                      priceless moments.
                    </div>
                    <div className="mt-3 flex--tablet--container">
                      <button className="px-2 py-2 font-bold rounded-full bg-brand-blu text-white">
                        Get Jio Sim
                      </button>
                      <button className="px-3 py-1 Tablet--btn font-bold rounded-full flex gap-1 items-center text-white border-1 border-brand-gr">
                        <span>Let's celebrate</span>
                        <MdPlayCircleOutline className="text-white rounded-full text-xl" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
      </div>

      <div className="grid grid-cols-8 sm:grid-cols-2 md:grid-cols-8 lg:grid-cols-8 xl:grid-cols-8 grid-rows-1 mt-1 mb-1">
        <div className=""></div>
        <div className="col-start-3 col-span-4">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-1 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-6 ">
            <div>
              <div className="w-100">
                <img
                  src={Recharge}
                  alt="recharge"
                  className="w-16 h-100 rounded-full bg-brand-light p-2"
                />
                <span>Recharge</span>
              </div>
            </div>
            <div>
              <div>
                <img
                  src={Paybills}
                  alt="recharge"
                  className="w-16 h-100 rounded-full bg-brand-light p-2"
                />
                <span>PayBills</span>
              </div>
            </div>
            <div>
              <div className="w-100">
                <img
                  src={JioSim}
                  alt="recharge"
                  className="w-16 h-100 rounded-full bg-brand-light p-2"
                />
                <span>Get Jio Sim</span>
              </div>
            </div>
            <div>
              <div>
                <img
                  src={JioFiber}
                  alt="recharge"
                  className="w-16 h-100 rounded-full bg-brand-light p-2"
                />
                <span>Get JioFiber</span>
              </div>
            </div>
            <div>
              <div>
                <img
                  src={Port}
                  alt="recharge"
                  className="w-16 h-100 rounded-full bg-brand-light p-2"
                />
                <span>Port to Jio</span>
              </div>
            </div>
            <div>
              <div>
                <img
                  src={Support}
                  alt="recharge"
                  className="w-16 h-100 rounded-full bg-brand-light p-2"
                />
                <span>Support</span>
              </div>
            </div>
          </div>
        </div>
        <div className=""></div>
        <div className=""></div>
      </div>

      <div className="mt-4 container--spacing main--container">
        <div className="container--box">
          <h2 className=" text-4xl md:text-7xl lg:text-7xl xl:text-7xl  font-black tracking-tighter leading-4">
            In the spotlight
          </h2>
          <p className="mt-4 md:mt-3 lg:mt-5 xl:mt-5 text-lg font-medium tracking-normal text-primary-80-grey">
            The best deals, new launches, and top-selling products right now.
          </p>
        </div>
      </div>

      <div className="container--spacing mt-16">
        <div className="col-sm-12 row">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
            <div className="video--text">
              <h2 className=" text-4xl md:text-4xl lg:text-7xl xl:text-7xl font-black tracking-tighter">
                Say "Cheese!" India's favourite selfie phone is here
              </h2>
              <p className=" mt-2 text-lg font-medium tracking-normal text-primary-80-grey">
                Get a JioPhone Next now for only ₹4499.
              </p>
              <button className="mt-3 px-3 py-3 font-bold rounded-full  bg-brand-blu text-white">
                Explore Now
              </button>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
            <video controls autoPlay={true} loop muted poster="">
              <source
                src=" https://jep-asset.akamaized.net/jio/welcome-page/Unlimited-Entertainment-edit2.mp4 "
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>

      <div className="container--spacing mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-1">
          <div className="max-w-sm rounded-md overflow-hidden shadow-lg">
            <img
              className="w-full"
              src={vertical1}
              alt="Sunset in the mountains"
            />
            <div className="bg-brand-thick">
            <div className="px-6 py-4">
              <div className="mini--cart">JIOMART</div>
              <p className="mini--cart--para">
                Buy groceries on the go
              </p>
              <p className="text-primary-grey pt-2 text-lg">
                Lowest prices,free home delivery
              </p>
              <button className="mini--cart--btn mt-4">
                Shop at JioMart
              </button>
            </div>
            </div>
          </div>
          <div className="max-w-sm rounded-md overflow-hidden shadow-lg">
            <img
              className="w-full"
              src={vertical3}
              alt="Sunset in the mountains"
            />
            <div className="bg-brand-thick">
            <div className="px-6 py-4">
              <div className="mini--cart">FURNITURE & MORE</div>
              <p className="mini--cart--para">
               Best deals on furniture
              </p>
              <p className="text-primary-grey pt-2 text-lg">
               upto 70% off at urban ladder
              </p>
              <button className="mini--cart--btn mt-4">
                Start Shopping
              </button>
            </div>
            </div>
          </div>
          <div className="max-w-sm rounded-md overflow-hidden shadow-lg">
            <img
              className="w-full"
              src={vertical2}
              alt="Sunset in the mountains"
            />
            <div className="bg-brand-thick">
            <div className="px-6 py-4">
              <div className="mini--cart">PARTNER BRANDS</div>
              <p className="mini--cart--para">
              Save on partner brands
              </p>
              <p className="text-primary-grey pt-2 text-lg">
              Vouchers,cashbacks, and more
              </p>
              <button className="mini--cart--btn mt-4">
                Check Partner Offers
              </button>
            </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default HomePage;
