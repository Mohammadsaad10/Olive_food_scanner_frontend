import Container from "../layout/Container";
import SectionHeading from "../components/common/SectionHeading";
import ComparisonRow from "../components/cards/ComparisonRow";
import { comparisonRows } from "../data/comparisonData";

const ComparisonSection = () => {
  return (
    <section id="features" className="py-12 md:py-24">
      <Container className="rounded-3xl bg-[#386641] p-6 text-white md:p-12">
        <SectionHeading title="Olive Food Scanner App vs. The Rest" />
        <div className="mt-10 grid grid-cols-4 border-b border-white/20 pb-4 text-sm font-semibold md:text-base">
          <div>Feature</div>
          <div className="text-center">Olive</div>
          <div className="text-center">App A</div>
          <div className="text-center">App B</div>
        </div>
        {comparisonRows.map((row) => (
          <ComparisonRow key={row.feature} {...row} />
        ))}
      </Container>
    </section>
  );
};

export default ComparisonSection;
