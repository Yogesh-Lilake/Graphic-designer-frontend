import { Link } from "react-router-dom";

import SectionHeading from "@/features/home/components/SectionHeading";
import { PRICING_DATA } from "@/features/home/data/pricingData";

import PricingCard from "./PricingCard";

/**
 * Homepage pricing preview section.
 *
 * Displays a configurable preview of available
 * pricing/service groups.
 *
 * The section does not render when pricing plans
 * are unavailable.
 *
 * Compatible with:
 *
 * - Static data
 * - Future Admin Panel
 * - Future CMS
 * - API-driven content
 *
 * @returns {JSX.Element | null}
 */
export default function PricingPreview() {

    const {
        content,
        preview,
        plans,
    } = PRICING_DATA;

    /*
     * Do not render an empty pricing section.
     */
    if (!plans.length) {
        return null;
    }

    /*
     * Limit the number of cards shown on Home.
     */
    const previewPlans = plans.slice(
        0,
        preview?.limit ?? plans.length
    );

    return (
        <section
            id="pricing"
            aria-labelledby="pricing-title"
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
                    top-1/2
                    h-96
                    w-96
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
                    titleId="pricing-title"
                />

                {/* =================================================
                    PRICING GRID
                ================================================= */}

                <div
                    className="
                        mt-16
                        grid
                        gap-5
                        lg:grid-cols-3
                        lg:items-stretch
                    "
                >
                    {previewPlans.map((plan) => (
                        <PricingCard
                            key={plan.id}
                            plan={plan}
                        />
                    ))}
                </div>

                {/* =================================================
                    VIEW ALL PRICING
                ================================================= */}

                {content.cta && (
                    <div className="mt-12 text-center">

                        <Link
                            href={content.cta.href}
                            className="
                                inline-flex
                                items-center
                                gap-2
                                text-sm
                                font-semibold
                                text-purple-400
                                transition-colors
                                duration-300
                                hover:text-purple-300
                            "
                        >
                            <span>
                                {content.cta.label}
                            </span>

                            <span
                                aria-hidden="true"
                                className="
                                    text-base
                                    transition-transform
                                    duration-300
                                    hover:translate-x-0.5
                                "
                            >
                                →
                            </span>
                        </Link>

                    </div>
                )}

            </div>

        </section>
    );
}