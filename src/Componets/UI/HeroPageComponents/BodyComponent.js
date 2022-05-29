import React from 'react'
import '../../CSSDesigns/Body.scss'
import { Grid, Box, Paper, Divider, Chip } from '@mui/material'
import JiophoneImg from '../../../Assert/img/jiophone-next.png'
import watchImg from '../../../Assert/img/watch-series.png'
import TeamsImg from '../../../Assert/img/MicrosoftTeams.png'
import jioCinema from '../../../Assert/img/jiocinema.jpg'
import jioApp from '../../../Assert/img/myjio.png'
import jioSaavn from '../../../Assert/img/jiosaavn.png'
import partnerBanner from '../../../Assert/img/Partners-banner.png'
import styleBannner from '../../../Assert/img/style-banner.jpg'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const data = [
    {
        id: 1, plan: "PREPAID PLAN", amount: "299", description: "Unlimited Voice and SMS",
        img1: "https://jep-asset.akamaized.net/jio/svg/logo/jiotv-n.svg", img2: "https://jep-asset.akamaized.net/jio/svg/logo/jiocinema-n.svg", img3: "https://jep-asset.akamaized.net/jio/svg/logo/jiosecurity-n.svg", tag: "1 more", validity: "28 days", benefits: "2 GB/day"
    },
    {
        id: 2, plan: "CRICKET PLAN", amount: "499", description: "Unlimited Voice and SMS with 1-year Disney+ Hotstar mobile subscription worth ₹499",
        img1: "https://jep-asset.akamaized.net/jio/svg/app-logo/ic_dph-n.svg", img2: "https://jep-asset.akamaized.net/jio/svg/logo/jiotv-n.svg", img3: "https://jep-asset.akamaized.net/jio/svg/logo/jiocinema-n.svg", tag: "2 more", validity: "28 days", benefits: "2 GB/day"
    },
    {
        id: 3, plan: "PREPAID PLAN", amount: "666", description: "Unlimited Voice and SMS",
        img1: "https://jep-asset.akamaized.net/jio/svg/logo/jiotv-n.svg", img2: "https://jep-asset.akamaized.net/jio/svg/logo/jiocinema-n.svg", img3: "https://jep-asset.akamaized.net/jio/svg/logo/jiosecurity-n.svg", tag: "1 more", validity: "84 days", benefits: "1.5 GB/day"
    }
]

const miniProduct = [
    {
        id: "1",
        ProductName: "JioPhone Next",
        ProductDescription: "At Rs. 4499 Under Exchange",
        img: JiophoneImg
    },
    {
        id: "2",
        ProductName: "Apple Watch Series 7",
        ProductDescription: "From ₹41,900",
        img: watchImg
    },
    {
        id: "3",
        ProductName: "Apple iPhone 13",
        ProductDescription: "From ₹79,900",
        img: TeamsImg
    }
]

const AppsData = [
    {
        id: 1,
        HeroImg: jioApp,
        appName: "MyJio",
        appImg: "https://jep-asset.akamaized.net/jio/svg/logo/myjio-n.svg",
        description: " Just one app for everything Jio! A super app packed with all the Jio services and exciting offers.",
        text: "Know more"
    },
    {
        id: 2,
        HeroImg: jioCinema,
        appName: "JioCinema",
        appImg: "https://jep-asset.akamaized.net/jio/svg/logo/jiocinema-n.svg",
        description: "Watch blockbuster movies, trending web series, viral videos, and more from the world over.",
        text: "Find out more"
    },
    {
        id: 3,
        HeroImg: jioSaavn,
        appName: "JioSaavn",
        appImg: "https://jep-asset.akamaized.net/jio/svg/logo/jiosaavn-n.svg",
        description: "80 million songs, 16 languages, and unlimited emotions on JioSaavn. Download now for FREE!",
        text: "Check it out"
    }
]



const BodyComponent = () => {
    return (
        <div className="container--box">
            <h3 className='header--secondary'>Recharge for unlimited experiences</h3>
            <Box>
                <Grid container className="mt-4">
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Grid container spacing={3}>
                            {
                                data.map((item) => {
                                    return (
                                        <Grid item xs={12} sm={12} md={4} lg={4} key={item.id}>
                                            <Paper elevation={1} className="Recharge--box">
                                                <Box className="Recharge--inner">
                                                    <div className='Recharge--header'>
                                                        <span className='Plan'>{item.plan}</span>
                                                        <h3 >&#8377;{item.amount}</h3>
                                                        <p className="card--desc">{item.description}</p>
                                                        <div className="app-images d-flex align-items-center">
                                                            <img className='app-img' src={item.img1} alt="jio-tv" />
                                                            <img className='app-img' src={item.img2} alt="jio-cinema" />
                                                            <img className='app-img' src={item.img3} alt="jio-security" />
                                                            <div>
                                                                <span>+{item.tag}</span>
                                                            </div>
                                                        </div>
                                                        <Divider className="divider" />
                                                        <div className="d-flex gap-5 valid--container">
                                                            <div className='d-flex flex-column valid-box'>
                                                                <span className='valid--box1'>
                                                                    Validity
                                                                </span>
                                                                <span className='valid--box2'>
                                                                    {item.validity}
                                                                </span>
                                                            </div>
                                                            <div className='d-flex flex-column'>
                                                                <span className='valid--box1'>
                                                                    Benefits
                                                                </span>
                                                                <span className='valid--box2'>
                                                                    {item.benefits}
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="Recharge--footer d-flex align-items-center gap-5">
                                                            <div>
                                                                <Chip label="Recharge" outlined className="footer--chip" />
                                                            </div>
                                                            <div>
                                                                <p>View details</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Box>
                                            </Paper>
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    </Grid>
                </Grid>

                <Grid container className="center--plan mt-4">
                    <Grid item xs={12} sm={12} md={12} lg={1.5}>
                        <div className="chip--container">
                            View all plans
                        </div>
                    </Grid>
                </Grid>
            </Box>


            <div>
                <h3 className="mt-16 text-4xl font-black  tracking-tighter">Best-selling devices at the best prices</h3>
                <div class="mt-8 grid grid-cols-1 grid-rows-1 sm:grid-cols-1 sm:grid-rows-1 md:grid-cols-2 md:grid-rows-1 lg:grid-cols-3 lg:grid-rows-1 gap-4">
                    {
                        miniProduct.map((item) => {
                            return (
                                <div key={item.id}>
                                    <div class="max-w-sm rounded overflow-hidden  shadow-md p-3">
                                        <div className='h-4'>
                                            {item.id === "1" && (<span className="pt-8 font-extrabold text-sm tracking-tighter text-white bg-brand-blue p-1">EXCHANGE TO UPGRADE</span>)}
                                        </div>
                                        <div className="w-auto h-auto pt-8">
                                            <img src={item.img} alt="prodcut img" />
                                        </div>
                                        <p className="pt-6 font-bold tracking-normal text-black leading-6 text-base">{item.ProductName}</p>
                                        <p className=" pt-1 tracking-normal text-base leading-6 text-gray-500">{item.ProductDescription}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <Box>
                    <Grid container className="center--plan mt-4">
                        <Grid item xs={12} sm={12} md={1.5} lg={1.5}>
                            <div className="chip--container">
                                View more
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </div>

            <div>
                <h3 className="mt-16 text-4xl font-black  tracking-tighter">Enrich your digital life with Jio apps</h3>
                <div class="mt-8 grid grid-cols-1 grid-rows-1 sm:grid-cols-1 sm:grid-rows-1 md:grid-cols-2 md:grid-rows-1 lg:grid-cols-3 lg:grid-rows-1 gap-4">
                    {
                        AppsData.map((item) => {
                            return (
                                <div class="max-w-sm rounded-default overflow-hidden  shadow-md p-0" key={item.id}>
                                    <img className='rounded-l-default rounded-r-default' src={item.HeroImg} alt="jio app" />
                                    <div className="p-3">
                                        <div className='w-full flex gap-4 items-center'>
                                            <img className="w-7" src={item.appImg} alt="jio-app" />
                                            <p className="font-black text-lg  font-extrabold leading-4 tracking-tighter">{item.appName}</p>
                                        </div>
                                        <p className="text-gray-600 text-base tracking-tighter leading-6 mt-2">
                                            {item.description}
                                        </p>
                                        <div className="flex gap-4 items-center mt-3">
                                            <div className="rounded-full text-white font-bold text-base bg-brand-primary pl-3 pr-3 pt-2 pb-2">
                                                Get Now
                                            </div>
                                            <div className='hover:bg-brand-light rounded-default p-2'>
                                                <p className="text-primary-blue font-bold text-base tracking-normal">{item.text}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <Grid container className="center--plan mt-4">
                    <Grid item xs={12} sm={12} md={12} lg={1.5}>
                        <div className="chip--container">
                            View all apps
                        </div>
                    </Grid>
                </Grid>
            </div>


            <Box>
                <h3 className='header--secondary'>More from Jio</h3>                
            </Box>
        </div>
    )
}
export default BodyComponent

/*
<Grid container >
                    <Grid item xs={12} md={12} sm={12} lg={12}>
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <Grid container>
                                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6} sx={{ p:3,background: "#0f3cc9" }}>
                                        <Box  sx={{fontSize:"2rem !important",mb:10}}>
                                            <h1>Offers from our partners</h1>
                                            <p>Check partner offers</p>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6} sx={{ background: "green" }}>
                                        <Box>
                                            <img style={{ width: "100%", height: "100%" }} src={partnerBanner} alt="pic1" />
                                        </Box>
                                    </Grid>
                                </Grid>

                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <Grid container>
                                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6} sx={{ background: "#0f3cc9", }}>
                                        <Box>
                                            <h1>
                                                Grab your favourite styles</h1>
                                            <p>
                                                Shop at AJIO
                                            </p>

                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6} sx={{ background: "green" }}>
                                        <Box>
                                            <img style={{ width: "100%", height: "210px" }} src={styleBannner} alt="pic2" />
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
*/