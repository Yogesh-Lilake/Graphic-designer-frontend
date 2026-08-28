import { Link } from "react-router-dom";

import { ACTION_ICONS } from "@/constants/icons/actionIcons";

/**
 * Individual pricing/service card.
 *
 * @param {{
 *   plan: {
 *     id: number,
 *     key: string,
 *     name: string,
 *     description: string,
 *     price: string | number | null,
 *     priceLabel?: string,
 *     pricePrefix?: string | null,
 *     priceSuffix?: string | null,
 *     featured?: boolean,
 *     badge?: string | null,
 *     features: string[],
 *     cta?: {
 *       label: string,
 *       href: string
 *     }
 *   }
 * }} props
 *
 * @returns {JSX.Element}
 */
export default function PricingCard({ plan }) {

    const CheckIcon = ACTION_ICONS.check;

    const hasPrice =
        plan.price !== null &&
        plan.price !== undefined &&
        plan.price !== "";

    return (
        <article
            className={`
                group
                relative
                flex
                h-full
                flex-col
                overflow-hidden
                rounded-[32px]
                border
                p-7
                transition-all
                duration-500
                hover:-translate-y-1
                hover:shadow-[0_24px_60px_rgba(124,58,237,.10)]
                sm:p-8
                ${
                    plan.featured
                        ? `
                            border-purple-500/40
                            bg-purple-500/[0.07]
                        `
                        : `
                            border-zinc-800
                            bg-zinc-950
                            hover:border-purple-500/25
                            hover:bg-zinc-900/70
                        `
                }
            `}
        >

            {/* =================================================
                FEATURED GLOW
            ================================================= */}

            {plan.featured && (
                <div
                    aria-hidden="true"
                    className="
                        pointer-events-none
                        absolute
                        -right-24
                        -top-24
                        h-56
                        w-56
                        rounded-full
                        bg-purple-600/10
                        blur-3xl
                    "
                />
            )}

            {/* =================================================
                TOP ROW
            ================================================= */}

            <div
                className="
                    relative
                    flex
                    min-h-8
                    items-start
                    justify-between
                    gap-4
                "
            >

                {/* Plan badge */}

                {plan.badge ? (
                    <span
                        className="
                            inline-flex
                            rounded-full
                            border
                            border-purple-500/20
                            bg-purple-500/10
                            px-3
                            py-1.5
                            text-xs
                            font-semibold
                            text-purple-300
                        "
                    >
                        {plan.badge}
                    </span>
                ) : (
                    <span />
                )}

                {/* Plan indicator */}

                <span
                    aria-hidden="true"
                    className="
                        h-2
                        w-2
                        rounded-full
                        bg-zinc-700
                        transition-colors
                        duration-300
                        group-hover:bg-purple-400
                    "
                />

            </div>

            {/* =================================================
                PLAN NAME
            ================================================= */}

            <h3
                className="
                    relative
                    mt-6
                    font-[family-name:var(--font-heading)]
                    text-3xl
                    font-semibold
                    tracking-tight
                    text-white
                "
            >
                {plan.name}
            </h3>

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <p
                className="
                    relative
                    mt-3
                    min-h-[56px]
                    text-sm
                    leading-7
                    text-zinc-500
                "
            >
                {plan.description}
            </p>

            {/* =================================================
                PRICE
            ================================================= */}

            <div
                className="
                    relative
                    mt-8
                    min-h-[72px]
                    border-y
                    border-zinc-800
                    py-5
                "
            >

                {hasPrice ? (
                    <div className="flex items-baseline">

                        {plan.pricePrefix && (
                            <span
                                className="
                                    mr-1
                                    text-sm
                                    text-zinc-500
                                "
                            >
                                {plan.pricePrefix}
                            </span>
                        )}

                        <span
                            className="
                                font-[family-name:var(--font-heading)]
                                text-4xl
                                font-bold
                                tracking-tight
                                text-white
                            "
                        >
                            {plan.price}
                        </span>

                        {plan.priceSuffix && (
                            <span
                                className="
                                    ml-2
                                    text-sm
                                    text-zinc-500
                                "
                            >
                                {plan.priceSuffix}
                            </span>
                        )}

                    </div>
                ) : (
                    <div>

                        <p
                            className="
                                font-[family-name:var(--font-heading)]
                                text-3xl
                                font-semibold
                                text-white
                            "
                        >
                            {plan.priceLabel || "Get a quote"}
                        </p>

                        <p className="mt-1 text-xs text-zinc-600">
                            Pricing depends on your requirement
                        </p>

                    </div>
                )}

            </div>

            {/* =================================================
                FEATURES
            ================================================= */}

            <ul className="relative mt-7 flex-1 space-y-4">

                {plan.features.map((feature, index) => (
                    <li
                        key={`${plan.id}-${index}`}
                        className="
                            flex
                            items-start
                            gap-3
                            text-sm
                            leading-6
                            text-zinc-400
                        "
                    >

                        {/* Check icon */}

                        <span
                            className="
                                mt-0.5
                                flex
                                h-5
                                w-5
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-purple-500/20
                                bg-purple-500/10
                                text-purple-400
                            "
                        >
                            {CheckIcon && (
                                <CheckIcon
                                    aria-hidden="true"
                                    className="h-3 w-3"
                                />
                            )}
                        </span>

                        <span>
                            {feature}
                        </span>

                    </li>
                ))}

            </ul>

            {/* =================================================
                CTA
            ================================================= */}

            {plan.cta && (
                <Link
                    to={plan.cta.href}
                    className={`
                        relative
                        mt-8
                        inline-flex
                        h-12
                        items-center
                        justify-center
                        gap-2
                        rounded-full
                        px-5
                        text-sm
                        font-semibold
                        transition-all
                        duration-300
                        focus-visible:outline
                        focus-visible:outline-2
                        focus-visible:outline-offset-2
                        focus-visible:outline-purple-400
                        ${
                            plan.featured
                                ? `
                                    bg-gradient-to-r
                                    from-purple-600
                                    to-violet-500
                                    text-white
                                    shadow-[0_8px_24px_rgba(124,58,237,.25)]
                                    hover:-translate-y-0.5
                                    hover:shadow-[0_14px_34px_rgba(124,58,237,.40)]
                                `
                                : `
                                    border
                                    border-zinc-700
                                    bg-zinc-900
                                    text-zinc-200
                                    hover:border-purple-500/40
                                    hover:bg-purple-500/10
                                `
                        }
                    `}
                >

                    <span>
                        {plan.cta.label}
                    </span>

                    <span
                        aria-hidden="true"
                        className="
                            transition-transform
                            duration-300
                            group-hover:translate-x-0.5
                        "
                    >
                        →
                    </span>

                </Link>
            )}

            {/* =================================================
                BOTTOM ACCENT
            ================================================= */}

            <div
                aria-hidden="true"
                className={`
                    absolute
                    bottom-0
                    left-7
                    h-px
                    w-8
                    transition-all
                    duration-300
                    group-hover:w-16
                    ${
                        plan.featured
                            ? "bg-purple-400"
                            : "bg-purple-500/50"
                    }
                `}
            />

        </article>
    );
}