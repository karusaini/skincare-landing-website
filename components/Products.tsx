import React, { useEffect, useRef } from "react";
import { ShoppingCart } from "lucide-react";
import { gsap } from "gsap";

const Products = () => {
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const bestSellingRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.3,
      }
    );

    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "back.out(1.7)",
        delay: 0.8,
      }
    );

    gsap.fromTo(
      bestSellingRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      }
    );
  }, []);

  const handleClick = () => {
    const section = document.getElementById("product-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProducts = () => {
    const section = document.getElementById("product-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="w-full bg-[#FEFFF4] py-16 md:py-24 lg:py-32 px-4 md:px-8 lg:px-[100px]">
      <div className="max-w-[1920px] mx-auto">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <div
            ref={bestSellingRef}
            onClick={scrollToProducts}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#FEFFF4] border border-[#2D3B36] cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-[#F5FBF0] mb-8 md:mb-12"
          >
            <div className="w-5 h-5 bg-[#2D3B36] rounded-full" />
            <p className="font-inter font-normal text-lg md:text-xl lg:text-[20px] text-[#2D3B36]">
              Best Selling Products
            </p>
          </div>

          <h2 className="font-inter font-normal text-3xl md:text-4xl lg:text-5xl xl:text-[60px] leading-[100%] tracking-[-0.02em] text-[#2D3B36] max-w-4xl mx-auto">
            Skincare That Brings Out
            <br />
            Your Natural Radiance
          </h2>
        </div>

        <div
          id="product-section"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 mb-16 md:mb-24 lg:mb-32"
        >
          <div className="group">
            <div className="w-full aspect-[560/770] rounded-[20px] overflow-hidden mb-4">
              <img
                src="/assets/alya.jpg"
                alt="Skincare product"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="bg-[#FEFFF4] rounded-[10px] p-4 md:p-6 flex items-center justify-between">
              <div>
                <p className="font-inter font-normal text-lg md:text-xl lg:text-[20px] text-[#2D3B36] mb-2">
                  ALYA SKIN CLEANSER.
                </p>
                <p className="font-inter font-normal text-sm md:text-base lg:text-[16px] text-[#2D3B36]/50">
                  FROM $29.99
                </p>
              </div>
              <div className="w-16 h-16 md:w-20 md:h-20 lg:w-[80px] lg:h-[80px] rounded-[10px] bg-[#2D3B36]/10 flex items-center justify-center cursor-pointer hover:bg-[#2D3B36]/20 transition-colors">
                <ShoppingCart className="w-6 h-6 md:w-7 md:h-7 lg:w-[30px] lg:h-[30px] text-[#2D3B36]" />
              </div>
            </div>
          </div>

          <div className="group">
            <div className="w-full aspect-[560/770] rounded-[20px] overflow-hidden mb-4">
              <img
                src="/assets/ritual.jpg"
                alt="Product Image"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="bg-[#FEFFF4] rounded-[10px] p-4 md:p-6 flex items-center justify-between shadow">
              <div>
                <p className="font-inter font-normal text-lg md:text-xl lg:text-[20px] text-[#2D3B36] mb-2">
                  RITUAL OF SAKURA.
                </p>
                <p className="font-inter font-normal text-sm md:text-base lg:text-[14px] text-[#2D3B36]/50">
                  FROM $27.99
                </p>
              </div>
              <div className="w-16 h-16 md:w-20 md:h-20 lg:w-[80px] lg:h-[80px] rounded-[10px] bg-[#2D3B36]/10 flex items-center justify-center cursor-pointer hover:bg-[#2D3B36]/20 transition-colors">
                <ShoppingCart className="w-6 h-6 md:w-7 md:h-7 lg:w-[30px] lg:h-[30px] text-[#2D3B36]" />
              </div>
            </div>
          </div>

          <div className="group md:col-span-2 lg:col-span-1">
            <div className="w-full aspect-[560/770] rounded-[20px] overflow-hidden mb-4">
              <img
                src="/assets/body.jpg"
                alt="Skincare product"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="bg-[#FEFFF4] rounded-[10px] p-4 md:p-6 flex items-center justify-between">
              <div>
                <p className="font-inter font-normal text-lg md:text-xl lg:text-[20px] text-[#2D3B36] mb-2">
                  THE BODY LOTION.
                </p>
                <p className="font-inter font-normal text-sm md:text-base lg:text-[14px] text-[#2D3B36]/50">
                  FROM $19.99
                </p>
              </div>
              <div className="w-16 h-16 md:w-20 md:h-20 lg:w-[80px] lg:h-[80px] rounded-[10px] bg-[#2D3B36]/10 flex items-center justify-center cursor-pointer hover:bg-[#2D3B36]/20 transition-colors">
                <ShoppingCart className="w-6 h-6 md:w-7 md:h-7 lg:w-[30px] lg:h-[30px] text-[#2D3B36]" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-full max-w-[1400px] lg:max-w-[1600px] xl:max-w-[1800px] mx-auto aspect-[1719/900] rounded-[30px] overflow-hidden">
          <img
            src="/assets/cream.png"
            alt="Skincare Banner"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#293330] via-transparent to-transparent" />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-8">
            <div ref={textRef} className="mb-8 md:mb-12">
              <p className="font-inter font-normal text-2xl md:text-4xl lg:text-6xl xl:text-[80px] leading-[100%] tracking-[-0.02em] text-[#FEFFF4] max-w-4xl">
                Feel Beautiful Inside and Out
                <br />
                with Every Product.
              </p>
            </div>

            <div ref={buttonRef}>
              <button
                onClick={handleClick}
                className="px-8 py-3 md:px-10 md:py-4 lg:w-[180px] lg:h-[60px] rounded-full bg-[#FEFFF4] font-inter font-normal text-[#2D3B36] text-base md:text-lg lg:text-[18px] cursor-pointer transition-all duration-300 hover:scale-105 hover:brightness-90 shadow-md hover:shadow-lg lg:mt-92"
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
