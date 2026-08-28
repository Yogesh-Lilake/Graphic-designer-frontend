import { Link } from "react-router-dom";

import { ACTION_ICONS } from "@/constants/icons/actionIcons";

import { SERVICES_DATA } from "@/features/home/data/servicesData";

import { SERVICE_CATALOG } from "@/shared/data/services/serviceCatalog";

import SectionHeading from "@/features/home/components/SectionHeading";

import ServiceCategoryCard from "./ServiceCategoryCard";

/**
 * Resolve Home service category references from
 * the shared service catalog.
 *
 * servicesData.js only stores stable service keys.
 *
 * SERVICE_CATALOG provides the canonical:
 * - title
 * - description
 * - icon
 * - href
 * - services
 * - preview configuration
 */
const SERVICE_CATEGORIES = SERVICES_DATA.categoryKeys
    .map((key) => SERVICE_CATALOG[key])
    .filter(Boolean);

/**
 * Homepage Services preview section.
 *
 * Displays the primary service categories offered
 * by the business.
 *
 * Service identity and service offerings are resolved
 * from SERVICE_CATALOG.
 *
 * @returns {JSX.Element}
 */
export default function Services() {
    const {
        content,
    } = SERVICES_DATA;

    const ArrowUpRightIcon = ACTION_ICONS.externalLink;

    return (
        <section
            id="services"
            aria-labelledby="services-title"
            className="py-28"
        >
            <div
                className="
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
                    titleId="services-title"
                />

                {/* =================================================
                    SERVICE CATEGORIES
                ================================================= */}

                {SERVICE_CATEGORIES.length > 0 && (
                    <div
                        className="
                            mt-16
                            grid
                            gap-5
                            lg:grid-cols-2
                        "
                    >
                        {SERVICE_CATEGORIES.map((category) => (
                            <ServiceCategoryCard
                                key={category.key}
                                category={category}
                            />
                        ))}
                    </div>
                )}

                {/* =================================================
                    CTA
                ================================================= */}

                <div className="mt-10 text-center">
                    <Link
                        to={content.cta.href}
                        className="
                            group
                            inline-flex
                            items-center
                            gap-2
                            text-sm
                            font-semibold
                            text-purple-400
                            transition-colors
                            duration-300
                            hover:text-purple-300
                            focus-visible:outline
                            focus-visible:outline-2
                            focus-visible:outline-offset-4
                            focus-visible:outline-purple-400
                        "
                    >
                        <span>
                            {content.cta.label}
                        </span>

                        <ArrowUpRightIcon
                            aria-hidden="true"
                            className="
                                h-4
                                w-4
                                transition-transform
                                duration-300
                                group-hover:-translate-y-0.5
                                group-hover:translate-x-0.5
                            "
                        />
                    </Link>
                </div>
            </div>
        </section>
    );
}