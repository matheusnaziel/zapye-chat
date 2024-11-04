import React from "react";
import { demoLinkData } from "../data";
import { Link } from "react-router-dom";

export default function LandingHeaderFour() {
  return (
    <header>
      <div className="header-wrapper w-full fixed left-0 top-0 z-20 bg-[#062100] xl:block hidden">
        <div className="relative z-20 mx-auto theme-container">
          <div className="w-full h-[95px] flex justify-between items-center">
            <div className="flex space-x-[100px] items-center">
              <div>
                <Link href="#">
                  <img className="w-40" src="/assets/images/home-four/zapye-logo.png" alt="zapye logo" />
                </Link>
              </div>
              <div>
                <ul className="flex items-center space-x-10">
                <li className="group">
                    <a
                      className="text-white font-semibold hover:text-[#1F7EF5] home-two-nav-item leading-5 relative before:border-[#1F7EF5] transition-all ease-out duration-300 w-fit"
                      href="/"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white font-semibold hover:text-[#1F7EF5] home-two-nav-item leading-5 relative before:border-[#1F7EF5] transition-all ease-out duration-300 w-fit"
                      href="#quem-somos"
                    >
                      Quem Somos
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white font-semibold hover:text-[#1F7EF5] home-two-nav-item leading-5 relative before:border-[#1F7EF5] transition-all ease-out duration-300 w-fit"
                      href="#services"
                    >
                      Serviços
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white font-semibold hover:text-[#1F7EF5] home-two-nav-item leading-5 relative before:border-[#1F7EF5] transition-all ease-out duration-300 w-fit"
                      href="#pricing"
                    >
                      Preços
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white font-semibold hover:text-[#1F7EF5] home-two-nav-item leading-5 relative before:border-[#1F7EF5] transition-all ease-out duration-300 w-fit"
                      href="#testimonials"
                    >
                      Contato
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white font-semibold hover:text-[#1F7EF5] home-two-nav-item leading-5 relative before:border-[#1F7EF5] transition-all ease-out duration-300 w-fit"
                      href="#testimonials"
                    >
                      Depoimentos
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex space-x-[30px] items-center">
              {/* <a href="#">
                <div className="flex space-x-1.5 items-center text-white">
                  <span className="font-semibold">Sign Up</span>
                  <span>
                    <svg
                      width="14"
                      height="18"
                      viewBox="0 0 14 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.84289 11.625H8.84961M5.09961 11.625H5.10633"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1.17547 14.1336C1.34413 15.3862 2.38171 16.3676 3.64435 16.4257C4.70682 16.4745 5.78609 16.5 6.97461 16.5C8.16313 16.5 9.24241 16.4745 10.3049 16.4257C11.5675 16.3676 12.6051 15.3862 12.7738 14.1336C12.8838 13.316 12.9746 12.4782 12.9746 11.625C12.9746 10.7718 12.8838 9.93399 12.7738 9.11644C12.6051 7.86377 11.5675 6.88237 10.3049 6.82432C9.24241 6.77548 8.16313 6.75 6.97461 6.75C5.78609 6.75 4.70681 6.77548 3.64435 6.82432C2.38171 6.88237 1.34413 7.86377 1.17547 9.11644C1.06539 9.93399 0.974609 10.7718 0.974609 11.625C0.974609 12.4782 1.06539 13.316 1.17547 14.1336Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M3.59961 6.75V4.875C3.59961 3.01104 5.11065 1.5 6.97461 1.5C8.83857 1.5 10.3496 3.01104 10.3496 4.875V6.75"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </a> */}
              <Link to="/contact">
                <div className="home-two-btn-bg py-2.5 group bg-[#1F7EF5] border-[#1F7EF5]">
                  <span className="relative z-10 text-base font-semibold text-white transition-all duration-300 group-hover:text-[#1F7EF5] font-inter">
                    Orçamento
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
                      className="transition-all duration-300 group-hover:stroke-[#1F7EF5]"
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
          </div>
        </div>
        <div className="header-four-border w-full h-[1px]"></div>
      </div>
    </header>
  );
}
