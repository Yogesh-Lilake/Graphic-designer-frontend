/**
 * Hero section configuration.
 *
 * This file contains business/content configuration only.
 *
 * Components should not contain client-specific:
 * - headings
 * - descriptions
 * - service names
 * - CTA labels
 * - links
 * - visual labels
 *
 * UI-specific dependencies such as React Icons are kept
 * outside this file.
 *
 * @constant
 */
export const HERO_DATA = {
    /**
     * Small positioning statement displayed above
     * the primary heading.
     */
    eyebrow: "DTP + Printing + Online Services",

    /**
     * Primary Hero headline.
     */
    title: "Everything You Need,",

    /**
     * Visually emphasized portion of the headline.
     */
    highlightedTitle: "All Under One Roof.",

    /**
     * Supporting business description.
     */
    description:
        "Professional design, printing and essential online services for businesses and individuals — delivered with convenience, quality and care.",

    /**
     * Primary conversion action.
     */
    primaryCta: {
        label: "Get a Quote",
        href: "/contact",
    },

    /**
     * Secondary conversion action.
     */
    secondaryCta: {
        label: "Explore Services",
        href: "/services",
    },

    /**
     * Small trust indicators displayed below the CTAs.
     */
    trustPoints: [
        "Design & Printing",
        "Business Services",
        "Online Assistance",
    ],

    /**
     * Hero visual configuration.
     */
    visual: {
        label: "ONE STOP SERVICE",

        year: "2026",

        eyebrow: "DESIGN • PRINT • APPLY",

        title: "Simple.",

        subtitle: "Convenient.",

        floatingCard: {
            label: "Our promise",
            text: "Quality service. One place.",
        },

        /**
         * Services featured inside the Hero visual.
         *
         * `serviceKey` references SERVICE_CATALOG.
         *
         * `displayValue` is Hero-specific presentation
         * copy and does not represent the canonical
         * service name.
         */
        serviceCards: [
            {
                serviceKey: "printing",
                displayValue: "Design & Print",
            },
            {
                serviceKey: "online",
                displayValue: "Apply Online",
            },
        ],
    },
};