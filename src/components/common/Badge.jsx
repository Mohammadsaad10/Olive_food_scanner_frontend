const Badge = ({ children, className = "" }) => {
  return (
    <span className={`inline-flex items-center rounded-full bg-[#aeb93e]/20 px-3 py-1 text-xs font-semibold text-[#1f3824] ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
