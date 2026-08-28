/**
 * Homepage Testimonials section configuration.
 *
 * IMPORTANT:
 *
 * Only genuine, client-approved testimonials should be
 * added to this data source.
 *
 * Never fabricate testimonials or publish customer
 * statements without appropriate permission.
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
export const TESTIMONIALS_DATA = {

    /**
     * Section content.
     *
     * All client-facing copy belongs in the data layer.
     */
    content: {

        eyebrow: "Client feedback",

        title: "Good service creates",

        highlightedTitle: "lasting relationships.",

        description:
            "Hear directly from customers who trusted us with their printing, design and online service requirements.",
    },

    /**
     * Homepage preview configuration.
     */
    preview: {
        limit: 3,
    },

    /**
     * Genuine customer testimonials.
     *
     * Keep empty until the client provides approved
     * testimonials.
     */
    testimonials: [

        {
            id: 1,

            quote:
                "The visiting cards were designed and printed exactly as we needed. The service was quick and professional.",

            name: "Rajesh Patil",

            role: "Business Owner",

            company: "ABC Industries",

            service: "Visiting Card",

            avatar: "rajeshPatil",

            rating: 5,

            href: "/testimonials/rajesh-patil",
        },

    ],
};