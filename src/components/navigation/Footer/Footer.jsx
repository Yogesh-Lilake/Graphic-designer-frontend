import FooterCTA from "./sections/FooterCTA";
import FooterMain from "./sections/FooterMain";
import FooterBottom from "./sections/FooterBottom";

import FooterDivider from "./components/FooterDivider";

/**
 * Website footer.
 *
 * The footer is composed of three
 * high-level sections:
 *
 * 1. CTA
 * 2. Main Content
 * 3. Bottom Bar
 *
 * FooterDivider separates the main content
 * from the bottom bar.
 *
 * @returns {JSX.Element}
 */
function Footer() {
    return (
        <footer
            className="
                mt-auto

                w-full

                border-t
                border-[var(--border)]

                bg-[var(--bg-surface)]
            "
        >
            {/* =================================
                Call To Action
            ================================== */}

            <FooterCTA />

            {/* =================================
                Main Footer Content
            ================================== */}

            <FooterMain />

            {/* =================================
                Full-width Divider
            ================================== */}

            <FooterDivider />

            {/* =================================
                Footer Bottom Bar
            ================================== */}

            <FooterBottom />
        </footer>
    );
}

export default Footer;