import React from "react";
import LogoWhite from "../assets/icons/logo-white.svg";

const Footer = () => {
  return (
    <section className="py-[98px] bg-[#120B48] text-white flex justify-center items-start  gap-[243px]">
      <div className="">
        <img src={LogoWhite} alt="Logo" />
      </div>
      <div className="flex gap-[220px]">
        <div className="flex flex-col">
          <a href="" className="mb-6 font-[600]">
            Menu
          </a>
          <a href="" className="mb-5">
            Home
          </a>
          <a href="" className="mb-5">
            Converter
          </a>
          <a href="" className="">
            How it Works
          </a>
        </div>
        <div className="flex flex-col">
          <a href="" className="font-[600] mb-6">
            About us
          </a>
          <a href="" className="mb-5">
            About
          </a>
          <a href="" className="mb-5">
            Contact Us
          </a>
          <a href="" className="">
            Privacy Policy
          </a>
        </div>
        <div className="flex flex-col">
          <a href="" className="mb-6 font-[600]">
            Screen Record
          </a>
          <a href="" className="mb-5">
            Browser Window
          </a>
          <a href="" className="mb-5">
            Desktop
          </a>
          <a href="">Application</a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
