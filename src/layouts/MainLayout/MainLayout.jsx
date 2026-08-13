import { Outlet } from "react-router-dom";
import { theme } from "@/constants/theme";

import Navbar from "../../components/navigation/Navbar/";
import Footer from "../../components/navigation/Footer/";

/**
 * Main application layout.
 *
 * Serves as the root layout for all public pages.
 * It provides the overall page structure while rendering
 * nested routes using React Router's <Outlet />.
 * 
 * Provides the global structure:
 *
 * Navbar
 * Main Content
 * Footer
 *
 * `flex-1` ensures the main content occupies
 * the available vertical space and allows the
 * footer to remain at the bottom on short pages.
 *
 * @returns {JSX.Element} Main layout component.
 */
function MainLayout() {
    return (
        <div className={theme.page}>

            {/* Global Navbar */}
            <Navbar />

            {/* Page Content */}
            <main className="flex-1 mx-auto w-full">
                <Outlet />
            </main>

            {/* Global Navbar */}
            <Footer/>
        </div>
    );
}

export default MainLayout;