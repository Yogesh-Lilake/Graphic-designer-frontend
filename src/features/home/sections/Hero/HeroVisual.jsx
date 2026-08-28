import HeroVisualCard from "./HeroVisualCard";

/**
 * Hero visual presentation.
 *
 * Responsible for composing the main visual artwork.
 *
 * Business content is provided through data.
 *
 * The visual adapts its:
 * - panel spacing
 * - typography
 * - border radius
 * - service card layout
 * - floating card position
 * - rotation
 *
 * for smaller screens.
 *
 * @param {{
 *   label: string,
 *   eyebrow: string,
 *   title: string,
 *   subtitle: string,
 *   year?: string,
 *   floatingCard: {
 *     label: string,
 *     text: string
 *   },
 *   cards: Array<{
 *     id: number,
 *     key: string,
 *     title: string,
 *     icon: string,
 *     href: string,
 *     displayValue: string
 *   }>
 * }} props
 *
 * @returns {JSX.Element}
 */
export default function HeroVisual({ data }) {
    return (
        <div className="relative z-10 w-full">
            <div
                className="
                    relative
                    mx-auto
                    aspect-square
                    w-full
                    max-w-[560px]
                    max-[499px]:max-w-[350px]
                "
            >
                {/* =================================================
                    OUTER GLOW
                ================================================= */}

                <div
                    aria-hidden="true"
                    className="
                        pointer-events-none
                        absolute
                        inset-10
                        rounded-[40px]
                        bg-purple-600/20
                        blur-3xl
                        max-[499px]:inset-5
                        max-[499px]:rounded-[28px]
                    "
                />

                {/* =================================================
                    MAIN CREATIVE PANEL
                ================================================= */}

                <div
                    className="
                        absolute
                        inset-0
                        rotate-3
                        overflow-hidden
                        rounded-[40px]
                        border
                        border-white/10
                        bg-gradient-to-br
                        from-purple-600
                        via-violet-500
                        to-cyan-400
                        p-5
                        shadow-2xl
                        transition-transform
                        duration-500
                        hover:rotate-0

                        max-[499px]:rotate-2
                        max-[499px]:rounded-[28px]
                        max-[499px]:p-3
                    "
                >
                    <div
                        className="
                            flex
                            h-full
                            flex-col
                            justify-between
                            rounded-[30px]
                            border
                            border-white/20
                            bg-black/25
                            p-6
                            backdrop-blur-sm

                            max-[499px]:rounded-[21px]
                            max-[499px]:p-4
                        "
                    >
                        {/* =================================================
                            TOP
                        ================================================= */}

                        <div
                            className="
                                flex
                                items-center
                                justify-between
                                gap-3
                            "
                        >
                            <span
                                className="
                                    min-w-0
                                    truncate
                                    text-xs
                                    font-semibold
                                    tracking-[0.2em]
                                    text-white/80

                                    max-[499px]:text-[9px]
                                    max-[499px]:tracking-[0.16em]
                                "
                            >
                                {data.label}
                            </span>

                            {/* Optional year */}

                            {data.year && (
                                <span
                                    className="
                                        shrink-0
                                        rounded-full
                                        border
                                        border-white/20
                                        px-3
                                        py-1
                                        text-xs
                                        text-white/70

                                        max-[499px]:px-2
                                        max-[499px]:py-0.5
                                        max-[499px]:text-[9px]
                                    "
                                >
                                    {data.year}
                                </span>
                            )}
                        </div>

                        {/* =================================================
                            MAIN MESSAGE
                        ================================================= */}

                        <div
                            className="
                                min-w-0
                            "
                        >
                            <p
                                className="
                                    text-xs
                                    uppercase
                                    tracking-[0.3em]
                                    text-white/60

                                    max-[499px]:text-[9px]
                                    max-[499px]:tracking-[0.22em]
                                "
                            >
                                {data.eyebrow}
                            </p>

                            <p
                                className="
                                    mt-3
                                    font-[family-name:var(--font-heading)]
                                    text-6xl
                                    font-bold
                                    leading-none
                                    tracking-tight
                                    text-white
                                    sm:text-7xl

                                    max-[499px]:mt-2
                                    max-[499px]:text-[42px]
                                    max-[499px]:leading-[0.92]
                                "
                            >
                                {data.title}
                            </p>

                            <p
                                className="
                                    font-[family-name:var(--font-heading)]
                                    text-6xl
                                    font-bold
                                    leading-none
                                    tracking-tight
                                    text-white/80
                                    sm:text-7xl

                                    max-[499px]:text-[42px]
                                    max-[499px]:leading-[0.92]
                                "
                            >
                                {data.subtitle}
                            </p>
                        </div>

                        {/* =================================================
                            SERVICE CARDS
                        ================================================= */}

                        <div
                            className="
                                grid
                                gap-3
                                sm:grid-cols-2

                                max-[499px]:gap-2
                            "
                        >
                            {data.cards.map((card) => (
                                <HeroVisualCard
                                    key={card.key}
                                    card={card}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* =================================================
                    FLOATING CARD
                ================================================= */}

                <div
                    className="
                        absolute
                        -bottom-5
                        -left-5
                        rounded-2xl
                        border
                        border-white/10
                        bg-zinc-950/90
                        px-5
                        py-4
                        shadow-2xl
                        backdrop-blur-xl

                        max-[499px]:-bottom-4
                        max-[499px]:left-3
                        max-[499px]:rounded-xl
                        max-[499px]:px-3
                        max-[499px]:py-2.5
                    "
                >
                    <p
                        className="
                            text-xs
                            text-zinc-500

                            max-[499px]:text-[10px]
                        "
                    >
                        {data.floatingCard.label}
                    </p>

                    <p
                        className="
                            mt-1
                            text-sm
                            font-semibold
                            text-white

                            max-[499px]:text-xs
                        "
                    >
                        {data.floatingCard.text}
                    </p>
                </div>
            </div>
        </div>
    );
}