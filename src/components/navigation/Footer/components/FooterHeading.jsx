/**
 * Footer section heading.
 *
 * Reusable heading used across
 * all footer sections.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children
 *
 * @returns {JSX.Element}
 */
function FooterHeading({ children }) {
    return (
        <h3
            className="
                mb-5

                text-base
                font-semibold

                tracking-wide

                text-[var(--text-primary)]

                sm:text-lg
            "
        >
            {children}
        </h3>
    );
}

export default FooterHeading;