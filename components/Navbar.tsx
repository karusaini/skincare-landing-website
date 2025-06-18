import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="relative w-[1920px] h-[100px] bg-[#EFF5E1] cursor-pointer">
      {/* Logo */}
      <div className="absolute top-[50px] left-[100px] w-[156px] h-[22px]">
        <span className="font-inter font-extrabold text-[30px] leading-[100%] uppercase text-[#2D3B36]">
          SKINCARE
        </span>
      </div>

      {/* Navbar Links */}
      <div className="absolute top-[53px] left-[717px] w-[103px] h-[15px]">
        <span className="font-inter font-normal text-[20px] leading-[100%] tracking-[-0.05em] capitalize text-[#2D3B36]">
          All Product
        </span>
      </div>

      <div className="absolute top-[53px] left-[881px] w-[57px] h-[15px]">
        <span className="font-inter font-normal text-[20px] leading-[100%] tracking-[-0.05em] capitalize text-[#2D3B36]">
          Serum
        </span>
      </div>

      <div className="absolute top-[53px] left-[992px] w-[92px] h-[15px]">
        <span className="font-inter font-normal text-[20px] leading-[100%] tracking-[-0.05em] capitalize text-[#2D3B36]">
          Sunscreen
        </span>
      </div>

      <div className="absolute top-[53px] left-[1142px] w-[61px] h-[15px]">
        <span className="font-inter font-normal text-[20px] leading-[100%] tracking-[-0.05em] capitalize text-[#2D3B36]">
          Bundle
        </span>
      </div>

      {/* Bag Icon */}
      <div className="absolute top-[40px] left-[1595px] w-[40px] h-[40px] bg-[#F8FEE5] rounded-full flex items-center justify-center cursor-pointer">
        <Image src="/assets/bag.png" alt="Bag" width={20} height={20} />
      </div>
      <div className="absolute top-[53px] left-[1645px] w-[64px] h-[15px] cursor-pointer">
        <span className="font-inter font-normal text-[20px] leading-[100%] tracking-[-0.05em] capitalize text-[#2D3B36]">
          Cart (1)
        </span>
      </div>
      <div className="absolute top-[40px] left-[1730px] w-[40px] h-[40px] bg-[#F8FEE5] rounded-full flex items-center justify-center cursor-pointer">
        <img
          src="/assets/heart.png"
          alt="Heart"
          className="w-[20px] h-[20px]"
        />
      </div>
      <div className="absolute top-[40px] left-[1780px] w-[40px] h-[40px] bg-[#F8FEE5] rounded-full flex items-center justify-center cursor-pointer">
        <img
          src="/assets/person.png"
          alt="User"
          className="w-[20px] h-[20px]"
        />
      </div>
    </div>
  );
};

export default Navbar;
