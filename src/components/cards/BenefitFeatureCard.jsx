import IconTextRow from "../common/IconTextRow";

const BenefitFeatureCard = ({ title, bullets = [] }) => {
  return (
    <article className="grid gap-6 rounded-2xl bg-white p-4 md:grid-cols-2 md:p-6">
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <div className="space-y-2">
          {bullets.map((bullet) => (
            <IconTextRow key={bullet} text={bullet} icon="✓" />
          ))}
        </div>
      </div>
      <div className="h-64 rounded-2xl bg-gradient-to-b from-[#eff6f0] to-[#9dc8a3]" />
    </article>
  );
};

export default BenefitFeatureCard;
