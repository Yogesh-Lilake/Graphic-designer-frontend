import { Link } from "react-router-dom";

import { PORTFOLIO_DATA } from "@/features/home/data/portfolioData";
import SectionHeading from "@/features/home/components/SectionHeading";

import PortfolioCard from "./PortfolioCard";

/**
 * Portfolio preview section.
 *
 * Displays a curated selection of verified client work.
 *
 * All business/content information comes from
 * PORTFOLIO_DATA.
 *
 * The section automatically returns null when no
 * verified portfolio projects are configured.
 *
 * This makes the section compatible with:
 *
 * - Static data
 * - Future Admin Panel
 * - Future CMS
 * - API-driven content
 *
 * @returns {JSX.Element | null}
 */
export default function Portfolio() {

    const {
        content,
        preview,
        projects,
    } = PORTFOLIO_DATA;

    /*
     * Do not render an empty portfolio section.
     *
     * This prevents the website from showing an empty
     * portfolio area before the client provides
     * verified project work.
     */
    if (!projects.length) {
        return null;
    }

    /*
     * Display only the configured number of projects
     * on the Home page.
     */
    const previewProjects = projects.slice(
        0,
        preview?.limit ?? projects.length
    );

    return (
        <section
            id="portfolio"
            aria-labelledby="portfolio-title"
            className="
                relative
                overflow-hidden
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
                    -right-32
                    top-1/4
                    h-96
                    w-96
                    rounded-full
                    bg-purple-600/5
                    blur-3xl
                "
            />

            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    -left-32
                    bottom-0
                    h-80
                    w-80
                    rounded-full
                    bg-cyan-500/5
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
                    titleId="portfolio-title"
                />

                {/* =================================================
                    PROJECT GRID
                ================================================= */}

                <div
                    className="
                        mt-16
                        grid
                        gap-6
                        md:grid-cols-2
                    "
                >
                    {previewProjects.map((project) => (
                        <PortfolioCard
                            key={project.id}
                            project={project}
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