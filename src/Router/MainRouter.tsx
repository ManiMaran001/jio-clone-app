import { Routes, Route } from 'react-router-dom'
import Header from '../Componets/ComponentViews/HeaderViewComponent/Header';
import FooterSection from '../Componets/ComponentViews/FooterViewComponent/FooterSection'
import { FunctionRoutes } from './FunctionRoutes';
const MainRouter = () => {
    return (
        <div>
            <header>
                <Header />
            </header>
            {
                FunctionRoutes?.map((route: any) => {
                    return (
                        <Routes>
                            <Route path={route.path} element={route.Component} />
                        </Routes>
                    )
                })
            }
            <footer>
                <FooterSection />
            </footer>
        </div>
    )
}

export default MainRouter