import Container from "../layout/Container";
import SectionHeading from "../components/common/SectionHeading";
import Accordion from "../components/common/Accordion";
import { faqItems } from "../data/faqData";

const FaqSection = () => {
  return (
    <section className="py-12 md:py-24">
      <Container className="rounded-3xl bg-[#fff9eb] p-6 md:p-12">
        <SectionHeading title="Frequently Asked Questions by Parents" />
        <div className="mt-8">
          <Accordion items={faqItems} />
        </div>
      </Container>
    </section>
  );
};

export default FaqSection;
