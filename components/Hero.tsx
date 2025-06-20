"use client";

import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#EFF5E1] pt-20 md:pt-24 lg:pt-[100px] px-4 md:px-8 xl:px-0">
      <div className="max-w-[1920px] mx-auto">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pt-8 md:pt-16 lg:pt-32">
          {/* Description Column */}
          <div className="lg:col-span-5 lg:text-right lg:pr-90 flex flex-col items-center lg:items-end">
            <p className="font-inter font-normal text-[#2D3B36] text-base md:text-lg lg:text-[20px]  leading-snug md:leading-snug max-w-md lg:max-w-[335px] lg:indent-[105px] mb-4 text-center lg:text-right">
              Transform your skincare routine with premium products that
              restore, protect, and enhance your natural glow every day.
            </p>

            <button
              onClick={() => alert("Redirecting to Shop...")}
              className="mt-4 lg:mr-12 lg:mt-10 px-8 py-3 md:px-10 md:py-4 lg:w-[180px] lg:h-[60px] rounded-full bg-[#2D3B36] text-[#EFF5E1] font-inter font-medium text-lg md:text-xl lg:text-[20px] transition-all duration-300 hover:bg-[#3A4C44] hover:scale-105 shadow-lg"
            >
              Shop Now
            </button>
          </div>

          {/* Title Column */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start">
            <h1 className="font-inter font-bold text-4xl md:text-6xl lg:ml-10  lg:text-7xl xl:text-[100px] leading-[90%] tracking-[-0.03em] uppercase text-[#2D3B36] text-center lg:text-left mb-6 lg:mb-0">
              Glow
              <br />
              Natur-ally
            </h1>
          </div>

          {/* Side Image */}
          <div className="lg:col-span-3 flex justify-center lg:justify-end">
            <div className="w-44 h-44 md:w-56 md:h-56 lg:w-[222px] lg:h-[220px] lg:mr-26 rounded-[20px] overflow-hidden">
              <img
                src="/assets/cosmetic.jpg"
                alt="Cosmetic product"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Center Feature Section */}
        <div className="relative mt-[350px] sm:mt-[400px] md:mt-[450px]">
          <div className="text-center mb-10 md:mb-14 lg:mb-0">
            <h1 className="font-inter font-extrabold text-6xl md:text-8xl lg:text-9xl xl:text-[300px] 2xl:text-[378px] leading-[100%] uppercase text-[#2D3B36]">
              SKINCARE
            </h1>
          </div>

          {/* Floating Image and Button */}
          <div className="absolute bottom-[70px] left-1/2 -translate-x-1/2 px-4 w-full">
            <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 mx-auto max-w-7xl">
              {/* Face Image */}
              <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-[650px] aspect-[3/4] sm:aspect-[4/5] md:aspect-[5/6] lg:aspect-[650/720] rounded-[30px] overflow-hidden">
                <img
                  src="/assets/face.png"
                  alt="Face cream"
                  className="w-full h-full object-cover sm:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Button Box */}
              <div className="absolute bottom-[40px] left-1/2 -translate-x-1/2 w-full max-w-md sm:max-w-lg lg:max-w-[476px]">
                <button
                  onClick={() => alert("Viewing Face Cream Details...")}
                  className="w-full h-20 md:h-24 lg:h-[100px] rounded-full bg-[#EFF5E1] flex items-center gap-4 md:gap-5 px-4 md:px-6 transition-all duration-300 hover:bg-[#dbeacb] hover:scale-105 shadow-md"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 lg:w-[80px] lg:h-[80px] rounded-full overflow-hidden bg-[#F8FEE5] flex-shrink-0">
                    <img
                      src="/assets/plum.jpg"
                      alt="Plum"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="font-inter font-normal text-sm md:text-lg lg:text-[20px] text-[#2D3B36] text-left ">
                    While giving you an invigorating cleansing experience.
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
