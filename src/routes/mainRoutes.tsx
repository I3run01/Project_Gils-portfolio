import { useRoutes } from "react-router-dom";
import { Home } from '../pages/home'
import { ContentTeacher } from '../pages/content teacher'

export const MainRoutes = () => {

    return useRoutes([
        {path: '/', element: <Home/> },
        {path: '/contentTeacher', element: <ContentTeacher/> },
    ])
}