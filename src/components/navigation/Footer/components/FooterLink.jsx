import { NavLink } from "react-router-dom";

/**
 * Footer navigation link.
 *
 * Supports:
 * - Internal React Router links
 * - External links
 *
 * @param {Object} props
 * @param {Object} props.item
 *
 * @returns {JSX.Element}
 */
function FooterLink({ item }) {
    const isExternal = item.href.startsWith("http");

    const className = `
        inline-block

        max-w-full

        break-words

        text-sm
        leading-6

        text-[var(--text-secondary)]

        transition-all
        duration-300

        hover:translate-x-1
        hover:text-[var(--color-primary)]

        focus-visible:outline-2
        focus-visible:outline-offset-4
        focus-visible:outline-[var(--color-primary)]
    `;

    if (isExternal) {
        return (
            <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
            >
                {item.label}
            </a>
        );
    }

    return (
        <NavLink
            to={item.href}
            end={item.href === "/"}
            className={className}
        >
            {item.label}
        </NavLink>
    );
}

export default FooterLink;