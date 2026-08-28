import { Link } from "react-router-dom";

import { SERVICE_ICONS } from "@/constants/icons/serviceIcons";
import { ACTION_ICONS } from "@/constants/icons/actionIcons";

/**
 * Individual service card displayed inside the Hero visual.
 *
 * Service identity comes from SERVICE_CATALOG.
 * Hero-specific presentation text comes from HERO_DATA.
 *
 * @param {{
 *   card: {
 *     id: number,
 *     key: string,
 *     title: string,
 *     icon: string,
 *     href: string,
 *     displayValue: string
 *   }
 * }} props
 *
 * @returns {JSX.Element}
 */
export default function HeroVisualCard({ card }) {
    const Icon = SERVICE_ICONS[card.icon];

    const ArrowUpRightIcon = ACTION_ICONS.arrowUpRight;

    return (
        <Link
            to={card.href}
            className="
                group
                block
                min-w-0
                rounded-2xl
                border
                border-white/15
                bg-black/20
                p-4
                backdrop-blur-md
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-white/30
                hover:bg-black/30
                focus-visible:outline
                focus-visible:outline-2
                focus-visible:outline-offset-2
                focus-visible:outline-purple-400

                max-[499px]:rounded-xl
                max-[499px]:p-2.5
            "
        >
            {/* =================================================
                CARD HEADER
            ================================================= */}

            <div
                className="
                    flex
                    min-w-0
                    items-center
                    justify-between
                    gap-3

                    max-[499px]:gap-2
                "
            >
                {/* Service identity */}

                <span
                    className="
                        flex
                        min-w-0
                        items-center
                        gap-2
                        text-xs
                        font-medium
                        text-white/60

                        max-[499px]:gap-1.5
                        max-[499px]:text-[9px]
                    "
                >
                    {Icon && (
                        <Icon
                            aria-hidden="true"
                            className="
                                h-4
                                w-4
                                shrink-0
                                text-white/80
                                transition-transform
                                duration-300
                                group-hover:scale-110

                                max-[499px]:h-3
                                max-[499px]:w-3
                            "
                        />
                    )}

                    <span className="truncate">
                        {card.title}
                    </span>
                </span>

                {/* Arrow */}

                <span
                    aria-hidden="true"
                    className="
                        flex
                        shrink-0
                        items-center
                        text-white/70
                    "
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

                            max-[499px]:h-3
                            max-[499px]:w-3
                        "
                    />
                </span>
            </div>

            {/* =================================================
                HERO-SPECIFIC VALUE
            ================================================= */}

            <p
                className="
                    mt-3
                    text-lg
                    font-semibold
                    leading-tight
                    text-white

                    max-[499px]:mt-1.5
                    max-[499px]:text-sm
                "
            >
                {card.displayValue}
            </p>
        </Link>
    );
}