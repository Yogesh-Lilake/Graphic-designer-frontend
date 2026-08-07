import { NavLink } from "react-router-dom";
import { ChevronRight } from "lucide-react";

/**
 * Mobile navigation item.
 *
 * Displays a single navigation entry
 * inside the mobile drawer.
 *
 * @param {Object} props
 * @param {{id:number,label:string,path:string}} props.item
 * @param {Function} props.onClick
 *
 * @returns {JSX.Element}
 */
function MobileNavItem({ item, onClick }) {
    return (
        <NavLink
            to={item.path}
            onClick={onClick}
            className={({ isActive }) => `
                group
                flex
                items-center
                justify-between

                rounded-2xl

                px-5
                py-4

                text-[16px]
                font-medium
                tracking-[0.01em]

                border
                transition-all
                duration-300

                ${
                    isActive
                        ? `
                            border-[var(--color-primary)]
                            bg-[color:rgba(124,58,237,.10)]
                            text-[color:var(--text-primary)]
                        `
                        : `
                            border-transparent
                            text-[color:var(--text-muted)]

                            hover:border-[var(--border)]
                            hover:bg-[var(--bg-hover)]
                            hover:text-[color:var(--text-primary)]
                        `
                }
            `}
        >
            {({ isActive }) => (
                <>
                    <span>{item.label}</span>

                    <span
                        className={`
                            flex
                            h-9
                            w-9
                            items-center
                            justify-center

                            rounded-full

                            transition-all
                            duration-300

                            ${
                                isActive
                                    ? `
                                        bg-[color:rgba(124,58,237,.15)]
                                        text-[var(--color-primary)]
                                    `
                                    : `
                                        text-[var(--text-muted)]
                                        group-hover:bg-[var(--bg-card)]
                                        group-hover:text-[var(--color-secondary)]
                                    `
                            }
                        `}
                    >
                        <ChevronRight
                            size={18}
                            strokeWidth={2.2}
                            className="
                                transition-transform
                                duration-300
                                group-hover:translate-x-0.5
                            "
                        />
                    </span>
                </>
            )}
        </NavLink>
    );
}

export default MobileNavItem;