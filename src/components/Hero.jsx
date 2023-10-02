import React from "react";
import { Link } from "react-router-dom";
import arrowRight from "../assets/icons/arrow-right.svg";
import hero1 from '../assets/images/hero1.png'
import hero2 from '../assets/images/hero2.png'
import hero3 from '../assets/images/hero3.png'
import heroDots1 from '../assets/icons/hero-dots1.svg'
import heroDots2 from '../assets/icons/hero-dots2.svg'

const Hero = () => {
    // pr-[51.5px]
  return (
    <section className="border-b-[56px] border-b-[#F4F6F8] relative flex items-center pl-[80px]  pt-[165px] py-[162px]">
      <div className="w-[548px]">
        <h1 className="w-[468px] font-[700] text-[64px] leading-[64px] text-[#141414]">
          Show Them Don’t Just Tell
        </h1>
        <p className="w-[548px] mt-5 mb-12 text-xl text-[rgba(0,0,0,0.75)]">
          Help your friends and loved ones by creating and sending videos on how
          to get things done on a website.
        </p>
        <Link className="w-max rounded-lg flex gap-3 items-center justify-center text-white text-lg font-[500] py-[22px] px-6 bg-[#120B48]">
          Install HelpMeOut
          <img src={arrowRight} alt="Arrow-right Svg" />
        </Link>
      </div>
      <div className=" flex items-center gap-5">
        <div className="absolute z-[-1] right-[415px] bottom-[73px]"><img src={heroDots1} alt="Dots Svg" /></div>
        <div className="absolute z-[-1] right-[0] top-[107px]"><img src={heroDots2} alt="Dots Svg" /></div>
        <div className="">
            <div className="mb-[18px]">
                <img src={hero1} alt="A woman" />
            </div>
            <div className="">
            <img src={hero2} alt="Father and Son" />
            </div>
        </div>
        <div className="">
            <img src={hero3} alt="A woman holding a handset" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
