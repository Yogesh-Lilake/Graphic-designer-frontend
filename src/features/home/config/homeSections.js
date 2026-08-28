/**
 * Homepage section configuration.
 *
 * This configuration controls which sections are currently
 * displayed on the homepage.
 *
 * IMPORTANT:
 *
 * This is intentionally kept separate from Home.jsx.
 *
 * Currently this configuration is static.
 *
 * In the future, the same configuration can be provided by:
 *
 * - Admin Panel
 * - API
 * - Database
 * - CMS
 *
 * without changing the Home page section architecture.
 *
 * @constant
 */
export const HOME_SECTION_CONFIG = {
    /**
     * Hero section.
     *
     * Core homepage section.
     */
    hero: {
        enabled: true,
        order: 1,
    },

    /**
     * Trusted companies / brands section.
     *
     * Currently disabled because the client does not
     * have verified companies/brands to display.
     */
    trustedCompanies: {
        enabled: true,
        order: 2,
    },

    /**
     * Main services section.
     */
    services: {
        enabled: true,
        order: 3,
    },

    /**
     * Process / How it works section.
     */
    process: {
        enabled: true,
        order: 4,
    },

    /**
     * Portfolio / previous work section.
     */
    portfolio: {
        enabled: true,
        order: 5,
    },

    /**
     * Business statistics section.
     *
     * Keep disabled until verified statistics
     * are available from the client.
     */
    statistics: {
        enabled: true,
        order: 6,
    },

    /**
     * Case studies section.
     *
     * Keep disabled until genuine case studies
     * are available.
     */
    caseStudies: {
        enabled: true,
        order: 7,
    },

    /**
     * Testimonials section.
     *
     * Enable only when genuine client testimonials
     * are available.
     */
    testimonials: {
        enabled: true,
        order: 8,
    },

    /**
     * Pricing preview section.
     */
    pricingPreview: {
        enabled: true,
        order: 9,
    },

    /**
     * Frequently Asked Questions section.
     */
    faq: {
        enabled: true,
        order: 10,
    },

    /**
     * Final conversion section.
     */
    cta: {
        enabled: true,
        order: 11,
    },
};