function AppleIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
      className="size-4 shrink-0"
      aria-hidden
    >
      <path d="M15.079 5.999l.239 .012c1.43 .097 3.434 1.013 4.508 2.586a1 1 0 0 1 -.344 1.44c-.05 .028 -.372 .158 -.497 .217a4.15 4.15 0 0 0 -.722 .431c-.614 .461 -.948 1.009 -.942 1.694c.01 .885 .339 1.454 .907 1.846c.208 .143 .436 .253 .666 .33c.126 .043 .426 .116 .444 .122a1 1 0 0 1 .662 .942c0 2.621 -3.04 6.381 -5.286 6.381c-.79 0 -1.272 -.091 -1.983 -.315l-.098 -.031c-.463 -.146 -.702 -.192 -1.133 -.192c-.52 0 -.863 .06 -1.518 .237l-.197 .053c-.575 .153 -.964 .226 -1.5 .248c-2.749 0 -5.285 -5.093 -5.285 -9.072c0 -3.87 1.786 -6.92 5.286 -6.92c.297 0 .598 .045 .909 .128c.403 .107 .774 .26 1.296 .508c.787 .374 .948 .44 1.009 .44h.016c.03 -.003 .128 -.047 1.056 -.457c1.061 -.467 1.864 -.685 2.746 -.616l-.24 -.012z" />
      <path d="M14 1a1 1 0 0 1 1 1a3 3 0 0 1 -3 3a1 1 0 0 1 -1 -1a3 3 0 0 1 3 -3z" />
    </svg>
  );
}

const HeroHeadlineBlock = () => {
  return (
    <div className="mx-auto w-full max-w-3xl text-center">
      <h1 className="relative z-50 mx-auto max-w-2xl py-2 pb-4 text-center font-nueu font-[600] tracking-tight text-balance text-primary-dark text-4xl md:pt-12 md:text-7xl md:leading-[72px] md:tracking-[-1.8px]">
        <span className="inline-block align-top decoration-inherit">
          The Safest Way to Shop for Groceries
        </span>
      </h1>
      <p className="relative z-50 mx-auto mt-4 max-w-md px-4 text-center font-nueu text-sm leading-6 text-[#1F1F1F99] md:text-lg md:leading-[28px]">
        Use the Olive Food Scanner App to Instantly Eliminate Harmful Ingredients from Your
        Family's Diet and Get Expert-Backed Food Insights
      </p>
      <div className="mx-auto flex flex-col justify-center gap-2 p-8 md:flex-row">
        <a
          href="https://apps.apple.com/us/app/olive-holistic-food-scanner/id6739765789"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium whitespace-nowrap text-white shadow-md transition-all font-sans outline-none bg-[#253612] hover:bg-[#2D5234] focus-visible:ring-[3px] focus-visible:ring-[#253612]/35"
        >
          <AppleIcon />
          Download for iOS
        </a>
      </div>
    </div>
  );
};
  
export default HeroHeadlineBlock;
