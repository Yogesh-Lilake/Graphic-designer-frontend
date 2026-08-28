import { HERO_DATA } from "@/features/home/data/heroData";
import { SERVICE_CATALOG } from "../../../../shared/data/services/serviceCatalog";
import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";

const HERO_SERVICES = HERO_DATA.visual.serviceCards
    .map(({ serviceKey, displayValue }) => {
        const service = SERVICE_CATALOG[serviceKey];

        if (!service) {
            return null;
        }

        return {
            ...service,
            displayValue,
        };
    })
    .filter(Boolean);

/**
 * Homepage Hero section.
 *
 * The Hero component is responsible only for:
 *
 * - Section structure
 * - Background decoration
 * - Layout composition
 *
 * Business content is provided through HERO_DATA.
 *
 * @returns {JSX.Element}
 */
export default function Hero() {
    return (
        <section
            id="hero"
            aria-labelledby="hero-title"
            className="
                relative
                isolate
                overflow-hidden
                min-h-[calc(100vh-80px)]
            "
        >

            {/* =================================================
                BACKGROUND DECORATION
            ================================================= */}

            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    -right-40
                    -top-40
                    h-[500px]
                    w-[500px]
                    rounded-full
                    bg-purple-600/20
                    blur-[120px]
                "
            />

            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    -bottom-40
                    -left-40
                    h-[400px]
                    w-[400px]
                    rounded-full
                    bg-cyan-500/10
                    blur-[120px]
                "
            />

            {/* =================================================
                MAIN CONTAINER
            ================================================= */}

            <div
                className="
                    relative
                    mx-auto
                    w-full
                    max-w-7xl
                    px-4
                    sm:px-6
                    lg:px-8
                    xl:px-10
                "
            >

                <div
                    className="
                        grid
                        min-h-[calc(100vh-80px)]
                        items-center
                        gap-16
                        py-20
                        lg:grid-cols-[1.05fr_.95fr]
                        lg:py-28
                    "
                >

                    {/* Hero Content */}
                    <HeroContent
                        data={HERO_DATA}
                    />

                    {/* Hero Visual */}
                    <HeroVisual
                        data={{
                            ...HERO_DATA.visual,
                            cards: HERO_SERVICES,
                        }}
                    />

                </div>

            </div>

        </section>
    );
}