import { Link } from "react-router-dom";

import { ACTION_ICONS } from "@/constants/icons/actionIcons";
import { CTA_DATA } from "@/features/home/data/ctaData";

/**
 * Final homepage conversion section.
 *
 * The section is completely data-driven and can later
 * be controlled through an Admin Panel or CMS.
 *
 * @returns {JSX.Element | null}
 */
export default function CTA() {

    const {
        enabled,
        content,
        primaryCta,
        secondaryCta,
        trustPoints,
    } = CTA_DATA;

    /*
     * Allows the future Admin Panel/CMS to hide
     * the entire CTA section.
     */
    if (!enabled) {
        return null;
    }

    const ArrowUpRightIcon = ACTION_ICONS.externalLink;

    return (
        <section
            id="cta"
            aria-labelledby="cta-title"
            className="
                relative
                overflow-hidden
                py-28
            "
        >

            {/* =================================================
                PAGE BACKGROUND ATMOSPHERE
            ================================================= */}

            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-purple-600/15
                    via-transparent
                    to-cyan-500/10
                "
            />

            {/* =================================================
                CONTAINER
            ================================================= */}

            <div
                className="
                    relative
                    mx-auto
                    w-full
                    max-w-7xl
                    px-4
                    sm:px-6
                    lg:px-8
                    xl:px-10
                "
            >

                {/* =================================================
                    CTA PANEL
                ================================================= */}

                <div
                    className="
                        relative
                        overflow-hidden
                        rounded-[36px]
                        border
                        border-purple-500/20
                        bg-gradient-to-br
                        from-purple-600/[0.12]
                        via-zinc-950
                        to-zinc-950
                        px-6
                        py-16
                        text-center
                        shadow-[0_30px_80px_rgba(124,58,237,.08)]
                        sm:px-10
                        md:py-24
                    "
                >

                    {/* =================================================
                        DECORATIVE GLOW
                    ================================================= */}

                    <div
                        aria-hidden="true"
                        className="
                            pointer-events-none
                            absolute
                            left-1/2
                            top-0
                            h-64
                            w-64
                            -translate-x-1/2
                            -translate-y-1/2
                            rounded-full
                            bg-purple-600/20
                            blur-3xl
                        "
                    />

                    <div
                        aria-hidden="true"
                        className="
                            pointer-events-none
                            absolute
                            -bottom-32
                            -left-32
                            h-64
                            w-64
                            rounded-full
                            bg-cyan-500/5
                            blur-3xl
                        "
                    />

                    {/* =================================================
                        CONTENT
                    ================================================= */}

                    <div className="relative mx-auto max-w-4xl">

                        {/* =================================================
                            EYEBROW
                        ================================================= */}

                        {content.eyebrow && (
                            <p
                                className="
                                    text-sm
                                    font-semibold
                                    uppercase
                                    tracking-[0.25em]
                                    text-purple-400
                                "
                            >
                                {content.eyebrow}
                            </p>
                        )}

                        {/* =================================================
                            TITLE
                        ================================================= */}

                        <h2
                            id="cta-title"
                            className="
                                mt-5
                                font-[family-name:var(--font-heading)]
                                text-5xl
                                font-bold
                                leading-[1.05]
                                tracking-tight
                                text-white
                                sm:text-6xl
                                md:text-7xl
                            "
                        >
                            {content.title}

                            {content.highlightedTitle && (
                                <span className="block text-purple-400">
                                    {content.highlightedTitle}
                                </span>
                            )}
                        </h2>

                        {/* =================================================
                            DESCRIPTION
                        ================================================= */}

                        {content.description && (
                            <p
                                className="
                                    mx-auto
                                    mt-7
                                    max-w-2xl
                                    text-base
                                    leading-8
                                    text-zinc-400
                                    sm:text-lg
                                "
                            >
                                {content.description}
                            </p>
                        )}

                        {/* =================================================
                            CTA BUTTONS
                        ================================================= */}

                        {(primaryCta || secondaryCta) && (
                            <div
                                className="
                                    mt-10
                                    flex
                                    flex-col
                                    items-center
                                    justify-center
                                    gap-4
                                    sm:flex-row
                                "
                            >

                                {/* =================================================
                                    PRIMARY CTA
                                ================================================= */}

                                {primaryCta && (
                                    <Link
                                        to={primaryCta.href}
                                        className="
                                            group
                                            inline-flex
                                            h-12
                                            items-center
                                            justify-center
                                            gap-2
                                            rounded-full
                                            bg-gradient-to-r
                                            from-purple-600
                                            to-violet-500
                                            px-8
                                            text-sm
                                            font-semibold
                                            text-white
                                            shadow-[0_8px_24px_rgba(124,58,237,.28)]
                                            transition-all
                                            duration-300
                                            hover:-translate-y-0.5
                                            hover:shadow-[0_14px_34px_rgba(124,58,237,.42)]
                                            focus-visible:outline
                                            focus-visible:outline-2
                                            focus-visible:outline-offset-2
                                            focus-visible:outline-purple-400
                                        "
                                    >
                                        <span>
                                            {primaryCta.label}
                                        </span>

                                        {ArrowUpRightIcon && (
                                            <ArrowUpRightIcon
                                                aria-hidden="true"
                                                className="
                                                    h-4
                                                    w-4
                                                    transition-transform
                                                    duration-300
                                                    group-hover:translate-x-0.5
                                                    group-hover:-translate-y-0.5
                                                "
                                            />
                                        )}
                                    </Link>
                                )}

                                {/* =================================================
                                    SECONDARY CTA
                                ================================================= */}

                                {secondaryCta && (
                                    <Link
                                        to={secondaryCta.href}
                                        className="
                                            inline-flex
                                            h-12
                                            items-center
                                            justify-center
                                            rounded-full
                                            border
                                            border-zinc-700
                                            bg-zinc-900/60
                                            px-8
                                            text-sm
                                            font-semibold
                                            text-zinc-200
                                            transition-all
                                            duration-300
                                            hover:border-purple-500/40
                                            hover:bg-purple-500/10
                                            hover:text-white
                                            focus-visible:outline
                                            focus-visible:outline-2
                                            focus-visible:outline-offset-2
                                            focus-visible:outline-purple-400
                                        "
                                    >
                                        {secondaryCta.label}
                                    </Link>
                                )}

                            </div>
                        )}

                        {/* =================================================
                            SUPPORTING POINTS
                        ================================================= */}

                        {trustPoints?.length > 0 && (
                            <div
                                className="
                                    mt-9
                                    flex
                                    flex-wrap
                                    items-center
                                    justify-center
                                    gap-x-5
                                    gap-y-3
                                "
                            >
                                {trustPoints.map((point, index) => (
                                    <span
                                        key={`${point}-${index}`}
                                        className="
                                            flex
                                            items-center
                                            gap-5
                                            text-xs
                                            font-medium
                                            uppercase
                                            tracking-[0.12em]
                                            text-zinc-600
                                        "
                                    >
                                        <span>
                                            {point}
                                        </span>

                                        {index <
                                            trustPoints.length - 1 && (
                                            <span
                                                aria-hidden="true"
                                                className="text-zinc-800"
                                            >
                                                •
                                            </span>
                                        )}
                                    </span>
                                ))}
                            </div>
                        )}

                    </div>

                    {/* =================================================
                        BOTTOM ACCENT
                    ================================================= */}

                    <div
                        aria-hidden="true"
                        className="
                            absolute
                            bottom-0
                            left-1/2
                            h-px
                            w-24
                            -translate-x-1/2
                            bg-purple-500/60
                        "
                    />

                </div>

            </div>

        </section>
    );
}