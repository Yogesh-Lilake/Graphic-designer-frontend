import { STATISTICS_DATA } from "@/features/home/data/statisticsData";

import SectionHeading from "@/features/home/components/SectionHeading";

import StatisticItem from "./StatisticItem";

/**
 * Statistics section.
 *
 * Displays verified business statistics.
 *
 * The section automatically returns null when no
 * statistics are configured.
 *
 * This makes the component safe for:
 *
 * - Current static content
 * - Future Admin Panel
 * - Future CMS
 * - API-driven content
 *
 * @returns {JSX.Element | null}
 */
export default function Statistics() {

    const {
        content,
        statistics,
    } = STATISTICS_DATA;

    /*
     * Do not render the section when there are
     * no verified statistics available.
     *
     * This prevents fabricated or empty statistics
     * from appearing on the website.
     */
    if (!statistics.length) {
        return null;
    }

    return (
        <section
            id="statistics"
            aria-labelledby="statistics-title"
            className="
                relative
                overflow-hidden
                border-y
                border-zinc-800/80
                bg-zinc-950/70
            "
        >

            {/* =================================================
                BACKGROUND DECORATION
            ================================================= */}

            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-1/2
                    h-80
                    w-80
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-purple-600/5
                    blur-3xl
                "
            />

            {/* =================================================
                CONTAINER
            ================================================= */}

            <div
                className="
                    relative
                    mx-auto
                    w-full
                    max-w-7xl
                    px-4
                    py-28
                    sm:px-6
                    lg:px-8
                    xl:px-10
                "
            >

                {/* =================================================
                    SECTION HEADING
                ================================================= */}

                <SectionHeading
                    eyebrow={content.eyebrow}
                    title={content.title}
                    highlightedTitle={content.highlightedTitle}
                    description={content.description}
                    titleId="statistics-title"
                />

                {/* =================================================
                    STATISTICS
                ================================================= */}

                <div
                    className="
                        mt-16
                        grid
                        divide-y
                        divide-zinc-800
                        sm:grid-cols-2
                        sm:divide-x
                        sm:divide-y-0
                        lg:grid-cols-4
                    "
                >
                    {statistics.map((statistic) => (
                        <StatisticItem
                            key={statistic.id}
                            statistic={statistic}
                        />
                    ))}
                </div>

            </div>

        </section>
    );
}