/**
 * Homepage Case Studies section configuration.
 *
 * IMPORTANT:
 *
 * Only verified client case studies should be added here.
 *
 * Case studies should describe real customer requirements,
 * the service provided and the resulting outcome.
 *
 * Avoid fabricated performance metrics or business claims.
 *
 * The Home page displays a curated preview.
 * The complete case study collection belongs to the
 * dedicated Case Studies page.
 *
 * @constant
 */
export const CASE_STUDIES_DATA = {

    /**
     * Section content.
     */
    content: {

        eyebrow: "Customer stories",

        title: "Real requirements.",

        highlightedTitle: "Practical solutions.",

        description:
            "See how we help businesses and individuals turn everyday requirements into professional, convenient and ready-to-use solutions.",

        cta: {
            label: "View all case studies",
            href: "/case-studies",
        },
    },

    /**
     * Homepage preview configuration.
     */
    preview: {
        limit: 3,
    },

    /**
     * Verified case studies.
     *
     * Keep this empty until the client provides
     * real customer stories.
     */
    caseStudies: [

        {
            id: 1,

            title: "ABC Industries",

            category: "Visiting Card",

            summary:
                "A local business needed professional visiting cards for its team.",

            requirement: {
                label: "Requirement",
                text:
                    "Create a clean and professional visiting card suitable for everyday business networking.",
            },

            solution: {
                label: "Solution",
                text:
                    "Prepared the design, print-ready artwork and final printed visiting cards.",
            },

            outcome: {
                label: "Outcome",
                text:
                    "The client received consistent, professional visiting cards ready for business use.",
            },

            image: "abcVisitingCard",

            alt:
                "Professional visiting card created for ABC Industries",

            href:
                "/case-studies/abc-industries-visiting-card",

            tags: [
                "Visiting Card",
                "DTP",
                "Printing",
            ],

            featured: true,
        },
        

    ],
};