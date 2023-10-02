import React from "react";
import { Link } from "react-router-dom";
import Logo from "../src/assets/icons/Logo.svg";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Steps from "./components/Steps";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <section className="">
      {/* Header */}
      <div className="flex items-center justify-between px-[100px] py-[15px] h-[84px]">
        <div className="">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="font-[500] flex items-center gap-[39px]">
          <a href="" className="">
            Features
          </a>
          <a href="" className="">
            How It Works
          </a>
        </div>
        <div className="">
          <Link to='/auth' className="text-[#120B48] text-lg font-[600]">Get Started</Link>
        </div>
      </div>
      <Hero />
      <Features />
      <Steps />
      <Footer />
    </section>
  );
};

export default Home;
