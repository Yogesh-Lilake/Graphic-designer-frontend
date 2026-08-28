import { PROCESS_ICONS } from "@/features/home/constants/processIcons";

/**
 * Individual process step.
 *
 * The card uses a controlled internal layout so that
 * titles, descriptions and footer labels remain visually
 * aligned even when content has different lengths.
 *
 * @param {{
 *   step: {
 *     id: number,
 *     number: string,
 *     key: string,
 *     icon: string,
 *     title: string,
 *     description: string,
 *     label: string
 *   }
 * }} props
 *
 * @returns {JSX.Element}
 */
export default function ProcessStep({ step }) {

    const Icon = PROCESS_ICONS[step.icon];

    return (
        <article
            className="
                group
                relative
                z-10
                flex
                h-full
                flex-col
                overflow-hidden
                rounded-3xl
                border
                border-zinc-800
                bg-zinc-950/90
                p-6
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-purple-500/30
                hover:bg-zinc-900
                hover:shadow-[0_20px_45px_rgba(124,58,237,.10)]
            "
        >

            {/* =================================================
                STEP NUMBER + ICON
            ================================================= */}

            <div
                className="
                    flex
                    shrink-0
                    items-center
                    justify-between
                "
            >

                <span
                    className="
                        text-sm
                        font-semibold
                        tracking-[0.15em]
                        text-purple-400
                    "
                >
                    {step.number}
                </span>

                <div
                    className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-zinc-800
                        bg-zinc-900
                        text-zinc-500
                        transition-all
                        duration-300
                        group-hover:border-purple-500/30
                        group-hover:bg-purple-500/10
                        group-hover:text-purple-400
                    "
                >
                    {Icon && (
                        <Icon
                            aria-hidden="true"
                            className="h-5 w-5"
                        />
                    )}
                </div>

            </div>

            {/* =================================================
                TITLE
            ================================================= */}

            <div
                className="
                    mt-7
                    min-h-[3.5rem]
                "
            >
                <h3
                    className="
                        text-xl
                        font-semibold
                        leading-snug
                        text-white
                    "
                >
                    {step.title}
                </h3>
            </div>

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <div
                className="
                    mt-3
                    min-h-[9.5rem]
                "
            >
                <p
                    className="
                        text-sm
                        leading-7
                        text-zinc-500
                    "
                >
                    {step.description}
                </p>
            </div>

            {/* =================================================
                STEP LABEL
            ================================================= */}

            {step.label && (
                <div
                    className="
                        mt-auto
                        border-t
                        border-zinc-800
                        pt-4
                    "
                >
                    <span
                        className="
                            text-xs
                            font-medium
                            uppercase
                            tracking-[0.15em]
                            text-zinc-600
                            transition-colors
                            duration-300
                            group-hover:text-zinc-500
                        "
                    >
                        {step.label}
                    </span>
                </div>
            )}

            {/* =================================================
                BOTTOM ACCENT
            ================================================= */}

            <div
                aria-hidden="true"
                className="
                    absolute
                    bottom-0
                    left-6
                    h-px
                    w-8
                    bg-purple-500/50
                    transition-all
                    duration-300
                    group-hover:w-16
                "
            />

        </article>
    );
}