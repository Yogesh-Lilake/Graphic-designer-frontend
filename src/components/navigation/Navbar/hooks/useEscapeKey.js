import { useEffect } from "react";

/**
 * Executes a callback when the Escape key
 * is pressed while enabled.
 *
 * @param {boolean} isEnabled
 * @param {Function} callback
 */
function useEscapeKey(isEnabled, callback) {
    useEffect(() => {
        if (!isEnabled) return;

        function handleKeyDown(event) {
            if (
                event.key === "Escape" &&
                !event.repeat
            ) {
                callback();
            }
        }

        document.addEventListener(
            "keydown",
            handleKeyDown
        );

        return () => {
            document.removeEventListener(
                "keydown",
                handleKeyDown
            );
        };
    }, [isEnabled, callback]);
}

export default useEscapeKey;