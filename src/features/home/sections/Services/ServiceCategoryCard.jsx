import { Link } from "react-router-dom";

import { SERVICE_ICONS } from "@/constants/icons/serviceIcons";
import { ACTION_ICONS } from "@/constants/icons/actionIcons";

/**
 * Individual service category card.
 *
 * Service information is provided by SERVICE_CATALOG.
 *
 * @param {{
 *   category: {
 *     id: number,
 *     key: string,
 *     icon: string,
 *     title: string,
 *     description: string,
 *     href: string,
 *     preview?: {
 *       limit?: number,
 *       remainingLabel?: string
 *     },
 *     services: string[]
 *   }
 * }} props
 *
 * @returns {JSX.Element}
 */
export default function ServiceCategoryCard({ category }) {
    const Icon = SERVICE_ICONS[category.icon];

    const ArrowUpRightIcon = ACTION_ICONS.externalLink;

    /*
     * Determine how many services should be visible
     * on the Home page.
     */
    const previewLimit = category.preview?.limit ?? 5;

    /*
     * Create a preview from the canonical service list.
     */
    const previewServices = category.services.slice(
        0,
        previewLimit
    );

    /*
     * Calculate remaining services.
     */
    const remainingServices = Math.max(
        category.services.length - previewServices.length,
        0
    );

    return (
        <Link
            to={category.href}
            className="
                group
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-zinc-800
                bg-zinc-900/40
                p-7
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-purple-500/40
                hover:bg-zinc-900/70
                hover:shadow-[0_20px_50px_rgba(124,58,237,.12)]
                focus-visible:outline
                focus-visible:outline-2
                focus-visible:outline-offset-2
                focus-visible:outline-purple-400
                sm:p-8
            "
        >
            {/* =================================================
                BACKGROUND GLOW
            ================================================= */}

            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    h-48
                    w-48
                    rounded-full
                    bg-purple-600/10
                    blur-3xl
                    transition-all
                    duration-300
                    group-hover:bg-purple-600/20
                "
            />

            {/* =================================================
                HEADER
            ================================================= */}

            <div className="relative flex items-start justify-between">
                <div
                    className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-purple-500/20
                        bg-purple-500/10
                        text-purple-400
                        transition-all
                        duration-300
                        group-hover:scale-105
                        group-hover:border-purple-500/40
                    "
                >
                    {Icon && (
                        <Icon
                            aria-hidden="true"
                            className="h-7 w-7"
                        />
                    )}
                </div>

                <span
                    aria-hidden="true"
                    className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-zinc-800
                        text-zinc-600
                        transition-all
                        duration-300
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                        group-hover:border-purple-500/30
                        group-hover:text-purple-400
                    "
                >
                    <ArrowUpRightIcon className="h-5 w-5" />
                </span>
            </div>

            {/* =================================================
                TITLE
            ================================================= */}

            <h3
                className="
                    relative
                    mt-8
                    font-[family-name:var(--font-heading)]
                    text-3xl
                    font-semibold
                    tracking-tight
                    text-white
                "
            >
                {category.title}
            </h3>

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <p
                className="
                    relative
                    mt-4
                    max-w-xl
                    text-sm
                    leading-7
                    text-zinc-500
                "
            >
                {category.description}
            </p>

            {/* =================================================
                SERVICE LIST
            ================================================= */}

            {previewServices.length > 0 && (
                <ul
                    className="
                        relative
                        mt-7
                        grid
                        gap-3
                        sm:grid-cols-2
                    "
                >
                    {previewServices.map((service) => (
                        <li
                            key={service}
                            className="
                                flex
                                items-center
                                gap-2.5
                                text-sm
                                text-zinc-400
                            "
                        >
                            <span
                                aria-hidden="true"
                                className="
                                    h-1.5
                                    w-1.5
                                    shrink-0
                                    rounded-full
                                    bg-purple-500/70
                                "
                            />

                            <span>
                                {service}
                            </span>
                        </li>
                    ))}
                </ul>
            )}

            {/* =================================================
                REMAINING SERVICES
            ================================================= */}

            {remainingServices > 0 && (
                <p
                    className="
                        relative
                        mt-5
                        text-xs
                        font-medium
                        text-purple-400
                    "
                >
                    + {remainingServices}{" "}
                    {category.preview?.remainingLabel ?? "more services"}
                </p>
            )}

            {/* =================================================
                BOTTOM ACCENT
            ================================================= */}

            <div
                aria-hidden="true"
                className="
                    relative
                    mt-8
                    h-px
                    w-10
                    bg-purple-500/50
                    transition-all
                    duration-300
                    group-hover:w-20
                "
            />
        </Link>
    );
}