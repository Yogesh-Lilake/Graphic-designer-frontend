/**
 * Individual statistic.
 *
 * @param {{
 *   statistic: {
 *     id: number,
 *     value: string,
 *     label: string
 *   }
 * }} props
 *
 * @returns {JSX.Element}
 */
export default function StatisticItem({ statistic }) {

    return (
        <article
            className="
                group
                relative
                px-6
                py-8
                text-center
                transition-colors
                duration-300
                first:pt-0
                sm:first:pt-8
                lg:px-8
                lg:text-left
            "
        >

            {/* =================================================
                VALUE
            ================================================= */}

            <div
                className="
                    font-[family-name:var(--font-heading)]
                    text-5xl
                    font-bold
                    leading-none
                    tracking-tight
                    text-white
                    transition-colors
                    duration-300
                    group-hover:text-purple-400
                    sm:text-6xl
                "
            >
                {statistic.value}
            </div>

            {/* =================================================
                LABEL
            ================================================= */}

            <p
                className="
                    mt-4
                    max-w-[180px]
                    text-sm
                    leading-6
                    text-zinc-500
                    lg:max-w-[200px]
                "
            >
                {statistic.label}
            </p>

            {/* =================================================
                ACCENT
            ================================================= */}

            <div
                aria-hidden="true"
                className="
                    mt-6
                    h-px
                    w-8
                    bg-purple-500/50
                    transition-all
                    duration-300
                    group-hover:w-14
                "
            />

        </article>
    );
}