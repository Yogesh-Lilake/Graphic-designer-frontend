import { useRef } from "react";

import Logo from "./components/Logo";
import DesktopMenu from "./components/DesktopMenu";
import CTAButton from "./components/CTAButton";
import MobileMenuButton from "./components/MobileMenuButton";
import MobileDrawer from "./components/MobileDrawer";

import useMobileMenu from "./hooks/useMobileMenu";
import useEscapeKey from "./hooks/useEscapeKey";
import useOutsideClick from "./hooks/useOutsideClick";
import useBodyScrollLock from "./hooks/useBodyScrollLock";
import useCloseOnDesktop from "./hooks/useCloseOnDesktop";

/**
 * Global navigation component.
 * 
 * Responsibilities:
 * - Renders desktop navigation.
 * - Controls the mobile drawer state.
 * - Handles accessibility intersections.
 * - Coordinated navbar-related behaviour hooks.
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

    // Drawer reference
    const drawerRef = useRef(null);

    // Side effects
    useBodyScrollLock(isOpen);
    useEscapeKey(isOpen, closeMenu);
    useOutsideClick(drawerRef, isOpen, closeMenu);
    useCloseOnDesktop(isOpen, closeMenu);

    return (
        <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[color:rgba(9,9,11,0.8)] backdrop-blur-md flex items-center justify-center">
            <div className="mx-auto flex h-24 w-full max-w-[1400px] items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16">
                <Logo />

                <DesktopMenu />

                <CTAButton />

                <MobileMenuButton
                    isOpen={isOpen}
                    toggleMenu={toggleMenu}
                />
            </div>

            <div ref={drawerRef}>
                <MobileDrawer
                    isOpen={isOpen}
                    closeMenu={closeMenu}
                />
            </div>
        </header>
    );
}

export default Navbar;