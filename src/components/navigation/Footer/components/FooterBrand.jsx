import Logo from "@/shared/components/Logo";

import { FOOTER_CONFIG } from "../constants/footerConfig";

/**
 * Footer brand section.
 *
 * Displays:
 * - Brand logo
 * - Company description
 * - Email
 * - Phone
 * - Address
 * - Working hours
 *
 * @returns {JSX.Element}
 */
function FooterBrand() {
    const { company } = FOOTER_CONFIG;

    return (
        <section
            className="
                flex
                min-w-0
                flex-col

                gap-7
            "
        >
            {/* =================================
                Brand Logo
            ================================== */}

            <Logo />

            {/* =================================
                Company Description
            ================================== */}

            <p
                className="
                    max-w-md

                    text-sm
                    leading-7

                    text-[var(--text-secondary)]

                    sm:text-base
                    sm:leading-8
                "
            >
                {company.description}
            </p>

            {/* =================================
                Contact Information
            ================================== */}

            <ul
                className="
                    flex
                    flex-col

                    gap-3

                    text-sm
                    leading-6

                    text-[var(--text-muted)]
                "
            >
                {/* Email */}

                <li>
                    <a
                        href={`mailto:${company.email}`}
                        className="
                            inline-block

                            transition-colors
                            duration-300

                            hover:text-[var(--color-primary)]

                            focus-visible:outline-2
                            focus-visible:outline-offset-4
                            focus-visible:outline-[var(--color-primary)]
                        "
                    >
                        {company.email}
                    </a>
                </li>

                {/* Phone */}

                <li>
                    <a
                        href={`tel:${company.phone}`}
                        className="
                            inline-block

                            transition-colors
                            duration-300

                            hover:text-[var(--color-primary)]

                            focus-visible:outline-2
                            focus-visible:outline-offset-4
                            focus-visible:outline-[var(--color-primary)]
                        "
                    >
                        {company.phone}
                    </a>
                </li>

                {/* Address */}

                <li>
                    {company.address}
                </li>

                {/* Working Hours */}

                <li>
                    {company.workingHours}
                </li>
            </ul>
        </section>
    );
}

export default FooterBrand;