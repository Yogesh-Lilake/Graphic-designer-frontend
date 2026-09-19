/**
 * HoverLift
 * =========================================================
 *
 * Small interaction animation for cards and interactive
 * surfaces.
 */

export default function HoverLift({
    children,
    className = "",
}) {
    return (
        <div
            className={`
                motion-hover-lift
                ${className}
            `}
        >
            {children}
        </div>
    );
}