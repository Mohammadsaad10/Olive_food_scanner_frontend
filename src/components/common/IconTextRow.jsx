const IconTextRow = ({ icon = "•", text }) => {
  return (
    <div className="flex items-start gap-3 text-sm md:text-base">
      <span className="mt-0.5">{icon}</span>
      <span>{text}</span>
    </div>
  );
};

export default IconTextRow;
