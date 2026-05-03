import titleAvocadoUrl from "/assets/images/hero/title.webp";
import ScanDetectIllustration from "../components/how-it-works/ScanDetectIllustration";
import DataAnalysisStrip from "../components/how-it-works/DataAnalysisStrip";
import InsightsRecommendationsVisual from "../components/how-it-works/InsightsRecommendationsVisual";
import Container from "../layout/Container";

const CARD_SHELL =
  "group mx-auto w-full max-w-xl rounded-[14px] border-[0.8px] border-[rgba(255,255,255,0.10)] border-solid bg-[#F5FAF6] p-8 text-[oklch(0.129_0.042_264.695)] leading-6 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset]";

const STEPS = [
  {
    title: "Scan & Detect",
    body:
      "When you open Olive simply scan the barcode to instantly detect product ingredients. Olive\u2019s intuitive design means busy parents can quickly see which items contain harmful substances, delivering peace of mind with every scan.",
    visual: <ScanDetectIllustration />,
  },
  {
    title: "Data Analysis & Validation",
    body:
      "After scanning, our food scanner app compares product data with an extensive, up-to-date food database. Using expert nutritional guidelines, Olive filters out potentially dangerous ingredients so you never have to second guess.",
    visual: <DataAnalysisStrip />,
  },
  {
    title: "Actionable Insights & Recommendations",
    body:
      "Once analyzed, Olive provides tailored insights and healthier product suggestions. Olive proactively flags harmful ingredients and offers personalized recommendations, empowering you to make better choices for your family's health & nutrition.",
    visual: <InsightsRecommendationsVisual />,
  },
];

const HowItWorksSection = () => {
  return (
    <section className="my-8 md:my-24">
      <Container>
        <div className="mx-auto flex max-w-6xl flex-col items-center py-4 md:py-16">
          <div className="flex relative text-primary items-center justify-center">
            <h2 className="max-w-xl text-center font-nueu text-2xl font-[500] text-primary md:text-[3.2rem]">
              How the Olive Food Scanner App Works
            </h2>
            <img
              alt=""
              width={100}
              height={100}
              loading="lazy"
              decoding="async"
              draggable={false}
              src={titleAvocadoUrl}
              className="h-16 md:h-24 w-auto"
              style={{ color: 'transparent', height: '6em' }}
            />
          </div>

          <div className="mt-8 grid w-full gap-6 pt-8 md:mt-24 md:grid md:grid-cols-3 md:pt-0">
            {STEPS.map((step) => (
              <article
                key={step.title}
                className={CARD_SHELL}
              >
                <h3 className="font-nueu py-2 text-base font-semibold text-gray-800">{step.title}</h3>
                {step.visual}
                <p className="mt-4 max-w-sm font-[nueuFont] text-sm font-medium leading-5 text-[oklch(0.439_0_0)]">
                  {step.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HowItWorksSection;
