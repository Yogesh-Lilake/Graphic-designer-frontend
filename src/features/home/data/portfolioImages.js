/**
 * Portfolio image registry.
 *
 * Local image imports are kept separate from
 * portfolio business/content configuration.
 *
 * portfolioData.js stores only image keys.
 *
 * Example:
 *
 * image: "visitingCard"
 *
 * The key is resolved here:
 *
 * visitingCard -> actual imported image
 *
 * This keeps asset dependencies outside the
 * business data layer.
 *
 * @constant
 */

/*
 * =========================================================
 * REAL CLIENT PORTFOLIO IMAGES
 * =========================================================
 *
 * Add actual client images here when provided.
 *
 * Example:
 *
 * import visitingCard from
 * "@/assets/images/home/portfolio/visiting-card.webp";
 *
 * import weddingCard from
 * "@/assets/images/home/portfolio/wedding-card.webp";
 *
 * import brochure from
 * "@/assets/images/home/portfolio/brochure.webp";
 */

/**
 * Portfolio image registry.
 */

import weddingCard from "@/assets/images/home/portfolio/wedding-card.jpg";
export const PORTFOLIO_IMAGES = {
    weddingCard

    /*
    visitingCard,

    weddingCard,

    brochure,

    pamphlet,

    flexBanner,

    sticker,

    acrylicBoard,

    sunBoard,

    letterhead,

    billBook,
    */

};