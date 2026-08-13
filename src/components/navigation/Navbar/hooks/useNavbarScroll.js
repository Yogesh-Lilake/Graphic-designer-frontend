import { useEffect, useState } from "react";

/**
 * useNavbarScroll
 * ==========================================================
 *
 * Controls navbar visibility based on meaningful
 * scroll-direction changes.
 *
 * Behaviour:
 *
 * - At the top of the page -> navbar visible.
 * - Meaningful downward scroll -> navbar hides.
 * - Meaningful upward scroll -> navbar appears.
 *
 * Performance:
 * - Passive scroll listener.
 * - requestAnimationFrame throttling.
 * - Minimal React state updates.
 * - Ignores insignificant scroll movement.
 *
 * UX:
 * - Prevents navbar flickering.
 * - Provides smooth hide/show behaviour.
 * - Keeps navbar visible at the top of the page.
 *
 * @returns {boolean} Whether the navbar should be visible.
 */

function useNavbarScroll() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        /*
         * Minimum movement required before changing
         * navbar visibility.
         */
        const SCROLL_THRESHOLD = 8;

        let lastScrollY = window.scrollY;
        let frameId = null;

        /**
         * Determines navbar visibility based on
         * the current scroll direction.
         */
        const updateNavbarVisibility = () => {
            const currentScrollY = window.scrollY;

            /*
             * Always show the navbar when the user
             * reaches the top of the page.
             */
            if (currentScrollY <= 0) {
                setIsVisible(true);

                lastScrollY = 0;
                frameId = null;

                return;
            }

            const scrollDifference =
                currentScrollY - lastScrollY;

            /*
             * Ignore insignificant movement.
             *
             * This prevents flickering caused by
             * very small scroll changes.
             */
            if (
                Math.abs(scrollDifference) <
                SCROLL_THRESHOLD
            ) {
                frameId = null;

                return;
            }

            /*
             * User is scrolling down.
             *
             * Hide navbar to provide more viewport
             * space for page content.
             */
            if (scrollDifference > 0) {
                setIsVisible(false);
            }

            /*
             * User is scrolling up.
             *
             * Restore navbar for navigation access.
             */
            else {
                setIsVisible(true);
            }

            /*
             * Store the latest meaningful scroll
             * position as the new reference point.
             */
            lastScrollY = currentScrollY;

            frameId = null;
        };

        /**
         * Schedule navbar visibility calculation
         * through requestAnimationFrame.
         */
        const handleScroll = () => {
            if (frameId !== null) {
                return;
            }

            frameId =
                requestAnimationFrame(
                    updateNavbarVisibility
                );
        };

        /*
         * Listen for scrolling.
         *
         * Passive listeners allow the browser to
         * optimize scrolling performance.
         */
        window.addEventListener(
            "scroll",
            handleScroll,
            { passive: true }
        );

        return () => {
            window.removeEventListener(
                "scroll",
                handleScroll
            );

            if (frameId !== null) {
                cancelAnimationFrame(frameId);
            }
        };
    }, []);

    return isVisible;
}

export default useNavbarScroll;