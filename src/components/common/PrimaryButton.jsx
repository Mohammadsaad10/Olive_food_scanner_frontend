const PrimaryButton = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
