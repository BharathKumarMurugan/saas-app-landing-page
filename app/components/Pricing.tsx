"use client";
import { plans } from "@/constants/data";
import { clsx } from "clsx";
import Image from "next/image";
import React, { useState } from "react";
import { Element } from "react-scroll";
import CountUp from "react-countup";

const Pricing = () => {
  const [monthly, setMonthly] = useState(false);
  return (
    <section>
      <Element name="pricing">
        <div className="container">
          <div className="max-w-960 pricing-head_before relative mx-auto border-l border-r border-s2 bg-s1/50 pb-40 pt-28 max-xl:max-w-4xl max-lg:border-none max-md:pb-32 max-md:pt-16">
            <h3 className="h3 max-lg:h4 max-md:h5 z-3 relative mx-auto mb-14 max-w-lg text-center text-p4 max-md:mb-11 max-sm:max-w-sm">
              Flexible pricing for teams of all sizes
            </h3>

            <div className="relative z-4 mx-auto flex w-[375px] rounded-3xl border-[3px] border-s4/25 bg-s1/50 p-2 backdrop-blur-[6px] max-md:w-[310px]">
              <button className={clsx("pricing-head_btn", monthly && "text-p4")} onClick={() => setMonthly(true)}>
                Monthly
              </button>
              <button className={clsx("pricing-head_btn", !monthly && "text-p4")} onClick={() => setMonthly(false)}>
                Annual
              </button>

              <div
                className={clsx(
                  "g4 rounded-14 before:h-100 pricing-head_btn_before absolute left-2 top-2 h-[calc(100%-16px)] w-[calc(50%-8px)] overflow-hidden shadow-400 transition-transform duration-500",
                  !monthly && "translate-x-full"
                )}
              />
            </div>

            {/* background image */}
            <div className="pricing-bg">
              <Image src="/images/bg-outlines.svg" width={960} height={380} alt="pricing-bg-outline-img" className="relative z-2" />
              <Image
                src="/images/bg-outlines-fill.png"
                width={960}
                height={380}
                alt="pricing-bg-outline-fill-img"
                className="absolute inset-0 opacity-5 mix-blend-soft-light"
              />
            </div>
          </div>

          {/* pricing section */}
          <div className="scroll-hide relative z-2 -mt-12 flex items-start max-xl:gap-5 max-xl:overflow-auto max-xl:pt-6">
            {plans.map(({ id, title, priceMonthly, priceYearly, caption, features, icon, logo }, index) => {
              const isPrimaryPlan = index === 1;
              return (
                <div
                  key={id}
                  className="pricing-plan_first pricing-plan_last pricing-plan_odd pricing-plan_even relative border-2 p-7 max-xl:min-w-80 max-lg:rounded-3xl xl:w-[calc(33.33%+2px)] "
                >
                  {isPrimaryPlan && <div className="g4 absolute h-330 left-0 right-0 top-0 z-1 rounded-tl-3xl rounded-tr-3xl" />}

                  <div
                    className={clsx("absolute left-0 right-0 z-2 flex items-center justify-center", isPrimaryPlan ? "-top-6" : "-top-6 xl:-top-11 ")}
                  >
                    <Image
                      src={logo}
                      alt={title}
                      width={88}
                      height={88}
                      className={clsx("object-contain drop-shadow-2xl", isPrimaryPlan ? "size-[120px]" : "size-88px")}
                    />
                  </div>

                  <div className={clsx("relative flex flex-col items-center", isPrimaryPlan ? "pt-24" : "pt-12")}>
                    <div
                      className={clsx(
                        "small-2 rounded-20 relative z-2 mx-auto mb-6 border-2 px-4 py-1.5 uppercase",
                        isPrimaryPlan ? "border-p3 text-p3" : "border-p1 text-p1"
                      )}
                    >
                      {title}
                    </div>

                    <div className="relative z-2 flex items-center justify-center">
                      <div className={clsx("h-num flex items-start", isPrimaryPlan ? "text-p3": "text-p4")}>
                        $ <CountUp start={priceMonthly} end={monthly ? priceMonthly : priceYearly} duration={0.4} useEasing={false} preserveValue />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* end of pricing section */}
        </div>
      </Element>
    </section>
  );
};

export default Pricing;
