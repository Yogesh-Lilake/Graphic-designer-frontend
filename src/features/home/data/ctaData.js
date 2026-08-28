/**
 * Homepage CTA section configuration.
 *
 * IMPORTANT:
 *
 * All client-facing CTA content belongs in this data source.
 *
 * This structure is designed to support:
 *
 * - Static content
 * - Future Admin Panel
 * - Future CMS
 * - API-driven content
 *
 * @constant
 */
export const CTA_DATA = {

    /**
     * Controls whether the CTA section is displayed.
     *
     * This allows a future Admin Panel/CMS to enable
     * or disable the section without changing Home.jsx.
     */
    enabled: true,

    /**
     * Section content.
     */
    content: {

        eyebrow: "Let's get started",

        title: "Have a requirement?",

        highlightedTitle: "We'll take care of it.",

        description:
            "From design and printing to essential online services, tell us what you need and we'll help you find the right solution.",

    },

    /**
     * Primary conversion action.
     */
    primaryCta: {

        label: "Get a Quote",

        href: "/contact",

    },

    /**
     * Optional secondary conversion action.
     *
     * Set to null when the secondary CTA should
     * not be displayed.
     */
    secondaryCta: {

        label: "Explore Services",

        href: "/services",

    },

    /**
     * Small supporting points displayed below
     * the CTA buttons.
     */
    trustPoints: [
        "DTP & Printing",
        "Online Services",
        "Personal Assistance",
    ],
};