import { NAVIGATION } from "@/constants/navigation";

import FooterMenu from "./FooterMenu";

import { FOOTER_CONFIG } from "../constants/footerConfig";

/**
 * Footer Quick Links section.
 *
 * Responsibility:
 * - Connect the primary navigation data with the footer menu presentation.
 *
 * Navigation data comes from:
 *     constants/navigation.js
 *
 * Section title comes from:
 *     footerConfig.js
 *
 * @returns {JSX.Element}
 */
function FooterLinks() {
    const { quickLinks } = FOOTER_CONFIG.sections;

    return (
        <FooterMenu
            title={quickLinks.title}
            items={NAVIGATION}
        />
    );
}

export default FooterLinks;