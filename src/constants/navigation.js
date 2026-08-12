/**
 * Primary website configuration.
 *
 * Single source of truth for all primary navigation links.
 * 
 * Used by:
 * - Navbar
 * - Mobile Navigation
 * - Footer Quick Links
 * - Sitemap
 *
 * @type {Array<{
 *   id:number,
 *   label:string,
 *   href:string
 * }>}
 */

export const NAVIGATION = [
    {
        id: 1,
        label: "Home",
        href: "/"
    },
    {
        id: 2,
        label: "About",
        href: "/about"
    },
    {
        id: 3,
        label: "Portfolio",
        href: "/portfolio"
    },
    {
        id: 4,
        label: "Case Studies",
        href: "/case-studies"
    },
    {
        id: 5,
        label: "Services",
        href: "/services"
    },
    {
        id: 6,
        label: "Pricing",
        href: "/pricing"
    },
    {
        id: 7,
        label: "Blog",
        href: "/blog"
    },
    {
        id: 8,
        label: "Resources",
        href: "/resources"
    },
    {
        id: 9,
        label: "Contact",
        href: "/contact"
    }
];