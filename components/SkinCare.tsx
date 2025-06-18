import React from "react";
import { ShoppingCart } from "lucide-react";

const SkinCare = () => {
  return (
    <section>
      <div className="absolute top-[5000px] left-[590px] w-[778px] h-[117px] text-center">
        <p className="font-inter font-normal text-[60px] leading-[100%] tracking-[-0.02em] text-[#2D3B36]">
          Feel Beautiful Inside and Out
          <br />
          with Every Product.
        </p>
      </div>
      <div className="cursor-pointer">
        <div className="absolute top-[5200px] left-[547px] w-[194px] h-[60px] rounded-[100px] bg-[#2D3B36] flex items-center justify-center">
          <p className="font-inter font-normal text-[20px] leading-[100%] tracking-[0] text-[#FEFFF4]">
            NEW ARRIVAL
          </p>
        </div>

        <div className="absolute top-[5200px] left-[761px] w-[175px] h-[60px] rounded-[100px] bg-[#FEFFF4] border border-[#2D3B36] flex items-center justify-center">
          <p className="font-inter font-normal text-[20px] leading-[100%] tracking-[0] text-[#2D3B36]">
            CLEANSING
          </p>
        </div>

        <div className="absolute top-[5200px] left-[956px] w-[205px] h-[60px] rounded-[100px] bg-[#FEFFF4] border border-[#2D3B36] flex items-center justify-center">
          <p className="font-inter font-normal text-[20px] leading-[100%] tracking-[0] text-[#2D3B36]">
            ACNE FIGHTER
          </p>
        </div>

        <div className="absolute top-[5200px] left-[1181px] w-[192px] h-[60px] rounded-[100px] bg-[#FEFFF4] border border-[#2D3B36] flex items-center justify-center">
          <p className="font-inter font-normal text-[20px] leading-[100%] tracking-[0] text-[#2D3B36]">
            ANTI AGGING
          </p>
        </div>
      </div>

      <div className="absolute top-[5300px] left-[100px] w-[560px] h-[770px] rounded-[20px] overflow-hidden">
        <img
          src="/assets/alya.jpg"
          alt="Skincare product"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute top-[5950px] left-[120px] w-[520px] h-[100px] rounded-[10px] bg-[#FEFFF4]"></div>
      <div className="absolute top-[5970px] left-[140px] w-[199px] h-[15px]">
        <p className="font-inter font-normal text-[20px] leading-[100%] tracking-[-0.05em] text-[#2D3B36]">
          ALYA SKIN CLEANSER.
        </p>
      </div>
      <div className="absolute top-[6010px] left-[140px] w-[97px] h-[12px] rounded">
        <p className="font-inter font-normal text-[16px] leading-[100%] tracking-[-0.05em] text-[#2D3B36]/50 text-center">
          FROM $29.99
        </p>
      </div>
      <div className="absolute top-[5960px] left-[550px] w-[80px] h-[80px] rounded-[10px] bg-[#2D3B36]/10"></div>

      <div className="absolute top-[5985px] left-[575px] w-[30px] h-[30px]">
        <ShoppingCart className="w-[30px] h-[30px] text-[#2D3B36]" />
      </div>

      <div className="absolute top-[5300px] left-[685px] w-[560px] h-[770px] rounded-[20px] overflow-hidden">
        <img
          src="/assets/ritual.jpg"
          alt="Product Image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute top-[5950px] left-[705px] w-[520px] h-[100px] rounded-[10px] bg-[#FEFFF4] shadow"></div>

      <div className="absolute top-[5970px] left-[725px] w-[379px] h-[15px]">
        <p className="font-inter font-normal text-[20px] leading-[100%] tracking-[-5%] text-[#2D3B36]">
          RITUAL OF SAKURA.
        </p>
      </div>

      <div className="absolute top-[6010px] left-[725px] w-[83px] h-[10px] ">
        <p
          style={{ letterSpacing: "-0.05em" }}
          className="font-inter font-normal text-[14px] leading-[100%] text-[#2D3B36]/50"
        >
          FROM $27.99
        </p>
      </div>

      <div className="absolute top-[5960px] left-[1135px] w-[80px] h-[80px] rounded-[10px] bg-[#2D3B36]"></div>

      <div className="absolute top-[5985px] left-[1160px] w-[30px] h-[30px]">
        <ShoppingCart className="w-[30px] h-[30px] text-[#f1f8f6]" />
      </div>

      <div className="absolute top-[5300px] left-[1270px] w-[550px] h-[770px] rounded-[20px] overflow-hidden">
        <img
          src="/assets/body.jpg"
          alt="Skincare product"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute top-[5950px] left-[1290px] w-[510px] h-[100px] rounded-[10px] bg-[#FEFFF4]"></div>

      <div className="absolute top-[5970px] left-[1310px] w-[379px] h-[15px]">
        <p className="font-inter font-normal text-[20px] leading-[100%] tracking-[-5%] text-[#2D3B36]">
          THE BODY LOTION.
        </p>
      </div>

      <div className="absolute top-[6010px] left-[1310px] w-[83px] h-[10px] ">
        <p
          style={{ letterSpacing: "-0.05em" }}
          className="font-inter font-normal text-[14px] leading-[100%] text-[#2D3B36]/50"
        >
          FROM $19.99
        </p>
      </div>

      <div className="absolute top-[5960px] left-[1710px] w-[80px] h-[80px] rounded-[10px] bg-[#2D3B361A]"></div>

      <div className="absolute top-[5985px] left-[1735px] w-[30px] h-[30px]">
        <ShoppingCart className="w-[30px] h-[30px] text-[#2D3B36]" />
      </div>
    </section>
  );
};

export default SkinCare;
