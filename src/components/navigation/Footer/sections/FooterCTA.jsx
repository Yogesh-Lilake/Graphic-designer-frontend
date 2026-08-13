import { NavLink } from "react-router-dom";

import { theme } from "@/constants/theme";
import { FOOTER_CONFIG } from "../constants/footerConfig";

/**
 * Footer Call To Action.
 *
 * Displays the primary conversion section
 * before the main footer content.
 *
 * Responsive behavior:
 * - Mobile: compact spacing and typography
 * - Tablet: increased card padding
 * - Desktop: large premium CTA layout
 *
 * Animation strategy:
 * - No continuous animation.
 * - Button receives subtle hover elevation.
 * - CTA card receives subtle hover shadow.
 *
 * @returns {JSX.Element}
 */
function FooterCTA() {
    const { cta } = FOOTER_CONFIG;

    return (
        <section
            className={`
                ${theme.container}

                w-full

                py-16
                sm:py-20
                md:py-24
                lg:py-28
            `}
        >
            {/* =================================
                CTA Card
            ================================== */}

            <div
                className="
                    group

                    relative

                    w-full

                    overflow-hidden

                    rounded-[var(--radius-lg)]

                    border
                    border-[var(--border)]

                    bg-[var(--bg-card)]

                    shadow-[var(--shadow-card)]

                    transition-shadow
                    duration-500

                    hover:shadow-[var(--button-shadow)]
                "
            >
                {/* =================================
                    Subtle Primary Glow
                ================================== */}

                <div
                    aria-hidden="true"
                    className="
                        pointer-events-none

                        absolute

                        -right-24
                        -top-24

                        h-64
                        w-64

                        rounded-full

                        bg-[var(--color-primary)]

                        opacity-[0.08]

                        blur-3xl

                        transition-opacity
                        duration-500

                        group-hover:opacity-[0.14]
                    "
                />

                {/* =================================
                    Subtle Secondary Glow
                ================================== */}

                <div
                    aria-hidden="true"
                    className="
                        pointer-events-none

                        absolute

                        -bottom-32
                        -left-20

                        h-72
                        w-72

                        rounded-full

                        bg-[var(--color-secondary)]

                        opacity-[0.05]

                        blur-3xl
                    "
                />

                {/* =================================
                    CTA Content
                ================================== */}

                <div
                    className="
                        relative
                        z-10

                        mx-auto

                        flex
                        w-full
                        max-w-4xl

                        flex-col

                        items-center

                        gap-6
                        sm:gap-7
                        lg:gap-8

                        px-5
                        py-12

                        sm:px-8
                        sm:py-14

                        md:px-12
                        md:py-16

                        lg:px-20
                        lg:py-20

                        text-center
                    "
                >
                    {/* Heading */}

                    <h2
                        className="
                            mx-auto

                            w-full
                            max-w-3xl

                            font-[var(--font-heading)]

                            text-3xl
                            leading-[1.1]

                            text-[var(--text-primary)]

                            sm:text-4xl

                            md:text-5xl

                            lg:text-6xl
                        "
                    >
                        {cta.title}
                    </h2>

                    {/* Description */}

                    <p
                        className="
                            mx-auto

                            w-full
                            max-w-2xl

                            text-sm
                            leading-7

                            text-[var(--text-secondary)]

                            sm:text-base
                            sm:leading-8

                            md:text-lg
                        "
                    >
                        {cta.description}
                    </p>

                    {/* CTA Button */}

                    <NavLink
                        to={cta.button.href}
                        className="
                            inline-flex

                            min-h-12
                            w-full
                            max-w-[240px]

                            items-center
                            justify-center

                            rounded-full

                            bg-[var(--color-primary)]

                            px-7
                            py-3

                            text-sm
                            font-semibold

                            text-white

                            shadow-[var(--button-shadow)]

                            transition-all
                            duration-300

                            hover:-translate-y-1
                            hover:bg-[var(--color-primary-hover)]
                            hover:shadow-[var(--button-shadow-hover)]

                            focus-visible:outline-2
                            focus-visible:outline-offset-4
                            focus-visible:outline-[var(--color-primary)]

                            active:translate-y-0
                        "
                    >
                        {cta.button.label}
                    </NavLink>
                </div>
            </div>
        </section>
    );
}

export default FooterCTA;