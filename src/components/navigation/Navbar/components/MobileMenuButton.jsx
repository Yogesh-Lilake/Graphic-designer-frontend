import { Menu, X } from "lucide-react";

import { NAVBAR } from "../constants/navbarConfig";

/**
 * Mobile menu toggle button.
 *
 * Opens and closes the mobile drawer.
 *
 * @param {Object} props
 * @param {boolean} props.isOpen
 * @param {Function} props.toggleMenu
 *
 * @returns {JSX.Element}
 */
function MobileMenuButton({
    isOpen,
    toggleMenu,
}) {
    return (
        <button
            type="button"
            aria-label={
    isOpen
        ? NAVBAR.closeMenuLabel
        : NAVBAR.openMenuLabel
}
            aria-expanded={isOpen}
            aria-controls={NAVBAR.mobileMenuId}
            onClick={toggleMenu}
            className="
                lg:hidden

                flex
                items-center
                justify-center

                h-12
                w-12

                rounded-2xl

                border
                border-[var(--border)]

                bg-[var(--bg-surface)]

                text-[color:var(--text-primary)]

                transition-all
                duration-300

                hover:border-[var(--color-primary)]
                hover:bg-[var(--bg-hover)]
                hover:shadow-[0_0_18px_rgba(124,58,237,.18)]

                active:scale-95
            "
        >
            {isOpen ? (
                <X
                    size={26}
                    strokeWidth={2.25}
                    className="transition-transform duration-300 rotate-90"
                />
            ) : ( 
                <Menu
                    size={26}
                    strokeWidth={2.25}
                    className="transition-transform duration-300"
                />
            )}
        </button>
    );
}

export default MobileMenuButton;