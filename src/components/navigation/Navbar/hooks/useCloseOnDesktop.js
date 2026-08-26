import { useEffect } from "react";

import { BREAKPOINTS } from "@/constants/breakpoints";

/**
 * Automatically closes the mobile menu
 * when entering the desktop breakpoint.
 * 
 * Uses matchMedia for better performance.
 *
 * @param {boolean} isOpen
 * @param {() => void} closeMenu
 * @param {number} breakpoint
 */
function useCloseOnDesktop(
    isOpen,
    closeMenu,
    breakpoint = BREAKPOINTS.xl,
) {
    useEffect(() => {
        if (!isOpen) {
            return;
        }

        const mediaQuery = window.matchMedia(
            `(min-width: ${breakpoint}px)`
        );

        // Close immediately if already desktop
        if (mediaQuery.matches) {
            closeMenu();
            return;
        }

        function handleChange(event) {
            if (event.matches) {
                closeMenu();
            }
        }

        mediaQuery.addEventListener("change", handleChange,);

        return () => {
            mediaQuery.removeEventListener("change", handleChange,);
        };
    }, [
        isOpen,
        closeMenu,
        breakpoint,
    ]);
}

export default useCloseOnDesktop;