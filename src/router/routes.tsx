import MainPage from '../pages/MainPage/MainPage'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'

interface Route {
    path: string
    element: JSX.Element
}

export const publicRoutes: Route[] = [
    {
        path: '/',
        element: <MainPage/>
    },
    {
        path: '*',
        element: <NotFoundPage/>
    },
]
