/**
 * Trusted companies / client brands configuration.
 *
 * IMPORTANT:
 *
 * Only verified client/company relationships should be
 * added to this data source.
 *
 * The numeric ID represents the future database
 * primary key.
 *
 * The `logo` value references a key from
 * TRUSTED_COMPANY_LOGOS.
 *
 * @constant
 */
export const TRUSTED_COMPANIES_DATA = {
    /**
     * Section content.
     *
     * All client-facing copy belongs in the data layer.
     */
    content: {
        ariaLabel: "Trusted companies",

        eyebrow: "Trusted by businesses",

        title: "Trusted by businesses that value",

        highlightedTitle: "quality and convenience.",
    },

    /**
     * Verified companies / client brands.
     */
    companies: [
        {
            id: 1,
            name: "ABC Industries",
            logo: "abc-industries",
            href: "https://example.com",
            description: "Printing and branding client.",
        },

        {
            id: 2,
            name: "XYZ Traders",
            logo: "xyz-traders",
            href: "https://example.com",
            description: "Business printing client.",
        },
    ],
};