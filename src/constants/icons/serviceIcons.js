import {
    HiOutlinePrinter,
    HiOutlineGlobeAlt,
} from "react-icons/hi2";

/**
 * Shared service-category icons.
 *
 * These icons represent the primary business service
 * categories and may be reused by multiple sections
 * and pages.
 *
 * Keeping icon imports outside data files prevents
 * presentation-library dependencies from leaking into
 * business/content configuration.
 *
 * @constant
 */
export const SERVICE_ICONS = {
    printing: HiOutlinePrinter,
    online: HiOutlineGlobeAlt,
};