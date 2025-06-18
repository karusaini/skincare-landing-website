import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full max-w-[1920px] h-[100px] bg-[#EFF5E1] mx-auto z-50 cursor-pointer">
      {/* Relative wrapper so inner absolute still works */}
      <div className="relative w-full h-full">
        {/* Logo */}
        <div className="absolute top-[50px] left-[100px] w-[156px] h-[22px]">
          <span className="font-inter font-extrabold text-[30px] leading-[100%] uppercase text-[#2D3B36]">
            SKINCARE
          </span>
        </div>

        {/* Links (show on lg and up) */}
        <div className="hidden lg:block absolute top-[53px] left-[717px] space-x-[60px]">
          {["All Product", "Serum", "Sunscreen", "Bundle"].map((txt, i) => (
            <span
              key={i}
              className="font-inter font-normal text-[20px] leading-[100%] tracking-[-0.05em] capitalize text-[#2D3B36]"
            >
              {txt}
            </span>
          ))}
        </div>

        {/* Bag Icon */}
        <div className="absolute top-[40px] left-[1595px] w-[40px] h-[40px] bg-[#F8FEE5] rounded-full flex items-center justify-center cursor-pointer">
          <Image src="/assets/bag.png" alt="Bag" width={20} height={20} />
        </div>
        {/* Cart text */}
        <div className="absolute top-[53px] left-[1645px] w-[64px] h-[15px] cursor-pointer">
          <span className="font-inter font-normal text-[20px] leading-[100%] tracking-[-0.05em] capitalize text-[#2D3B36]">
            Cart (1)
          </span>
        </div>
        {/* Heart */}
        <div className="absolute top-[40px] left-[1730px] w-[40px] h-[40px] bg-[#F8FEE5] rounded-full flex items-center justify-center cursor-pointer">
          <img
            src="/assets/heart.png"
            alt="Heart"
            className="w-[20px] h-[20px]"
          />
        </div>
        {/* User */}
        <div className="absolute top-[40px] left-[1780px] w-[40px] h-[40px] bg-[#F8FEE5] rounded-full flex items-center justify-center cursor-pointer">
          <img
            src="/assets/person.png"
            alt="User"
            className="w-[20px] h-[20px]"
          />
        </div>

        {/* Mobile hamburger (lg:hidden) */}
        <div className="lg:hidden absolute top-[40px] right-[40px]">
          <button className="text-[#2D3B36] text-3xl">☰</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
