"use client";

import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-[400px] px-6 md:px-20 lg:px-[100px] pt-[60px] pb-[40px]">
      <p
        className="absolute top-[301px] left-[100px] max-w-[335px] font-inter font-normal text-[#2D3B36] text-[20px] leading-[100%] indent-[105px]"
        style={{
          fontFeatureSettings: `"calt" 1`,
        }}
      >
        Transform your skincare routine with premium products that restore,
        protect, and enhance your natural glow every day.
      </p>

      <h1 className="absolute top-[218px] left-[761px] w-[398px] h-[253px] font-inter font-bold text-[100px] leading-[90px] tracking-[-0.03em] uppercase text-[#2D3B36]">
        Glow
        <br />
        Natur-ally
      </h1>
      <div className="absolute top-[234px] left-[1597px] w-[222.61px] h-[220px] rounded-[20px] overflow-hidden">
        <img
          src="/assets/cosmetic.jpg"
          alt="Cosmetic product"
          className="w-[223px] h-[220px]"
        />
      </div>
      <button
        onClick={() => alert("Redirecting to Shop...")}
        className="absolute top-[814px] left-[100px] w-[180px] h-[60px] rounded-full bg-[#2D3B36] text-[#EFF5E1] font-inter font-medium text-[20px] transition-all duration-300 hover:bg-[#3A4C44] hover:scale-105 shadow-lg cursor-pointer"
      >
        Shop Now
      </button>

      <div className="absolute top-[982px] left-[-18px] w-[1955px] h-[275px]">
        <h1 className="font-inter font-extrabold text-[378px] leading-[100%] tracking-[0] uppercase text-[#2D3B36]">
          SKINCARE
        </h1>
      </div>
      <div className="absolute top-[571px] left-[655px] w-[610px] h-[676px] rounded-[30px] overflow-hidden">
        <img
          src="/assets/face.png"
          alt="Face cream"
          className="w-full h-full object-cover"
        />
      </div>

      <button
        onClick={() => alert("Viewing Face Cream Details...")}
        className="absolute top-[1117px] left-[722px] w-[476px] h-[100px] rounded-full bg-[#EFF5E1] flex items-center gap-5 px-6 transition-all duration-300 hover:bg-[#dbeacb] hover:scale-105 shadow-md"
      >
        <div className="w-[80px] h-[80px] rounded-full overflow-hidden bg-[#F8FEE5]">
          <img
            src="/assets/plum.jpg"
            alt="Face cream"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="font-inter font-normal text-[20px] text-[#2D3B36]">
          While giving you an invigorating cleansing experience.
        </p>
      </button>
    </section>
  );
};

export default Hero;
