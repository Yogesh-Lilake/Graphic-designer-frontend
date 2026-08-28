import { ACTION_ICONS } from "@/constants/icons/actionIcons";

/**
 * Individual FAQ item.
 *
 * Native <details> is used instead of React state because
 * basic FAQ disclosure does not require JavaScript state.
 *
 * @param {{
 *   item: {
 *     id: number,
 *     question: string,
 *     answer: string
 *   }
 * }} props
 *
 * @returns {JSX.Element}
 */
export default function FAQItem({ item }) {

    const ChevronDownIcon = ACTION_ICONS.chevronDown;

    return (
        <details
            className="
                group
                border-b
                border-zinc-800
                last:border-b-0
            "
        >

            {/* =================================================
                QUESTION
            ================================================= */}

            <summary
                className="
                    flex
                    min-h-20
                    cursor-pointer
                    list-none
                    items-center
                    justify-between
                    gap-6
                    px-6
                    py-5
                    text-left
                    text-base
                    font-semibold
                    text-white
                    transition-colors
                    duration-300
                    hover:text-purple-300
                    sm:px-7
                "
            >

                <span className="leading-7">
                    {item.question}
                </span>

                {/* =================================================
                    DISCLOSURE ICON
                ================================================= */}

                <span
                    aria-hidden="true"
                    className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-zinc-800
                        bg-zinc-900
                        text-zinc-500
                        transition-all
                        duration-300
                        group-hover:border-purple-500/30
                        group-hover:text-purple-400
                        group-open:rotate-180
                        group-open:border-purple-500/30
                        group-open:bg-purple-500/10
                        group-open:text-purple-400
                    "
                >
                    {ChevronDownIcon && (
                        <ChevronDownIcon
                            className="h-4 w-4"
                        />
                    )}
                </span>

            </summary>

            {/* =================================================
                ANSWER
            ================================================= */}

            <div
                className="
                    px-6
                    pb-6
                    sm:px-7
                "
            >
                <p
                    className="
                        max-w-3xl
                        text-sm
                        leading-7
                        text-zinc-500
                    "
                >
                    {item.answer}
                </p>
            </div>

        </details>
    );
}