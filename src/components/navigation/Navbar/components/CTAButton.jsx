import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import { NAVBAR } from "../constants/navbarConfig";

/**
 * Desktop call-to-action button.
 *
 * Navigates users to the booking page.
 *
 * Hidden on mobile screens.
 *
 * @returns {JSX.Element}
 */
function CTAButton() {
    return (
        <Link
            to={NAVBAR.ctaPath}
            className="
                group
                hidden
                lg:inline-flex

                items-center
                justify-center
                gap-2

                h-12
                px-6

                rounded-full

                border
                border-[color:rgba(255,255,255,.08)]

                bg-[image:var(--button-gradient)]

                text-sm
                font-semibold
                tracking-[0.02em]
                text-white

                shadow-[var(--button-shadow)]

                transition-all
                duration-300

                hover:-translate-y-0.5
                hover:brightness-110
                hover:shadow-[var(--button-shadow-hover)]

                active:translate-y-0
                active:scale-95
            "
        >
            <span>{NAVBAR.ctaLabel}</span>

            <ArrowUpRight
                size={18}
                strokeWidth={2.25}
                className="
                    transition-transform
                    duration-300

                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                "
            />
        </Link>
    );
}

export default CTAButton;