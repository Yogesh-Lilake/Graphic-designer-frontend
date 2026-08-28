import { PROCESS_DATA } from "@/features/home/data/processData";

import SectionHeading from "@/features/home/components/SectionHeading";

import ProcessStep from "./ProcessStep";

/**
 * Process section.
 *
 * Displays the customer journey from the initial
 * requirement to final completion.
 *
 * All business content is supplied by PROCESS_DATA.
 *
 * @returns {JSX.Element}
 */
export default function Process() {

    const {
        content,
        steps,
    } = PROCESS_DATA;

    return (
        <section
            id="process"
            aria-labelledby="process-title"
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
                    h-72
                    w-72
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
                    titleId="process-title"
                />

                {/* =================================================
                    PROCESS STEPS
                ================================================= */}

                <div
                    className="
                        relative
                        mt-16
                        grid
                        gap-5
                        md:grid-cols-2
                        lg:grid-cols-5
                    "
                >

                    {/* Desktop connector */}

                    <div
                        aria-hidden="true"
                        className="
                            pointer-events-none
                            absolute
                            left-[10%]
                            right-[10%]
                            top-8
                            hidden
                            h-px
                            bg-zinc-800
                            lg:block
                        "
                    />

                    {steps.map((step) => (
                        <ProcessStep
                            key={step.id}
                            step={step}
                        />
                    ))}

                </div>

                {/* =================================================
                    COMPLETION MESSAGE
                ================================================= */}

                {content.completionLabel && (
                    <div className="mt-12 text-center">

                        <p
                            className="
                                text-sm
                                font-medium
                                text-zinc-500
                            "
                        >
                            {content.completionLabel}
                        </p>

                    </div>
                )}

            </div>

        </section>
    );
}