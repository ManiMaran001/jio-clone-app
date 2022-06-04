import React from 'react'
import { Grid, Box } from '@mui/material'
import { AiFillInstagram, AiFillTwitterCircle, AiFillYoutube, AiFillLinkedin } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import '../../CSSDesigns/Footer.scss'

const allFooter =
{
    offerings: ["Prepaid",
        "Postpaid",
        "Port to Jio",
        "International roaming",
        "Apps",
        "eSIM",
        "WiFi calling",
        "JioTunes",
        "Devices",
        "LYF smartphone+"],
    support: [
        "Track order",
        "My account",
        "FAQ",
        "Locate us",
        "Claim refund",
        "Reclaim number",
        "Feedback",
        "Contact us",
    ],
    ourCompany: [
        "Reliance Industries",
        "Reliance Foundation",
        "JioLife",
        "Careers",
        "Investor relations",
    ],
    links: [
        "Get Jio SIM",
        "JioAutoPay",
        "Brand offers",
        "Partner with Jio",
    ]
}

const FooterSection = () => {
    console.log(allFooter.support)
    return (
        <div className=' container container--spacing'>
            <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Grid container>
                        <Grid item xs={9} className="desktop--view">
                            <Grid container>
                                <Grid item xs={3}>
                                    <h6 className='font-black text-base leading-6 tracking-tighter'>our offerings</h6>
                                    <div className="mt-6">
                                        {
                                            allFooter?.offerings?.map((item, index) => {
                                                return (
                                                    <React.Fragment key={index}>
                                                        <p className="text-sm tracking-tighter text-gray-500 mb-3">{item}</p>
                                                    </React.Fragment>
                                                )
                                            })
                                        }
                                    </div>
                                </Grid>
                                <Grid item xs={3}>
                                    <h6 className='font-black text-base leading-6 tracking-tighter'>support</h6>
                                    <div className="mt-6">
                                        {
                                            allFooter?.support?.map((item, index) => {
                                                return (
                                                    <React.Fragment key={index}>
                                                        <p className="text-sm tracking-tighter text-gray-500 mb-3">{item}</p>
                                                    </React.Fragment>
                                                )
                                            })
                                        }
                                    </div>
                                </Grid>
                                <Grid item xs={3}>
                                    <h6 className='font-black text-base leading-6 tracking-tighter'>our company</h6>
                                    <div className="mt-6">
                                        {
                                            allFooter?.ourCompany?.map((item, index) => {
                                                return (
                                                    <React.Fragment key={index}>
                                                        <p className="text-sm tracking-tighter text-gray-500 mb-3">{item}</p>
                                                    </React.Fragment>
                                                )
                                            })
                                        }
                                    </div>
                                </Grid>
                                <Grid item xs={3}>
                                    <h6 className='font-black text-base leading-6 tracking-tighter'>Useful links</h6>
                                    <div className="mt-6">
                                        {
                                            allFooter?.links?.map((item, index) => {
                                                return (
                                                    <React.Fragment key={index}>
                                                        <p className="text-sm tracking-tighter text-gray-500 mb-3">{item}</p>
                                                    </React.Fragment>
                                                )
                                            })
                                        }
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                            <h4 className="font-black text-2xl tracking-tighter mb-3">Connect with us</h4>
                            <div className="flex mb-3 gap-4">
                                <span className="rounded-full bg-brand-thick p-2"><AiFillInstagram className="text-white text-md" /></span>
                                <span className="rounded-full bg-brand-thick p-2"><AiFillTwitterCircle className="text-white text-md" /></span>
                                <span className="rounded-full bg-brand-thick p-2"><BsFacebook className="text-white text-md" /></span>
                                <span className="rounded-full bg-brand-thick p-2"><AiFillYoutube className="text-white text-md" /></span>
                                <span className="rounded-full bg-brand-thick p-2"><AiFillLinkedin className="text-white text-md" /></span>
                            </div>
                            <h4 className="font-black text-2xl tracking-tighter  mb-3">Download MyJio</h4>
                            <div className='flex flex-col gap-3 sm:flex-row md:flex-row lg:flex-row xl:flex-row '>
                                <img className="h-10 " src="https://jep-asset.akamaized.net/jio/svg/android-ios-logo/G-Play.svg" />
                                <img className="h-10 " src="https://jep-asset.akamaized.net/jio/svg/android-ios-logo/AppStore.svg" />
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default FooterSection