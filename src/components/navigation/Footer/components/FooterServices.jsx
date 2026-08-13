import { SERVICES } from "@/constants/services";

import FooterMenu from "./FooterMenu";

import { FOOTER_CONFIG } from "../constants/footerConfig";

/**
 * Footer Services section.
 *
 * Responsibility:
 * - Connect centralized service data with the footer menu presentation.
 *
 * Service data comes from:
 *     constants/services.js
 *
 * Section title comes from:
 *     footerConfig.js
 *
 * @returns {JSX.Element}
 */
function FooterServices() {
    const { services } = FOOTER_CONFIG.sections;

    return (
        <FooterMenu
            title={services.title}
            items={SERVICES}
        />
    );
}

export default FooterServices;