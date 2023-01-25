import { useRoutes } from "react-router-dom";
import { Home } from '../pages/home'
import { ContentTeacher } from '../pages/content teacher'
import { Facility } from "../pages/facility";
import { GilsServices } from "../pages/gilsServices";

export const MainRoutes = () => {

    return useRoutes([
        {path: '/', element: <Home/> },
        {path: '/contentTeacher', element: <ContentTeacher/> },
        {path: '/facility', element: <Facility/> },
        {path: '/services', element: <GilsServices/> },
    ])
}