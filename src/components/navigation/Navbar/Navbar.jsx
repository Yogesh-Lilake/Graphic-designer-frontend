import { useRef } from "react";

import { theme } from "@/constants/theme";

import Logo from "@/shared/components/Logo";
import DesktopMenu from "./components/DesktopMenu";
import CTAButton from "./components/CTAButton";
import MobileMenuButton from "./components/MobileMenuButton";
import MobileDrawer from "./components/MobileDrawer";

import useMobileMenu from "./hooks/useMobileMenu";
import useEscapeKey from "./hooks/useEscapeKey";
import useOutsideClick from "./hooks/useOutsideClick";
import useBodyScrollLock from "./hooks/useBodyScrollLock";
import useCloseOnDesktop from "./hooks/useCloseOnDesktop";
import useNavbarScroll from "./hooks/useNavbarScroll";

/**
 * Global navigation component.
 * 
 * Responsibilities:
 * - Renders desktop navigation.
 * - Controls the mobile drawer state.
 * - Handles accessibility intersections.
 * - Coordinated navbar-related behaviour hooks.
 * - Controls navbar visibility based on scroll direction.
 * - Provide the responsive breakpoint between
 *   mobile/tablet navigation and desktop navigation.
 * 
 *  * Responsive strategy:
 *
 * < 1280px
 * - Logo
 * - Mobile menu button
 * - Mobile drawer
 *
 * >= 1280px
 * - Logo
 * - Desktop navigation
 * - Desktop CTA
 *
 * Scroll behaviour:
 *
 * - At page top -> visible.
 * - Scrolling down -> hides.
 * - Scrolling up -> appears.
 * - Mobile drawer open -> always visible.
 * 
 * Motion:
 *
 * - Uses the shared theme transition configuration.
 * - Animates only the transform property.
 * 
 * This prevents the nine primary navigation links
 * from becoming cramped on smaller laptop widths.
 * 
 * Used by:
 * - MainLayout
 * 
 * 
 * @returns {JSX.Element} Responsive application navbar.
 */
function Navbar() {
    // Menu state
    const {
        isOpen,
        toggleMenu,
        closeMenu,
    } = useMobileMenu();

    // Navbar Visibility
    const isVisible = useNavbarScroll();

    /*
     * Keep the navbar visible while the mobile
     * navigation drawer is open.
     *
     * This prevents the navigation controls from
     * disappearing while the user is interacting
     * with the drawer.
     */
    const isNavbarVisible = isVisible || isOpen;

    // Drawer reference
    const drawerRef = useRef(null);

    // Side effects
    useBodyScrollLock(isOpen);
    useEscapeKey(isOpen, closeMenu);
    useOutsideClick(drawerRef, isOpen, closeMenu);
    useCloseOnDesktop(isOpen, closeMenu);

    return (
        <header className={`sticky top-0 z-50 border-b border-[var(--border)] bg-[color:rgba(9,9,11,0.8)] backdrop-blur-md flex w-full items-center justify-center 
                transition-transform
                ${theme.transition}

                ${isNavbarVisible
                    ? "translate-y-0"
                    : "-translate-y-full"
                }`}>
            <div className="mx-auto flex h-20 w-full max-w-[1400px] items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10 xl:h-24 xl:px-10 2xl:px-12">

                {/* =======================
                    Logo
                =========================== */}
                <Logo />

                {/* =================================
                    Desktop Navigation

                    Visible only when there is
                    enough horizontal space.
                ================================== */}
                <DesktopMenu />

                {/* =================================
                    Desktop CTA

                    Keep the CTA with desktop
                    navigation.
                ================================== */}

                <div
                    className="
                        hidden

                        xl:block
                    "
                >
                    <CTAButton />
                </div>

                {/* =================================
                    Mobile / Tablet Menu Button

                    Visible below 1280px.
                ================================== */}

                <div
                    className="xl:hidden"    
                >
                    <MobileMenuButton
                        isOpen={isOpen}
                        toggleMenu={toggleMenu}
                    />
                </div>
            </div>

            <div
                ref={drawerRef}
                className="
                    xl:hidden
                "
            >
                <MobileDrawer
                    isOpen={isOpen}
                    closeMenu={closeMenu}
                />
            </div>
        </header>
    );
}

export default Navbar;