import NavItem from "./NavItem";
import { NAVIGATION } from "@/constants/navigation";
import { NAVBAR } from "../constants/navbarConfig";

/**
 * Desktop navigation menu.
 * 
 * Displays the primary navigation links on large screens.
 * 
 * Hidden on mobile devices.
 * 
 * @returns {JSX.Element} Desktop navigation.
 */
function DesktopMenu() {
    return (
        <nav
            aria-label={NAVBAR.desktopAriaLabel}
            className="
                hidden
                xl:flex

                xl:flex-1

                xl:items-center
                xl:justify-center

                xl:gap-5
                2xl:gap-7
            "
        >
            {NAVIGATION.map((item) => (
                <NavItem
                    key={item.id}
                    item={item}
                />
            ))}
        </nav>
    );
}

export default DesktopMenu;