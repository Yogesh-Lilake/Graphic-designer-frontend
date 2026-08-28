/**
 * Testimonial image registry.
 *
 * Local testimonial images are imported here rather than
 * directly inside testimonial data or presentation components.
 *
 * The testimonial data stores only the image key.
 *
 * Example:
 *
 * avatar: "rajeshPatil"
 *
 * and this registry resolves that key to the actual asset.
 *
 * @constant
 */
export const TESTIMONIAL_IMAGES = {

    /*
    Example:

    rajeshPatil:
        new URL(
            "@/assets/images/home/testimonials/rajesh-patil.webp",
            import.meta.url
        ).href,
    */

};