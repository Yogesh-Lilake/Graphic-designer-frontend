import { useEffect } from "react";

/**
 * Locks body scrolling while enabled.
 *
 * Restores the previous overflow value
 * on cleanup.
 *
 * @param {boolean} isLocked
 */
function useBodyScrollLock(isLocked) {
    useEffect(() => {
        if (!isLocked) {
            return;
        }

        const { body } = document;

        const previousOverflow = body.style.overflow;

        body.style.overflow = "hidden";

        return () => {
            body.style.overflow = previousOverflow;
        };
    }, [isLocked]);
}

export default useBodyScrollLock;