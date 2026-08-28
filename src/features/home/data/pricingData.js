/**
 * Homepage Pricing section configuration.
 *
 * IMPORTANT:
 *
 * Pricing must contain verified commercial information
 * provided by the client.
 *
 * Do not publish demo prices or invented packages.
 *
 * This structure is designed to support:
 *
 * - Static content
 * - Future Admin Panel
 * - Future CMS
 * - API-driven pricing
 *
 * @constant
 */
export const PRICING_DATA = {

    /**
     * Section content.
     *
     * All client-facing copy belongs in the data layer.
     */
    content: {

        eyebrow: "Pricing",

        title: "Clear pricing,", 

        highlightedTitle: "before you begin.",

        description:
            "Every requirement is different. Get clear pricing based on the service, quantity, material and work involved.",

        cta: {
            label: "View complete pricing",
            href: "/pricing",
        },
    },

    /**
     * Homepage preview configuration.
     */
    preview: {
        limit: 3,
    },

    /**
     * Pricing plans / service groups.
     *
     * Replace these entries with the client's
     * verified pricing before launch.
     */
    plans: [

        {
            id: 1,

            key: "printing",

            name: "Printing Services",

            description:
                "For everyday printing and design requirements.",

            price: null,

            priceLabel: "Get a quote",

            pricePrefix: null,

            priceSuffix: null,

            featured: false,

            badge: null,

            features: [
                "Pamphlet Design",
                "Visiting Card",
                "Letterhead",
                "Brochure",
            ],

            cta: {
                label: "Get a Quote",
                href: "/contact",
            },
        },

        {
            id: 2,

            key: "business",

            name: "Business Printing",

            description:
                "Professional printed materials for businesses and organizations.",

            price: null,

            priceLabel: "Get a quote",

            pricePrefix: null,

            priceSuffix: null,

            featured: true,

            badge: "Popular",

            features: [
                "Bill Book",
                "Flex / Banner",
                "Sun Board",
                "Vinyl & Sticker Printing",
            ],

            cta: {
                label: "Get a Quote",
                href: "/contact",
            },
        },

        {
            id: 3,

            key: "online",

            name: "Online Services",

            description:
                "Assistance with registrations, certificates and online applications.",

            price: null,

            priceLabel: "Get a quote",

            pricePrefix: null,

            priceSuffix: null,

            featured: false,

            badge: null,

            features: [
                "Udyam Registration",
                "Gumasta License",
                "FSSAI",
                "Passport & Other Applications",
            ],

            cta: {
                label: "Get a Quote",
                href: "/contact",
            },
        },
    ],
};