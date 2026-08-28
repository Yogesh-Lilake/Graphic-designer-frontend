import { TRUSTED_COMPANIES_DATA } from "@/features/home/data/trustedCompaniesData";

import TrustedCompanyCard from "./TrustedCompanyCard";

/**
 * Trusted companies section.
 *
 * Displays verified client/company relationships as
 * social proof.
 *
 * Section content and company data come entirely from
 * TRUSTED_COMPANIES_DATA.
 *
 * The component automatically returns nothing when there
 * are no companies configured.
 *
 * This makes the section compatible with:
 *
 * - Static configuration
 * - Future Admin Panel
 * - Future CMS
 * - API-driven content
 *
 * @returns {JSX.Element | null}
 */
export default function TrustedCompanies() {

    const {
        content,
        companies,
    } = TRUSTED_COMPANIES_DATA;

    /*
     * Prevent an empty section from being rendered.
     */
    if (!companies.length) {
        return null;
    }

    return (
        <section
            aria-labelledby="trusted-companies-title"
            aria-label={content.ariaLabel}
            className="
                relative
                overflow-hidden
                border-y
                border-zinc-800/80
                bg-zinc-950/60
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
                    h-32
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

                <div className="py-14 sm:py-16">

                    {/* =================================================
                        SECTION INTRO
                    ================================================= */}

                    <div className="text-center">

                        <div
                            className="
                                inline-flex
                                items-center
                                gap-3
                                text-xs
                                font-semibold
                                uppercase
                                tracking-[0.25em]
                                text-zinc-500
                            "
                        >

                            <span
                                aria-hidden="true"
                                className="
                                    h-px
                                    w-8
                                    bg-zinc-700
                                "
                            />

                            <span>
                                {content.eyebrow}
                            </span>

                            <span
                                aria-hidden="true"
                                className="
                                    h-px
                                    w-8
                                    bg-zinc-700
                                "
                            />

                        </div>

                        <h2
                            id="trusted-companies-title"
                            className="
                                mt-4
                                font-[family-name:var(--font-heading)]
                                text-2xl
                                font-semibold
                                tracking-tight
                                text-white
                                sm:text-3xl
                            "
                        >
                            {content.title}

                            <span className="text-purple-400">
                                {" "}
                                {content.highlightedTitle}
                            </span>
                        </h2>

                    </div>

                    {/* =================================================
                        COMPANY GRID
                    ================================================= */}

                    <div
                        className="
                            mt-10
                            grid
                            grid-cols-2
                            gap-3
                            sm:grid-cols-3
                            lg:grid-cols-5
                        "
                    >
                        {companies.map((company) => (
                            <TrustedCompanyCard
                                key={company.id}
                                company={company}
                            />
                        ))}
                    </div>

                </div>

            </div>

        </section>
    );
}