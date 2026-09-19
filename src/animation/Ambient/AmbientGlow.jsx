/**
 * AmbientGlow
 * =========================================================
 *
 * Decorative background glow.
 *
 * Intended for:
 * - Hero
 * - CTA
 * - section backgrounds
 * - visual compositions
 */

export default function AmbientGlow({
    className = "",
}) {
    return (
        <div
            aria-hidden="true"
            className={`
                ambient-glow
                ${className}
            `}
        />
    );
}