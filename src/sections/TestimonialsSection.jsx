import Container from "../layout/Container";
import SectionHeading from "../components/common/SectionHeading";
import TestimonialClusterDesktop from "../components/testimonials/TestimonialClusterDesktop";
import TestimonialListMobile from "../components/testimonials/TestimonialListMobile";
import { testimonials } from "../data/testimonialsData";

const TestimonialsSection = () => {
  return (
    <section className="py-12 md:py-24">
      <Container>
        <SectionHeading
          title="Real Mothers, Real Results"
          subtitle="Join thousands of families using Olive."
        />
        <div className="mt-10">
          <TestimonialListMobile items={testimonials} />
          <TestimonialClusterDesktop items={testimonials} />
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsSection;
