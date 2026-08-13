import {
    FaInstagram,
    FaFacebook,
    FaLinkedinIn,
    FaXTwitter,
} from "react-icons/fa6";

/**
 * Shared social icon registry.
 *
 * Maps the stable icon identifier from `socials.js`
 * to the corresponding React icon component.
 *
 * This registry is shared across the application.
 *
 * Example:
 *
 *     icon: "instagram"
 *
 * resolves to:
 *
 *     FaInstagram
 *
 * This prevents every page/component from maintaining
 * its own social icon mapping.
 */

export const SOCIAL_ICONS = {
    instagram: FaInstagram,
    facebook: FaFacebook,
    linkedin: FaLinkedinIn,
    twitter: FaXTwitter,
};