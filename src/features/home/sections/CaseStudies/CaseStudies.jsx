import { Link } from "react-router-dom";

import { CASE_STUDIES_DATA } from "@/features/home/data/caseStudiesData";
import SectionHeading from "@/features/home/components/SectionHeading";

import CaseStudyCard from "./CaseStudyCard";

/**
 * Case studies preview section.
 *
 * Displays a curated selection of verified customer
 * stories and completed service work.
 *
 * The section automatically returns null when no
 * case studies are configured.
 *
 * This makes the component compatible with:
 *
 * - Static content
 * - Future Admin Panel
 * - Future CMS
 * - API-driven content
 *
 * @returns {JSX.Element | null}
 */
export default function CaseStudies() {

    const {
        content,
        preview,
        caseStudies,
    } = CASE_STUDIES_DATA;

    /*
     * Do not render an empty case study section.
     *
     * This prevents an empty section from appearing
     * before the client has supplied real stories.
     */
    if (!caseStudies.length) {
        return null;
    }

    /*
     * Display only the configured number of
     * case studies on the Home page.
     */
    const previewCaseStudies = caseStudies.slice(
        0,
        preview?.limit ?? caseStudies.length
    );

    return (
        <section
            id="case-studies"
            aria-labelledby="case-studies-title"
            className="
                relative
                overflow-hidden
                border-y
                border-zinc-800/80
                bg-zinc-950/60
                py-28
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
                    top-0
                    h-96
                    w-96
                    -translate-x-1/2
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
                    titleId="case-studies-title"
                />

                {/* =================================================
                    CASE STUDIES GRID
                ================================================= */}

                <div
                    className="
                        mt-16
                        grid
                        gap-6
                        lg:grid-cols-3
                    "
                >
                    {previewCaseStudies.map((caseStudy) => (
                        <CaseStudyCard
                            key={caseStudy.id}
                            caseStudy={caseStudy}
                        />
                    ))}
                </div>

                {/* =================================================
                    CTA
                ================================================= */}

                {content.cta?.label &&
                    content.cta?.href && (
                        <div className="mt-12 text-center">

                            <Link
                                to={content.cta.href}
                                className="
                                    inline-flex
                                    items-center
                                    justify-center
                                    rounded-full
                                    border
                                    border-zinc-700
                                    px-6
                                    py-3
                                    text-sm
                                    font-semibold
                                    text-zinc-200
                                    transition-all
                                    duration-300
                                    hover:border-purple-500/50
                                    hover:bg-purple-500/10
                                    hover:text-white
                                    focus-visible:outline
                                    focus-visible:outline-2
                                    focus-visible:outline-offset-2
                                    focus-visible:outline-purple-400
                                "
                            >
                                {content.cta.label}
                            </Link>

                        </div>
                    )}

            </div>

        </section>
    );
}