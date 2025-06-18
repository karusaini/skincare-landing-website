import React from "react";

const Footer = () => {
  return (
    <section>
      <div className="absolute top-[7300px] left-0 w-[1920px] h-[930px] bg-[#2D3B36]"></div>
      <div className="absolute top-[7500px] left-[100px] w-[485px] h-[117px]">
        <p className="font-inter font-normal text-[60px] leading-[100%] tracking-[-0.02em] text-[#E7E8E0]">
          Join The Skincare
          <br />
          Community Now.
        </p>
      </div>

      {/* "Get in Touch" Heading */}
      <div className="absolute top-[7500px] left-[1236px] w-[173px] h-[22px]">
        <p className="font-inter font-normal text-[30px] leading-[100%] tracking-[-0.02em] text-[#E7E8E0]">
          Get in Touch
        </p>
      </div>

      {/* "contact.skincare.com" Text */}
      <div className="absolute top-[7535px] left-[1236px] w-[584px] h-[44px]">
        <p className="font-inter font-normal text-[60px] leading-[100%] tracking-[-0.02em] text-[#E7E8E0]">
          contact.skincare.com
        </p>
      </div>

      {/* Facebook */}
      <div className="absolute top-[7700px] left-[100px] w-[86px] h-[15px] cursor-pointer">
        <p className="font-inter font-normal text-[20px] leading-[100%] tracking-[-0.05em] capitalize text-[#EFF5E1] cursor-pointer">
          Facebook
        </p>
      </div>

      {/* Instagram */}
      <div className="absolute top-[7700px] left-[286px] w-[87px] h-[15px] ">
        <p className="font-inter font-normal text-[20px] leading-[100%] tracking-[-0.05em] capitalize text-[#EFF5E1]">
          Instagram
        </p>
      </div>

      {/* YouTube */}
      <div className="absolute top-[7700px] left-[473px] w-[76px] h-[15px] ">
        <p className="font-inter font-normal text-[20px] leading-[100%] tracking-[-0.05em] capitalize text-[#EFF5E1]">
          YouTube
        </p>
      </div>

      {/* Terms of Service */}
      <div className="absolute top-[7700px] left-[1230px] w-[145px] h-[15px] text-right">
        <p className="font-inter font-normal text-[20px] leading-[100%] tracking-[-0.05em] text-[#EFF5E1]">
          Terms of Service
        </p>
      </div>

      {/* Privacy Policy */}
      <div className="absolute top-[7700px] left-[1475px] w-[119px] h-[15px]  text-right capitalize">
        <p className="font-inter font-normal text-[20px] leading-[100%] tracking-[-0.05em] text-[#EFF5E1]">
          Privacy Policy
        </p>
      </div>

      {/* Cookies Policy */}
      <div className="absolute top-[7700px] left-[1694px] w-[126px] h-[15px] text-right capitalize">
        <p className="font-inter font-normal text-[20px] leading-[100%] tracking-[-0.05em] text-[#EFF5E1]">
          Cookies Policy
        </p>
      </div>

      <div className="absolute top-[7800px] left-[-115px] w-[2249px] h-[305px] flex items-center justify-center z-0 bg-[#2D3B36]">
        <p className="font-inter font-bold text-[420px] leading-[100%] tracking-[0%] uppercase text-[rgba(61,75,70,0.5)] whitespace-nowrap">
          skincare
        </p>
      </div>
    </section>
  );
};

export default Footer;
