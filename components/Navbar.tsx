import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-20 md:h-24 lg:h-[100px] bg-[#EFF5E1] z-50">
      <div className="relative w-full h-full max-w-[1920px] mx-auto px-4 md:px-8 lg:px-[100px]">
        <div className="flex items-center justify-between h-full">
          <div className="flex-shrink-0">
            <span className="font-inter font-extrabold text-xl md:text-2xl lg:text-[30px] leading-[100%] uppercase text-[#2D3B36]">
              SKINCARE
            </span>
          </div>

          <div className="hidden lg:flex items-center space-x-8 xl:space-x-[60px]">
            {["All Product", "Serum", "Sunscreen", "Bundle"].map((txt, i) => (
              <span
                key={i}
                className="font-inter font-normal text-lg xl:text-[20px] leading-[100%] tracking-[-0.05em] capitalize text-[#2D3B36] cursor-pointer hover:text-[#3A4C44] transition-colors"
              >
                {txt}
              </span>
            ))}
          </div>

          <div className="flex items-center space-x-3 md:space-x-4">
            <div className="flex items-center space-x-2 md:space-x-3">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-[#F8FEE5] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#EFF5E1] transition-colors">
                <Image
                  src="/assets/bag.png"
                  alt="Bag"
                  width={16}
                  height={16}
                  className="md:w-5 md:h-5"
                />
              </div>
              <span className="hidden md:inline font-inter font-normal text-sm md:text-lg lg:text-[20px] leading-[100%] tracking-[-0.05em] capitalize text-[#2D3B36]">
                Cart (1)
              </span>
            </div>

            <div className="w-8 h-8 md:w-10 md:h-10 bg-[#F8FEE5] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#EFF5E1] transition-colors">
              <img
                src="/assets/heart.png"
                alt="Heart"
                className="w-4 h-4 md:w-5 md:h-5"
              />
            </div>

            <div className="w-8 h-8 md:w-10 md:h-10 bg-[#F8FEE5] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#EFF5E1] transition-colors">
              <img
                src="/assets/person.png"
                alt="User"
                className="w-4 h-4 md:w-5 md:h-5"
              />
            </div>

            <div className="lg:hidden">
              <button className="text-[#2D3B36] text-2xl md:text-3xl hover:text-[#3A4C44] transition-colors">
                ☰
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
