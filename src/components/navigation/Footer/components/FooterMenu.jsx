import FooterHeading from "./FooterHeading";
import FooterLink from "./FooterLink";

/**
 * Generic footer menu.
 *
 * Used for:
 * - Quick Links
 * - Services
 * - Legal links
 *
 * Social links use FooterSocials instead.
 *
 * @param {Object} props
 * @param {string} props.title
 * @param {Array} props.items
 *
 * @returns {JSX.Element}
 */
function FooterMenu({
    title,
    items,
}) {
    return (
        <section
            className="
                min-w-0
            "
        >
            {/* Menu Heading */}

            <FooterHeading>
                {title}
            </FooterHeading>

            {/* Menu Items */}

            <ul
                className="
                    grid
                    grid-cols-2

                    gap-x-6
                    gap-y-4

                    lg:grid-cols-1
                    lg:gap-x-0
                "
            >
                {items.map((item) => (
                    <li
                        key={item.id}
                        className="
                            min-w-0
                        "
                    >
                        <FooterLink
                            item={item}
                        />
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default FooterMenu;