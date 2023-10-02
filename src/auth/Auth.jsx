import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/icons/Logo.svg";
import Google from "../assets/icons/Google.svg";
import Facebook from "../assets/icons/Facebook.svg";

const Auth = () => {
  return (
    <section className="pt-20 pb-[125px] px-[113.5px]">
      <div className="mb-[38px]">
        <img src={logo} alt="Logo" />
      </div>

      <div className="flex flex-col justify-center items-center">
        <h3 className="text-[32px] font-[700] mb-2">Log in or Sign up</h3>
        <p className="w-[321px] text-center text-sm font-[300] text-[#434343] mb-8">
          Join millions of others in sharing successful moves on{" "}
          <span className="font-[400]">HelpMeOut.</span>
        </p>
        <div className="mb-5 flex gap-4 items-center justify-center border font-[500] text-[#141414] border-[#141414] rounded-xl h-12 w-[475px]">
            <img src={Google} alt="Google Svg" />
          Continue with Google
        </div>
        <div className="mb-8 flex gap-4 items-center justify-center border font-[500] text-[#141414] border-[#141414] rounded-xl h-12 w-[475px]">
            <img src={Facebook} alt="Facebook Svg" />
          Continue with Facebook
        </div>

        <div className="flex items-center gap-2.5 mb-[34px]">
            <div className="w-[200px] border-b border-b-[#B9C2C8]"></div>
            <p className="text-sm font-[500] text-[#B9C2C8]">or</p>
            <div className="w-[200px] border-b border-b-[#B9C2C8]"></div>
        </div>

        <form action="" className="w-[475px]">
            <div className="flex flex-col mb-4 text-[#141414] text-sm font-[500]">
                <label className="mb-3" htmlFor="" >Email</label>
                <input className="outline-none placeholder:text-[#626262] placeholder:font-[500] rounded-xl p-4 border border-[#B6B3C6]" type="text" placeholder="Enter your email address" />
            </div>
            <div className="flex flex-col mb-8 text-[#141414] text-sm font-[500]">
                <label className="mb-3" htmlFor="" >Password</label>
                <input className="outline-none placeholder:text-[#626262] placeholder:font-[500] rounded-xl p-4 border border-[#B6B3C6]" type="text" placeholder="Enter your password address" />
            </div>

            <Link to='/video-repo' className="text-lg font-[500] text-[#f9f9ff] bg-[#120B48] rounded-lg py-4 px-5 justify-center items-center flex">Sign Up</Link>
        </form>
      </div>
    </section>
  );
};

export default Auth;
