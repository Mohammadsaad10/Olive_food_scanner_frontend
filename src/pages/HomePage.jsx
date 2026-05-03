import SiteShell from "../layout/SiteShell";
import NavbarSection from "../sections/NavbarSection";
import HeroSection from "../sections/HeroSection";
import HowItWorksSection from "../sections/HowItWorksSection";
import BenefitsSection from "../sections/BenefitsSection";
import TestimonialsSection from "../sections/TestimonialsSection";
import ComparisonSection from "../sections/ComparisonSection";
import PricingSection from "../sections/PricingSection";
import ShowcaseSliderSection from "../sections/ShowcaseSliderSection";
import IndependenceStatementSection from "../sections/IndependenceStatementSection";
import FaqSection from "../sections/FaqSection";
import CtaBannerSection from "../sections/CtaBannerSection";
import FooterSection from "../sections/FooterSection";

const HomePage = () => {
  return (
    <SiteShell>
      <div className="mt-3 md:mt-8 mb-12 md:mb-24 2xl:max-w-7xl px-4  md:px-8 mx-auto">
        <div className="relative z-10 w-full overflow-hidden rounded-2xl border border-neutral-200 bg-[linear-gradient(180deg,_#F5FAF6_0%,_#F5FAF6_100%)]">
          <NavbarSection />
          <HeroSection />
        </div>
      </div>
      <HowItWorksSection />
      <BenefitsSection />
      <TestimonialsSection />
      <ComparisonSection />
      <PricingSection />
      <ShowcaseSliderSection />
      <IndependenceStatementSection />
      <FaqSection />
      <CtaBannerSection />
      <FooterSection />
    </SiteShell>
  );
};

export default HomePage;
