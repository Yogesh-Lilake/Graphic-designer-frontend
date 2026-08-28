/**
 * Homepage Process section configuration.
 *
 * The process communicates how customers move from
 * their initial requirement to final delivery/completion.
 *
 * Business content is stored here.
 *
 * React Icon components are referenced through keys
 * resolved by PROCESS_ICONS.
 *
 * @constant
 */
export const PROCESS_DATA = {
    content: {
        eyebrow: "How it works",

        title: "Simple from start",

        highlightedTitle: "to finish.",

        description:
            "Whether you need something printed or help with an online service, we keep the process simple, clear and convenient.",

        completionLabel: "Simple. Clear. Convenient.",
    },

    steps: [
        {
            id: 1,

            number: "01",

            key: "requirement",

            icon: "requirement",

            title: "Tell Us",

            description:
                "Tell us what you need, whether it is a printing job, design requirement or online service.",

            label: "Your requirement",
        },

        {
            id: 2,

            number: "02",

            key: "service",

            icon: "service",

            title: "Choose Your Service",

            description:
                "Select the service that matches your requirement and understand what is needed to get started.",

            label: "Choose a service",
        },

        {
            id: 3,

            number: "03",

            key: "preparation",

            icon: "preparation",

            title: "We Prepare",

            description:
                "We prepare your design, print work, application or required documentation with care.",

            label: "We handle the work",
        },

        {
            id: 4,

            number: "04",

            key: "confirmation",

            icon: "confirmation",

            title: "Review & Confirm",

            description:
                "Review the prepared work or application details and confirm everything before the final step.",

            label: "Your approval",
        },

        {
            id: 5,

            number: "05",

            key: "completion",

            icon: "completion",

            title: "Complete & Deliver",

            description:
                "Receive your finished printed material or completed online service with clear communication throughout.",

            label: "Ready for you",
        },
    ],
};