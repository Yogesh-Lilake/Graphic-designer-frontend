/**
 * Shared section heading for the Home feature.
 *
 * Keeps typography and spacing consistent across
 * all homepage sections.
 *
 * @param {{
 *   eyebrow: string,
 *   title: string,
 *   description?: string,
 *   align?: "left" | "center"
 * }} props
 *
 * @returns {JSX.Element}
 */
export default function SectionHeading({
    eyebrow,
    title,
    highlightedTitle,
    description,
    align = "left",
    titleId,
}) {
    const isCenter = align === "center";

    return (
        <div
            className={`
                max-w-3xl
                ${isCenter ? "mx-auto text-center" : ""}
            `}
        >
            {eyebrow && (
                <p
                    className="
                        text-sm
                        font-semibold
                        uppercase
                        tracking-[0.2em]
                        text-purple-400
                    "
                >
                    {eyebrow}
                </p>
            )}


            {/* =================================================
                TITLE
            ================================================= */}

            <h2
                id={titleId}
                className="
                    mt-4
                    font-[family-name:var(--font-heading)]
                    text-4xl
                    font-semibold
                    leading-tight
                    text-white
                    sm:text-5xl
                    md:text-6xl
                "
            >
                {title}

                {highlightedTitle && (
                    <>
                        {" "}
                        <span className="text-purple-400">
                            {highlightedTitle}
                        </span>
                    </>
                )}
            </h2>


            {description && (
                <p
                    className="
                        mt-6
                        max-w-2xl
                        text-base
                        leading-8
                        text-zinc-500
                        sm:text-lg
                    "
                >
                    {description}
                </p>
            )}
        </div>
    );
}