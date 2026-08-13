import { Link } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa6";

import { theme } from "@/constants/theme";
import { LEGAL_LINKS } from "@/constants/legal";

import { FOOTER_CONFIG } from "../constants/footerConfig";

/**
 * Footer bottom bar.
 *
 * Responsibility:
 * - Render copyright information.
 * - Render legal navigation.
 * - Render the back-to-top action.
 * - Control responsive alignment.
 *
 * Content/configuration comes from:
 * - footerConfig.js
 * - legal.js
 *
 * @returns {JSX.Element}
 */
function FooterBottom() {
    const {
        copyright,
        bottom,
    } = FOOTER_CONFIG;

    /**
     * Smoothly scroll the page back to the top.
     */
    function handleBackToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    return (
        <section
            className={`
                ${theme.container}

                p-5

                sm:px-6
                sm:py-6

                lg:px-8
                lg:py-7
            `}
        >
            <div
                className="
                    flex
                    flex-col

                    items-center
                    justify-between

                    gap-5

                    text-center

                    sm:gap-6

                    md:flex-row
                    md:text-left
                "
            >
                {/* =================================
                    Copyright
                ================================== */}

                <p
                    className="
                        shrink-0

                        text-sm
                        leading-6

                        text-[var(--text-muted)]
                    "
                >
                    {copyright.text}
                </p>

                {/* =================================
                    Legal Navigation
                ================================== */}

                <nav
                    aria-label={bottom.legalAriaLabel}
                >
                    <ul
                        className="
                            flex
                            flex-wrap

                            items-center
                            justify-center

                            gap-x-5
                            gap-y-2

                            sm:gap-x-6
                        "
                    >
                        {LEGAL_LINKS.map((item) => (
                            <li key={item.id}>
                                <Link
                                    to={item.href}
                                    className="
                                        inline-block

                                        text-sm
                                        leading-6

                                        text-[var(--text-muted)]

                                        transition-colors
                                        duration-300

                                        hover:text-[var(--color-primary)]

                                        focus-visible:outline-2
                                        focus-visible:outline-offset-4
                                        focus-visible:outline-[var(--color-primary)]
                                    "
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* =================================
                    Back To Top
                ================================== */}

                <button
                    type="button"
                    onClick={handleBackToTop}
                    aria-label={bottom.backToTop.ariaLabel}
                    className="
                        group

                        inline-flex

                        shrink-0

                        items-center
                        justify-center

                        gap-2

                        whitespace-nowrap

                        text-sm
                        font-medium
                        leading-6

                        text-[var(--text-secondary)]

                        transition-all
                        duration-300

                        hover:text-[var(--color-primary)]

                        focus-visible:outline-2
                        focus-visible:outline-offset-4
                        focus-visible:outline-[var(--color-primary)]
                    "
                >
                    <span>
                        {bottom.backToTop.label}
                    </span>

                    <FaArrowUp
                        aria-hidden="true"
                        className="
                            h-3.5
                            w-3.5

                            transition-transform
                            duration-300

                            group-hover:-translate-y-1
                        "
                    />
                </button>
            </div>
        </section>
    );
}

export default FooterBottom;