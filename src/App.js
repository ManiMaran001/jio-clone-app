import React,{useState} from 'react'
import Header from './Componets/UI/Header'
import './Componets/CSSDesigns/Header.scss'
import CarouselComponent from './Componets/UI/HeroPageComponents/CarouselComponent'
import BodyComponent from './Componets/UI/HeroPageComponents/BodyComponent'
import FooterSection from './Componets/UI/HeroPageComponents/FooterSection'
import CustomDrawer from './Componets/UI/CustomDrawer'

const App = () => {
  return (
    <>
      <div>
      <header>
        <Header/>
      </header>
      <main>
        <div className='container container--spacing'>
          <div>
          <CarouselComponent/>
          </div>
          <div>
            <BodyComponent/>
          </div>
        </div>
        <div className="footer--section">
          <FooterSection/>
        </div>
      </main>
      <footer>
      </footer>
      </div>
    </>
  )
}
export default App

