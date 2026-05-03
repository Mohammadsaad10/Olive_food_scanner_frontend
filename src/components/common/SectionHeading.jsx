const SectionHeading = ({ title, subtitle, align = "center" }) => {
  const alignment = align === "left" ? "text-left" : "text-center";

  return (
    <div className={`space-y-3 ${alignment}`}>
      <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">{title}</h2>
      {subtitle ? <p className="text-sm text-[#1f3824]/70 md:text-base">{subtitle}</p> : null}
    </div>
  );
};

export default SectionHeading;
