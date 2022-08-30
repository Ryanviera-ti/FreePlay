import { Home } from "../pages/Home/Home"
import { useRoutes } from "react-router-dom"
import { GamesPages } from "../pages/GamesPage/GamesPage"
export const RoutList = () => {
    return useRoutes([
        {path:'/' ,  element: <Home />} ,
        {path:'/games',  element:  <GamesPages /> }
    

    ])
}