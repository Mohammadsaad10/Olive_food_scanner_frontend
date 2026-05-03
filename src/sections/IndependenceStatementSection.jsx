import Container from "../layout/Container";

const IndependenceStatementSection = () => {
  return (
    <section className="py-12 md:py-24">
      <Container>
        <p className="text-4xl font-bold text-[#ff9db4] md:text-8xl">100% Independent.</p>
        <p className="mt-2 text-4xl font-bold text-[#ff9db4] md:text-8xl">Always.</p>
        <p className="mt-6 max-w-3xl text-lg font-semibold text-[#386641] md:text-2xl">
          We never monetize through ads or brand deals, so recommendations stay user-first.
        </p>
      </Container>
    </section>
  );
};

export default IndependenceStatementSection;
