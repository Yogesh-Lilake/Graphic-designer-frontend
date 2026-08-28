import Hero from "@/features/home/sections/Hero/";
import TrustedCompanies from "@/features/home/sections/TrustedCompanies/";
import Services from "@/features/home/sections/Services/";
import Process from "@/features/home/sections/Process/";
import Portfolio from "@/features/home/sections/Portfolio/";
import Statistics from "@/features/home/sections/Statistics/";
import CaseStudies from "@/features/home/sections/CaseStudies/";
import Testimonials from "@/features/home/sections/Testimonials/";
import PricingPreview from "@/features/home/sections/PricingPreview/";
import FAQ from "@/features/home/sections/FAQ/";
import CTA from "@/features/home/sections/CTA/";

import { HOME_SECTION_CONFIG } from "@/features/home/config/homeSections";

/**
 * Homepage.
 *
 * The Home page is responsible only for composing
 * homepage sections.
 *
 * Section visibility is controlled through
 * HOME_SECTION_CONFIG rather than hard-coded
 * conditional business logic.
 *
 * This makes the page ready for future:
 *
 * Admin Panel → API → Database
 *
 * integration without changing the section architecture.
 *
 * @returns {JSX.Element}
 */
export default function Home() {
    return (
        <>
            {/* =================================================
                HERO
            ================================================= */}

            {HOME_SECTION_CONFIG.hero.enabled && (
                <Hero />
            )}

            {/* =================================================
                TRUSTED COMPANIES
            ================================================= */}

            {HOME_SECTION_CONFIG.trustedCompanies.enabled && (
                <TrustedCompanies />
            )}

            {/* =================================================
                SERVICES
            ================================================= */}

            {HOME_SECTION_CONFIG.services.enabled && (
                <Services />
            )}

            {/* =================================================
                PROCESS
            ================================================= */}

            {HOME_SECTION_CONFIG.process.enabled && (
                <Process />
            )}

            {/* =================================================
                PORTFOLIO
            ================================================= */}

            {HOME_SECTION_CONFIG.portfolio.enabled && (
                <Portfolio />
            )}

            {/* =================================================
                STATISTICS
            ================================================= */}

            {HOME_SECTION_CONFIG.statistics.enabled && (
                <Statistics />
            )}

            {/* =================================================
                CASE STUDIES
            ================================================= */}

            {HOME_SECTION_CONFIG.caseStudies.enabled && (
                <CaseStudies />
            )}

            {/* =================================================
                TESTIMONIALS
            ================================================= */}

            {HOME_SECTION_CONFIG.testimonials.enabled && (
                <Testimonials />
            )}

            {/* =================================================
                PRICING PREVIEW
            ================================================= */}

            {HOME_SECTION_CONFIG.pricingPreview.enabled && (
                <PricingPreview />
            )}

            {/* =================================================
                FAQ
            ================================================= */}

            {HOME_SECTION_CONFIG.faq.enabled && (
                <FAQ />
            )}

            {/* =================================================
                CTA
            ================================================= */}

            {HOME_SECTION_CONFIG.cta.enabled && (
                <CTA />
            )}
        </>
    );
}