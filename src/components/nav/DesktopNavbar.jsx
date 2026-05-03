import oliveLogo from "/assets/svgs/olive-logo.svg";
import { useState } from "react";
import {
  blogPreviewPosts,
  foodCategoryItems,
  getOliveAppHref,
  miraclePostHref,
  miraclePostImage,
  miraclePostTitle,
  solutionItems,
} from "../../data/navMenuContent";

const DesktopNavbar = ({ links = [] }) => {
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);
  const [isFoodOpen, setIsFoodOpen] = useState(false);

  const filteredLinks = links.filter((link) => link.label !== "Solutions");

  return (
    <div className="font-pall sticky inset-x-0 top-40 z-[60] mx-auto hidden w-full flex-row items-center justify-between self-start rounded-full nav:flex">
      <div className="flex flex-1 flex-row items-center justify-between">
        <a
          aria-label="Return to homepage"
          className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black"
          href="/"
        >
          <img src={oliveLogo} alt="Olive logo" className="h-14 w-60 md:w-[17.5rem]" />
        </a>
      </div>

      <div className="absolute inset-x-0 text-sm font-medium text-zinc-600 transition duration-200 hover:text-zinc-800">
        <nav className="font-pall relative flex justify-center gap-2 rounded-full px-4 py-3">
          <a
            href="/health"
            className="font-inter relative rounded-lg px-4 py-2 text-neutral-600 hover:bg-black/[0.03]"
          >
            <span className="block">Olive Health</span>
          </a>
          <div
            className="relative"
            onMouseEnter={() => setIsSolutionsOpen(true)}
            onMouseLeave={() => setIsSolutionsOpen(false)}
          >
            <p className="flex cursor-pointer items-center gap-1 rounded-lg px-4 py-2 text-neutral-700 hover:bg-black/[0.03] hover:opacity-[0.9]">
              <a className="font-inter" href="#">
                Solutions
              </a>
              <svg
                className={`h-4 w-4 transition-all ${isSolutionsOpen ? "rotate-180" : ""}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 9l6 6l6 -6" />
              </svg>
            </p>

            {isSolutionsOpen ? (
              <div style={{ opacity: 1, transform: "none" }}>
                <div className="absolute left-1/2 top-[calc(100%_+_0.2rem)] z-[60] -translate-x-1/2 transform">
                  <div className="mt-4 overflow-hidden rounded-2xl bg-white shadow-xl backdrop-blur-sm">
                    <div className="h-full w-max p-4">
                      <div className="font-pall grid max-w-3xl grid-cols-[234.663px_234.663px_234.675px] grid-rows-[264px] gap-x-8 bg-white text-[14px] font-medium leading-5 text-[oklch(0.274_0.006_286.033)]">
                        <div className="col-span-2 grid grid-cols-2 gap-y-4">
                          {solutionItems.map((item) => (
                            <a
                              key={item.title}
                              href={item.href}
                              className="group flex cursor-pointer gap-4 rounded-[10px] bg-[#f5faf6] p-2 hover:bg-[#edf6ee]"
                            >
                              <img src={item.icon} alt={item.title} className="h-10 w-10" />
                              <div className="flex max-w-sm flex-col gap-1 md:gap-2">
                                <p className="font-pall font-semibold">{item.title}</p>
                                <p className="text-neutral-500">{item.description}</p>
                              </div>
                            </a>
                          ))}
                        </div>

                        <a
                          href={miraclePostHref}
                          className="relative z-50 hidden h-full overflow-hidden rounded-3xl md:block"
                        >
                          <div className="pointer-events-none absolute bottom-0 z-10 h-20 w-full bg-gradient-to-t from-black/70 to-transparent" />
                          <img
                            alt={miraclePostTitle}
                            className="h-full w-full object-cover"
                            src={miraclePostImage}
                          />
                          <div className="absolute bottom-4 left-0 z-20 flex h-full w-full items-end justify-center px-4">
                            <div className="relative flex items-center justify-center text-white">
                              <h6 className="font-pall m-0 max-w-xl p-0 text-base font-bold text-white">
                                {miraclePostTitle}
                              </h6>
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
                  </div>
                </div>
              </div>
            ) : null}
          </div>

          {filteredLinks.map((link) => {
            if (link.label === "Blog" && link.hasDropdown) {
              return (
                <div
                  key="Blog"
                  className="relative"
                  onMouseEnter={() => setIsBlogOpen(true)}
                  onMouseLeave={() => setIsBlogOpen(false)}
                >
                  <p className="flex cursor-pointer items-center gap-1 rounded-lg px-4 py-2 text-neutral-700 hover:bg-black/[0.03] hover:opacity-[0.9]">
                    <a className="font-inter" href={link.href}>
                      Blog
                    </a>
                    <svg
                      className={`h-4 w-4 transition-all ${isBlogOpen ? "rotate-180" : ""}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M6 9l6 6l6 -6" />
                    </svg>
                  </p>

                  {isBlogOpen ? (
                    <div style={{ opacity: 1, transform: "none" }}>
                      <div className="absolute left-1/2 top-full z-[60] flex w-max max-w-[min(100vw-2rem,48rem)] -translate-x-1/2 flex-col items-stretch pt-[0.2rem]">
                        <div className="h-4 shrink-0" aria-hidden />
                        <div className="-mt-4 overflow-hidden rounded-2xl bg-white shadow-xl backdrop-blur-sm">
                          <div className="h-full w-max p-4 text-[14px] font-medium leading-5 text-[oklch(0.274_0.006_286.033)]">
                            <div className="font-pall grid max-w-3xl grid-cols-1 gap-x-8 gap-y-4 bg-white text-[14px] font-medium leading-5 text-[oklch(0.274_0.006_286.033)] md:grid-cols-[368px_368px] md:grid-rows-[200px] md:gap-x-8">
                              {blogPreviewPosts.map((post) => (
                                <a
                                  key={post.href}
                                  href={post.href}
                                  className="font-pall flex min-h-0 items-start gap-4 rounded-[10px] p-2 text-[14px] font-medium leading-5 text-[oklch(0.274_0.006_286.033)] hover:bg-[#F5FAF6]"
                                >
                                  <img
                                    alt={post.title}
                                    className="h-32 w-32 shrink-0 rounded-2xl object-cover"
                                    src={post.image}
                                    width={128}
                                    height={128}
                                  />
                                  <div className="flex min-w-0 flex-col gap-1">
                                    <h3 className="font-semibold text-base">{post.title}</h3>
                                    <p className="text-sm text-neutral-500">{post.excerpt}</p>
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            }

            if (link.label === "Food" && link.hasDropdown) {
              return (
                <div
                  key="Food"
                  className="relative"
                  onMouseEnter={() => setIsFoodOpen(true)}
                  onMouseLeave={() => setIsFoodOpen(false)}
                >
                  <p className="flex cursor-pointer items-center gap-1 rounded-lg px-4 py-2 text-neutral-700 hover:bg-black/[0.03] hover:opacity-[0.9]">
                    <a className="font-inter" href={link.href}>
                      Food
                    </a>
                    <svg
                      className={`h-4 w-4 transition-all ${isFoodOpen ? "rotate-180" : ""}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M6 9l6 6l6 -6" />
                    </svg>
                  </p>

                  {isFoodOpen ? (
                    <div style={{ opacity: 1, transform: "none" }}>
                      <div className="absolute left-1/2 top-full z-[60] flex w-max max-w-[min(100vw-2rem,56rem)] -translate-x-1/2 flex-col items-stretch pt-[0.2rem]">
                        <div className="h-4 shrink-0" aria-hidden />
                        <div className="-mt-4 overflow-hidden rounded-2xl bg-white shadow-xl backdrop-blur-sm">
                          <div className="h-full w-max p-4 text-[14px] font-medium leading-5 text-[oklch(0.274_0.006_286.033)]">
                            <div className="font-pall grid max-w-4xl grid-cols-1 gap-4 bg-white text-[14px] font-medium leading-5 text-[oklch(0.274_0.006_286.033)] md:grid-cols-[234.425px_234.425px] md:grid-rows-[56px_56px_56px] md:gap-4">
                              {foodCategoryItems.map((item) => (
                                <a
                                  key={item.href}
                                  href={item.href}
                                  className="font-pall flex items-center gap-2 rounded-[10px] p-2 text-[14px] font-medium leading-5 text-[oklch(0.274_0.006_286.033)] hover:bg-[#F5FAF6] md:h-full md:min-h-0"
                                >
                                  <img
                                    src={item.icon}
                                    alt={item.title}
                                    width={40}
                                    height={40}
                                    className="h-10 w-10 shrink-0 object-contain"
                                  />
                                  <div className="flex min-w-0 flex-col gap-1">
                                    <p className="font-semibold font-pall">{item.title}</p>
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            }

            if (link.hasDropdown) {
              return (
                <div key={link.label} className="relative">
                  <p className="flex cursor-pointer items-center gap-1 rounded-lg px-4 py-2 text-neutral-700 hover:bg-black/[0.03] hover:opacity-90">
                    <a className="font-inter" href={link.href}>
                      {link.label}
                    </a>
                    <svg className="h-4 w-4 transition-all" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 9l6 6l6 -6" />
                    </svg>
                  </p>
                </div>
              );
            }

            return (
              <a
                key={link.label}
                className="font-inter relative rounded-lg px-4 py-2 text-neutral-600 hover:bg-black/[0.03]"
                href={link.href}
              >
                <span className="block">{link.label}</span>
              </a>
            );
          })}
        </nav>
      </div>

      <a className="font-nueu relative z-40 mr-4 cursor-pointer text-[#1f3824]" href="/sign-in">
        Sign in
      </a>
      <a
        href={getOliveAppHref}
        target="_blank"
        rel="noreferrer"
        className="font-sans relative z-50 inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#253612] px-6 py-3 text-base font-medium text-white shadow-md transition-all hover:opacity-90 has-[>svg]:px-4"
      >
        Get Olive
        <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="2">
          <path d="M5 12l14 0" />
          <path d="M13 18l6 -6" />
          <path d="M13 6l6 6" />
        </svg>
      </a>
    </div>
  );
};

export default DesktopNavbar;
