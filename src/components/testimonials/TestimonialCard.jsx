const TestimonialCard = ({ name, quote }) => {
  return (
    <article className="rounded-2xl bg-white p-5 shadow-sm">
      <p className="text-sm text-[#1f3824]/80">"{quote}"</p>
      <p className="mt-4 text-sm font-semibold">{name}</p>
    </article>
  );
};

export default TestimonialCard;
