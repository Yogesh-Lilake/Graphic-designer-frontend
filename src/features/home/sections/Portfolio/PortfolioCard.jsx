import { Link } from "react-router-dom";

import { ACTION_ICONS } from "@/constants/icons/actionIcons";
import { PORTFOLIO_IMAGES } from "@/features/home/data/portfolioImages";

/**
 * Individual portfolio project card.
 *
 * The component is responsible only for presentation.
 *
 * Business content comes from the project data.
 * Images are resolved through PORTFOLIO_IMAGES.
 * Icons are resolved through ACTION_ICONS.
 *
 * @param {{
 *   project: {
 *     id: number,
 *     category: string,
 *     title: string,
 *     description: string,
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
export default function PortfolioCard({ project }) {

    /*
     * Resolve the reusable internal-link icon
     * from the centralized action icon registry.
     */
    const ArrowUpRightIcon = ACTION_ICONS.externalLink;

    /*
     * Resolve project image from the image registry.
     *
     * `project.image` contains only the registry key.
     */
    const projectImage = project.image
        ? PORTFOLIO_IMAGES[project.image]
        : null;

    return (
        <Link
            to={project.href}
            className="
                group
                relative
                block
                overflow-hidden
                rounded-[32px]
                border
                border-zinc-800
                bg-zinc-950
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-purple-500/30
                hover:shadow-[0_24px_70px_rgba(124,58,237,.12)]
                focus-visible:outline
                focus-visible:outline-2
                focus-visible:outline-offset-2
                focus-visible:outline-purple-400
            "
        >

            {/* =================================================
                PROJECT VISUAL
            ================================================= */}

            <div
                className="
                    relative
                    aspect-[16/11]
                    overflow-hidden
                    bg-zinc-900
                "
            >

                {/* =================================================
                    PROJECT IMAGE
                ================================================= */}

                {projectImage && (
                    <img
                        src={projectImage}
                        alt={project.alt || project.title}
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
                )}

                {/* =================================================
                    IMAGE OVERLAY
                ================================================= */}

                <div
                    aria-hidden="true"
                    className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/75
                        via-black/15
                        to-transparent
                        opacity-90
                        transition-opacity
                        duration-500
                        group-hover:opacity-70
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

                    {/* Category */}

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
                        {project.category}
                    </span>

                    {/* Internal link icon */}

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
                    PROJECT TITLE
                ================================================= */}

                <div
                    className="
                        absolute
                        bottom-0
                        left-0
                        right-0
                        p-6
                        sm:p-7
                    "
                >
                    <h3
                        className="
                            max-w-xl
                            font-[family-name:var(--font-heading)]
                            text-3xl
                            font-semibold
                            leading-tight
                            text-white
                            sm:text-4xl
                        "
                    >
                        {project.title}
                    </h3>
                </div>

            </div>

            {/* =================================================
                PROJECT INFORMATION
            ================================================= */}

            <div className="p-6 sm:p-7">

                {/* Description */}

                <p
                    className="
                        max-w-2xl
                        text-sm
                        leading-7
                        text-zinc-500
                    "
                >
                    {project.description}
                </p>

                {/* =================================================
                    TAGS
                ================================================= */}

                {project.tags?.length > 0 && (
                    <div
                        className="
                            mt-6
                            flex
                            flex-wrap
                            gap-2
                        "
                    >
                        {project.tags.map((tag) => (
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
                    VIEW PROJECT
                ================================================= */}

                <div
                    className="
                        mt-7
                        flex
                        items-center
                        gap-2
                        text-sm
                        font-semibold
                        text-purple-400
                    "
                >
                    <span>
                        View project
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