import { Route } from 'react-router-dom'

import MainLayout from '../layouts/MainLayout/MainLayout.jsx'

import StatusRoute from './StatusRoute.jsx'
import {routeConfig} from './routeConfig.jsx'

import NotFound from "../pages/errors/NotFound.jsx"

export default function PublicRoutes() {
    return (
        <>
            <Route element={<MainLayout />} >
            {
                routeConfig.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        element={
                            <StatusRoute
                                Component={route.element}
                                status={route.status}
                            />
                        }
                    />    
                ))
            }
            </Route>
            <Route path="*" element={<NotFound />} />
        </>
    );
}