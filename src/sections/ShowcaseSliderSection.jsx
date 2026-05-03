import Container from "../layout/Container";
import DotPagination from "../components/common/DotPagination";
import PrimaryButton from "../components/common/PrimaryButton";

const ShowcaseSliderSection = () => {
  return (
    <section className="py-12 md:py-24">
      <Container className="overflow-hidden rounded-3xl bg-[#386641] p-8 text-center text-white md:p-14">
        <h2 className="text-3xl font-semibold md:text-6xl">Protect Your Family From Hidden Toxins</h2>
        <div className="mx-auto mt-8 h-64 max-w-4xl rounded-2xl bg-white/20" />
        <div className="mt-4 flex justify-center">
          <DotPagination count={4} active={1} />
        </div>
        <PrimaryButton className="mt-8 bg-white text-[#386641]">
          Sign up for Olive today
        </PrimaryButton>
      </Container>
    </section>
  );
};

export default ShowcaseSliderSection;
