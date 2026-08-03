import { Routes, Route } from 'react-router-dom'

import PublicRoutes from './PublicRoutes.jsx'

/**
 * ============================================================================
 * AppRouter
 * ============================================================================
 *
 * Root router of the application.
 *
 * Responsibilities
 * ----------------
 * • Register all route groups.
 * • Keep App.jsx clean.
 * • Serve as the central routing entry point.
 *
 * Current Route Groups
 * --------------------
 * • Public Routes
 *
 * Future Route Groups
 * -------------------
 * • Auth Routes
 * • Client Dashboard Routes
 * • Admin Routes
 *
 * @component
 * @returns {JSX.Element}
 */


function AppRouter() {
    return (
        <Routes>
            {PublicRoutes()}
        </Routes>
    );
}

export default AppRouter;