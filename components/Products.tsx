import React, { useEffect, useRef } from "react";
import { ShoppingCart } from "lucide-react";
import { gsap } from "gsap";

const Products = () => {
  const textRef = useRef(null);
  const buttonRef = useRef(null);

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
  }, []);

  const handleClick = () => {
    const section = document.getElementById("product-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const bestSellingRef = useRef(null);

  useEffect(() => {
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

  const scrollToProducts = () => {
    const section = document.getElementById("product-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[6000px]">
      <div
        ref={bestSellingRef}
        onClick={scrollToProducts}
        className="absolute top-[2490px] left-[200px] w-[290px] h-[60px] rounded-[100px] bg-[#FEFFF4] border border-[#2D3B36] flex items-center gap-3 pl-6 cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg"
      >
        <div className="w-[20px] h-[20px] bg-[#2D3B36] rounded-full" />
        <p className="font-inter font-normal text-[20px] text-[#2D3B36]">
          Best Selling Products
        </p>
      </div>

      <div className="absolute top-[2480px] left-[640px] w-[678px] h-[117px] text-center">
        <p className="font-inter font-normal text-[60px] leading-[100%] tracking-[-2%] text-[#2D3B36]">
          Skincare That Brings Out
          <br />
          Your Natural Radiance
        </p>
      </div>

      {/* Product Cards */}
      <div
        id="product-section"
        className="absolute top-[2700px] left-[100px] w-[560px] h-[770px] rounded-[20px] overflow-hidden"
      >
        <img
          src="/assets/alya.jpg"
          alt="Skincare product"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute top-[3350px] left-[120px] w-[520px] h-[100px] rounded-[10px] bg-[#FEFFF4]" />
      <div className="absolute top-[3370px] left-[140px] w-[299px]">
        <p className="font-inter font-normal text-[20px] text-[#2D3B36]">
          ALYA SKIN CLEANSER.
        </p>
      </div>
      <div className="absolute top-[3415px] left-[140px] ">
        <p className="font-inter font-normal text-[16px] text-[#2D3B36]/50">
          FROM $29.99
        </p>
      </div>
      <div className="absolute top-[3360px] left-[550px] w-[80px] h-[80px] rounded-[10px] bg-[#2D3B36]/10" />
      <div className="absolute top-[3385px] left-[575px]">
        <ShoppingCart className="w-[30px] h-[30px] text-[#2D3B36]" />
      </div>

      <div className="absolute top-[2700px] left-[685px] w-[560px] h-[770px] rounded-[20px] overflow-hidden">
        <img
          src="/assets/ritual.jpg"
          alt="Product Image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute top-[3350px] left-[705px] w-[520px] h-[100px] rounded-[10px] bg-[#FEFFF4] shadow" />
      <div className="absolute top-[3370px] left-[725px] w-[379px]">
        <p className="font-inter font-normal text-[20px] text-[#2D3B36]">
          RITUAL OF SAKURA.
        </p>
      </div>
      <div className="absolute top-[3415px] left-[725px]">
        <p className="font-inter font-normal text-[14px] text-[#2D3B36]/50">
          FROM $27.99
        </p>
      </div>
      <div className="absolute top-[3360px] left-[1135px] w-[80px] h-[80px] rounded-[10px] bg-[#2D3B361A]" />
      <div className="absolute top-[3385px] left-[1160px]">
        <ShoppingCart className="w-[30px] h-[30px] text-[#2D3B36]" />
      </div>

      <div className="absolute top-[2700px] left-[1270px] w-[550px] h-[770px] rounded-[20px] overflow-hidden">
        <img
          src="/assets/body.jpg"
          alt="Skincare product"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute top-[3350px] left-[1290px] w-[510px] h-[100px] rounded-[10px] bg-[#FEFFF4]" />
      <div className="absolute top-[3370px] left-[1310px]">
        <p className="font-inter font-normal text-[20px] text-[#2D3B36]">
          THE BODY LOTION.
        </p>
      </div>
      <div className="absolute top-[3415px] left-[1310px]">
        <p className="font-inter font-normal text-[14px] text-[#2D3B36]/50">
          FROM $19.99
        </p>
      </div>
      <div className="absolute top-[3360px] left-[1710px] w-[80px] h-[80px] rounded-[10px] bg-[#2D3B361A]" />
      <div className="absolute top-[3385px] left-[1735px]">
        <ShoppingCart className="w-[30px] h-[30px] text-[#2D3B36]" />
      </div>

      <div className="top-[3700px] left-[100px] w-[1719px] h-[1146px] rounded-[30px] overflow-hidden relative">
        <img
          src="/assets/cream.png"
          alt="Skincare Banner"
          className="w-full h-full object-cover"
        />

        <div
          className="absolute bottom-0 left-0 w-full h-[400px]"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #293330 100%)",
          }}
        />

        <div
          ref={textRef}
          className="absolute bottom-[50px] left-1/2 transform -translate-x-1/2 w-[1037px] text-center top-[800px]"
        >
          <p className="font-inter font-normal text-[80px] leading-[100%] tracking-[-0.02em] text-[#FEFFF4]">
            Feel Beautiful Inside and Out
            <br />
            with Every Product.
          </p>
        </div>

        <div
          ref={buttonRef}
          onClick={handleClick}
          className="absolute top-[1000px] left-[740px] w-[180px] h-[60px] rounded-[100px] bg-[#FEFFF4] flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-105 hover:brightness-90 shadow-md"
        >
          <p className="font-inter font-normal text-[#2D3B36] text-[18px]">
            Shop Now
          </p>
        </div>
      </div>
    </section>
  );
};

export default Products;
