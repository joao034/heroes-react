

import { createBrowserRouter } from 'react-router-dom'
import { MarvelPage, DcPage, ErrorPage, SearchPage, HeroPage } from '../heroes/pages'
import { LoginPage } from '../auth/pages/LoginPage.jsx'
import { Heroes } from '../Heroes.jsx'
import { PrivateRoute } from './PrivateRoute.jsx'
import { PublicRoute } from './PublicRoute.jsx'

export const router = createBrowserRouter([
    {
        path: '/',
        element: (<PrivateRoute>
                    <Heroes />
                </PrivateRoute>),
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <MarvelPage />
            },
            {
                path: 'marvel',
                element: <MarvelPage />
            },
            {
                path: 'dc',
                element: <DcPage />
            },
            {
                path: 'search',
                element: <SearchPage />
            },
            {
                path: 'hero/:heroeId',
                element: <HeroPage />
            },
        ]
    },
    {
        path: 'login',
        element: <PublicRoute>
                    <LoginPage />
                </PublicRoute>
    },

])


