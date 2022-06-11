import React,{useState} from 'react'
import Header from './Componets/ComponentViews/HeaderViewComponent/Header'
import FooterSection from './Componets/ComponentViews/FooterViewComponent/FooterSection'
import MobileBodyComponent from './Componets/ComponentViews/MobieViewComponent/ MobileBodyComponent'
import CarouselComponent from './Componets/ComponentViews/MobieViewComponent/CarouselComponent'
import './Componets/ComponentViews/HeaderViewComponent/Header.scss'
const App = () => {
  return (
    <>
      <div>
      <header>
        <Header/>
      </header>
      <main>
        <div className='container'>
          <div>
          <CarouselComponent/>
          </div>
          <div>
            <MobileBodyComponent/>
          </div>
        </div>
        <div className="footer--section">
          <FooterSection/>
        </div>
      </main>
      </div>
    </>
  )
}
export default App

