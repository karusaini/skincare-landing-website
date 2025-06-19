import { ShoppingCart } from "lucide-react";
import React, { useState } from "react";

const SkinCare = () => {
  const [clickedButton, setClickedButton] = useState("");

  const buttons = [
    { id: "new", label: "NEW ARRIVAL" },
    { id: "cleanse", label: "CLEANSING" },
    { id: "acne", label: "ACNE FIGHTER" },
    { id: "aging", label: "ANTI AGING" },
  ];

  return (
    <section className="w-full bg-[#FEFFF4] py-16 md:py-24 lg:py-32 px-4 md:px-8 lg:px-[100px]">
      <div className="max-w-[1920px] mx-auto">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="font-inter font-normal text-3xl md:text-4xl lg:text-5xl xl:text-[60px] leading-[100%] tracking-[-0.02em] text-[#2D3B36] max-w-4xl mx-auto mb-8 md:mb-12">
            Feel Beautiful Inside and Out
            <br />
            with Every Product.
          </h2>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4 lg:gap-6">
            {buttons.map((btn) => {
              const isActive = clickedButton === btn.id;

              return (
                <button
                  key={btn.id}
                  onClick={() =>
                    setClickedButton((prev) => (prev === btn.id ? "" : btn.id))
                  }
                  className={`px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-4 rounded-full transition-all duration-300 active:scale-95 hover:shadow-md ${
                    isActive
                      ? "bg-[#2D3B36] text-[#FEFFF4]"
                      : "bg-[#FEFFF4] border border-[#2D3B36] text-[#2D3B36] hover:bg-[#F5FBF0]"
                  }`}
                >
                  <span className="font-inter font-normal text-sm md:text-base lg:text-[20px] whitespace-nowrap">
                    {btn.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          <div className="group relative">
            <div className="w-full aspect-[560/770] rounded-[20px] overflow-hidden mb-4">
              <img
                src="/assets/alya.jpg"
                alt="Skincare product"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="absolute w-full bottom-[20px] p-[20px]">
              <div className="bg-[#FEFFF4] rounded-[10px] p-4 md:p-6 flex items-center justify-between">
                <div>
                  <p className="font-inter font-normal text-lg md:text-xl lg:text-[20px] tracking-[-0.05em] text-[#2D3B36] mb-2">
                    ALYA SKIN CLEANSER.
                  </p>
                  <p className="font-inter font-normal text-sm md:text-base lg:text-[16px] tracking-[-0.05em] text-[#2D3B36]/50">
                    FROM $29.99
                  </p>
                </div>
                <div className="w-16 h-16 md:w-20 md:h-20 lg:w-[80px] lg:h-[80px] rounded-[10px] bg-[#2D3B36]/10 flex items-center justify-center cursor-pointer hover:bg-[#2D3B36]/20 transition-colors">
                  <ShoppingCart className="w-6 h-6 md:w-7 md:h-7 lg:w-[30px] lg:h-[30px] text-[#2D3B36]" />
                </div>
              </div>
            </div>
          </div>

          <div className="group relative">
            <div className="w-full aspect-[560/770] rounded-[20px] overflow-hidden mb-4">
              <img
                src="/assets/ritual.jpg"
                alt="Product Image"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="absolute w-full bottom-[20px] p-[20px]">
              <div className="bg-[#FEFFF4] rounded-[10px] p-4 md:p-6 flex items-center justify-between shadow">
                <div>
                  <p className="font-inter font-normal text-lg md:text-xl lg:text-[20px] tracking-[-0.05em] text-[#2D3B36] mb-2">
                    RITUAL OF SAKURA.
                  </p>
                  <p className="font-inter font-normal text-sm md:text-base lg:text-[14px] tracking-[-0.05em] text-[#2D3B36]/50">
                    FROM $27.99
                  </p>
                </div>
                <div className="w-16 h-16 md:w-20 md:h-20 lg:w-[80px] lg:h-[80px] rounded-[10px] bg-[#2D3B36] flex items-center justify-center cursor-pointer hover:bg-[#3A4C44] transition-colors">
                  <ShoppingCart className="w-6 h-6 md:w-7 md:h-7 lg:w-[30px] lg:h-[30px] text-[#f1f8f6]" />
                </div>
              </div>
            </div>
          </div>

          <div className="group relative md:col-span-2 lg:col-span-1">
            <div className="w-full aspect-[560/770] rounded-[20px] overflow-hidden mb-4">
              <img
                src="/assets/body.jpg"
                alt="Skincare product"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="absolute w-full bottom-[20px] p-[20px]">
              <div className="bg-[#FEFFF4] rounded-[10px] p-4 md:p-6 flex items-center justify-between">
                <div>
                  <p className="font-inter font-normal text-lg md:text-xl lg:text-[20px] tracking-[-0.05em] text-[#2D3B36] mb-2">
                    THE BODY LOTION.
                  </p>
                  <p className="font-inter font-normal text-sm md:text-base lg:text-[14px] tracking-[-0.05em] text-[#2D3B36]/50">
                    FROM $19.99
                  </p>
                </div>
                <div className="w-16 h-16 md:w-20 md:h-20 lg:w-[80px] lg:h-[80px] rounded-[10px] bg-[#2D3B36]/10 flex items-center justify-center cursor-pointer hover:bg-[#2D3B36]/20 transition-colors">
                  <ShoppingCart className="w-6 h-6 md:w-7 md:h-7 lg:w-[30px] lg:h-[30px] text-[#2D3B36]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkinCare;
