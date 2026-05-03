import oliveLogo from "/assets/svgs/olive-logo.svg";
import { useEffect, useState } from "react";
import {
  blogPreviewPosts,
  foodCategoryItems,
  getOliveAppHref,
  miraclePostHref,
  miraclePostImage,
  miraclePostTitle,
  solutionItems,
} from "../../data/navMenuContent";

const navText = "font-inter relative text-neutral-600";

const ArrowRightIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 shrink-0" stroke="currentColor" strokeWidth="2">
    <path d="M5 12l14 0" />
    <path d="M13 18l6 -6" />
    <path d="M13 6l6 6" />
  </svg>
);

const MobileNavbar = ({ links = [] }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const blogHref = links.find((l) => l.label === "Blog")?.href ?? "/blogs";
  const foodHref = links.find((l) => l.label === "Food")?.href ?? "/foods";
  const featuresHref = links.find((l) => l.label === "Features")?.href ?? "/#features";
  const pricingHref = links.find((l) => l.label === "Pricing")?.href ?? "/#pricing";
  const restaurantsHref = links.find((l) => l.label === "Restaurants")?.href ?? "/restaurants";

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="relative z-[110] mx-auto flex w-full min-w-0 max-w-full flex-col items-stretch rounded-[4px] px-2 py-2 font-pall nav:hidden sm:px-4">
      <div className="relative z-[210] flex w-full min-w-0 flex-row items-center justify-between gap-3">
        <a
          aria-label="Return to homepage"
          className="relative z-20 mr-0 flex min-w-0 flex-1 items-center space-x-2 px-2 py-1 text-sm font-normal text-black"
          href="/"
          onClick={closeMenu}
        >
          <img
            src={oliveLogo}
            alt="Olive logo"
            className="h-14 w-auto max-h-14 max-w-[min(17.5rem,calc(100vw-7rem))] object-contain object-left md:max-w-[17.5rem]"
          />
        </a>
        <button
          type="button"
          className="relative z-[220] shrink-0 touch-manipulation rounded-md p-2 text-black outline-none ring-offset-2 focus-visible:ring-2 focus-visible:ring-[#253612]"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-drawer"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0"
            >
              <path d="M18 6l-12 12" />
              <path d="M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0"
            >
              <path d="M4 6l16 0" />
              <path d="M4 12l16 0" />
              <path d="M4 18l16 0" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen ? (
        <div
          id="mobile-nav-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="absolute inset-x-0 top-full z-[80] mt-2 flex max-h-[min(75dvh,calc(100dvh-11rem))] min-h-0 flex-col gap-6 overflow-y-auto overscroll-y-contain rounded-2xl border border-neutral-200 bg-[#F5FAF6] px-4 py-6 shadow-xl nav:hidden"
        >
            <a className={`${navText} block`} href="/health" onClick={closeMenu}>
              Olive Health
            </a>

            <div className="flex flex-col gap-3">
              <a className={`${navText} block`} href="#" onClick={closeMenu}>
                Solutions
              </a>
              <div className="grid max-w-3xl grid-cols-1 gap-x-8 gap-y-6 bg-transparent font-pall text-sm md:grid-cols-3">
                <div className="grid grid-cols-1 gap-y-2 md:col-span-2 md:grid-cols-2 md:gap-y-4">
                  {solutionItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="group flex cursor-pointer gap-4 rounded-lg bg-white/80 p-2 hover:bg-white"
                      onClick={closeMenu}
                    >
                      <img alt={item.title} src={item.icon} width={40} height={40} className="h-10 w-10 shrink-0" />
                      <div className="flex max-w-sm flex-col gap-1 md:gap-2">
                        <p className="font-semibold font-pall">{item.title}</p>
                        <p className="text-neutral-500">{item.description}</p>
                      </div>
                    </a>
                  ))}
                </div>
                <a
                  href={miraclePostHref}
                  className="relative z-50 hidden min-h-[200px] overflow-hidden rounded-3xl md:block md:h-full md:min-h-0"
                  onClick={closeMenu}
                >
                  <div className="pointer-events-none absolute bottom-0 z-10 h-20 w-full bg-gradient-to-t from-black/70 to-transparent" />
                  <img alt={miraclePostTitle} src={miraclePostImage} className="h-full min-h-[200px] w-full object-cover" />
                  <div className="absolute bottom-4 left-0 z-20 flex h-full w-full items-end justify-center px-4">
                    <div className="relative flex items-center justify-center text-white">
                      <h6 className="font-pall m-0 max-w-xl p-0 text-base font-bold text-white">{miraclePostTitle}</h6>
                    </div>
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" className="shrink-0">
                      <path d="M19.29 12L5.29004 12" stroke="#F5FAF6" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M13.29 18L19.29 12" stroke="#F5FAF6" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M13.29 6L19.29 12" stroke="#F5FAF6" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            <a className={`${navText} block`} href={featuresHref} onClick={closeMenu}>
              Features
            </a>
            <a className={`${navText} block`} href={pricingHref} onClick={closeMenu}>
              Pricing
            </a>

            <div className="flex flex-col gap-3">
              <a className={`${navText} block`} href={blogHref} onClick={closeMenu}>
                Blog
              </a>
              <div className="grid max-w-3xl grid-cols-1 gap-x-8 gap-y-4 bg-transparent font-pall text-sm sm:grid-cols-2">
                {blogPreviewPosts.map((post) => (
                  <a
                    key={post.href}
                    href={post.href}
                    className="flex items-start gap-4 rounded-lg bg-white/80 p-2 hover:bg-white"
                    onClick={closeMenu}
                  >
                    <img
                      alt={post.title}
                      src={post.image}
                      width={128}
                      height={128}
                      className="h-24 w-24 shrink-0 rounded-2xl object-cover sm:h-32 sm:w-32"
                    />
                    <div className="flex min-w-0 flex-col gap-1">
                      <h3 className="text-base font-semibold">{post.title}</h3>
                      <p className="text-sm text-neutral-500">{post.excerpt}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <a className={`${navText} block`} href={restaurantsHref} onClick={closeMenu}>
              Restaurants
            </a>

            <div className="flex flex-col gap-3">
              <a className={`${navText} block`} href={foodHref} onClick={closeMenu}>
                Food
              </a>
              <div className="grid max-w-4xl grid-cols-1 gap-x-4 gap-y-2 bg-transparent font-pall text-sm sm:grid-cols-2">
                {foodCategoryItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-2 rounded-lg bg-white/80 p-2 hover:bg-white"
                    onClick={closeMenu}
                  >
                    <img alt={item.title} src={item.icon} width={40} height={40} className="h-10 w-10 shrink-0 object-contain" />
                    <div className="flex flex-col gap-1">
                      <p className="font-semibold font-pall">{item.title}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <a className="font-nueu block cursor-pointer text-[#1f3824]" href="/sign-in" onClick={closeMenu}>
              Sign in
            </a>
            <a
              href={getOliveAppHref}
              target="_blank"
              rel="noreferrer"
              className="font-sans inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#253612] px-6 py-3 text-base font-medium text-white shadow-md transition-all hover:opacity-90"
              onClick={closeMenu}
            >
              Get Olive
              <ArrowRightIcon />
            </a>
        </div>
      ) : null}
    </div>
  );
};

export default MobileNavbar;
