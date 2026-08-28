/**
 * Homepage Statistics section configuration.
 *
 * IMPORTANT:
 *
 * Only verified business statistics should be added here.
 *
 * Statistics should never be fabricated merely to fill
 * the homepage.
 *
 * This structure is compatible with:
 *
 * - Static content
 * - Future Admin Panel
 * - Future CMS
 * - API-driven content
 *
 * @constant
 */
export const STATISTICS_DATA = {

    /**
     * Section content.
     *
     * All client-facing copy belongs in the data layer.
     */
    content: {

        eyebrow: "By the numbers",

        title: "One place for",

        highlightedTitle: "everyday needs.",

        description:
            "From design and printing to essential online assistance, we bring multiple services together in one convenient place.",
    },

    /**
     * Verified business statistics.
     *
     * Keep this array empty until the client provides
     * verified numbers.
     */
    statistics: [

        {
            id: 1,
            value: "19+",
            label: "Services available",
        },

        {
            id: 2,
            value: "11+",
            label: "Printing solutions",
        },

        {
            id: 3,
            value: "8+",
            label: "Online services",
        },

        {
            id: 4,
            value: "10+",
            label: "Years of experience",
        },

    ],
};