import { useEffect } from "react";

/**
 * Calls a callback whenever a click occurs
 * outside of the referenced element.
 *
 * @param {React.RefObject<HTMLElement>} ref
 * @param {boolean} isEnabled
 * @param {Function} callback
 */
function useOutsideClick(ref, isEnabled, callback) {
    useEffect(() => {
        if (!isEnabled) return;

        function handlePointerDown(event) {
            const target = event.target;

            if (!target || !target.isConnected) {
                return;
            }

            if (
                ref.current &&
                !ref.current.contains(target)
            ) {
                callback();
            }
        }

        document.addEventListener(
            "pointerdown",
            handlePointerDown
        );

        return () => {
            document.removeEventListener(
                "pointerdown",
                handlePointerDown
            );
        };
    }, [ref, isEnabled, callback]);
}

export default useOutsideClick;