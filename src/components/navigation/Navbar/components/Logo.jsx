import { Link } from "react-router-dom";

import logo from "@/assets/images/brand/logo.png";
import { BRAND } from "@/constants/brand";

/**
 * Brand logo component.
 * 
 * Displays the application logo together with the brand name and tagline.
 *  
 * @returns {JSZ.Element} Brand logo. 
 */

function Logo() {
    return (
        <Link
            to="/"
            aria-label="Go to Home"
            className="
                group
                flex
                items-center
                gap-3
                sm:gap-4
                shrink-0
                select-none
            "
        >
            {/* Logo */}
            <div
                className="
                    overflow-hidden
                    rounded-xl
                    border
                    border-[var(--border)]
                    bg-[var(--bg-surface)]
                    p-1.5

                    transition-all
                    duration-300

                    group-hover:border-[var(--color-primary)]
                    group-hover:shadow-[0_0_24px_rgba(124,58,237,.20)]
                "
            >
                <img
                    src={logo}
                    alt={BRAND.logoAlt}
                    className="
                        h-10
                        w-10
                        rounded-lg
                        object-cover

                        sm:h-11
                        sm:w-11

                        md:h-12
                        md:w-12
                    "
                />
            </div>

            {/* Brand */}
            <div className="flex flex-col leading-none">
                <h1
                    className="
                        truncate
                        font-bold
                        uppercase
                        tracking-[0.08em]

                        text-[20px]
                        sm:text-[21px]
                        xl:text-[22px]
                        text-[color:var(--text-primary)]

                        transition-colors
                        duration-300

                        group-hover:text-[var(--color-secondary)]
                    "
                >
                    {BRAND.name}
                </h1>

                <span
                    className="
                        mt-1

                        text-[10px]
                        sm:text-[11px]
                        font-medium
                        uppercase
                        tracking-[0.38em]
                        sm:tracking-[0.45em]

                        text-[color:var(--text-muted)]
                    "
                >
                    {BRAND.tagline}
                </span>
            </div>
        </Link>
    );
}

export default Logo;