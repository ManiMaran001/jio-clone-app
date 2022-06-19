import React from "react";
import "./Home.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MdPlayCircleOutline } from "react-icons/md";
import {
  Box,
  Typography,
  Card,
  CardActions,
  CardContent,
  Button,
  Grid,
} from "@mui/material";
import Recharge from "../../../Assert/svg/recharge.svg";
import JioRibbon from '../../../Assert/svg/jioRibbon.svg';
import Paybills from "../../../Assert/svg/paybills.svg";
import JioFiber from "../../../Assert/svg/jiofiber.svg";
import JioSim from "../../../Assert/svg/jiosim.svg";
import Port from "../../../Assert/svg/port.svg";
import Support from "../../../Assert/svg/support.svg";
import JioSaavn from "../../../Assert/svg/jioSaavan.svg";
import JioMeet from "../../../Assert/svg/jioMeet.svg";
import JioCloud from "../../../Assert/svg/jioCloud.svg";
import JioMart from "../../../Assert/svg/jioMart.svg";
import JioNews from "../../../Assert/svg/jioNews.svg";
import JioGames from "../../../Assert/svg/jioGames.svg";
import MobileDesign from "../../../Assert/svg/MobileDesign.svg";
import HomeDesign from '../../../Assert/svg/HomeDesign.svg';
import JobDesign from '../../../Assert/svg/JobDesign.svg';
const GirlDesktop = require("../../../Assert/img/GirlDesk.jpg");
const teamsDesktop = require("../../../Assert/img/heroDesk.jpg");
const MicrosoftDesktop = require("../../../Assert/img/MicroSoftDesk.png");
const GirlTablet = require("../../../Assert/img/girlTab.jpg");
const teamsTablet = require("../../../Assert/img/heroTab.jpg");
const MicrosoftTablet = require("../../../Assert/img/MicosoftTab.jpg");
const vertical1 = require("../../../Assert/img/Vertical-3.png");
const vertical2 = require("../../../Assert/img/Vertical-2.png");
const vertical3 = require("../../../Assert/img/Vertical-1.png");

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const HomePage = () => {
  const multiCarouselData = [
    {
      id: 1,
      title: "JioCloud",
      check: "Find out more",
      background: "bg-brand-jio-cloud",
      svgImg: JioCloud,
      description:
        "Store all documents, photos, videos, contacts and messages safely and access anytime, anywhere",
    },
    {
      id: 2,
      title: "JioNews",
      check: "View More",
      background: "bg-brand-jio-news",
      svgImg: JioNews,
      description:
        "Breaking news, epapers, emagazines, live news channels, and more",
    },
    {
      id: 3,
      title: "JioMart",
      check: "Explore",
      background: "bg-brand-jio-mart",
      svgImg: JioMart,
      description:
        "Shop for groceries, dairy products, farm-fresh items, and more.",
    },
    {
      id: 4,
      title: "JioMeet",
      check: "Learn more",
      background: "bg-brand-jio-meet",
      svgImg: JioMeet,
      description:
        "A world-class video conferencing app to securely host business meetings and calls.",
    },
    {
      id: 5,
      title: "JioGames",
      check: "Read more",
      background: "bg-brand-jio-games",
      svgImg: JioGames,
      description:
        "Now participate in live esports tournaments and casual games to earn exciting rewards.",
    },
    {
      id: 6,
      title: "JioSaavn",
      check: "check it out",
      background: "bg-brand-jio-saavn",
      svgImg: JioMart,
      description:
        "Play over 80 million songs in 16 languages and across genres.",
    },
  ];
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
          <h2 className="text-4xl md:text-7xl lg:text-7xl xl:text-7xl  font-black tracking-tighter leading-4">
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
            <video autoPlay={true} loop muted poster="">
              <source
                src=" https://jep-asset.akamaized.net/jio/welcome-page/Unlimited-Entertainment-edit2.mp4 "
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
      <div className="card--container--spacing mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-1">
          <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg">
            <img
              className="w-full"
              src={vertical1}
              alt="Sunset in the mountains"
            />
            <div className="bg-brand-thick h-100">
              <div className="px-6 py-4">
                <div className="mini--cart">JIOMART</div>
                <p className="mini--cart--para w-auto">
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
          <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg">
            <img
              className="w-full"
              src={vertical3}
              alt="Sunset in the mountains"
            />
            <div className="bg-brand-thick h-100">
              <div className="px-6 py-4">
                <div className="mini--cart">FURNITURE & MORE</div>
                <p className="mini--cart--para w-auto">
                  Best deals on furniture
                </p>
                <p className="text-primary-grey pt-2 text-lg">
                  upto 70% off at urban ladder
                </p>
                <button className="mini--cart--btn mt-4">Start Shopping</button>
              </div>
            </div>
          </div>
          <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg">
            <img
              className="w-full"
              src={vertical2}
              alt="Sunset in the mountains"
            />
            <div className="bg-brand-thick h-100">
              <div className="px-6 py-4">
                <div className="mini--cart">PARTNER BRANDS</div>
                <p className="mini--cart--para w-auto ">
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
      <div className="mt-4 container--spacing main--container">
        <div className="container--box">
          <h2 className=" text-2xl md:text-7xl lg:text-7xl xl:text-7xl leading-8 font-black tracking-tighter leading-4">
            Enrich your digital life
          </h2>
          <p className="mt-4 md:mt-3 lg:mt-5 xl:mt-5 text-lg font-medium tracking-normal text-primary-80-grey">
            Stream, shop, connect, and do much more on the go with Jio apps.
          </p>
        </div>
      </div>
      <div>
        <div className="col-12">
          <div className="video--container">
            <video className="video" autoPlay={true} loop muted>
              <source
                src="https://jep-asset.akamaized.net/jio/welcome-page/ajio-new.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          {/* <div className="video--content">
            <div className="w-50 mx-20">
              <div className="flex gap-2 items-center w-24 bg-soft--bg rounded-full p-1">
                <img
                  src="https://jep-asset.akamaized.net/jio/svg/logo/Ajio.svg"
                  className="w-8 h-8"
                  alt="pic"
                />
                <span>AJIO</span>
              </div>
              <div className="text-white font-extrabold mt-2 text-5xl leading-14 w-75 pe-5">
                Be on top of your style game with all things trendy
              </div>

              <button className="mt-3 px-3 py-3 font-bold rounded-full  bg-brand-blu text-white">
                Fashion up now
              </button>
            </div>
          </div> */}
        </div>
      </div>
      <div className="mt-4">
        <Carousel
          responsive={responsive}
          autoPlay={true}
          centerMode={true}
          infinite={true}
          arrows={false}
          containerClass="carousel--container"
        >
          {multiCarouselData?.map((value) => {
            return (
              <div className={`card ${value.background} rounded-2xl`}>
                <div className="card-body">
                  <div className="d-flex">
                    <div className="card-content w-75">
                      <h5 className="card-title text-2xl leading-6 tracking-tight font-black">
                        {value.title}
                      </h5>
                      <p className="card-text text-md font-medium">
                        {value.description}
                      </p>
                    </div>
                    <div className="">
                      <img src={value.svgImg} alt="jiosaavn" className="w-20" />
                    </div>
                  </div>
                  <button className="btn--box d-flex justify-content-start">
                    {value.check}
                  </button>
                </div>
              </div>
            );
          })}
        </Carousel>
        <Grid container className="center--plan mt-4" justifyContent={"center"}>
          <Grid item xs={8} sm={2} md={1.5} lg={1.5}>
            <div className="chip--container">View all apps</div>
          </Grid>
        </Grid>
      </div>

      <div className="mt-4 container--spacing main--container">
        <div className="container--box">
          <h2 className="text-2xl md:text-7xl lg:text-7xl xl:text-7xl font-black tracking-tighter leading-8 leading-4">
            Discover new possibilities
          </h2>
          <p className="mt-4 md:mt-3 lg:mt-5 xl:mt-5 text-lg font-medium tracking-normal text-primary-80-grey">
            Planning a digital transformation for home, business, or personal
            experiences? You're just a step away.
          </p>
        </div>
      </div>

      <div>
        <div className="container--spacing mt-4">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
              <div className="d-flex justify-content-center align-items-center flex-column mt-3">
                <img
                  className="w-28 h-28"
                  src={MobileDesign}
                  alt="mobile design"
                />
                <h3 className="font-black text-4xl tracking-tighter mt-2">
                  Mobile
                </h3>
                <p className="text-center mt-3 font-medium text-base text-primary-80-grey">
                  Free SIM, calls, and SMS with invaluable digital experiences.
                </p>
                <button className="px-3 py-2 mt-3 font-bold rounded-full bg-brand-blu text-white">
                  Find out more
                </button>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
              <div className="d-flex justify-content-center align-items-center flex-column mt-3">
                <img
                  className="w-28 h-28"
                  src={HomeDesign}
                  alt="mobile design"
                />
                <h3 className="font-black text-4xl tracking-tighter mt-2">
                JioFiber
                </h3>
                <p className="text-center mt-3 font-medium text-base text-primary-80-grey">
                Connected living experiences with superfast home internet.
                </p>
                <button className="px-3 py-2 mt-3 font-bold rounded-full bg-brand-blu text-white">
                  Know more
                </button>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
              <div className="d-flex justify-content-center align-items-center flex-column mt-3">
                <img
                  className="w-28 h-28"
                  src={JobDesign}
                  alt="mobile design"
                />
                <h3 className="font-black text-4xl tracking-tighter mt-2">
                 Business
                </h3>
                <p className="text-center mt-3 font-medium text-base text-primary-80-grey">
                Enterprise-grade digital services to meet all your business needs.
                </p>
                <button className="px-3 py-2 mt-3 font-bold rounded-full bg-brand-blu text-white">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="col-12 mt-12">
        <img src={JioRibbon} alt="jio-ribbon"/>
      </div>
    </div>
  );
};

export default HomePage;
