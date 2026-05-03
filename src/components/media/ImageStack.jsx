const ImageStack = () => {
  return (
    <div className="relative h-64">
      <div className="absolute left-8 top-6 h-32 w-24 rotate-[-12deg] rounded-2xl bg-white shadow" />
      <div className="absolute left-1/2 top-4 h-36 w-24 -translate-x-1/2 rounded-2xl bg-white shadow-lg" />
      <div className="absolute right-8 top-6 h-32 w-24 rotate-[12deg] rounded-2xl bg-white shadow" />
    </div>
  );
};

export default ImageStack;
