import Reveal from "./Reveal";

/**
 * SlideIn
 * =========================================================
 *
 * Semantic wrapper around Reveal for directional
 * slide-based entrances.
 */

export default function SlideIn({
    children,
    direction = "left",
    delay = 0,
    duration = 600,
    className = "",
}) {
    return (
        <Reveal
            direction={direction}
            delay={delay}
            duration={duration}
            className={className}
        >
            {children}
        </Reveal>
    );
}