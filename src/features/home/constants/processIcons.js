import {
    HiOutlineChatBubbleLeftRight,
    HiOutlineSquares2X2,
    HiOutlineDocumentCheck,
    HiOutlineCheckCircle,
    HiOutlineTruck,
} from "react-icons/hi2";

/**
 * Icons used by the Home Process section.
 *
 * Icons are kept separate from business/content data
 * so React Icon dependencies do not leak into the
 * process configuration.
 *
 * @constant
 */
export const PROCESS_ICONS = {
    requirement: HiOutlineChatBubbleLeftRight,
    service: HiOutlineSquares2X2,
    preparation: HiOutlineDocumentCheck,
    confirmation: HiOutlineCheckCircle,
    completion: HiOutlineTruck,
};