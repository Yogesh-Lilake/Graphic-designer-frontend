import { theme } from "@/constants/theme";
import { SOCIAL_LINKS } from "@/constants/socials";

import FooterBrand from "../components/FooterBrand";
import FooterLinks from "../components/FooterLinks";
import FooterServices from "../components/FooterServices";
import FooterSocials from "../components/FooterSocials";
import FooterNewsletter from "../components/FooterNewsletter";

/**
 * Footer main content.
 *
 * Responsible only for composing and positioning
 * the major footer content sections.
 *
 * Content responsibilities are delegated to:
 *
 * - FooterBrand
 * - FooterLinks
 * - FooterServices
 * - FooterSocials
 * - FooterNewsletter
 *
 * Responsive layout:
 *
 * Mobile:
 * - Brand
 * - Quick Links + Services
 * - Socials
 * - Newsletter
 *
 * Tablet:
 * - Two-column layout
 *
 * Desktop:
 * - Four-column layout
 *
 * @returns {JSX.Element}
 */
function FooterMain() {
    return (
        <section
            className={`
                ${theme.container}

                py-16
                sm:py-20
                lg:py-24
            `}
        >
            <div
                className="
                    grid
                    w-full

                    grid-cols-1

                    gap-y-14

                    sm:grid-cols-2
                    sm:gap-x-10
                    sm:gap-y-16

                    lg:grid-cols-[2fr_1fr_1fr_1.3fr]

                    lg:gap-x-12
                    lg:gap-y-16

                    xl:gap-x-16
                "
            >
                {/* =================================
                    Brand
                ================================== */}

                <div
                    className="
                        min-w-0

                        sm:col-span-2

                        lg:col-span-1
                    "
                >
                    <FooterBrand />
                </div>

                {/* =================================
                    Quick Links
                ================================== */}

                <FooterLinks />

                {/* =================================
                    Services
                ================================== */}

                <FooterServices />

                {/* =================================
                    Social + Newsletter
                ================================== */}

                <div
                    className="
                        flex
                        min-w-0
                        flex-col

                        gap-12

                        sm:col-span-2

                        lg:col-span-1
                    "
                >
                    <FooterSocials
                        items={SOCIAL_LINKS}
                    />

                    <FooterNewsletter />
                </div>
            </div>
        </section>
    );
}

export default FooterMain;