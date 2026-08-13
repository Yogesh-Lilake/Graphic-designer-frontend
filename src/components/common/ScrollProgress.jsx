/**
 * ScrollProgress
 * ==========================================================
 *
 * Global top-of-page scroll progress indicator.
 *
 * Responsibilities:
 * - Track document scroll position.
 * - Calculate normalized scroll progress.
 * - Update the progress indicator.
 *
 * Performance:
 * - Passive scroll listener.
 * - requestAnimationFrame throttling.
 * - No React state during scrolling.
 * - Direct DOM manipulation through ref.
 * - Uses transform: scaleX() instead of width.
 *
 * Architecture:
 * - Mounted once by MainLayout.
 * - Independent from Navbar.
 * - Works automatically across all routes.
 *
 * @returns {JSX.Element} Global scroll progress indicator.
 */

import { useEffect, useRef } from "react";

function ScrollProgress() {
    const progressRef = useRef(null);

    useEffect(() => {
        let frameId = null;

        /**
         * Calculates and applies the current
         * document scroll progress.
         */
        const updateProgress = () => {
            const documentElement = document.documentElement;

            const scrollTop = documentElement.scrollTop;

            const scrollableHeight =
                documentElement.scrollHeight -
                documentElement.clientHeight;

            /*
             * Prevent division by zero on pages
             * that do not have scrollable content.
             */
            const progress =
                scrollableHeight > 0
                    ? Math.min(
                          Math.max(
                              scrollTop / scrollableHeight,
                              0
                          ),
                          1
                      )
                    : 0;

            if (progressRef.current) {
                progressRef.current.style.transform =
                    `scaleX(${progress})`;
            }

            frameId = null;
        };

        /**
         * Schedules progress calculation through
         * requestAnimationFrame.
         *
         * Prevents excessive DOM updates when the
         * browser fires multiple scroll events.
         */
        const handleScroll = () => {
            if (frameId !== null) {
                return;
            }

            frameId =
                requestAnimationFrame(updateProgress);
        };

        /*
         * Calculate initial progress immediately.
         *
         * Important when the page is loaded or restored
         * at a non-zero scroll position.
         */
        updateProgress();

        /*
         * Track document scrolling.
         */
        window.addEventListener(
            "scroll",
            handleScroll,
            { passive: true }
        );

        /*
         * Recalculate when viewport dimensions change.
         */
        window.addEventListener(
            "resize",
            handleScroll,
            { passive: true }
        );

        return () => {
            window.removeEventListener(
                "scroll",
                handleScroll
            );

            window.removeEventListener(
                "resize",
                handleScroll
            );

            if (frameId !== null) {
                cancelAnimationFrame(frameId);
            }
        };
    }, []);

    return (
        <div
            ref={progressRef}
            className="scroll-progress"
            aria-hidden="true"
        />
    );
}

export default ScrollProgress;