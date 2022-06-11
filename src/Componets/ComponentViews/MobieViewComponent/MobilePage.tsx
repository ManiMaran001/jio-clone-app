import React from 'react'
import CarouselComponent from './CarouselComponent'
import MobileBodyComponent from './ MobileBodyComponent'
const MobilePage=()=>{
    return (
        <div className='container'>
          <div>
          <CarouselComponent/>
          </div>
          <div>
            <MobileBodyComponent/>
          </div>
        </div>
    )
}
export default MobilePage