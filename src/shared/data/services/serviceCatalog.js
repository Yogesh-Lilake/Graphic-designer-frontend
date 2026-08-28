/**
 * Shared service catalog.
 *
 * This file is the single source of truth for the
 * identity and core content of services used across
 * the application.
 *
 * Other features should reference services through
 * their stable `key` instead of duplicating:
 *
 * - service title
 * - description
 * - icon
 * - route
 * - service offerings
 *
 * Feature-specific presentation belongs to the
 * respective feature data files.
 *
 * @constant
 */
export const SERVICE_CATALOG = {
    printing: {
        id: 1,

        key: "printing",

        icon: "printing",

        title: "DTP & Printing Services",

        description:
            "Professional design and printing solutions for business, personal and promotional needs.",

        href: "/services/dtp-printing",

        preview: {
            limit: 5,
            remainingLabel: "more services",
        },

        services: [
            "Pamphlet Design",
            "Visiting Card",
            "Letterhead",
            "Brochure",
            "Bill Book",
            "Flex / Banner",
            "Sun Board",
            "Vinyl Printing",
            "Sticker Printing",
            "Wedding Cards",
            "Acrylic Board",
        ],
    },

    online: {
        id: 2,

        key: "online",

        icon: "online",

        title: "Online Services",

        description:
            "Convenient assistance with registrations, certificates, applications and essential online services.",

        href: "/services/online-services",

        preview: {
            limit: 5,
            remainingLabel: "more services",
        },

        services: [
            "Udyam Registration",
            "Gumasta License",
            "Food License (FSSAI)",
            "Gazette",
            "Marriage Certificate",
            "Passport Online",
            "PF Withdrawal",
            "Voter ID",
        ],
    },
};