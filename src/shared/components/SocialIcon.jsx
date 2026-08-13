import { SOCIAL_ICONS } from "@/shared/icons/socialIcons.js";

/**
 * Reusable social icon component.
 *
 * Responsibility:
 * - Resolves a social icon identifier
 *   to the corresponding React icon.
 *
 * This component is intentionally UI-agnostic.
 * Styling is passed through `className`.
 *
 * Example:
 *
 * <SocialIcon
 *     name="instagram"
 *     className="h-5 w-5"
 * />
 *
 * @param {Object} props
 * @param {string} props.name
 * @param {string} [props.className]
 *
 * @returns {JSX.Element|null}
 */
function SocialIcon({
    name,
    className = "",
}) {
    /*
     * Resolve the icon from the centralized registry.
     */
    const Icon = SOCIAL_ICONS[name];

    /*
     * Safety fallback.
     *
     * If an invalid or unsupported icon name
     * is provided, don't crash the application.
     */
    if (!Icon) {
        return null;
    }

    return (
        <Icon
            aria-hidden="true"
            className={className}
        />
    );
}

export default SocialIcon;