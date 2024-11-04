import React from "react";
import { Link } from "react-router-dom";

export default function PricingOne() {
  return (
    <section id="pricing" className="bg-main-black pb-16 md:pb-[130px]">
      <div className="w-full mx-auto theme-container">
        <div className="flex flex-col items-center w-full">
          <h1 className="font-medium text-white border border-white/10 bg-white/5 px-5 rounded-[30px] py-1 w-fit">
            Pricing Package
          </h1>
          <h2 className="text-white font-semibold text-24 sm:text-48 pt-5 max-w-[819px] text-center">
            We Provide Amazing Pricing Package For Creative Solutions
          </h2>
        </div>
        <div className="grid gap-5 lg:gap-[70px] grid-cols-4 md:grid-cols-8 xl:grid-cols-12 mt-[70px] lg:px-8">
          {/* <!-- single card start  --> */}
          <div className="col-span-4 p-5 sm:p-10 lg:p-12 bg-white/5 border border-transparent hover:border-white/20 rounded-[40px] transition-all duration-200 text-white h-fit">
            <h1 className="font-semibold text-18">Regular Plan</h1>
            <h2 className="text-48 font-semibold pt-5 pb-3.5">
              $29.00
              <span className="text-base font-normal leading-7">/monthly</span>
            </h2>
            <p className="pb-5 md:pb-10">Basic plan for all users</p>
            <Link to="/pricing">
              <div className="flex justify-center gap-2 px-5 sm:px-10 py-[11px] rounded-[40px] bg-purple items-center overflow-hidden relative before:block before:w-[300px] before:h-[300px] before:absolute before:bg-white before:-top-[100px] before:rotate-45 hover:before:-top-[400px] transition-all duration-300 before:transition-all before:duration-1000 before:z-0 z-10 text-blue-seo hover:text-blue-seo after:block after:w-[300px] after:h-[300px] after:absolute after:bg-white after:-bottom-[100px] after:rotate-45 hover:after:-bottom-[400px] after:transition-all after:duration-1000 after:z-0 group">
                <span className="relative z-10 py-1 text-base font-semibold transition-all duration-300 group-hover:text-white font-inter">
                  Choose This Package
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
                    className="transition-all duration-300 group-hover:stroke-white stroke-blue-seo"
                    d="M1.10254 10.5L4.89543 6.70711C5.22877 6.37377 5.39543 6.20711 5.39543 6C5.39543 5.79289 5.22877 5.62623 4.89543 5.29289L1.10254 1.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
            <ul className="flex flex-col gap-5 pt-5 md:pt-10">
              <li className="flex items-center gap-3 font-medium text-18">
                <svg
                  width="20"
                  height="15"
                  viewBox="0 0 20 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.1035 0.411506C18.9741 0.281114 18.8203 0.177618 18.6507 0.10699C18.4812 0.0363625 18.2994 0 18.1157 0C17.9321 0 17.7502 0.0363625 17.5807 0.10699C17.4112 0.177618 17.2573 0.281114 17.128 0.411506L6.76377 10.7897L2.4094 6.42137C2.27512 6.29166 2.11661 6.18967 1.94292 6.12122C1.76922 6.05276 1.58375 6.0192 1.39708 6.02243C1.21041 6.02565 1.0262 6.06562 0.854981 6.14004C0.683758 6.21446 0.528869 6.32187 0.399158 6.45615C0.269447 6.59043 0.167455 6.74894 0.099004 6.92264C0.0305528 7.09633 -0.00301682 7.28181 0.000212736 7.46847C0.00344229 7.65514 0.0434076 7.83935 0.117826 8.01057C0.192245 8.18179 0.29966 8.33668 0.433938 8.46639L5.77604 13.8085C5.90537 13.9389 6.05923 14.0424 6.22876 14.113C6.39829 14.1836 6.58012 14.22 6.76377 14.22C6.94742 14.22 7.12926 14.1836 7.29878 14.113C7.46831 14.0424 7.62218 13.9389 7.7515 13.8085L19.1035 2.45653C19.2447 2.32626 19.3574 2.16815 19.4345 1.99217C19.5115 1.81618 19.5513 1.62614 19.5513 1.43402C19.5513 1.24189 19.5115 1.05185 19.4345 0.875871C19.3574 0.699888 19.2447 0.541779 19.1035 0.411506Z"
                    fill="#FDA83C"
                  />
                </svg>
                <span>Design & Development</span>
              </li>

              <li className="flex items-center gap-3 font-medium text-18">
                <svg
                  width="20"
                  height="15"
                  viewBox="0 0 20 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.1035 0.411506C18.9741 0.281114 18.8203 0.177618 18.6507 0.10699C18.4812 0.0363625 18.2994 0 18.1157 0C17.9321 0 17.7502 0.0363625 17.5807 0.10699C17.4112 0.177618 17.2573 0.281114 17.128 0.411506L6.76377 10.7897L2.4094 6.42137C2.27512 6.29166 2.11661 6.18967 1.94292 6.12122C1.76922 6.05276 1.58375 6.0192 1.39708 6.02243C1.21041 6.02565 1.0262 6.06562 0.854981 6.14004C0.683758 6.21446 0.528869 6.32187 0.399158 6.45615C0.269447 6.59043 0.167455 6.74894 0.099004 6.92264C0.0305528 7.09633 -0.00301682 7.28181 0.000212736 7.46847C0.00344229 7.65514 0.0434076 7.83935 0.117826 8.01057C0.192245 8.18179 0.29966 8.33668 0.433938 8.46639L5.77604 13.8085C5.90537 13.9389 6.05923 14.0424 6.22876 14.113C6.39829 14.1836 6.58012 14.22 6.76377 14.22C6.94742 14.22 7.12926 14.1836 7.29878 14.113C7.46831 14.0424 7.62218 13.9389 7.7515 13.8085L19.1035 2.45653C19.2447 2.32626 19.3574 2.16815 19.4345 1.99217C19.5115 1.81618 19.5513 1.62614 19.5513 1.43402C19.5513 1.24189 19.5115 1.05185 19.4345 0.875871C19.3574 0.699888 19.2447 0.541779 19.1035 0.411506Z"
                    fill="#FDA83C"
                  />
                </svg>
                <span>SEO & Digital Marketing</span>
              </li>

              <li className="flex items-center gap-3 font-medium text-18">
                <svg
                  width="20"
                  height="15"
                  viewBox="0 0 20 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.1035 0.411506C18.9741 0.281114 18.8203 0.177618 18.6507 0.10699C18.4812 0.0363625 18.2994 0 18.1157 0C17.9321 0 17.7502 0.0363625 17.5807 0.10699C17.4112 0.177618 17.2573 0.281114 17.128 0.411506L6.76377 10.7897L2.4094 6.42137C2.27512 6.29166 2.11661 6.18967 1.94292 6.12122C1.76922 6.05276 1.58375 6.0192 1.39708 6.02243C1.21041 6.02565 1.0262 6.06562 0.854981 6.14004C0.683758 6.21446 0.528869 6.32187 0.399158 6.45615C0.269447 6.59043 0.167455 6.74894 0.099004 6.92264C0.0305528 7.09633 -0.00301682 7.28181 0.000212736 7.46847C0.00344229 7.65514 0.0434076 7.83935 0.117826 8.01057C0.192245 8.18179 0.29966 8.33668 0.433938 8.46639L5.77604 13.8085C5.90537 13.9389 6.05923 14.0424 6.22876 14.113C6.39829 14.1836 6.58012 14.22 6.76377 14.22C6.94742 14.22 7.12926 14.1836 7.29878 14.113C7.46831 14.0424 7.62218 13.9389 7.7515 13.8085L19.1035 2.45653C19.2447 2.32626 19.3574 2.16815 19.4345 1.99217C19.5115 1.81618 19.5513 1.62614 19.5513 1.43402C19.5513 1.24189 19.5115 1.05185 19.4345 0.875871C19.3574 0.699888 19.2447 0.541779 19.1035 0.411506Z"
                    fill="#FDA83C"
                  />
                </svg>
                <span>Branding Design</span>
              </li>

              <li className="flex items-center gap-3 font-medium text-18">
                <svg
                  width="20"
                  height="15"
                  viewBox="0 0 20 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.1035 0.411506C18.9741 0.281114 18.8203 0.177618 18.6507 0.10699C18.4812 0.0363625 18.2994 0 18.1157 0C17.9321 0 17.7502 0.0363625 17.5807 0.10699C17.4112 0.177618 17.2573 0.281114 17.128 0.411506L6.76377 10.7897L2.4094 6.42137C2.27512 6.29166 2.11661 6.18967 1.94292 6.12122C1.76922 6.05276 1.58375 6.0192 1.39708 6.02243C1.21041 6.02565 1.0262 6.06562 0.854981 6.14004C0.683758 6.21446 0.528869 6.32187 0.399158 6.45615C0.269447 6.59043 0.167455 6.74894 0.099004 6.92264C0.0305528 7.09633 -0.00301682 7.28181 0.000212736 7.46847C0.00344229 7.65514 0.0434076 7.83935 0.117826 8.01057C0.192245 8.18179 0.29966 8.33668 0.433938 8.46639L5.77604 13.8085C5.90537 13.9389 6.05923 14.0424 6.22876 14.113C6.39829 14.1836 6.58012 14.22 6.76377 14.22C6.94742 14.22 7.12926 14.1836 7.29878 14.113C7.46831 14.0424 7.62218 13.9389 7.7515 13.8085L19.1035 2.45653C19.2447 2.32626 19.3574 2.16815 19.4345 1.99217C19.5115 1.81618 19.5513 1.62614 19.5513 1.43402C19.5513 1.24189 19.5115 1.05185 19.4345 0.875871C19.3574 0.699888 19.2447 0.541779 19.1035 0.411506Z"
                    fill="#FDA83C"
                  />
                </svg>
                <span>Custom Support</span>
              </li>
            </ul>
          </div>
          {/* <!-- single card end  --> */}
          {/* <!-- single card start  --> */}
          <div
            data-aos="zoom-out"
            className="col-span-4 p-5 sm:p-10 lg:p-12 bg-white/5 border border-transparent hover:border-white/20 rounded-[40px] transition-all duration-200 text-white h-fit"
          >
            <h1 className="font-semibold text-18">Standard Plan</h1>
            <h2 className="text-48 font-semibold pt-5 pb-3.5">
              $49.00
              <span className="text-base font-normal leading-7">/monthly</span>
            </h2>
            <p className="pb-5 md:pb-10">Ideal plan for individual creators</p>
            <Link to="/pricing">
              <div className="flex justify-center gap-2 px-5 sm:px-10 py-[11px] rounded-[40px] bg-purple items-center overflow-hidden relative before:block before:w-[300px] before:h-[300px] before:absolute before:bg-white before:-top-[100px] before:rotate-45 hover:before:-top-[400px] transition-all duration-300 before:transition-all before:duration-1000 before:z-0 z-10 text-blue-seo hover:text-blue-seo after:block after:w-[300px] after:h-[300px] after:absolute after:bg-white after:-bottom-[100px] after:rotate-45 hover:after:-bottom-[400px] after:transition-all after:duration-1000 after:z-0 group">
                <span className="relative z-10 py-1 text-base font-semibold transition-all duration-300 group-hover:text-white font-inter">
                  Choose This Package
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
                    className="transition-all duration-300 group-hover:stroke-white stroke-blue-seo"
                    d="M1.10254 10.5L4.89543 6.70711C5.22877 6.37377 5.39543 6.20711 5.39543 6C5.39543 5.79289 5.22877 5.62623 4.89543 5.29289L1.10254 1.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
            <ul className="flex flex-col gap-5 pt-5 md:pt-10">
              <li className="flex items-center gap-3 font-medium text-18">
                <svg
                  width="20"
                  height="15"
                  viewBox="0 0 20 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.1035 0.411506C18.9741 0.281114 18.8203 0.177618 18.6507 0.10699C18.4812 0.0363625 18.2994 0 18.1157 0C17.9321 0 17.7502 0.0363625 17.5807 0.10699C17.4112 0.177618 17.2573 0.281114 17.128 0.411506L6.76377 10.7897L2.4094 6.42137C2.27512 6.29166 2.11661 6.18967 1.94292 6.12122C1.76922 6.05276 1.58375 6.0192 1.39708 6.02243C1.21041 6.02565 1.0262 6.06562 0.854981 6.14004C0.683758 6.21446 0.528869 6.32187 0.399158 6.45615C0.269447 6.59043 0.167455 6.74894 0.099004 6.92264C0.0305528 7.09633 -0.00301682 7.28181 0.000212736 7.46847C0.00344229 7.65514 0.0434076 7.83935 0.117826 8.01057C0.192245 8.18179 0.29966 8.33668 0.433938 8.46639L5.77604 13.8085C5.90537 13.9389 6.05923 14.0424 6.22876 14.113C6.39829 14.1836 6.58012 14.22 6.76377 14.22C6.94742 14.22 7.12926 14.1836 7.29878 14.113C7.46831 14.0424 7.62218 13.9389 7.7515 13.8085L19.1035 2.45653C19.2447 2.32626 19.3574 2.16815 19.4345 1.99217C19.5115 1.81618 19.5513 1.62614 19.5513 1.43402C19.5513 1.24189 19.5115 1.05185 19.4345 0.875871C19.3574 0.699888 19.2447 0.541779 19.1035 0.411506Z"
                    fill="#FDA83C"
                  />
                </svg>
                <span>Design & Development</span>
              </li>

              <li className="flex items-center gap-3 font-medium text-18">
                <svg
                  width="20"
                  height="15"
                  viewBox="0 0 20 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.1035 0.411506C18.9741 0.281114 18.8203 0.177618 18.6507 0.10699C18.4812 0.0363625 18.2994 0 18.1157 0C17.9321 0 17.7502 0.0363625 17.5807 0.10699C17.4112 0.177618 17.2573 0.281114 17.128 0.411506L6.76377 10.7897L2.4094 6.42137C2.27512 6.29166 2.11661 6.18967 1.94292 6.12122C1.76922 6.05276 1.58375 6.0192 1.39708 6.02243C1.21041 6.02565 1.0262 6.06562 0.854981 6.14004C0.683758 6.21446 0.528869 6.32187 0.399158 6.45615C0.269447 6.59043 0.167455 6.74894 0.099004 6.92264C0.0305528 7.09633 -0.00301682 7.28181 0.000212736 7.46847C0.00344229 7.65514 0.0434076 7.83935 0.117826 8.01057C0.192245 8.18179 0.29966 8.33668 0.433938 8.46639L5.77604 13.8085C5.90537 13.9389 6.05923 14.0424 6.22876 14.113C6.39829 14.1836 6.58012 14.22 6.76377 14.22C6.94742 14.22 7.12926 14.1836 7.29878 14.113C7.46831 14.0424 7.62218 13.9389 7.7515 13.8085L19.1035 2.45653C19.2447 2.32626 19.3574 2.16815 19.4345 1.99217C19.5115 1.81618 19.5513 1.62614 19.5513 1.43402C19.5513 1.24189 19.5115 1.05185 19.4345 0.875871C19.3574 0.699888 19.2447 0.541779 19.1035 0.411506Z"
                    fill="#FDA83C"
                  />
                </svg>
                <span>SEO & Digital Marketing</span>
              </li>

              <li className="flex items-center gap-3 font-medium text-18">
                <svg
                  width="20"
                  height="15"
                  viewBox="0 0 20 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.1035 0.411506C18.9741 0.281114 18.8203 0.177618 18.6507 0.10699C18.4812 0.0363625 18.2994 0 18.1157 0C17.9321 0 17.7502 0.0363625 17.5807 0.10699C17.4112 0.177618 17.2573 0.281114 17.128 0.411506L6.76377 10.7897L2.4094 6.42137C2.27512 6.29166 2.11661 6.18967 1.94292 6.12122C1.76922 6.05276 1.58375 6.0192 1.39708 6.02243C1.21041 6.02565 1.0262 6.06562 0.854981 6.14004C0.683758 6.21446 0.528869 6.32187 0.399158 6.45615C0.269447 6.59043 0.167455 6.74894 0.099004 6.92264C0.0305528 7.09633 -0.00301682 7.28181 0.000212736 7.46847C0.00344229 7.65514 0.0434076 7.83935 0.117826 8.01057C0.192245 8.18179 0.29966 8.33668 0.433938 8.46639L5.77604 13.8085C5.90537 13.9389 6.05923 14.0424 6.22876 14.113C6.39829 14.1836 6.58012 14.22 6.76377 14.22C6.94742 14.22 7.12926 14.1836 7.29878 14.113C7.46831 14.0424 7.62218 13.9389 7.7515 13.8085L19.1035 2.45653C19.2447 2.32626 19.3574 2.16815 19.4345 1.99217C19.5115 1.81618 19.5513 1.62614 19.5513 1.43402C19.5513 1.24189 19.5115 1.05185 19.4345 0.875871C19.3574 0.699888 19.2447 0.541779 19.1035 0.411506Z"
                    fill="#FDA83C"
                  />
                </svg>
                <span>Branding Design</span>
              </li>

              <li className="flex items-center gap-3 font-medium text-18">
                <svg
                  width="20"
                  height="15"
                  viewBox="0 0 20 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.1035 0.411506C18.9741 0.281114 18.8203 0.177618 18.6507 0.10699C18.4812 0.0363625 18.2994 0 18.1157 0C17.9321 0 17.7502 0.0363625 17.5807 0.10699C17.4112 0.177618 17.2573 0.281114 17.128 0.411506L6.76377 10.7897L2.4094 6.42137C2.27512 6.29166 2.11661 6.18967 1.94292 6.12122C1.76922 6.05276 1.58375 6.0192 1.39708 6.02243C1.21041 6.02565 1.0262 6.06562 0.854981 6.14004C0.683758 6.21446 0.528869 6.32187 0.399158 6.45615C0.269447 6.59043 0.167455 6.74894 0.099004 6.92264C0.0305528 7.09633 -0.00301682 7.28181 0.000212736 7.46847C0.00344229 7.65514 0.0434076 7.83935 0.117826 8.01057C0.192245 8.18179 0.29966 8.33668 0.433938 8.46639L5.77604 13.8085C5.90537 13.9389 6.05923 14.0424 6.22876 14.113C6.39829 14.1836 6.58012 14.22 6.76377 14.22C6.94742 14.22 7.12926 14.1836 7.29878 14.113C7.46831 14.0424 7.62218 13.9389 7.7515 13.8085L19.1035 2.45653C19.2447 2.32626 19.3574 2.16815 19.4345 1.99217C19.5115 1.81618 19.5513 1.62614 19.5513 1.43402C19.5513 1.24189 19.5115 1.05185 19.4345 0.875871C19.3574 0.699888 19.2447 0.541779 19.1035 0.411506Z"
                    fill="#FDA83C"
                  />
                </svg>
                <span>Custom Support</span>
              </li>
              <li className="flex items-center gap-3 font-medium text-18">
                <svg
                  width="20"
                  height="15"
                  viewBox="0 0 20 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.1035 0.411506C18.9741 0.281114 18.8203 0.177618 18.6507 0.10699C18.4812 0.0363625 18.2994 0 18.1157 0C17.9321 0 17.7502 0.0363625 17.5807 0.10699C17.4112 0.177618 17.2573 0.281114 17.128 0.411506L6.76377 10.7897L2.4094 6.42137C2.27512 6.29166 2.11661 6.18967 1.94292 6.12122C1.76922 6.05276 1.58375 6.0192 1.39708 6.02243C1.21041 6.02565 1.0262 6.06562 0.854981 6.14004C0.683758 6.21446 0.528869 6.32187 0.399158 6.45615C0.269447 6.59043 0.167455 6.74894 0.099004 6.92264C0.0305528 7.09633 -0.00301682 7.28181 0.000212736 7.46847C0.00344229 7.65514 0.0434076 7.83935 0.117826 8.01057C0.192245 8.18179 0.29966 8.33668 0.433938 8.46639L5.77604 13.8085C5.90537 13.9389 6.05923 14.0424 6.22876 14.113C6.39829 14.1836 6.58012 14.22 6.76377 14.22C6.94742 14.22 7.12926 14.1836 7.29878 14.113C7.46831 14.0424 7.62218 13.9389 7.7515 13.8085L19.1035 2.45653C19.2447 2.32626 19.3574 2.16815 19.4345 1.99217C19.5115 1.81618 19.5513 1.62614 19.5513 1.43402C19.5513 1.24189 19.5115 1.05185 19.4345 0.875871C19.3574 0.699888 19.2447 0.541779 19.1035 0.411506Z"
                    fill="#FDA83C"
                  />
                </svg>
                <span>Unlimited Revisions</span>
              </li>
            </ul>
          </div>
          {/* <!-- single card end  --> */}
          {/* <!-- single card start  --> */}
          <div className="col-span-4 p-5 sm:p-10 lg:p-12 bg-white/5 border border-transparent hover:border-white/20 rounded-[40px] transition-all duration-200 text-white h-fit">
            <h1 className="font-semibold text-18">Diamond Plan</h1>
            <h2 className="text-48 font-semibold pt-5 pb-3.5">
              $99.00
              <span className="text-base font-normal leading-7">/monthly</span>
            </h2>
            <p className="pb-5 md:pb-10">Ideal plan for individual creators</p>
            <Link to="/pricing">
              <div className="flex justify-center gap-2 px-5 sm:px-10 py-[11px] rounded-[40px] bg-purple items-center overflow-hidden relative before:block before:w-[300px] before:h-[300px] before:absolute before:bg-white before:-top-[100px] before:rotate-45 hover:before:-top-[400px] transition-all duration-300 before:transition-all before:duration-1000 before:z-0 z-10 text-blue-seo hover:text-blue-seo after:block after:w-[300px] after:h-[300px] after:absolute after:bg-white after:-bottom-[100px] after:rotate-45 hover:after:-bottom-[400px] after:transition-all after:duration-1000 after:z-0 group">
                <span className="relative z-10 py-1 text-base font-semibold transition-all duration-300 group-hover:text-white font-inter">
                  Choose This Package
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
                    className="transition-all duration-300 group-hover:stroke-white stroke-blue-seo"
                    d="M1.10254 10.5L4.89543 6.70711C5.22877 6.37377 5.39543 6.20711 5.39543 6C5.39543 5.79289 5.22877 5.62623 4.89543 5.29289L1.10254 1.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
            <ul className="flex flex-col gap-5 pt-5 md:pt-10">
              <li className="flex items-center gap-3 font-medium text-18">
                <svg
                  width="20"
                  height="15"
                  viewBox="0 0 20 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.1035 0.411506C18.9741 0.281114 18.8203 0.177618 18.6507 0.10699C18.4812 0.0363625 18.2994 0 18.1157 0C17.9321 0 17.7502 0.0363625 17.5807 0.10699C17.4112 0.177618 17.2573 0.281114 17.128 0.411506L6.76377 10.7897L2.4094 6.42137C2.27512 6.29166 2.11661 6.18967 1.94292 6.12122C1.76922 6.05276 1.58375 6.0192 1.39708 6.02243C1.21041 6.02565 1.0262 6.06562 0.854981 6.14004C0.683758 6.21446 0.528869 6.32187 0.399158 6.45615C0.269447 6.59043 0.167455 6.74894 0.099004 6.92264C0.0305528 7.09633 -0.00301682 7.28181 0.000212736 7.46847C0.00344229 7.65514 0.0434076 7.83935 0.117826 8.01057C0.192245 8.18179 0.29966 8.33668 0.433938 8.46639L5.77604 13.8085C5.90537 13.9389 6.05923 14.0424 6.22876 14.113C6.39829 14.1836 6.58012 14.22 6.76377 14.22C6.94742 14.22 7.12926 14.1836 7.29878 14.113C7.46831 14.0424 7.62218 13.9389 7.7515 13.8085L19.1035 2.45653C19.2447 2.32626 19.3574 2.16815 19.4345 1.99217C19.5115 1.81618 19.5513 1.62614 19.5513 1.43402C19.5513 1.24189 19.5115 1.05185 19.4345 0.875871C19.3574 0.699888 19.2447 0.541779 19.1035 0.411506Z"
                    fill="#FDA83C"
                  />
                </svg>
                <span>Design & Development</span>
              </li>

              <li className="flex items-center gap-3 font-medium text-18">
                <svg
                  width="20"
                  height="15"
                  viewBox="0 0 20 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.1035 0.411506C18.9741 0.281114 18.8203 0.177618 18.6507 0.10699C18.4812 0.0363625 18.2994 0 18.1157 0C17.9321 0 17.7502 0.0363625 17.5807 0.10699C17.4112 0.177618 17.2573 0.281114 17.128 0.411506L6.76377 10.7897L2.4094 6.42137C2.27512 6.29166 2.11661 6.18967 1.94292 6.12122C1.76922 6.05276 1.58375 6.0192 1.39708 6.02243C1.21041 6.02565 1.0262 6.06562 0.854981 6.14004C0.683758 6.21446 0.528869 6.32187 0.399158 6.45615C0.269447 6.59043 0.167455 6.74894 0.099004 6.92264C0.0305528 7.09633 -0.00301682 7.28181 0.000212736 7.46847C0.00344229 7.65514 0.0434076 7.83935 0.117826 8.01057C0.192245 8.18179 0.29966 8.33668 0.433938 8.46639L5.77604 13.8085C5.90537 13.9389 6.05923 14.0424 6.22876 14.113C6.39829 14.1836 6.58012 14.22 6.76377 14.22C6.94742 14.22 7.12926 14.1836 7.29878 14.113C7.46831 14.0424 7.62218 13.9389 7.7515 13.8085L19.1035 2.45653C19.2447 2.32626 19.3574 2.16815 19.4345 1.99217C19.5115 1.81618 19.5513 1.62614 19.5513 1.43402C19.5513 1.24189 19.5115 1.05185 19.4345 0.875871C19.3574 0.699888 19.2447 0.541779 19.1035 0.411506Z"
                    fill="#FDA83C"
                  />
                </svg>
                <span>SEO & Digital Marketing</span>
              </li>

              <li className="flex items-center gap-3 font-medium text-18">
                <svg
                  width="20"
                  height="15"
                  viewBox="0 0 20 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.1035 0.411506C18.9741 0.281114 18.8203 0.177618 18.6507 0.10699C18.4812 0.0363625 18.2994 0 18.1157 0C17.9321 0 17.7502 0.0363625 17.5807 0.10699C17.4112 0.177618 17.2573 0.281114 17.128 0.411506L6.76377 10.7897L2.4094 6.42137C2.27512 6.29166 2.11661 6.18967 1.94292 6.12122C1.76922 6.05276 1.58375 6.0192 1.39708 6.02243C1.21041 6.02565 1.0262 6.06562 0.854981 6.14004C0.683758 6.21446 0.528869 6.32187 0.399158 6.45615C0.269447 6.59043 0.167455 6.74894 0.099004 6.92264C0.0305528 7.09633 -0.00301682 7.28181 0.000212736 7.46847C0.00344229 7.65514 0.0434076 7.83935 0.117826 8.01057C0.192245 8.18179 0.29966 8.33668 0.433938 8.46639L5.77604 13.8085C5.90537 13.9389 6.05923 14.0424 6.22876 14.113C6.39829 14.1836 6.58012 14.22 6.76377 14.22C6.94742 14.22 7.12926 14.1836 7.29878 14.113C7.46831 14.0424 7.62218 13.9389 7.7515 13.8085L19.1035 2.45653C19.2447 2.32626 19.3574 2.16815 19.4345 1.99217C19.5115 1.81618 19.5513 1.62614 19.5513 1.43402C19.5513 1.24189 19.5115 1.05185 19.4345 0.875871C19.3574 0.699888 19.2447 0.541779 19.1035 0.411506Z"
                    fill="#FDA83C"
                  />
                </svg>
                <span>Branding Design</span>
              </li>

              <li className="flex items-center gap-3 font-medium text-18">
                <svg
                  width="20"
                  height="15"
                  viewBox="0 0 20 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.1035 0.411506C18.9741 0.281114 18.8203 0.177618 18.6507 0.10699C18.4812 0.0363625 18.2994 0 18.1157 0C17.9321 0 17.7502 0.0363625 17.5807 0.10699C17.4112 0.177618 17.2573 0.281114 17.128 0.411506L6.76377 10.7897L2.4094 6.42137C2.27512 6.29166 2.11661 6.18967 1.94292 6.12122C1.76922 6.05276 1.58375 6.0192 1.39708 6.02243C1.21041 6.02565 1.0262 6.06562 0.854981 6.14004C0.683758 6.21446 0.528869 6.32187 0.399158 6.45615C0.269447 6.59043 0.167455 6.74894 0.099004 6.92264C0.0305528 7.09633 -0.00301682 7.28181 0.000212736 7.46847C0.00344229 7.65514 0.0434076 7.83935 0.117826 8.01057C0.192245 8.18179 0.29966 8.33668 0.433938 8.46639L5.77604 13.8085C5.90537 13.9389 6.05923 14.0424 6.22876 14.113C6.39829 14.1836 6.58012 14.22 6.76377 14.22C6.94742 14.22 7.12926 14.1836 7.29878 14.113C7.46831 14.0424 7.62218 13.9389 7.7515 13.8085L19.1035 2.45653C19.2447 2.32626 19.3574 2.16815 19.4345 1.99217C19.5115 1.81618 19.5513 1.62614 19.5513 1.43402C19.5513 1.24189 19.5115 1.05185 19.4345 0.875871C19.3574 0.699888 19.2447 0.541779 19.1035 0.411506Z"
                    fill="#FDA83C"
                  />
                </svg>
                <span>Custom Support</span>
              </li>
              <li className="flex items-center gap-3 font-medium text-18">
                <svg
                  width="20"
                  height="15"
                  viewBox="0 0 20 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.1035 0.411506C18.9741 0.281114 18.8203 0.177618 18.6507 0.10699C18.4812 0.0363625 18.2994 0 18.1157 0C17.9321 0 17.7502 0.0363625 17.5807 0.10699C17.4112 0.177618 17.2573 0.281114 17.128 0.411506L6.76377 10.7897L2.4094 6.42137C2.27512 6.29166 2.11661 6.18967 1.94292 6.12122C1.76922 6.05276 1.58375 6.0192 1.39708 6.02243C1.21041 6.02565 1.0262 6.06562 0.854981 6.14004C0.683758 6.21446 0.528869 6.32187 0.399158 6.45615C0.269447 6.59043 0.167455 6.74894 0.099004 6.92264C0.0305528 7.09633 -0.00301682 7.28181 0.000212736 7.46847C0.00344229 7.65514 0.0434076 7.83935 0.117826 8.01057C0.192245 8.18179 0.29966 8.33668 0.433938 8.46639L5.77604 13.8085C5.90537 13.9389 6.05923 14.0424 6.22876 14.113C6.39829 14.1836 6.58012 14.22 6.76377 14.22C6.94742 14.22 7.12926 14.1836 7.29878 14.113C7.46831 14.0424 7.62218 13.9389 7.7515 13.8085L19.1035 2.45653C19.2447 2.32626 19.3574 2.16815 19.4345 1.99217C19.5115 1.81618 19.5513 1.62614 19.5513 1.43402C19.5513 1.24189 19.5115 1.05185 19.4345 0.875871C19.3574 0.699888 19.2447 0.541779 19.1035 0.411506Z"
                    fill="#FDA83C"
                  />
                </svg>
                <span>Unlimited Revisions</span>
              </li>
              <li className="flex items-center gap-3 font-medium text-18">
                <svg
                  width="20"
                  height="15"
                  viewBox="0 0 20 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.1035 0.411506C18.9741 0.281114 18.8203 0.177618 18.6507 0.10699C18.4812 0.0363625 18.2994 0 18.1157 0C17.9321 0 17.7502 0.0363625 17.5807 0.10699C17.4112 0.177618 17.2573 0.281114 17.128 0.411506L6.76377 10.7897L2.4094 6.42137C2.27512 6.29166 2.11661 6.18967 1.94292 6.12122C1.76922 6.05276 1.58375 6.0192 1.39708 6.02243C1.21041 6.02565 1.0262 6.06562 0.854981 6.14004C0.683758 6.21446 0.528869 6.32187 0.399158 6.45615C0.269447 6.59043 0.167455 6.74894 0.099004 6.92264C0.0305528 7.09633 -0.00301682 7.28181 0.000212736 7.46847C0.00344229 7.65514 0.0434076 7.83935 0.117826 8.01057C0.192245 8.18179 0.29966 8.33668 0.433938 8.46639L5.77604 13.8085C5.90537 13.9389 6.05923 14.0424 6.22876 14.113C6.39829 14.1836 6.58012 14.22 6.76377 14.22C6.94742 14.22 7.12926 14.1836 7.29878 14.113C7.46831 14.0424 7.62218 13.9389 7.7515 13.8085L19.1035 2.45653C19.2447 2.32626 19.3574 2.16815 19.4345 1.99217C19.5115 1.81618 19.5513 1.62614 19.5513 1.43402C19.5513 1.24189 19.5115 1.05185 19.4345 0.875871C19.3574 0.699888 19.2447 0.541779 19.1035 0.411506Z"
                    fill="#FDA83C"
                  />
                </svg>
                <span>24/7 Online Support</span>
              </li>
            </ul>
          </div>
          {/* <!-- single card end  --> */}
        </div>
      </div>
    </section>
  );
}
