const ComparisonRow = ({ feature, olive, alt1, alt2 }) => {
  const mark = (value) => (value ? "✓" : "✕");
  return (
    <div className="grid grid-cols-4 items-center border-b border-white/20 py-4 text-sm md:text-base">
      <div>{feature}</div>
      <div className="text-center">{mark(olive)}</div>
      <div className="text-center">{mark(alt1)}</div>
      <div className="text-center">{mark(alt2)}</div>
    </div>
  );
};

export default ComparisonRow;
