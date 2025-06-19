import React from "react";

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#2D3B36] py-16 md:py-24 lg:py-32 px-4 md:px-8 lg:px-[100px] overflow-hidden">
      <div className="max-w-[1920px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16 md:mb-24 lg:mb-32">
          <div>
            <h2 className="font-inter font-normal text-3xl md:text-4xl lg:text-5xl xl:text-[60px] leading-[100%] tracking-[-0.02em] text-[#E7E8E0] mb-8 md:mb-12">
              Join The Skincare
              <br />
              Community Now.
            </h2>
          </div>

          <div className="space-y-4 md:space-y-6">
            <p className="font-inter font-normal text-xl md:text-2xl lg:text-[30px] leading-[100%] tracking-[-0.02em] text-[#E7E8E0]">
              Get in Touch
            </p>
            <p className="font-inter font-normal text-2xl md:text-3xl lg:text-4xl xl:text-[60px] leading-[100%] tracking-[-0.02em] text-[#E7E8E0]">
              contact.skincare.com
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-4">
          <div className="flex flex-wrap gap-6 md:gap-8 lg:gap-12">
            <p className="font-inter font-normal text-lg md:text-xl lg:text-[20px] leading-[100%] tracking-[-0.05em] capitalize text-[#EFF5E1] cursor-pointer hover:text-white transition-colors">
              Facebook
            </p>
            <p className="font-inter font-normal text-lg md:text-xl lg:text-[20px] leading-[100%] tracking-[-0.05em] capitalize text-[#EFF5E1] cursor-pointer hover:text-white transition-colors">
              Instagram
            </p>
            <p className="font-inter font-normal text-lg md:text-xl lg:text-[20px] leading-[100%] tracking-[-0.05em] capitalize text-[#EFF5E1] cursor-pointer hover:text-white transition-colors">
              YouTube
            </p>
          </div>

          <div className="flex flex-wrap gap-6 md:gap-8 lg:gap-12 text-right">
            <p className="font-inter font-normal text-lg md:text-xl lg:text-[20px] leading-[100%] tracking-[-0.05em] text-[#EFF5E1] cursor-pointer hover:text-white transition-colors">
              Terms of Service
            </p>
            <p className="font-inter font-normal text-lg md:text-xl lg:text-[20px] leading-[100%] tracking-[-0.05em] text-[#EFF5E1] capitalize cursor-pointer hover:text-white transition-colors">
              Privacy Policy
            </p>
            <p className="font-inter font-normal text-lg md:text-xl lg:text-[20px] leading-[100%] tracking-[-0.05em] text-[#EFF5E1] capitalize cursor-pointer hover:text-white transition-colors">
              Cookies Policy
            </p>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <p className="font-inter font-bold text-6xl md:text-8xl lg:text-9xl xl:text-[420px] leading-[100%] tracking-[0%] uppercase text-[rgba(61,75,70,0.5)] whitespace-nowrap select-none">
          skincare
        </p>
      </div>
    </footer>
  );
};

export default Footer;
