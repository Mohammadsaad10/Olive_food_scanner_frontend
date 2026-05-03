import CircleCheckIcon from '../components/common/CircleCheckIcon';
import CircleXIcon from '../components/common/CircleXIcon';
import RollingScore from '../components/RollingScore';

export default function BenefitsSection() {
  return (
    <div className="relative bg-[#F5FAF6]">
      {/* Hero Header */}
      <div className="pb-24 md:py-48 bg-[#386641] px-4">
        <div className="flex flex-col md:flex-row p-8 md:p-0 justify-between max-w-5xl mx-auto items-start gap-10">
          <div className="flex relative text-primary items-center justify-center">
            <h2 className="font-nueu max-w-xl font-[500] text-2xl md:text-[3.2rem] text-white">
              Health Benefits of Using Olive
            </h2>
          </div>
          <div className="flex gap-6 flex-col">
            <div className="max-w-sm md:text-xl text-sm text-[#F5FAF6] font-nueu">
              Olive proactively flags harmful ingredients and offers personalized recommendations, empowering you to make better choices for your family's health.
            </div>
            <div className="flex items-center gap-4">
              <a
                target="_blank"
                data-slot="button"
                className="has-[&>svg]:px-4 inline-flex items-center cursor-pointer font-sans justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 aria-invalid:border-destructive border shadow-xs px-4 py-2.5 text-sm"
                style={{
                  backgroundColor: 'oklab(1 0 0)',
                  color: '#386641'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = 'oklch(12.9% .042 264.695)';
                  const svg = e.target.querySelector('svg');
                  if (svg) svg.style.color = 'oklch(12.9% .042 264.695)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#386641';
                  const svg = e.target.querySelector('svg');
                  if (svg) svg.style.color = '#386641';
                }}
                href="https://apps.apple.com/us/app/olive-holistic-food-scanner/id6739765789"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="tabler-icon tabler-icon-brand-apple-filled">
                  <path d="M15.079 5.999l.239 .012c1.43 .097 3.434 1.013 4.508 2.586a1 1 0 0 1 -.344 1.44c-.05 .028 -.372 .158 -.497 .217a4.15 4.15 0 0 0 -.722 .431c-.614 .461 -.948 1.009 -.942 1.694c.01 .885 .339 1.454 .907 1.846c.208 .143 .436 .253 .666 .33c.126 .043 .426 .116 .444 .122a1 1 0 0 1 .662 .942c0 2.621 -3.04 6.381 -5.286 6.381c-.79 0 -1.272 -.091 -1.983 -.315l-.098 -.031c-.463 -.146 -.702 -.192 -1.133 -.192c-.52 0 -.863 .06 -1.518 .237l-.197 .053c-.575 .153 -.964 .226 -1.5 .248c-2.749 0 -5.285 -5.093 -5.285 -9.072c0 -3.87 1.786 -6.92 5.286 -6.92c.297 0 .598 .045 .909 .128c.403 .107 .774 .26 1.296 .508c.787 .374 .948 .44 1.009 .44h.016c.03 -.003 .128 -.047 1.056 -.457c1.061 -.467 1.864 -.685 2.746 -.616l-.24 -.012z"></path>
                  <path d="M14 1a1 1 0 0 1 1 1a3 3 0 0 1 -3 3a1 1 0 0 1 -1 -1a3 3 0 0 1 3 -3z"></path>
                </svg>
                Download for iOS
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Three White Card Panels */}
      <div className="-mt-24 flex flex-col px-4 md:px-8 pb-24 gap-8">
        
        {/* Card 1 — Achieve Nutritional Clarity */}
        <div className="p-4 bg-white max-w-5xl mx-auto rounded-2xl grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col gap-4 justify-between p-4">
            <div className="flex relative text-primary items-center justify-start">
              <h3 className="font-nueu text-primary max-w-xl font-[500] text-xl md:text-3xl">
                Achieve Nutritional Clarity
              </h3>
            </div>
            <ul className="flex flex-col gap-3 max-w-sm self-start">
              <li className="flex items-start gap-4 text-primary">
                <div className="w-6 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="tabler-icon tabler-icon-circle-check-filled w-6 h-6">
                    <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"></path>
                  </svg>
                </div>
                <div className="md:text-lg text-sm font-nueu text-primary-dark">
                  Olive breaks down every ingredient into clear, actionable information.
                </div>
              </li>
              <li className="flex items-start gap-4 text-primary">
                <div className="w-6 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="tabler-icon tabler-icon-circle-check-filled w-6 h-6">
                    <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"></path>
                  </svg>
                </div>
                <div className="md:text-lg text-sm font-nueu text-primary-dark">
                  Olive scores products out of 100 based on additives, seed oils, processing level, and detected toxins.
                </div>
              </li>
              <li className="flex items-start gap-4 text-primary">
                <div className="w-6 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="tabler-icon tabler-icon-circle-check-filled w-6 h-6">
                    <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"></path>
                  </svg>
                </div>
                <div className="md:text-lg text-sm font-nueu text-primary-dark">
                  Our ranking system is designed by registered holistic health experts, ensuring you and your family make informed decisions and improve health outcomes.
                </div>
              </li>
            </ul>
          </div>
          <div>
            <div className="bg-gradient-to-b from-[#EFF6F0] to-[#9DC8A3] rounded-2xl w-full w-[300px] h-[450px] md:w-[500px] md:h-[500px]">
              <div className="flex items-center justify-center pt-4">
                <img
                  alt="Product 1"
                  src="/assets/images/benefits/product-2.webp"
                  className="md:w-40 md:h-50 h-32 w-30 rounded-3xl border-2 border-white object-cover translate-x-20 -rotate-12 scale-90"
                  draggable={false}
                  loading="lazy"
                  width="500"
                  height="500"
                  decoding="async"
                />
                <img
                  alt="Product 1"
                  src="/assets/images/benefits/straus-ice-cream.webp"
                  className="md:w-40 md:h-50 h-32 w-30 rounded-3xl border-2 border-white object-cover relative z-20"
                  draggable={false}
                  loading="lazy"
                  width="500"
                  height="500"
                  decoding="async"
                />
                <img
                  alt="Product 1"
                  src="/assets/images/benefits/product-3.webp"
                  className="md:w-40 md:h-50 h-32 w-30 rounded-3xl border-2 border-white object-cover -translate-x-20 rotate-12 scale-90"
                  draggable={false}
                  loading="lazy"
                  width="500"
                  height="500"
                  decoding="async"
                />
              </div>
              <div className="px-4 py-3 bg-white/50 relative flex flex-row gap-4 mx-auto max-w-[90%] md:max-w-[calc(100%-200px)] mt-10 rounded-2xl">
                <img
                  alt="Straus Ice Cream Description"
                  src="/assets/images/benefits/straus-ice-cream.webp"
                  className="size-16 rounded-xl"
                  draggable={false}
                  loading="lazy"
                  width="120"
                  height="120"
                  decoding="async"
                />
                <div className="flex flex-col gap-2">
                  <span className="font-semibold text-xl">Straus Ice Cream</span>
                  <RollingScore score={96} label="Excellent" />
                </div>
              </div>
              <div className="flex flex-row w-full h-full justify-around p-4 pb-0 gap-4">
                <div className="flex flex-col gap-2 rounded-2xl w-full flex-1 bg-white/50">
                  <div className="font-semibold text-md md:text-xl w-full justify-center pt-4 flex items-center gap-2 text-[#1F3824CC]">
                    <CircleCheckIcon className="w-6 h-6 text-[#386641]" fill="currentColor" />
                    Positives
                  </div>
                  <div className="grid grid-cols-12 grid-flow-row-dense w-full gap-1 p-2">
                    <div className="col-span-5 h-[1.688rem] rounded-md bg-white/60 flex items-center px-2 text-xs font-medium"></div>
                    <div className="col-span-5 h-[1.688rem] rounded-md bg-white/60 flex items-center px-2 text-xs font-medium"></div>
                    <div className="col-span-2 h-[1.688rem] rounded-md bg-white/60 flex items-center px-2 text-xs font-medium"></div>
                    <div className="col-span-8 h-[1.688rem] rounded-md bg-white/60 flex items-center px-2 text-xs font-medium"></div>
                    <div className="col-span-4 h-[1.688rem] rounded-md bg-white/60 flex items-center px-2 text-xs font-medium"></div>
                    <div className="col-span-6 h-[1.688rem] rounded-md bg-white/60 flex items-center px-2 text-xs font-medium"></div>
                    <div className="col-span-6 h-[1.688rem] rounded-md bg-white/60 flex items-center px-2 text-xs font-medium"></div>
                    <div className="col-span-5 h-[1.688rem] rounded-md bg-white/60 flex items-center px-2 text-xs font-medium"></div>
                    <div className="col-span-7 h-[1.688rem] rounded-md bg-white/60 flex items-center px-2 text-xs font-medium"></div>
                  </div>
                </div>
                <div className="flex flex-col gap-1 md:gap-2 rounded-2xl w-full flex-1 bg-white/50">
                  <div className="font-semibold text-md md:text-xl w-full justify-center pt-4 flex items-center gap-2 text-[#7A4343CC]">
                    <CircleXIcon className="w-6 h-6 text-[#7A4343]" />
                    Negatives
                  </div>
                  <div className="grid grid-cols-12 grid-flow-row-dense w-full gap-1 p-2">
                    <div className="col-span-5 h-[1.688rem] rounded-md bg-white/60 flex items-center px-2 text-xs font-medium"></div>
                    <div className="col-span-5 h-[1.688rem] rounded-md bg-white/60 flex items-center px-2 text-xs font-medium"></div>
                    <div className="col-span-2 h-[1.688rem] rounded-md bg-white/60 flex items-center px-2 text-xs font-medium"></div>
                    <div className="col-span-8 h-[1.688rem] rounded-md bg-white/60 flex items-center px-2 text-xs font-medium"></div>
                    <div className="col-span-4 h-[1.688rem] rounded-md bg-white/60 flex items-center px-2 text-xs font-medium"></div>
                    <div className="col-span-6 h-[1.688rem] rounded-md bg-white/60 flex items-center px-2 text-xs font-medium"></div>
                    <div className="col-span-6 h-[1.688rem] rounded-md bg-white/60 flex items-center px-2 text-xs font-medium"></div>
                    <div className="col-span-5 h-[1.688rem] rounded-md bg-white/60 flex items-center px-2 text-xs font-medium"></div>
                    <div className="col-span-7 h-[1.688rem] rounded-md bg-white/60 flex items-center px-2 text-xs font-medium"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 — Proactive Ingredient Filtering */}
        <div className="p-4 bg-white max-w-5xl mx-auto rounded-2xl grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col gap-4 justify-between p-4">
            <div className="flex relative text-primary items-center justify-start">
              <h3 className="font-nueu text-primary max-w-xl font-[500] text-xl md:text-3xl">
                Proactive Ingredient Filtering
              </h3>
            </div>
            <ul className="flex flex-col gap-3 max-w-sm self-start">
              <li className="flex items-start gap-4 text-primary">
                <div className="w-6 flex-shrink-0">
                  <CircleCheckIcon className="w-6 h-6 text-[#386641]" fill="currentColor" />
                </div>
                <div className="md:text-lg text-sm font-nueu text-primary-dark">
                  Olive flags harmful additives and controversial ingredients before they become mainstream concerns.
                </div>
              </li>
              <li className="flex items-start gap-4 text-primary">
                <div className="w-6 flex-shrink-0">
                  <CircleCheckIcon className="w-6 h-6 text-[#386641]" fill="currentColor" />
                </div>
                <div className="md:text-lg text-sm font-nueu text-primary-dark">
                  Keeps you ahead of potential food safety concerns.
                </div>
              </li>
              <li className="flex items-start gap-4 text-primary">
                <div className="w-6 flex-shrink-0">
                  <CircleCheckIcon className="w-6 h-6 text-[#386641]" fill="currentColor" />
                </div>
                <div className="md:text-lg text-sm font-nueu text-primary-dark">
                  Gives busy parents the confidence to make safer food choices every time.
                </div>
              </li>
            </ul>
          </div>
          <div>
            <div className="bg-gradient-to-b overflow-hidden from-[#FFF0F0] to-[#FFC2D0] rounded-2xl w-full w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
              <div className="w-[150%] h-full mt-[2rem] md:mt-[5rem] ml-[-25%] -rotate-[15deg]">
                <div className="flex flex-col gap-8 w-full overflow-hidden py-4">
                  {/* Row 1 - Positive tags scrolling left */}
                  <div className="relative w-full h-[40px] flex items-center overflow-hidden">
                    <div className="flex items-center gap-4 animate-marquee-left" style={{ width: 'max-content', transform: 'translateX(-11.754%)' }}>
                      {['Cholesterol-Free', 'High Fibre', 'No MSG', 'Organic Ingredients', 'Low PFAS', 'Plant-Based', 'Gluten-Free', '100% Whole Grain', 'Non-GMO', 'Rich in Antioxidants', 'Cholesterol-Free', 'High Fibre', 'No MSG', 'Organic Ingredients'].map((tag, i) => (
                        <div key={i} className="shrink-0 mr-4">
                          <div className="flex items-center bg-black/10 p-3 rounded-full gap-2 whitespace-nowrap">
                            <CircleCheckIcon className="w-6 h-6 text-[#386641]" fill="currentColor" />
                            {tag}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Row 2 - Positive tags scrolling right */}
                  <div className="relative w-full h-[40px] flex items-center overflow-hidden">
                    <div className="flex items-center gap-4 animate-marquee-right" style={{ width: 'max-content', transform: 'translateX(-38.246%)' }}>
                      {['100% Whole Grain', 'Cholesterol-Free', 'Gluten-Free', 'Non-GMO', 'Rich in Antioxidants', '100% Whole Grain', 'Cholesterol-Free', 'Gluten-Free', 'Non-GMO', 'Rich in Antioxidants', '100% Whole Grain', 'Cholesterol-Free', 'Gluten-Free', 'Non-GMO'].map((tag, i) => (
                        <div key={i} className="shrink-0 mr-4">
                          <div className="flex items-center bg-black/10 p-3 rounded-full gap-2 whitespace-nowrap">
                            <CircleCheckIcon className="w-6 h-6 text-[#386641]" fill="currentColor" />
                            {tag}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Row 3 - Negative tags scrolling left */}
                  <div className="relative w-full h-[40px] flex items-center overflow-hidden">
                    <div className="flex items-center gap-4 animate-marquee-left" style={{ width: 'max-content', transform: 'translateX(-11.754%)' }}>
                      {['Artificial Colors', 'Sodium Nitrite', 'TBHQ', 'Monosodium Glutamate', 'Potassium Sorbate', 'BHA', 'Carrageenan', 'Potassium Bromate', 'Aspartame', 'Saccharin', 'Palm Oil', 'Sodium Benzoate', 'Xanthan Gum', 'Artificial Colors'].map((tag, i) => (
                        <div key={i} className="shrink-0 mr-4">
                          <div className="flex items-center bg-black/10 p-3 rounded-full gap-2 whitespace-nowrap">
                            <CircleXIcon className="w-6 h-6 text-[#7A4343]" />
                            {tag}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Row 4 - Negative tags scrolling right */}
                  <div className="relative w-full h-[40px] flex items-center overflow-hidden">
                    <div className="flex items-center gap-4 animate-marquee-right" style={{ width: 'max-content', transform: 'translateX(-38.246%)' }}>
                      {['Potassium Bromate', 'Aspartame', 'Saccharin', 'Palm Oil', 'Sodium Benzoate', 'Xanthan Gum', 'Potassium Bromate', 'Aspartame', 'Saccharin', 'Palm Oil', 'Sodium Benzoate', 'Xanthan Gum', 'Potassium Bromate', 'Aspartame'].map((tag, i) => (
                        <div key={i} className="shrink-0 mr-4">
                          <div className="flex items-center bg-black/10 p-3 rounded-full gap-2 whitespace-nowrap">
                            <CircleXIcon className="w-6 h-6 text-[#7A4343]" />
                            {tag}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 — Real Health Outcomes for Your Family */}
        <div className="p-4 bg-white max-w-5xl mx-auto rounded-2xl grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col gap-4 justify-between p-4">
            <div className="flex relative text-primary items-center justify-start">
              <h3 className="font-nueu text-primary max-w-xl font-[500] text-xl md:text-3xl">
                Real Health Outcomes for Your Family
              </h3>
            </div>
            <ul className="flex flex-col gap-3 max-w-sm self-start">
              <li className="flex items-start gap-4 text-primary">
                <div className="w-6 flex-shrink-0">
                  <CircleCheckIcon className="w-6 h-6 text-[#386641]" fill="currentColor" />
                </div>
                <div className="md:text-lg text-sm font-nueu text-primary-dark">
                  Empowers parents to feel more in control of their family's health.
                </div>
              </li>
              <li className="flex items-start gap-4 text-primary">
                <div className="w-6 flex-shrink-0">
                  <CircleCheckIcon className="w-6 h-6 text-[#386641]" fill="currentColor" />
                </div>
                <div className="md:text-lg text-sm font-nueu text-primary-dark">
                  Delivers personalized suggestions for healthier food choices.
                </div>
              </li>
              <li className="flex items-start gap-4 text-primary">
                <div className="w-6 flex-shrink-0">
                  <CircleCheckIcon className="w-6 h-6 text-[#386641]" fill="currentColor" />
                </div>
                <div className="md:text-lg text-sm font-nueu text-primary-dark">
                  Promotes long-term well-being through informed, balanced decisions.
                </div>
              </li>
            </ul>
          </div>
          <div>
            <div className="bg-gray-100 rounded-2xl w-full w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
              <div className="w-full h-full object-cover mix-blend-darken rounded-2xl bg-[url('/assets/images/benefits/family.webp')] bg-cover bg-center"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee-left {
          0% { transform: translateX(-11.754%); }
          100% { transform: translateX(-100%); }
        }
        
        @keyframes marquee-right {
          0% { transform: translateX(-38.246%); }
          100% { transform: translateX(0%); }
        }
        
        .animate-marquee-left {
          animation: marquee-left 30s linear infinite;
        }
        
        .animate-marquee-right {
          animation: marquee-right 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
