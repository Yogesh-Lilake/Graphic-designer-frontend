import {
    useEffect,
    useRef,
    useState,
} from "react";

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

/**
 * Reveal
 * =========================================================
 *
 * Animates an element when it enters the viewport.
 *
 * Uses IntersectionObserver instead of scroll listeners.
 *
 * This is appropriate for:
 * - Services
 * - Portfolio
 * - Testimonials
 * - Case Studies
 * - FAQ
 */

export default function Reveal({
    children,
    direction = "up",
    delay = 0,
    duration = 600,
    threshold = 0.12,
    once = true,
    className = "",
}) {
    const ref = useRef(null);

    const [visible, setVisible] =
        useState(false);

    useEffect(() => {
        const element = ref.current;

        if (!element) {
            return;
        }

        /*
         * Respect reduced-motion users.
         *
         * In this case we can immediately reveal
         * the content without observing.
         */
        const prefersReducedMotion =
            window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;

        if (prefersReducedMotion) {
            setVisible(true);
            return;
        }

        const observer =
            new IntersectionObserver(
                ([entry]) => {
                    if (!entry.isIntersecting) {
                        return;
                    }

                    setVisible(true);

                    if (once) {
                        observer.disconnect();
                    }
                },
                {
                    threshold,
                }
            );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [once, threshold]);

    const offset =
        DIRECTION_OFFSET[direction] ??
        DIRECTION_OFFSET.up;

    return (
        <div
            ref={ref}
            style={{
                "--motion-from-x": offset.x,
                "--motion-from-y": offset.y,
                "--motion-delay": `${delay}ms`,
                "--motion-duration": `${duration}ms`,
            }}
            className={`
                motion-reveal
                ${visible ? "is-visible" : ""}
                ${className}
            `}
        >
            {children}
        </div>
    );
}