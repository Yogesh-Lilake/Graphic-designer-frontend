/**
 * Homepage Portfolio section configuration.
 *
 * IMPORTANT:
 *
 * Only verified client projects should be added here.
 *
 * The Home page displays a curated preview.
 * The complete portfolio belongs to the dedicated
 * Portfolio page.
 *
 * Business/content configuration is kept separate
 * from image and icon dependencies.
 *
 * @constant
 */
export const PORTFOLIO_DATA = {

    /**
     * Section content.
     */
    content: {

        eyebrow: "Selected work",

        title: "Work that speaks",

        highlightedTitle: "for itself.",

        description:
            "A selection of real design and printing work created for businesses, events and individuals.",

        /**
         * Portfolio page CTA.
         */
        cta: {
            label: "Explore full portfolio",
            href: "/portfolio",
        },
    },

    /**
     * Homepage preview configuration.
     *
     * The complete portfolio should not necessarily
     * be displayed on the Home page.
     */
    preview: {
        limit: 4,
    },

    /**
     * Verified client projects.
     *
     * Keep this empty until the client provides
     * actual portfolio work.
     *
     * Future Admin Panel / CMS data can replace
     * this collection without requiring changes
     * to the presentation components.
     */
    projects: [

    {
        id: 1,
        title: "Business Visiting Card",
        category: "Visiting Card",
        description:
            "Professional visiting card design and printing created for a local business.",
        image: "visitingCard",
        alt: "Professional business visiting card design",
        href: "/portfolio/business-visiting-card",
        tags: [
            "Visiting Card",
            "Print Design",
        ],
        featured: true,
    },

    {
        id: 2,
        title: "Wedding Invitation",
        category: "Wedding Cards",
        description:
            "Custom wedding invitation design prepared for a complete wedding stationery requirement.",
        image: "weddingCard",
        alt: "Custom wedding invitation card design",
        href: "/portfolio/wedding-invitation",
        tags: [
            "Wedding Card",
            "Print Design",
        ],
        featured: true,
    },

    {
        id: 3,
        title: "Business Brochure",
        category: "Brochure",
        description:
            "Professional brochure design created to present products and services clearly.",
        image: "brochure",
        alt: "Professional business brochure design",
        href: "/portfolio/business-brochure",
        tags: [
            "Brochure",
            "Print Design",
        ],
        featured: false,
    },

    {
        id: 4,
        title: "Promotional Flex Banner",
        category: "Flex / Banner",
        description:
            "High-impact promotional banner designed for local business advertising.",
        image: "flexBanner",
        alt: "Promotional flex banner design",
        href: "/portfolio/promotional-flex-banner",
        tags: [
            "Flex",
            "Banner",
            "Advertising",
        ],
        featured: false,
    },
],

};