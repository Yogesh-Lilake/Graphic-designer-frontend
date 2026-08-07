import { Link } from "react-router-dom";
import { ArrowUpRight, X } from "lucide-react";

import MobileNavItem from "./MobileNavItem";
import { NAVIGATION } from "../constants/navigation";
import { NAVBAR } from "../constants/navbarConfig";

/**
 * Mobile navigation drawer.
 *
 * Provides the complete mobile navigation
 * experience including:
 *
 * - Overlay
 * - Navigation links
 * - CTA button
 *
 * @param {Object} props
 * @param {boolean} props.isOpen
 * @param {Function} props.closeMenu
 *
 * @returns {JSX.Element}
 */
function MobileDrawer({
    isOpen,
    closeMenu,
}) {
    return (
        <>
            {/* Overlay */}

            <div
                onClick={closeMenu}
                className={`
                    fixed
                    inset-0
                    z-40

                    bg-black/70
                    backdrop-blur-md

                    transition-opacity
                    duration-300

                    ${
                        isOpen
                            ? "opacity-100 visible"
                            : "opacity-0 invisible"
                    }
                `}
            />

            {/* Drawer */}

            <aside
                id={NAVBAR.mobileMenuId}
                className={`
                    fixed
                    right-0
                    top-0
                    z-50

                    flex
                    h-screen
                    w-[340px]
                    max-w-full
                    flex-col

                    border-l
                    border-[var(--border)]

                    bg-[var(--bg-main)]

                    shadow-2xl

                    transition-transform
                    duration-300
                    ease-out

                    ${
                        isOpen
                            ? "translate-x-0"
                            : "translate-x-full"
                    }
                `}
            >
                {/* Header */}

                <div
                    className="
                        flex
                        items-center
                        justify-between

                        h-24

                        border-b
                        border-[var(--border)]

                        px-6
                    "
                >
                    <h2
                        className="
                            text-xl
                            font-semibold
                            tracking-wide
                            text-[color:var(--text-primary)]
                        "
                    >
                        {NAVBAR.mobileMenuTitle}
                    </h2>

                    <button
                        type="button"
                        onClick={closeMenu}
                        aria-label="Close menu"
                        className="
                            group

                            flex
                            h-11
                            w-11
                            items-center
                            justify-center

                            rounded-xl

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
                        <X
                            size={20}
                            strokeWidth={2.25}
                            className="
                                transition-transform
                                duration-300
                                group-hover:rotate-90
                            "
                        />
                    </button>
                </div>

                {/* Navigation */}

                <nav
                    aria-label={NAVBAR.mobileAriaLabel}
                    className="
                        flex-1
                        overflow-y-auto

                        space-y-3

                        p-6
                    "
                >
                    {NAVIGATION.map((item) => (
                        <MobileNavItem
                            key={item.id}
                            item={item}
                            onClick={closeMenu}
                        />
                    ))}
                </nav>

                {/* CTA */}

                <div
                    className="
                        border-t
                        border-[var(--border)]

                        p-6
                    "
                >
                    <Link
                        to={NAVBAR.ctaPath}
                        onClick={closeMenu}
                        className="
                            group

                            flex
                            h-12

                            items-center
                            justify-center
                            gap-2

                            rounded-full

                            border
                            border-[color:rgba(255,255,255,.08)]

                            bg-[image:var(--button-gradient)]

                            text-sm
                            font-semibold
                            tracking-[0.02em]
                            text-white

                            shadow-[var(--button-shadow)]

                            transition-all
                            duration-300

                            hover:-translate-y-0.5
                            hover:brightness-110
                            hover:shadow-[var(--button-shadow-hover)]

                            active:scale-95
                        "
                    >
                        <span>{NAVBAR.ctaLabel}</span>

                        <ArrowUpRight
                            size={18}
                            strokeWidth={2.25}
                            className="
                                transition-transform
                                duration-300

                                group-hover:translate-x-1
                                group-hover:-translate-y-1
                            "
                        />
                    </Link>
                </div>
            </aside>
        </>
    );
}

export default MobileDrawer;