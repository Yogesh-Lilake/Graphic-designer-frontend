import { useState } from "react";

import FooterHeading from "./FooterHeading";

import { FOOTER_CONFIG } from "../constants/footerConfig";

/**
 * Footer newsletter section.
 *
 * Responsibility:
 * - Render newsletter content.
 * - Manage newsletter input state.
 * - Handle newsletter form submission.
 *
 * Newsletter content comes from:
 *     footerConfig.js
 *
 * @returns {JSX.Element}
 */
function FooterNewsletter() {
    const { newsletter } = FOOTER_CONFIG;

    const [email, setEmail] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        /*
         * Temporary submission handling.
         *
         * Replace this with the actual newsletter
         * API/service integration later.
         */
        console.log(email);

        setEmail("");
    }

    return (
        <section
            className="
                min-w-0
            "
        >
            {/* =================================
                Newsletter Heading
            ================================== */}

            <FooterHeading>
                {newsletter.title}
            </FooterHeading>

            {/* =================================
                Description
            ================================== */}

            <p
                className="
                    mb-6

                    max-w-sm

                    text-sm
                    leading-7

                    text-[var(--text-secondary)]
                "
            >
                {newsletter.description}
            </p>

            {/* =================================
                Newsletter Form
            ================================== */}

            <form
                onSubmit={handleSubmit}
                className="
                    flex
                    flex-col

                    gap-4
                "
            >
                <input
                    type="email"
                    required
                    value={email}
                    placeholder={newsletter.placeholder}
                    aria-label="Email address"
                    onChange={(event) =>
                        setEmail(event.target.value)
                    }
                    className="
                        h-12

                        w-full

                        rounded-full

                        border
                        border-[var(--border)]

                        bg-[var(--bg-main)]

                        px-5

                        text-sm
                        text-[var(--text-primary)]

                        outline-none

                        placeholder:text-[var(--text-muted)]

                        transition-colors

                        focus:border-[var(--color-primary)]
                    "
                />

                <button
                    type="submit"
                    className="
                        h-12

                        w-full

                        rounded-full

                        bg-[var(--color-primary)]

                        font-medium

                        text-white

                        transition-all
                        duration-300

                        hover:bg-[var(--color-primary-hover)]

                        hover:shadow-[var(--button-shadow-hover)]

                        focus-visible:outline-2
                        focus-visible:outline-offset-4
                        focus-visible:outline-[var(--color-primary)]
                    "
                >
                    {newsletter.buttonLabel}
                </button>
            </form>
        </section>
    );
}

export default FooterNewsletter;