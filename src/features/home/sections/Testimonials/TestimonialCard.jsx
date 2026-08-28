import { TESTIMONIAL_IMAGES } from "@/features/home/data/testimonialImages";

/**
 * Individual testimonial card.
 *
 * @param {{
 *   testimonial: {
 *     id: number,
 *     quote: string,
 *     name: string,
 *     role?: string,
 *     company?: string,
 *     service?: string,
 *     avatar?: string,
 *     rating?: number
 *   }
 * }} props
 *
 * @returns {JSX.Element}
 */
export default function TestimonialCard({ testimonial }) {

    /*
     * Resolve optional avatar from the image registry.
     */
    const avatarImage = testimonial.avatar
        ? TESTIMONIAL_IMAGES[testimonial.avatar]
        : null;

    /*
     * Prevent invalid rating values from generating
     * an excessive number of stars.
     */
    const rating = Math.min(
        Math.max(Number(testimonial.rating) || 0, 0),
        5
    );

    return (
        <article
            className="
                group
                relative
                flex
                h-full
                flex-col
                overflow-hidden
                rounded-[32px]
                border
                border-zinc-800
                bg-zinc-950
                p-7
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-purple-500/30
                hover:bg-zinc-900/70
                hover:shadow-[0_24px_60px_rgba(124,58,237,.08)]
            "
        >

            {/* =================================================
                TOP ROW
            ================================================= */}

            <div
                className="
                    flex
                    items-center
                    justify-between
                "
            >

                {/* =================================================
                    QUOTE MARK
                ================================================= */}

                <span
                    aria-hidden="true"
                    className="
                        font-[family-name:var(--font-heading)]
                        text-5xl
                        font-bold
                        leading-none
                        text-purple-500/60
                    "
                >
                    “
                </span>

                {/* =================================================
                    RATING
                ================================================= */}

                {rating > 0 && (
                    <div
                        className="
                            flex
                            items-center
                            gap-1.5
                            rounded-full
                            border
                            border-amber-400/20
                            bg-amber-400/5
                            px-3
                            py-1.5
                        "
                        aria-label={`${rating} out of 5 stars`}
                    >

                        {/* Gold rating stars */}

                        <div className="flex items-center gap-0.5">
                            {Array.from({
                                length: rating,
                            }).map((_, index) => (
                                <span
                                    key={index}
                                    aria-hidden="true"
                                    className="
                                        text-xs
                                        leading-none
                                        text-amber-400
                                    "
                                >
                                    ★
                                </span>
                            ))}
                        </div>

                        {/* Numeric rating */}

                        <span
                            className="
                                ml-1
                                text-xs
                                font-semibold
                                text-amber-300
                            "
                        >
                            {rating.toFixed(1)}
                        </span>

                    </div>
                )}

            </div>

            {/* =================================================
                TESTIMONIAL QUOTE
            ================================================= */}

            <blockquote
                className="
                    mt-5
                    flex-1
                    text-base
                    leading-8
                    text-zinc-300
                "
            >
                {testimonial.quote}
            </blockquote>

            {/* =================================================
                SERVICE TAG
            ================================================= */}

            {testimonial.service && (
                <div className="mt-7">

                    <span
                        className="
                            inline-flex
                            items-center
                            rounded-full
                            border
                            border-purple-500/20
                            bg-purple-500/5
                            px-3
                            py-1.5
                            text-xs
                            font-medium
                            text-purple-400
                            transition-colors
                            duration-300
                            group-hover:border-purple-500/30
                            group-hover:bg-purple-500/10
                        "
                    >
                        {testimonial.service}
                    </span>

                </div>
            )}

            {/* =================================================
                CUSTOMER
            ================================================= */}

            <footer
                className="
                    mt-7
                    flex
                    items-center
                    gap-4
                    border-t
                    border-zinc-800
                    pt-6
                "
            >

                {/* =================================================
                    AVATAR
                ================================================= */}

                {avatarImage ? (
                    <img
                        src={avatarImage}
                        alt=""
                        loading="lazy"
                        className="
                            h-11
                            w-11
                            shrink-0
                            rounded-full
                            object-cover
                            ring-1
                            ring-zinc-700
                        "
                    />
                ) : (
                    <div
                        aria-hidden="true"
                        className="
                            flex
                            h-11
                            w-11
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-purple-500/20
                            bg-purple-500/10
                            text-sm
                            font-semibold
                            text-purple-400
                        "
                    >
                        {testimonial.name
                            ?.charAt(0)
                            ?.toUpperCase()}
                    </div>
                )}

                {/* =================================================
                    CUSTOMER INFORMATION
                ================================================= */}

                <div className="min-w-0">

                    <p
                        className="
                            truncate
                            text-sm
                            font-semibold
                            text-white
                        "
                    >
                        {testimonial.name}
                    </p>

                    {(testimonial.role || testimonial.company) && (
                        <p
                            className="
                                mt-1
                                truncate
                                text-xs
                                text-zinc-500
                            "
                        >
                            {[
                                testimonial.role,
                                testimonial.company,
                            ]
                                .filter(Boolean)
                                .join(", ")}
                        </p>
                    )}

                </div>

            </footer>

            {/* =================================================
                BOTTOM ACCENT
            ================================================= */}

            <div
                aria-hidden="true"
                className="
                    absolute
                    bottom-0
                    left-7
                    h-px
                    w-8
                    bg-purple-500/60
                    transition-all
                    duration-300
                    group-hover:w-16
                "
            />

        </article>
    );
}