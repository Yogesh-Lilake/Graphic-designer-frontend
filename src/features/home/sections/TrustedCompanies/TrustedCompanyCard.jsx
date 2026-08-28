import { ACTION_ICONS } from "@/constants/icons/actionIcons";

import { TRUSTED_COMPANY_LOGOS } from "@/features/home/constants/trustedCompanyLogos";

/**
 * Trusted company card.
 *
 * Responsible only for presenting a single trusted company.
 *
 * Business/content data comes from:
 * `trustedCompaniesData.js`
 *
 * Local logo assets are resolved through:
 * `trustedCompanyLogos.js`
 *
 * @param {{
 *   company: {
 *     id: number,
 *     name: string,
 *     logo?: string,
 *     href?: string,
 *     description?: string
 *   }
 * }} props
 *
 * @returns {JSX.Element}
 */
export default function TrustedCompanyCard({ company }) {

    /*
     * Resolve the logo key from the local logo registry.
     *
     * Example:
     *
     * company.logo
     *     ↓
     * "abc-industries"
     *     ↓
     * TRUSTED_COMPANY_LOGOS
     *     ↓
     * actual image
     */
    const logo = company.logo
        ? TRUSTED_COMPANY_LOGOS[company.logo]
        : null;

    /**
     * Card presentation.
     *
     * Kept separate so the same UI can be rendered
     * inside either an external link or a normal div.
     */
    const cardContent = (
        <div
            className="
                group
                relative
                flex
                min-h-32
                flex-col
                items-center
                justify-center
                overflow-hidden
                rounded-2xl
                border
                border-zinc-800
                bg-zinc-900/40
                px-5
                py-6
                text-center
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-purple-500/30
                hover:bg-zinc-900/70
                hover:shadow-[0_12px_30px_rgba(124,58,237,.10)]
            "
        >

            {/* =================================================
                SUBTLE HOVER GLOW
            ================================================= */}

            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    opacity-0
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                    bg-[radial-gradient(circle_at_center,rgba(124,58,237,.08),transparent_65%)]
                "
            />

            {/* =================================================
                COMPANY LOGO
            ================================================= */}

            <div
                className="
                    relative
                    flex
                    h-12
                    w-full
                    items-center
                    justify-center
                "
            >
                {logo ? (
                    <img
                        src={logo}
                        alt={`${company.name} logo`}
                        className="
                            max-h-10
                            max-w-[160px]
                            object-contain
                            opacity-60
                            grayscale
                            transition-all
                            duration-300
                            group-hover:scale-105
                            group-hover:opacity-100
                            group-hover:grayscale-0
                        "
                        loading="lazy"
                    />
                ) : (
                    <span
                        className="
                            text-sm
                            font-semibold
                            uppercase
                            tracking-[0.14em]
                            text-zinc-500
                            transition-colors
                            duration-300
                            group-hover:text-zinc-200
                        "
                    >
                        {company.name}
                    </span>
                )}
            </div>

            {/* =================================================
                COMPANY NAME
            ================================================= */}

            <h3
                className="
                    relative
                    mt-4
                    text-sm
                    font-semibold
                    text-zinc-300
                    transition-colors
                    duration-300
                    group-hover:text-white
                "
            >
                {company.name}
            </h3>

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            {company.description && (
                <p
                    className="
                        relative
                        mt-1.5
                        max-w-[220px]
                        text-xs
                        leading-5
                        text-zinc-500
                        transition-colors
                        duration-300
                        group-hover:text-zinc-400
                    "
                >
                    {company.description}
                </p>
            )}

            {/* =================================================
                EXTERNAL LINK INDICATOR
            ================================================= */}

            {company.href && (
                <span
                    aria-hidden="true"
                    className="
                        absolute
                        right-3
                        top-3
                        text-zinc-700
                        transition-all
                        duration-300
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                        group-hover:text-purple-400
                    "
                >
                    <ACTION_ICONS.externalLink
    aria-hidden="true"
    className="h-4 w-4"
/>
                </span>
            )}

        </div>
    );

    /*
     * External company website.
     *
     * Company websites are external resources,
     * therefore a normal anchor is used instead
     * of React Router's <Link>.
     */
    if (company.href) {
        return (
            <a
                href={company.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${company.name} website`}
                className="block h-full"
            >
                {cardContent}
            </a>
        );
    }

    /*
     * No website available.
     *
     * Render the card without navigation.
     */
    return cardContent;
}