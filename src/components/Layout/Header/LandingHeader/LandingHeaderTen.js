import React from "react";
import { demoLinkData } from "../data";
import { Link } from "react-router-dom";

export default function LandingHeaderTen() {
  return (
    <div className="fixed top-0 z-20 justify-center hidden w-full h-24 xl:flex bg-main-black">
      <div className="px-[70px] w-full">
        <header className="relative flex items-center justify-between w-full h-full py-6 mx-auto">
          <div className="flex items-center gap-24">
            <Link href="#">
              <img src="/assets/images/home-ten/logo.svg" alt="logo" />
            </Link>
          </div>
          <ul className="flex items-center gap-10 text-base font-medium leading-5 text-white font-inter h-fit">
            <li className="group">
              <a
                className="home-two-nav-item leading-5 relative before:content-['Banner'] before:text-white before:border-white w-fit before:h-[20px] flex items-center gap-2"
                href="#banner"
              >
                Banner
                <svg
                  className="transition-all duration-300 group-hover:rotate-180"
                  width="10"
                  height="10"
                  viewBox="0 0 19 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 2L9.5 8L17 2"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <div className="absolute px-[18px] left-0 h-0 group-hover:h-[660px] overflow-hidden top-[96px] transition-all duration-700 z-50 bg-main-black group-hover:border-b group-hover:border-r group-hover:border-l border-white/10">
                <ul className="max-h-fit min-w-[200px] mt-8 transition-all duration-300 overflow-hidden px-10 top-20 pb-4 rounded-b-md w-full flex flex-wrap gap-10">
                  {/* <!-- single item  --> */}
                  {demoLinkData.map((item, index) => (
                    <li
                      key={index}
                      className="relative py-1 flex flex-col items-center bg-[#171E2D]"
                    >
                      <div className="relative flex flex-col items-center gap-5 pb-3 overflow-hidden font-medium leading-5 group/item hover:text-purple w-fit text-paragraph font-inter">
                        <div className="absolute flex flex-col items-center w-full h-full gap-5 transition-all duration-300 opacity-0 pt-14 bg-black/80 group-hover/item:opacity-100">
                          <Link to={item.landingLink}>
                            <div className="home-two-btn-white group/btn px-10 py-1.5 before:bg-purple after:bg-purple border-purple hover:border-white">
                              <span className="relative z-10 py-1 text-sm font-semibold text-white transition-all duration-300 font-inter">
                                Single Page
                              </span>
                            </div>
                          </Link>
                          <Link to={item.demoLink}>
                            <div className="home-two-btn-white-rev group/btn px-10 py-1.5 before:bg-purple after:bg-purple border-white hover:border-purple">
                              <span className="text-sm text-white transition-all duration-300 font-semibold font-inter relative z-10 py-0.5">
                                Multi page
                              </span>
                            </div>
                          </Link>
                        </div>
                        <img
                          src={item.demoThumb}
                          alt=""
                          className="w-[240px] transition-all duration-300"
                        />
                        <span className="relative font-medium leading-5 text-white home-two-nav-item group-hover/item:before:w-full group-hover/item:text-white before:border-white w-fit font-inter">
                          <span className="w-fit">{item.demoTitle}</span>
                        </span>
                      </div>
                    </li>
                  ))}
                  {/* <!-- single item  --> */}
                  <li className="relative py-1 flex flex-col items-center bg-[#171E2D]">
                    <a
                      href=""
                      className="relative flex flex-col items-center gap-5 pb-3 overflow-hidden font-medium leading-5 group/item hover:text-purple w-fit text-paragraph font-inter"
                      aria-disabled="true"
                    >
                      <img
                        src="/assets/images/demo-8.png"
                        alt=""
                        className="w-[240px] group-hover/item:scale-110 transition-all duration-300 blur-sm"
                      />
                      <span className="relative font-medium leading-5 text-white home-two-nav-item group-hover/item:before:w-full group-hover/item:text-white before:border-white w-fit font-inter">
                        <span className="w-fit">Coming Soon</span>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a
                href="#features"
                className="home-two-nav-item relative before:content-['Features'] before:text-white before:border-white before:h-[20px]"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="home-two-nav-item relative before:content-['About'] before:text-white before:border-white before:h-[20px]"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="home-two-nav-item relative before:content-['Testimonials'] before:text-white before:border-white before:h-[20px]"
                href="#testimonials"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                className="home-two-nav-item relative before:content-['Blogs'] before:text-white before:border-white before:h-[20px]"
                href="#blogs"
              >
                Blogs
              </a>
            </li>
            <li>
              <a
                className="home-two-nav-item relative before:content-['Cta'] before:text-white before:border-white before:h-[20px]"
                href="#cta"
              >
                Cta
              </a>
            </li>
          </ul>
          <div className="flex items-center gap-7">
            <Link to="/contact">
              <div className="home-two-btn-white-rev home-two-btn-white-rev-sm group bg-caribbean-green border-caribbean-green hover:border-[#E7E8EA]">
                <span className="relative z-10 text-base font-semibold transition-all duration-300 group-hover:text-main-black text-main-black font-inter">
                  Get A Quote
                </span>
                <svg
                  className="relative z-10"
                  width="7"
                  height="12"
                  viewBox="0 0 7 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="transition-all duration-300 group-hover:stroke-main-black stroke-main-black"
                    d="M1.10254 10.5L4.89543 6.70711C5.22877 6.37377 5.39543 6.20711 5.39543 6C5.39543 5.79289 5.22877 5.62623 4.89543 5.29289L1.10254 1.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </header>
      </div>
    </div>
  );
}
