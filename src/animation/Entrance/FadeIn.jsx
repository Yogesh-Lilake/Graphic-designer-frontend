/**
 * FadeIn
 * =========================================================
 *
 * CSS-based entrance animation.
 *
 * Used when content should animate immediately when
 * it is mounted.
 *
 * Example:
 *
 * <FadeIn>
 *     <HeroContent />
 * </FadeIn>
 */

const DIRECTION_OFFSET = {
    up: {
        x: "0px",
        y: "24px",
    },

    down: {
        x: "0px",
        y: "-24px",
    },

    left: {
        x: "24px",
        y: "0px",
    },

    right: {
        x: "-24px",
        y: "0px",
    },

    none: {
        x: "0px",
        y: "0px",
    },
};

export default function FadeIn({
    children,
    direction = "up",
    delay = 0,
    duration = 600,
    className = "",
}) {
    const offset =
        DIRECTION_OFFSET[direction] ??
        DIRECTION_OFFSET.up;

    return (
        <div
            style={{
                "--motion-from-x": offset.x,
                "--motion-from-y": offset.y,
                "--motion-delay": `${delay}ms`,
                "--motion-duration": `${duration}ms`,
            }}
            className={`
                motion-fade-in
                ${className}
            `}
        >
            {children}
        </div>
    );
}