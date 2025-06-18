"use client";

import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-[400px] px-6 md:px-20 lg:px-[100px] pt-[60px] pb-[40px]">
      {/* Paragraph (fixed position from Figma) */}
      <p
        className="absolute top-[301px] left-[100px] max-w-[335px] font-inter font-normal text-[#2D3B36] text-[20px] leading-[100%] indent-[105px]"
        style={{
          fontFeatureSettings: `"calt" 1`,
        }}
      >
        Transform your skincare routine with premium products that restore,
        protect, and enhance your natural glow every day.
      </p>

      {/* Heading (fixed position from Figma) */}
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
      <div className="absolute top-[814px] left-[100px] w-[180px] h-[60px] rounded-[100px] bg-[#2D3B36] flex items-center justify-center cursor-pointer">
        <p className="font-inter font-normal text-[20px] leading-[100%] tracking-[0] text-[#EFF5E1]">
          Show now
        </p>
      </div>
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

      <div className="absolute top-[1117px] left-[722px] w-[476px] h-[100px] rounded-[200px] bg-[#EFF5E1]"></div>

      <div className="absolute top-[1127px] left-[732px] w-[80px] h-[80px] rounded-[150px] bg-[#F8FEE5] overflow-hidden">
        <img
          src="/assets/plum.jpg"
          alt="Face cream"
          className="w-full h-full object-cover rounded-full"
        />
      </div>

      <div className="absolute top-[1148px] left-[854px] w-[304px] h-[39px]">
        <p className="font-inter font-normal text-[20px] leading-[100%] tracking-[0] text-[#2D3B36]">
          While giving you an invigorating cleansing experience.
        </p>
      </div>
    </section>
  );
};

export default Hero;
