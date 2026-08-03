import { Outlet } from "react-router-dom";
import { theme } from "@/constants/theme";

/**
 * Main application layout.
 *
 * Serves as the root layout for all public pages.
 * It provides the overall page structure while rendering
 * nested routes using React Router's <Outlet />.
 *
 * @returns {JSX.Element} Main layout component.
 */
function MainLayout() {
    return (
        <div className={theme.page}>
            <main className="flex-1">
                <Outlet />
            </main>
        </div>
    );
}

export default MainLayout;