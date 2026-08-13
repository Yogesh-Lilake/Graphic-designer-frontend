/**
 * Footer content configuration.
 *
 * Responsibility:
 * - Store footer-specific content.
 * - Store footer section labels.
 * - Store CTA content.
 * - Store company information.
 * - Store newsletter content.
 * - Store bottom-bar content.
 *
 * Navigation data does NOT belong here.
 *
 * Navigation:
 * - constants/navigation.js
 * - constants/services.js
 * - constants/socials.js
 * - constants/legal.js
 */

export const FOOTER_CONFIG = {
    /**
     * Footer section labels.
     */
    sections: {
        quickLinks: {
            title: "Quick Links",
        },

        services: {
            title: "Services",
        },

        social: {
            title: "Follow Us",
        },
    },

    /**
     * Footer CTA.
     */
    cta: {
        title: "Let's Build Something Extraordinary",

        description:
            "From bold brand identities to beautiful digital experiences, we help businesses stand out through thoughtful design.",

        button: {
            label: "Start Your Project",
            href: "/contact",
        },
    },

    /**
     * Company information.
     */
    company: {
        description:
            "We create premium branding, websites, and visual identities that leave a lasting impression.",

        email: "hello@designstudio.com",

        phone: "+91 98765 43210",

        address: "Mumbai, Maharashtra, India",

        workingHours:
            "Mon – Fri • 9:00 AM – 6:00 PM",
    },

    /**
     * Newsletter.
     */
    newsletter: {
        title: "Stay Inspired",

        description:
            "Monthly design inspiration, branding tips, and creative resources delivered to your inbox.",

        placeholder: "Your email",

        buttonLabel: "Subscribe",
    },

    /**
     * Footer bottom bar.
     *
     * Keeps UI labels out of the component.
     */
    bottom: {
        legalAriaLabel: "Footer legal links",

        backToTop: {
            label: "Back to Top",
            ariaLabel: "Back to top",
        },
    },

    /**
     * Copyright.
     */
    copyright: {
        text: `© ${new Date().getFullYear()} Design Studio. All rights reserved.`,
    },
};