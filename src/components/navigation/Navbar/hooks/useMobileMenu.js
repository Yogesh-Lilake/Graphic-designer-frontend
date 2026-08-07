import { useCallback, useState } from "react";

/**
 * Controls the state of the mobile navigation menu.
 *
 * @param {boolean} initialState - Initial open state.
 * @returns {{
 *   isOpen: boolean,
 *   openMenu: () => void,
 *   closeMenu: () => void,
 *   toggleMenu: () => void,
 * }}
 */
function useMobileMenu(initialState = false) {
    const [isOpen, setIsOpen] = useState(initialState);

    const openMenu = useCallback(() => {
        setIsOpen(true);
    }, []);

    const closeMenu = useCallback(() => {
        setIsOpen(false);
    }, []);

    const toggleMenu = useCallback(() => {
        setIsOpen((prev) => !prev);
    }, []);

    return {
        isOpen,
        openMenu,
        closeMenu,
        toggleMenu,
    };
}

export default useMobileMenu;