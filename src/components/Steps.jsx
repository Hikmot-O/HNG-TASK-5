import React from "react";
import step1 from "../assets/images/step1.png";
import step2 from "../assets/images/step2.png";
import step3 from "../assets/images/step3.png";

const steps = [
  {
    num: 1,
    title: "Record Screen",
    details:
      'Click the "Start Recording" button in our extension.  choose which part of your screen to capture and who you want to send it to.',
    img: step1,
  },
  {
    num: 2,
    title: "Share Your Recording",
    details:
      "We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.",
    img: step2,
  },
  {
    num: 3,
    title: "Learn Effortlessly",
    details:
      "Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone.",
    img: step3,
  },
];

const Steps = () => {
  return (
    <section className="px-20 flex flex-col items-center pt-[103px] pb-[118px]">
      <h3 className="text-[40px] font-[700] text-[#141414] mb-[59px]">
        How it works
      </h3>

      <div className="grid grid-cols-3 gap-[78px] ">
        {steps.map((step) => (
          <div key={step.num} className="w-auto flex flex-col items-center">
            <div className="flex items-center justify-center bg-[#120B48] w-[68px] h-[67px] rounded-[60px] py-[14px] px-[22px] text-white text-[32px] font-[700]">{step.num}</div>
            <h4 className="pt-8 pb-4 text-[28px] font-[600]">{step.title}</h4>
            <p className="w-[358px] text-[#616163] text-center text-xl mb-7">{step.details}</p>
            <div className=""><img src={step.img} alt={step.title} /></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Steps;
