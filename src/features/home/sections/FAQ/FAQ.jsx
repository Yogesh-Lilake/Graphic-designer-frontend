import { Link } from "react-router-dom";

import SectionHeading from "@/features/home/components/SectionHeading";
import { FAQ_DATA } from "@/features/home/data/faqData";

import FAQItem from "./FAQItem";

/**
 * Homepage FAQ section.
 *
 * Uses native <details> elements for disclosure behavior,
 * avoiding unnecessary React state and JavaScript.
 *
 * The section automatically returns null when no FAQ
 * items are configured.
 *
 * Compatible with:
 *
 * - Static content
 * - Future Admin Panel
 * - Future CMS
 * - API-driven content
 *
 * @returns {JSX.Element | null}
 */
export default function FAQ() {

    const {
        content,
        preview,
        cta,
        items,
    } = FAQ_DATA;

    /*
     * Do not render an empty FAQ section.
     */
    if (!items.length) {
        return null;
    }

    /*
     * Limit the number of FAQs shown on Home.
     */
    const previewItems = items.slice(
        0,
        preview?.limit ?? items.length
    );

    return (
        <section
            id="faq"
            aria-labelledby="faq-title"
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
                    left-0
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
                    titleId="faq-title"
                />

                {/* =================================================
                    FAQ LIST
                ================================================= */}

                <div
                    className="
                        mx-auto
                        mt-14
                        max-w-4xl
                        overflow-hidden
                        rounded-[28px]
                        border
                        border-zinc-800
                        bg-zinc-950
                    "
                >
                    {previewItems.map((item) => (
                        <FAQItem
                            key={item.id}
                            item={item}
                        />
                    ))}
                </div>

                {/* =================================================
                    CTA
                ================================================= */}

                {cta && (
                    <div className="mt-10 text-center">

                        <Link
                            to={cta.href}
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
                                {cta.label}
                            </span>

                            <span
                                aria-hidden="true"
                                className="
                                    transition-transform
                                    duration-300
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