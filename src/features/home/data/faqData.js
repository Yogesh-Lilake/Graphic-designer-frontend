/**
 * Homepage FAQ section configuration.
 *
 * IMPORTANT:
 *
 * All client-facing FAQ content belongs in this data source.
 *
 * This structure is designed to support:
 *
 * - Static content
 * - Future Admin Panel
 * - Future CMS
 * - API-driven content
 *
 * FAQ answers should always be reviewed and approved
 * by the client before publishing.
 *
 * @constant
 */
export const FAQ_DATA = {

    /**
     * Section content.
     */
    content: {

        eyebrow: "Frequently asked questions",

        title: "Questions before you",

        highlightedTitle: "get started?",

        description:
            "Find quick answers about our printing, design and online services. If you need help with something specific, simply contact us.",
    },

    /**
     * Homepage display configuration.
     */
    preview: {

        /*
         * Maximum number of FAQs displayed on Home.
         *
         * The complete FAQ catalog can live on the
         * dedicated FAQ / Contact page later.
         */
        limit: 6,
    },

    /**
     * Section CTA.
     */
    cta: {
        label: "Still have a question? Talk to us",
        href: "/contact",
    },

    /**
     * FAQ items.
     *
     * Only publish answers verified by the client.
     */
    items: [

        {
            id: 1,

            question:
                "What printing and design services do you provide?",

            answer:
                "We provide a wide range of DTP and printing services including pamphlet design, visiting cards, letterheads, brochures, bill books, flex and banners, sun boards, vinyl printing, sticker printing, wedding cards and acrylic boards.",
        },

        {
            id: 2,

            question:
                "Do you provide both design and printing services?",

            answer:
                "Yes. We can help with the design as well as printing of your required material. You can discuss your requirement with us and we will guide you through the suitable design and printing option.",
        },

        {
            id: 3,

            question:
                "Can I bring my own design for printing?",

            answer:
                "Yes. If you already have a print-ready design, you can provide it to us for printing. We can also help check whether the file is suitable for the required printing format.",
        },

        {
            id: 4,

            question:
                "How is the printing price decided?",

            answer:
                "Printing prices can depend on factors such as the type of product, size, quantity, paper or material, printing method and finishing requirements. Contact us with your requirement for an accurate quotation.",
        },

        {
            id: 5,

            question:
                "What online services do you provide?",

            answer:
                "We provide assistance with services including Udyam Registration, Gumasta License, Food License (FSSAI), Gazette, Marriage Certificate, Passport Online, PF Withdrawal and Voter ID services.",
        },

        {
            id: 6,

            question:
                "What documents are required for online services?",

            answer:
                "The required documents depend on the particular service. Please contact us with the service you need and we will explain the applicable requirements before starting the process.",
        },

        {
            id: 7,

            question:
                "How long does a printing order take?",

            answer:
                "The completion time depends on the type of work, quantity, material, finishing and current order requirements. We will provide an expected timeline when discussing your order.",
        },

        {
            id: 8,

            question:
                "Can you help me choose the right printing material?",

            answer:
                "Yes. We can help you choose a suitable printing material based on your purpose, required size, quantity, appearance and budget.",
        },

        {
            id: 9,

            question:
                "Can I get a quotation before placing an order?",

            answer:
                "Yes. You can share your requirement with us and request a quotation before confirming the work.",
        },

        {
            id: 10,

            question:
                "How can I contact you for a service?",

            answer:
                "You can contact us through the Contact page or the available phone, WhatsApp or other communication options to discuss your requirement.",
        },
    ],
};