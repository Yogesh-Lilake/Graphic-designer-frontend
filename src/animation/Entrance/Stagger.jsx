import {
    Children,
    cloneElement,
    isValidElement,
} from "react";

/**
 * Stagger
 * =========================================================
 *
 * Adds incremental animation delays to child elements.
 *
 * Example:
 *
 * <Stagger stagger={100}>
 *     <Card />
 *     <Card />
 *     <Card />
 * </Stagger>
 *
 * Results:
 *
 * Card 1 -> 0ms
 * Card 2 -> 100ms
 * Card 3 -> 200ms
 * =========================================================
 */

export default function Stagger({
    children,
    stagger = 80,
    delay = 0,
    className = "",
}) {
    const items = Children.toArray(children);

    return (
        <div className={className}>
            {items.map((child, index) => {
                if (!isValidElement(child)) {
                    return child;
                }

                return cloneElement(child, {
                    style: {
                        ...child.props.style,

                        "--motion-stagger-delay":
                            `${delay + index * stagger}ms`,
                    },

                    "data-motion-stagger-item": "",
                });
            })}
        </div>
    );
}