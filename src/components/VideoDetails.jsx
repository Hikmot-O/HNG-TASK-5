import React from "react";
import Logo from "../assets/icons/Logo.svg";
import profile from "../assets/icons/profile.svg";
import dropdown from "../assets/icons/dropdown.svg";
import dropdownSmall from "../assets/icons/dropdown-small.svg";
import edit from "../assets/icons/edit.svg";
import copy from "../assets/icons/copy.svg";
import videoDetail from "../assets/images/videoDetail.png";
import Facebook from "../assets/icons/Facebook.svg";
import whatsapp from "../assets/icons/whatsapp.svg";
import telegram from "../assets/icons/telegram.svg";

const VideoDetails = () => {
  return (
    <section className="px-[100px]">
      {/* header */}
      <div className="">
        <div className="my-12 flex items-center justify-between">
          <img src={Logo} alt="Logo" />
          <div className="flex items-center gap-2">
            <img src={profile} alt="Profile Svg" />
            <p className="text-[#141414]">John Mark</p>
            <img src={dropdown} alt="Dropdown Svg" />
          </div>
        </div>
      </div>

      <p className="text-lg text-[#141414B2] text-opacity-[14%]">
        Home / Recent Videos /{" "}
        <span className="font-[500] text-[#413C6D]">
          How To Create A Facebook Ad Listing
        </span>{" "}
      </p>

      <div className="flex items-center gap-6 my-8">
        <h4 className="text-[#141414] text-2xl font-[600]">
          How To Create A Facebook Ad Listing{" "}
        </h4>
        <img src={edit} alt="Edit Svg" />
      </div>

      <div className="rounded-xl">
        <img src={videoDetail} alt="videoDetail" />
      </div>

      <div className="w-full grid grid-cols-2 items-center gap-[90px] my-10">
        <div className="w-auto flex items-center relative">
          <input
            type="text"
            className="w-full h-[72px] rounded-xl bg-[#E7E7ED] outline-none px-6 py-[14px] placeholder:text-lg placeholder:text-[rgba(96,92,132,0.5)]"
            placeholder="enter email of receiver"
          />
          <button className="absolute right-6 bg-[#605C84] rounded-lg px-[18px] py-2.5 text-white">
            Send
          </button>
        </div>
        <div className="relative w-auto flex items-center">
          <button className="flex items-center gap-2 absolute right-3 font-[500] text-[#120B48] border border-[#120B48] py-2.5 px-[18px] rounded-lg ">
            <img src={copy} alt="Copy Svg" />
            Copy URL
          </button>
          <input
            type="text"
            value="https://www.helpmeout/Untitled_Video_20232509"
            readOnly
            className=" w-full h-[72px] px-3 py-[14px] rounded-xl text-[#4B4B4B] border-0 border-[#929292] bg-[#FAFAFA] outline-none"
          />
        </div>
      </div>
      <div className="mb-16">
        <h5 className="font-[500] text-xl text-[#08051E] mb-4">
          Share your video{" "}
        </h5>
        <div className="flex items-center gap-4">
          <div className="h-12 font-[500] text-[#08051E] flex gap-2 items-center border border-[#0A0628] rounded-md py-3 px-4">
            <img src={Facebook} alt="Facebook Svg" />
            Facebook
          </div>
          <div className="h-12 font-[500] text-[#08051E] flex gap-2 items-center border border-[#0A0628] rounded-md py-3 px-4">
            <img src={whatsapp} alt="Whatsapp Svg" />
            WhatsApp
          </div>
          <div className="h-12 font-[500] text-[#08051E] flex gap-2 items-center border border-[#0A0628] rounded-md py-3 px-4">
            <img src={telegram} alt="Telegram Svg" />
            Telegram
          </div>
        </div>
      </div>
      <div className="">
        <h5 className="text-xl font-[500] mb-4">Transcript</h5>
        <div className="mb-10 text-[#080808] px-4 rounded-[4px] border-[#CFCFCF] border w-[137px] h-[51px] flex gap-4 justify-between items-center">
          English
          <img src={dropdownSmall} alt="Dropdown Svg" />
        </div>

        <div className="h-max overflow-y-scroll flex flex-col gap-10 pr-20">
          <div className="flex gap-10">
            <p className="text-[#141414] text-[22px] font-[500]">0.01</p>
            <p className="text-xl">
              First step. Open Facebook on your desktop or mobile device and
              locate "Marketplace" in the left-hand menu or at the top of the
              First step. Open Facebook on your desktop or mobile device and
              locate "Marketplace" in the left-hand menu or at the top of the{" "}
            </p>
          </div>
          <div className="flex gap-10">
            <p className="text-[#141414] text-[22px] font-[500]">0.15</p>
            <p className="text-xl">
              First step. Open Facebook on your desktop or mobile device and
              locate "Marketplace" in the left-hand menu or at the top of the
              First step. Open Facebook on your desktop or mobile device and
              locate "Marketplace" in the left-hand menu or at the top of the{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoDetails;
