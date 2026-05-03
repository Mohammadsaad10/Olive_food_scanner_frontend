const MarqueePills = ({ items = [] }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span key={item} className="rounded-full bg-black/10 px-3 py-1 text-xs">
          {item}
        </span>
      ))}
    </div>
  );
};

export default MarqueePills;
