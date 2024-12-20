"use client";
import { faqs } from "@/constants/data";
import Image from "next/image";
import { Element } from "react-scroll";
import FaqItem from "./FaqItem";

const Faq = () => {
  const halfLength = Math.floor(faqs.length / 2);
  return (
    <section>
      <Element name="faq" className="realtive">
        <div className="container relative z-2 py-28">
          <div className="">
            <h3 className="h3 max-md:h5 max-w-640 max-lg:max-w-md mb-7 text-p4">{`Curiosity didn't kill the cat, it gave answers.`}</h3>
            <p className="body-1 max-lg:max-w-sm">{`You've got questions, we've got answers.`}</p>
          </div>
          <div className="faq-line_after w-0.5 h-full absolute left-[calc(50%-1px)] top-0 -z-1 bg-s2" />
        </div>
        {/* faqs section */}
        <div className="faq-glow_before relative z-2 border-2 border-s2 bg-s1">
          <div className="container flex gap-10 max-lg:block">
            <div className="rounded-half absolute -top-10 left-[calc(50%-40px)] z-4 flex size-20 items-center justify-center border-2 border-s2 bg-s1">
              <Image src="/images/faq-logo.svg" width={100} height={100} alt="faq-logo" className="size-1/2" />
            </div>
            {/* left side */}
            <div className="relative flex-1 pt-24">
              {faqs.slice(0, halfLength).map((faq, index) => {
                return <FaqItem key={faq.id} faq={faq} index={index} />;
              })}
            </div>
            {/* right side */}
            <div className="relative flex-1 lg:pt-24">
              {faqs.slice(halfLength, faqs.length).map((faq, index) => {
                return <FaqItem key={faq.id} faq={faq} index={halfLength + index} />;
              })}
            </div>
          </div>
          {/* vertical divider */}
          <div className="faq-line_after absolute left-[calc(50%-1px)] top-0 -z-1 h-full w-0.5 bg-s2 max-lg:hidden" />
        </div>
      </Element>
    </section>
  );
};

export default Faq;
