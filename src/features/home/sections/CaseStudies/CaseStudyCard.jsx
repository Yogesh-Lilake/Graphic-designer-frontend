import { Link } from "react-router-dom";

import { ACTION_ICONS } from "@/constants/icons/actionIcons";
import { CASE_STUDY_IMAGES } from "@/features/home/data/caseStudyImages";

/**
 * Individual case study preview card.
 *
 * Presents a concise customer story using:
 *
 * - Project / customer
 * - Category
 * - Requirement
 * - Solution
 * - Outcome
 * - Tags
 *
 * @param {{
 *   caseStudy: {
 *     id: number,
 *     title: string,
 *     category: string,
 *     summary: string,
 *     requirement: {
 *       label: string,
 *       text: string
 *     },
 *     solution: {
 *       label: string,
 *       text: string
 *     },
 *     outcome: {
 *       label: string,
 *       text: string
 *     },
 *     image?: string,
 *     alt?: string,
 *     href: string,
 *     tags?: string[],
 *     featured?: boolean
 *   }
 * }} props
 *
 * @returns {JSX.Element}
 */
export default function CaseStudyCard({ caseStudy }) {

    /*
     * Reusable internal navigation icon.
     */
    const ArrowUpRightIcon = ACTION_ICONS.externalLink;

    /*
     * Resolve image from the image registry.
     */
    const caseStudyImage = caseStudy.image
        ? CASE_STUDY_IMAGES[caseStudy.image]
        : null;

    return (
        <Link
            to={caseStudy.href}
            className="
                group
                flex
                h-full
                flex-col
                overflow-hidden
                rounded-[32px]
                border
                border-zinc-800
                bg-zinc-950
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-purple-500/30
                hover:bg-zinc-900/70
                hover:shadow-[0_24px_60px_rgba(124,58,237,.10)]
                focus-visible:outline
                focus-visible:outline-2
                focus-visible:outline-offset-2
                focus-visible:outline-purple-400
            "
        >

            {/* =================================================
                VISUAL
            ================================================= */}

            <div
                className="
                    relative
                    aspect-[16/10]
                    overflow-hidden
                    bg-zinc-900
                "
            >

                {/* =================================================
                    IMAGE
                ================================================= */}

                {caseStudyImage ? (
                    <img
                        src={caseStudyImage}
                        alt={caseStudy.alt || caseStudy.title}
                        loading="lazy"
                        className="
                            absolute
                            inset-0
                            h-full
                            w-full
                            object-cover
                            transition-transform
                            duration-700
                            ease-out
                            group-hover:scale-[1.04]
                        "
                    />
                ) : (
                    <div
                        aria-hidden="true"
                        className="
                            absolute
                            inset-0
                            bg-gradient-to-br
                            from-purple-600/20
                            via-zinc-900
                            to-cyan-500/10
                        "
                    />
                )}

                {/* =================================================
                    OVERLAY
                ================================================= */}

                <div
                    aria-hidden="true"
                    className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/70
                        via-black/10
                        to-transparent
                    "
                />

                {/* =================================================
                    TOP META
                ================================================= */}

                <div
                    className="
                        absolute
                        left-5
                        right-5
                        top-5
                        flex
                        items-center
                        justify-between
                    "
                >

                    <span
                        className="
                            max-w-[75%]
                            truncate
                            rounded-full
                            border
                            border-white/15
                            bg-black/30
                            px-3
                            py-1.5
                            text-[11px]
                            font-semibold
                            uppercase
                            tracking-[0.15em]
                            text-white/80
                            backdrop-blur-md
                        "
                    >
                        {caseStudy.category}
                    </span>

                    <span
                        aria-hidden="true"
                        className="
                            flex
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-white/15
                            bg-black/30
                            text-white/70
                            backdrop-blur-md
                            transition-all
                            duration-300
                            group-hover:-translate-y-0.5
                            group-hover:translate-x-0.5
                            group-hover:border-white/30
                            group-hover:text-white
                        "
                    >
                        <ArrowUpRightIcon className="h-5 w-5" />
                    </span>

                </div>

                {/* =================================================
                    TITLE
                ================================================= */}

                <div
                    className="
                        absolute
                        bottom-0
                        left-0
                        right-0
                        p-6
                    "
                >
                    <h3
                        className="
                            font-[family-name:var(--font-heading)]
                            text-3xl
                            font-semibold
                            leading-tight
                            text-white
                        "
                    >
                        {caseStudy.title}
                    </h3>
                </div>

            </div>

            {/* =================================================
                CONTENT
            ================================================= */}

            <div
                className="
                    flex
                    flex-1
                    flex-col
                    p-6
                "
            >

                {/* Summary */}

                <p
                    className="
                        text-sm
                        leading-7
                        text-zinc-500
                    "
                >
                    {caseStudy.summary}
                </p>

                {/* =================================================
                    STORY
                ================================================= */}

                <div className="mt-7 space-y-5">

                    {/* Requirement */}

                    <div>

                        <p
                            className="
                                text-[11px]
                                font-semibold
                                uppercase
                                tracking-[0.15em]
                                text-purple-400
                            "
                        >
                            {caseStudy.requirement.label}
                        </p>

                        <p
                            className="
                                mt-2
                                text-sm
                                leading-6
                                text-zinc-400
                            "
                        >
                            {caseStudy.requirement.text}
                        </p>

                    </div>

                    {/* Solution */}

                    <div>

                        <p
                            className="
                                text-[11px]
                                font-semibold
                                uppercase
                                tracking-[0.15em]
                                text-purple-400
                            "
                        >
                            {caseStudy.solution.label}
                        </p>

                        <p
                            className="
                                mt-2
                                text-sm
                                leading-6
                                text-zinc-400
                            "
                        >
                            {caseStudy.solution.text}
                        </p>

                    </div>

                    {/* Outcome */}

                    <div>

                        <p
                            className="
                                text-[11px]
                                font-semibold
                                uppercase
                                tracking-[0.15em]
                                text-purple-400
                            "
                        >
                            {caseStudy.outcome.label}
                        </p>

                        <p
                            className="
                                mt-2
                                text-sm
                                leading-6
                                text-zinc-400
                            "
                        >
                            {caseStudy.outcome.text}
                        </p>

                    </div>

                </div>

                {/* =================================================
                    TAGS
                ================================================= */}

                {caseStudy.tags?.length > 0 && (
                    <div
                        className="
                            mt-7
                            flex
                            flex-wrap
                            gap-2
                        "
                    >
                        {caseStudy.tags.map((tag) => (
                            <span
                                key={tag}
                                className="
                                    rounded-full
                                    border
                                    border-zinc-800
                                    bg-zinc-900
                                    px-3
                                    py-1.5
                                    text-xs
                                    font-medium
                                    text-zinc-500
                                    transition-colors
                                    duration-300
                                    group-hover:border-zinc-700
                                    group-hover:text-zinc-400
                                "
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                {/* =================================================
                    CTA
                ================================================= */}

                <div
                    className="
                        mt-auto
                        flex
                        items-center
                        gap-2
                        pt-7
                        text-sm
                        font-semibold
                        text-zinc-400
                        transition-colors
                        duration-300
                        group-hover:text-purple-400
                    "
                >
                    <span>
                        Read case study
                    </span>

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

                </div>

            </div>

        </Link>
    );
}