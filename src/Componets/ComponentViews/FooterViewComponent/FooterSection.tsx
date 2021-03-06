import React, { useState } from 'react'
import { Grid, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material"
import { AiFillInstagram, AiFillTwitterCircle, AiFillYoutube, AiFillLinkedin } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import "./Footer.scss"
import AddIcon from '@mui/icons-material/Add';
import { AiOutlineMinus } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import jiosvg from '../../../Assert/svg/jio.svg'
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
    const [expand, setExpand] = useState<string | boolean>("" || false)
    let navigate = useNavigate();
    const AccordionData = [
        { id: 1, Title: <Typography onClick={() => navigate("/MobilePage")}>Our offerings</Typography>, MiniList: [{ id: 1, list: "Mobile" }, { id: 2, list: "Fiber" }, { id: 3, list: "Business" }, { id: 4, list: "Apps" }, { id: 5, list: "Shop" }], PanelType: "panel-1" },
        { id: 2, Title: <Typography onClick={() => navigate("/MobilePage")}>Support</Typography>, MiniList: [{ id: 1, list: "Explore Support" }, { id: 2, list: "Locate us" }, { id: 3, list: "FAQ" }, { id: 4, list: "Track order" }, { id: 5, list: "Contact us" }], PanelType: "panel-2" },
        { id: 3, Title: <Typography onClick={() => navigate("/MobilePage")}>Our company</Typography>, MiniList: [{ id: 1, list: "Reliance Indstries" }, { id: 2, list: "Reliance Foundation" }, { id: 3, list: "JioLife" }, { id: 4, list: "Careers" }, { id: 5, list: "Investor relations" }], PanelType: "panel-3" },
        { id: 4, Title: <Typography onClick={() => navigate("/MobilePage")}>Useful links</Typography>, MiniList: [{ id: 1, list: "Get Jio Sim" }, { id: 2, list: "Get JioFiber" }, { id: 3, list: "Recharge" }, { id: 5, list: "Pay Bills" }, { id: 6, list: "Login" }], PanelType: "panel-4" },
    ]
    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, Expanded: boolean) => {
            setExpand(Expanded ? panel : false);
        };
    console.log(allFooter.support)
    return (
        <div className='container container--spacing'>
            <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Grid container>
                        <Grid item xs={9} sx={{ display: { xs: "none !important", md: "flex !important", lg: "flex !important" } }}>
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
                        <Grid item xs={12} sx={{ display: { xs: "flex !important", md: "none !important", lg: "none !important" }, p: "0px !important" }}>
                            <Grid container>
                                {
                                    AccordionData?.map((item) => {
                                        return (
                                            <Grid item xs={12}>
                                                <Accordion
                                                    onChange={handleChange(item.PanelType)}
                                                    expanded={expand === item.PanelType}
                                                    sx={{ p: 2, backgroundColor: "", boxShadow: "0px 2px 1px -1px rgb(0 0 0 / 0%), 0px 1px 1px 0px rgb(0 0 0 / 0%), 0px 1px 3px 0px rgb(0 0 0 / 0%)!important" }}
                                                >
                                                    <AccordionSummary
                                                        expandIcon={expand === item.PanelType ? <AiOutlineMinus /> : <AddIcon />}
                                                    >
                                                        <Typography>{item.Title}</Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails sx={{ ml: 2 }}>
                                                        {
                                                            item?.MiniList.map((val, index) => {
                                                                return (
                                                                    <React.Fragment key={index}>
                                                                        <Typography sx={{ mb: 2 }}>{val.list}</Typography>
                                                                    </React.Fragment>
                                                                )
                                                            })
                                                        }
                                                    </AccordionDetails>
                                                </Accordion></Grid>
                                        )
                                    })
                                }


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

            <div className="Footer--section">
                <div className="">
                    <img style={{ height: "26px" }} src={jiosvg} />
                </div>
                <div className="Footer--text">
                    <p className="text-xs tracking-tighter text-gray-500">Copyright ?? 2022 Reliance Jio Infocomm Ltd. All rights reserved.</p>
                </div>

                <div className="Footer--section-li">
                    <p className="text-xs tracking-tighter text-gray-500">Press release</p>
                    <p className="text-xs tracking-tighter text-gray-500">Regulatory</p>
                    <p className="text-xs tracking-tighter text-gray-500">policies</p>
                    <p className="text-xs tracking-tighter text-gray-500">terms&conditions</p>
                </div>

            </div>
        </div>
    )
}

export default FooterSection