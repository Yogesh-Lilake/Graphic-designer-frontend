import { FOOTER_CONFIG } from "../constants/footerConfig";
import FooterHeading from "./FooterHeading";

import SocialIcon from "@/shared/components/SocialIcon";

/**
 * Footer social media section.
 *
 * Displays the company's social media profiles
 * using reusable brand icons.
 *
 * Supported platforms are controlled by:
 *
 *     constants/socials.js
 *
 * Icon resolution is handled by:
 *
 *     shared/icons/socialIcons.js
 *
 * This component is responsible only for:
 * - Compose the social media section.
 * - Provide the configured section title.
 * - Footer layout
 * - Social link presentation
 * - Accessibility
 * - Responsive behavior
 *
 * @param {Object} props
 * @param {Array} props.items
 *
 * @returns {JSX.Element}
 */
function FooterSocials({ items }) {
    const { social } = FOOTER_CONFIG.sections;

    return (
        <section
            className="
                min-w-0
            "
        >
            {/* =================================
                Section Heading
            ================================== */}

            <FooterHeading>
                {social.title}
            </FooterHeading>

            {/* =================================
                Social Links
            ================================== */}

            <ul
                className="
                    flex
                    flex-wrap

                    gap-3

                    sm:gap-4
                "
            >
                {items.map((item) => (
                    <li
                        key={item.id}
                    >
                        <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"

                            /*
                             * Accessibility:
                             * The link receives an accessible
                             * name while the decorative icon
                             * is hidden from screen readers.
                             */
                            aria-label={`Visit our ${item.label} profile`}
                            title={item.label}

                            className="
                                group

                                flex
                                h-11
                                w-11

                                shrink-0

                                items-center
                                justify-center

                                rounded-full

                                border
                                border-[var(--border)]

                                bg-[var(--bg-main)]

                                text-[var(--text-secondary)]

                                transition-all
                                duration-300

                                hover:-translate-y-1

                                hover:border-[var(--color-primary)]

                                hover:bg-[var(--bg-hover)]

                                hover:text-[var(--color-primary)]

                                hover:shadow-[var(--button-shadow)]

                                focus-visible:outline-2
                                focus-visible:outline-offset-4
                                focus-visible:outline-[var(--color-primary)]

                                active:translate-y-0
                            "
                        >
                            {/* =================================
                                Social Icon

                                Icon resolution is handled by
                                the shared SocialIcon component.
                            ================================== */}

                            <SocialIcon
                                name={item.icon}
                                className="
                                    h-5
                                    w-5

                                    transition-transform
                                    duration-300

                                    group-hover:scale-110
                                "
                            />
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default FooterSocials;