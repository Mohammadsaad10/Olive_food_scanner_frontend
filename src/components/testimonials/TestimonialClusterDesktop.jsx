import TestimonialCard from "./TestimonialCard";

const TestimonialClusterDesktop = ({ items = [] }) => {
  return (
    <div className="hidden gap-4 md:grid md:grid-cols-3">
      {items.map((item) => (
        <TestimonialCard key={item.name} name={item.name} quote={item.quote} />
      ))}
    </div>
  );
};

export default TestimonialClusterDesktop;
