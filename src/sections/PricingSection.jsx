import Container from "../layout/Container";
import SectionHeading from "../components/common/SectionHeading";
import PricingCard from "../components/cards/PricingCard";
import { pricingPlans } from "../data/pricingData";

const PricingSection = () => {
  return (
    <section id="pricing" className="py-12 md:py-24">
      <Container>
        <SectionHeading title="Healthy Choices, Honest Pricing" />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} {...plan} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PricingSection;
