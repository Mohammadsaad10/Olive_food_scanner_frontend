const DotPagination = ({ count = 3, active = 0 }) => {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: count }).map((_, index) => (
        <span
          key={index}
          className={`h-2 rounded-full transition-all ${index === active ? "w-4 bg-white" : "w-2 bg-white/50"}`}
        />
      ))}
    </div>
  );
};

export default DotPagination;
