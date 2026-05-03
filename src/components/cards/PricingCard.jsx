import PrimaryButton from "../common/PrimaryButton";
import { cn } from "../../lib/cn";

const PricingCard = ({ 
  plan, 
  price, 
  note, 
  features = [], 
  highlighted = false, 
  className = "" 
}) => {
  return (
    <article
      className={cn(
        "rounded-3xl p-8",
        highlighted 
          ? "bg-primary text-white" 
          : "bg-primary-bg text-text-primary",
        className
      )}
    >
      <p className="capitalize font-medium">{plan}</p>
      <h3 className="mt-1 text-4xl font-semibold">{price}</h3>
      {note && <p className="mt-1 text-sm opacity-80">{note}</p>}
      <ul className="mt-6 space-y-2 text-sm">
        {features.map((feature) => (
          <li key={feature}>• {feature}</li>
        ))}
      </ul>
      <PrimaryButton className="mt-8 w-full bg-primary-dark">Subscribe</PrimaryButton>
    </article>
  );
};

export default PricingCard;
