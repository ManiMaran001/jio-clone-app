import MobilePage from '../Componets/ComponentViews/MobieViewComponent/MobilePage'
import HomePage from '../Componets/ComponentViews/HomePageViewComponent/HomePage'
import LoginPage from '../Componets/ComponentViews/LoginPageComponent/LoginPage'

export const FunctionRoutes=[
    {
        path:"/",
        Component:<HomePage/>
    },
    {
        path:"/MobilePage",
        Component:<MobilePage/>
    },
    {
        path:"/loginpage",
        Component:<LoginPage/>
    }
]