import { NavLink } from "react-router-dom";

/**
 * Desktop navigation item.
 *
 * Renders a single navigation link with
 * active state styling and animated underline.
 *
 * @param {Object} props
 * @param {{id:number,label:string,path:string}} props.item
 *
 * @returns {JSX.Element}
 */
function NavItem({ item }) {
    return (
        <NavLink
            to={item.path}
            className={({ isActive }) => `
                group
                relative
                flex
                items-center
                justify-center

                py-2

                text-[16px]
                font-medium
                tracking-[0.01em]

                transition-colors
                duration-300

                ${
                    isActive
                        ? "text-[color:var(--text-primary)]"
                        : "text-[color:var(--text-muted)] hover:text-[color:var(--text-primary)]"
                }
            `}
        >
            {({ isActive }) => (
                <span className="relative inline-block">
                    {item.label}

                    <span
                        className={`
                            absolute
                            left-0
                            -bottom-[10px]

                            h-[3px]
                            rounded-full

                            bg-gradient-to-r
                            from-[var(--color-primary)]
                            to-[var(--color-secondary)]

                            transition-all
                            duration-300
                            ease-out

                            ${
                                isActive
                                    ? "w-full"
                                    : "w-0 group-hover:w-full"
                            }
                        `}
                    />
                </span>
            )}
        </NavLink>
    );
}

export default NavItem;