import SectionHeading from "@/features/home/components/SectionHeading";
import { TESTIMONIALS_DATA } from "@/features/home/data/testimonialsData";

import TestimonialCard from "./TestimonialCard";

/**
 * Testimonials section.
 *
 * Displays genuine customer testimonials configured
 * through the Home page data source.
 *
 * The section automatically returns null when there
 * are no testimonials configured.
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
export default function Testimonials() {

    const {
        content,
        preview,
        testimonials,
    } = TESTIMONIALS_DATA;

    /*
     * Do not render the section when no genuine
     * testimonials are available.
     */
    if (!testimonials.length) {
        return null;
    }

    /*
     * Limit the number of testimonials displayed
     * on the homepage.
     */
    const previewTestimonials = testimonials.slice(
        0,
        preview?.limit ?? testimonials.length
    );

    return (
        <section
            id="testimonials"
            aria-labelledby="testimonials-title"
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
                    right-0
                    top-1/2
                    h-80
                    w-80
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
                    titleId="testimonials-title"
                />

                {/* =================================================
                    TESTIMONIAL GRID
                ================================================= */}

                <div
                    className="
                        mt-16
                        grid
                        gap-5
                        lg:grid-cols-3
                    "
                >
                    {previewTestimonials.map((testimonial) => (
                        <TestimonialCard
                            key={testimonial.id}
                            testimonial={testimonial}
                        />
                    ))}
                </div>

            </div>

        </section>
    );
}