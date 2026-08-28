import { Link } from "react-router-dom";

import { ACTION_ICONS } from "@/constants/icons/actionIcons";
import { INTERFACE_ICONS } from "@/constants/icons/interfaceIcons";

/**
 * Hero content presentation.
 *
 * Responsible for:
 *
 * - Eyebrow
 * - Main headline
 * - Description
 * - Primary CTA
 * - Secondary CTA
 * - Trust indicators
 *
 * Business content is supplied through props.
 *
 * @param {{
 *   data: {
 *     eyebrow: string,
 *     title: string,
 *     highlightedTitle: string,
 *     description: string,
 *     primaryCta: {
 *       label: string,
 *       href: string
 *     },
 *     secondaryCta: {
 *       label: string,
 *       href: string
 *     },
 *     trustPoints: string[]
 *   }
 * }} props
 *
 * @returns {JSX.Element}
 */
export default function HeroContent({ data }) {

    const ArrowUpRightIcon = ACTION_ICONS.arrowUpRight; 
    const DotIcon = INTERFACE_ICONS.dot;

    return (
        <div className="relative z-10 max-w-3xl">

            {/* =================================================
                EYEBROW
            ================================================= */}

            <div
                className="
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    border
                    border-purple-500/30
                    bg-purple-500/10
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-purple-300
                "
            >
                <DotIcon aria-hidden="true"
                    className="
                        h-2
                        w-2
                        rounded-full
                        bg-purple-400
                        shadow-[0_0_12px_rgba(168,85,247,.8)]"
                />
                

                <span>
                    {data.eyebrow}
                </span>
            </div>

            {/* =================================================
                HEADLINE
            ================================================= */}

            <h1
                id="hero-title"
                className="
                    mt-8
                    max-w-5xl
                    font-[family-name:var(--font-heading)]
                    text-5xl
                    font-bold
                    leading-[0.95]
                    tracking-tight
                    text-white
                    sm:text-6xl
                    md:text-7xl
                    lg:text-[78px]
                "
            >
                {data.title}

                <span className="block text-purple-400">
                    {data.highlightedTitle}
                </span>
            </h1>

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <p
                className="
                    mt-8
                    max-w-2xl
                    text-base
                    leading-8
                    text-zinc-400
                    sm:text-lg
                "
            >
                {data.description}
            </p>

            {/* =================================================
                CTA
            ================================================= */}

            <div
                className="
                    mt-10
                    flex
                    flex-col
                    gap-4
                    sm:flex-row
                "
            >

                {/* Primary CTA */}
                <Link
                    to={data.primaryCta.href}
                    className="
                        group
                        inline-flex
                        h-12
                        w-full
                        items-center
                        justify-center
                        rounded-full
                        bg-gradient-to-r
                        from-purple-600
                        to-violet-500
                        px-6
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
                        sm:w-auto
                        sm:px-7
                    "
                >
                    <span>
                        {data.primaryCta.label}
                    </span>

                    <span
                        aria-hidden="true"
                        className="ml-2 text-base"
                    >
                        <ArrowUpRightIcon
    aria-hidden="true"
    className="
        h-4
        w-4
        transition-transform
        duration-300
        group-hover:-translate-y-0.5
        group-hover:translate-x-0.5
    "
/>
                    </span>
                </Link>

                {/* Secondary CTA */}
                <Link
                    to={data.secondaryCta.href}
                    className="
                        inline-flex
                        h-12
                        w-full
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-zinc-700
                        bg-zinc-900/50
                        px-7
                        text-sm
                        font-semibold
                        text-zinc-200
                        transition-all
                        duration-300
                        hover:border-purple-500/50
                        hover:bg-purple-500/10
                        focus-visible:outline
                        focus-visible:outline-2
                        focus-visible:outline-offset-2
                        focus-visible:outline-purple-400
                    "
                >
                    {data.secondaryCta.label}
                </Link>

            </div>

            {/* =================================================
                TRUST POINTS
            ================================================= */}

            <div
                className="
                    mt-8
                    flex
                    flex-wrap
                    items-center
                    gap-x-5
                    gap-y-3
                    text-sm
                    text-zinc-500
                "
            >
                {data.trustPoints.map((point, index) => (
                    <span
                        key={point}
                        className="flex items-center gap-5"
                    >
                        <span>
                            {point}
                        </span>

                        {index < data.trustPoints.length - 1 && (
                            <span
                                aria-hidden="true"
                                className="text-zinc-700"
                            >
                                <DotIcon />   
                            </span>
                        )}
                    </span>
                ))}
            </div>

        </div>
    );
}