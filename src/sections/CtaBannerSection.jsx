import Container from "../layout/Container";
import PrimaryButton from "../components/common/PrimaryButton";

const CtaBannerSection = () => {
  return (
    <section className="py-12 md:py-24">
      <Container className="rounded-3xl bg-[#386641] p-8 text-white md:p-16">
        <h2 className="max-w-3xl text-3xl font-semibold md:text-6xl">Keep your family safe with Olive</h2>
        <ul className="mt-8 space-y-3 text-lg md:text-2xl">
          <li>• Effortless food scanning</li>
          <li>• Peace of mind for parents</li>
          <li>• Healthy product recommendations</li>
        </ul>
        <PrimaryButton className="mt-8 bg-white text-[#386641]">Download for iOS</PrimaryButton>
      </Container>
    </section>
  );
};

export default CtaBannerSection;
