/**
 * Shared Tailwind utility classes used throughout the application.
 *
 * Centralizing frequently used utility classes improves
 * consistency and maintainability.
 *
 * @constant
 */
export const theme = {
  /** Root page wrapper */
  page: "min-h-screen flex flex-col",

  /** Maximum content width */
  container: "w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10",

  /** Standard section spacing */
  section: "py-28",

  /** Default card border radius */
  cardRadius: "rounded-3xl",

  /** Default button border radius */
  buttonRadius: "rounded-full",

  /**
   * Shared application transition.
   *
   * Components should combine this with a
   * property-specific Tailwind utility when required.
   *
   * Example:
   *
   * `${theme.transition} transition-transform`
   */
  transition: "theme-transition",

  /** Default shadow */
  shadow: "shadow-2xl",
};