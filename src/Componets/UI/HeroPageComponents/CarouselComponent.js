import React from 'react'
import '..//../CSSDesigns/Header.scss'
import { Chip, Stack, Box, Grid } from '@mui/material'

const CarouselComponent = () => {
  return (
    <div>
      <div id="carouselExampleControls" class="carousel slide mt-4" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div className='image-container'>
              <div className='carousel--box d-flex'>
                <div className="carousel--header">
                  <h1>Watch live T20 matches with Jio Cricket plans, starting at ₹333</h1>
                  <p className='carousel-header-p'>check plans</p>
                </div>
                <div className="carousel--image">
                  <img src="https://www.jio.com/jio.com%20creative%20for%20ipl%202022-min.jpg" class="d-block w-100" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className='image-container'>
              <div className='carousel--box d-flex'>
                <div className="carousel--header">
                  <h1>Exchange any 4G phone to buy a JioPhone Next for only ₹4499</h1>
                  <p className='carousel-header-p'>Explore the exchange offer</p>
                </div>
                <div className="carousel--image">
                  <img src="https://www.jio.com/dhoni_mobile.png" class="d-block w-100" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className='image-container'>
              <div className='carousel--box d-flex'>
                <div className="carousel--header">
                  <h1>Enjoy 365 days of benefits with recharge of ₹2999</h1>
                  <p className='carousel-header-p'>Get it now</p>
                </div>
                <div className="carousel--image">
                  <img src="https://www.jio.com/mobile-hmpg-365-days-benefit-mob-min.jpg" class="d-block w-100" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
      </div>
      <div>
        <Box>
          <Grid container>
            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={0} md={12} lg={3} xl={0}>
                </Grid>
                <Grid xs={12} md={12} lg={6} xl={12}>
                  <Grid container justifyContent="space-between">
                    <Grid item xs={12}>
                      <Grid container spacing={2} justifyContent="space-between"> 
                      <Grid xs={12} lg={1}>
                        </Grid>
                        <Grid xs={12} lg={2.5}>
                          <div className="chip--container">
                            Recharge
                          </div>
                        </Grid>
                        <Grid xs={12} lg={2.5}>
                          <div className="chip--container">
                            Pay Bills
                          </div>
                        </Grid>
                        <Grid xs={12} lg={2.5}>
                          <div className="chip--container">
                            Get Jio Sim
                          </div>
                        </Grid>
                        <Grid xs={12} lg={2.5}>
                          <div className="chip--container">
                            Port to Jio
                          </div>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid xs={0} md={12} lg={3} xl={0}>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  )
}
export default CarouselComponent