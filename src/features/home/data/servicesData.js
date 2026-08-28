/**
 * Homepage Services section configuration.
 *
 * This file controls the presentation and selection
 * of service categories displayed on the Home page.
 *
 * Canonical service information is resolved from
 * SERVICE_CATALOG.
 *
 * This file must not duplicate:
 *
 * - service title
 * - description
 * - icon
 * - route
 * - service list
 *
 * @constant
 */
export const SERVICES_DATA = {
    content: {
        eyebrow: "What we offer",

        title: "Everything you need,",

        highlightedTitle: "under one roof.",

        description:
            "From professional DTP and printing to essential online services, we make everyday business and personal requirements simple, convenient and accessible.",

        cta: {
            label: "Explore all services",
            href: "/services",
        },
    },

    /**
     * Service catalog keys displayed on the Home page.
     *
     * These keys are resolved against SERVICE_CATALOG.
     */
    categoryKeys: [
        "printing",
        "online",
    ],
};