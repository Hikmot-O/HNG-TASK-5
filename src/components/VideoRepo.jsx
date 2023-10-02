import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/icons/Logo.svg";
import profile from "../assets/icons/profile.svg";
import dropdown from "../assets/icons/dropdown.svg";
import search from "../assets/icons/search.svg";
import video1 from "../assets/images/video1.png";
import video2 from "../assets/images/video2.png";

const VideoRepo = () => {
  return (
    <section className="">
      <div className="">
        <div className="px-[100px]">
          <div className="my-12 flex items-center justify-between">
            <img src={Logo} alt="Logo" />
            <div className="flex items-center gap-2">
              <img src={profile} alt="Profile Svg" />
              <p className="text-[#141414]">John Mark</p>
              <img src={dropdown} alt="Dropdown Svg" />
            </div>
          </div>
        </div>

        <div className="pb-[43px] px-[100px] flex items-center justify-between border-b border-b-[rgba(0,0,0,0.10)]">
          <div className="">
            <h3 className="text-[#141414] font-[700] text-[32px] mb-2">
              Hello, John Mark
            </h3>
            <p className="text-[#141414B2] opacity-70 text-lg">
              Here are your recorded videos
            </p>
          </div>
          <div className="flex  ">
            <div className="flex items-center pl-6 bg-[#B6B3C624] bg-opacity-[14%] border border-[#E7E7ED] border-r-0 rounded-tl-xl rounded-bl-xl">
              <img className="" src={search} alt="Search Svg" />
            </div>
            <div className="relative flex items-center">
              <input
                placeholder="Search for a particular video"
                type="text"
                className="outline-none w-[400px] py-6 pl-4 pr-10 rounded-tr-xl rounded-br-xl border-l-0 border border-[#E7E7ED] bg-[#B6B3C624] bg-opacity-[14%] placeholder:text-sm placeholder:text-[#C3C3C3]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-auto max-h-[555px]">
        <div className="py-10 px-[100px]">
          <h4 className="font-[500] text-lg text-[#141414CC] text-opacity-[14%] mb-6">
            Recent files
          </h4>
          <div className="flex items-center justify-center gap-16">
            <Link to='/id' className="">
              <img src={video1} alt="Screenshot" />
            </Link>
            <Link className="">
              <img src={video2} alt="Screenshot" />
            </Link>
          </div>
        </div>
        <div className="py-10 px-[100px]">
          <h4 className="font-[500] text-lg text-[#141414CC] text-opacity-[14%] mb-6">
            Files from last week
          </h4>
          <div className="flex items-center justify-center gap-16">
            <Link className="">
              <img src={video1} alt="Screenshot" />
            </Link>
            <Link className="">
              <img src={video1} alt="Screenshot" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoRepo;
