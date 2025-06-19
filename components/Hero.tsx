"use client";

import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#EFF5E1] pt-20 md:pt-24 lg:pt-[100px] px-4 md:px-8 lg:px-[100px]">
      <div className="max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pt-8 md:pt-16 lg:pt-32">
          <div className="lg:col-span-5 space-y-6 md:space-y-8">
            <p className="font-inter font-normal text-[#2D3B36] text-base md:text-lg lg:text-[20px] leading-[120%] md:leading-[100%] max-w-md lg:max-w-[335px] lg:indent-[105px]">
              Transform your skincare routine with premium products that
              restore, protect, and enhance your natural glow every day.
            </p>

            <button
              onClick={() => alert("Redirecting to Shop...")}
              className="w-full sm:w-auto px-8 py-3 md:px-10 md:py-4 lg:w-[180px] lg:h-[60px] rounded-full bg-[#2D3B36] text-[#EFF5E1] font-inter font-medium text-lg md:text-xl lg:text-[20px] transition-all duration-300 hover:bg-[#3A4C44] hover:scale-105 shadow-lg cursor-pointer"
            >
              Shop Now
            </button>
          </div>

          <div className="lg:col-span-4 flex flex-col items-center lg:items-start">
            <h1 className="font-inter font-bold text-4xl md:text-6xl lg:text-7xl xl:text-[100px] leading-[90%] md:leading-[90px] tracking-[-0.03em] uppercase text-[#2D3B36] text-center lg:text-left mb-6 lg:mb-0">
              Glow
              <br />
              Natur-ally
            </h1>
          </div>

          <div className="lg:col-span-3 flex justify-center lg:justify-end">
            <div className="w-48 h-44 md:w-56 md:h-52 lg:w-[222.61px] lg:h-[220px] rounded-[20px] overflow-hidden">
              <img
                src="/assets/cosmetic.jpg"
                alt="Cosmetic product"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-24 lg:mt-32">
          <div className="text-center mb-8 md:mb-12 lg:mb-16 ">
            <h1 className="font-inter font-extrabold text-6xl md:text-8xl lg:text-9xl xl:text-[378px]  leading-[100%] tracking-[0] uppercase text-[#2D3B36]">
              SKINCARE
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="w-full lg:flex lg:justify-center lg:pl-40">
              <div className="w-full max-w-md lg:max-w-[610px] aspect-[610/676] rounded-[30px] overflow-hidden">
                <img
                  src="/assets/face.png"
                  alt="Face cream"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex-1 max-w-2xl lg:max-w-none">
              <button
                onClick={() => alert("Viewing Face Cream Details...")}
                className="w-full max-w-md lg:max-w-[476px] h-20 md:h-24 lg:h-[100px] rounded-full bg-[#EFF5E1] flex items-center gap-4 md:gap-5 px-4 md:px-6 transition-all duration-300 hover:bg-[#dbeacb] hover:scale-105 shadow-md mx-auto lg:mx-0"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 lg:w-[80px] lg:h-[80px] rounded-full overflow-hidden bg-[#F8FEE5] flex-shrink-0">
                  <img
                    src="/assets/plum.jpg"
                    alt="Face cream"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-inter font-normal text-sm md:text-lg lg:text-[20px] text-[#2D3B36] text-left">
                  While giving you an invigorating cleansing experience.
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
