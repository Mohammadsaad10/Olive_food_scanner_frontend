import TestimonialCard from "./TestimonialCard";

const TestimonialListMobile = ({ items = [] }) => {
  return (
    <div className="space-y-4 md:hidden">
      {items.map((item) => (
        <TestimonialCard key={item.name} name={item.name} quote={item.quote} />
      ))}
    </div>
  );
};

export default TestimonialListMobile;
