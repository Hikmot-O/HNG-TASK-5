import React from "react";
import feature from "../assets/images/feature.png";
import record from "../assets/icons/record.svg";
import revisit from "../assets/icons/revisit.svg";
import share from "../assets/icons/share.svg";

const Features = () => {
  return (
    <section className="py-20 flex flex-col items-center border-b-[70px] border-b-[#F4F6F8]">
      <h2 className="text-[40px] font-[700] text-[#141414]">Features</h2>
      <p className="text-xl mt-2 text-[#616163] mb-16">
        Key Highlights of Our Extension
      </p>

      <div className="flex items-center gap-14">
        <div className="flex flex-col gap-12">
          <div className="flex items-start gap-4">
            <div className="">
              <img src={record} alt="Record Svg" />
            </div>
            <div className="">
              <h3 className="text-[#1B233D] font-[600] text-[28px] mb-2">
                Simple Screen Recording
              </h3>
              <p className="text-xl text-[#616163] w-[484px]">
                Effortless screen recording for everyone. Record with ease, no
                tech expertise required.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="">
              <img src={share} alt="Share Svg" />
            </div>
            <div className="">
              <h3 className="text-[#1B233D] font-[600] text-[28px] mb-2">
                Easy-to-Share URL
              </h3>
              <p className="text-xl text-[#616163] w-[484px]">
                Share your recordings instantly with a single link. No
                attachments, no downloads.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="">
              <img src={revisit} alt="Revisit Svg" />
            </div>
            <div className="">
              <h3 className="text-[#1B233D] font-[600] text-[28px] mb-2">
                Revisit Recordings
              </h3>
              <p className="text-xl text-[#616163] w-[484px]">
                Access and review your past content effortlessly. Your
                recordings, always at your fingertips.
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <img src={feature} alt="A screenshot of the app" />
        </div>
      </div>
    </section>
  );
};

export default Features;
