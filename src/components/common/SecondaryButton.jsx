const SecondaryButton = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-full border border-primary bg-white px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary-bg ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
