"use client";
import React, { useEffect, useRef } from "react";
import { ShoppingCart } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Products = () => {
  const productRefs = useRef([]);
  const bannerRef = useRef(null);

  useEffect(() => {
    productRefs.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Animate Cream Section
    gsap.fromTo(
      bannerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: bannerRef.current,
          start: "top 90%",
        },
      }
    );
  }, []);

  // Helper to register refs
  const addToRefs = (el) => {
    if (el && !productRefs.current.includes(el)) {
      productRefs.current.push(el);
    }
  };

  return (
    <section className="relative min-h-[6000px]">
      {/* Title Section */}
      {/* ...Title elements here... */}

      {/* Products */}
      <div
        className="absolute top-[2700px] left-[100px] w-[560px] h-[770px] rounded-[20px] overflow-hidden"
        ref={addToRefs}
      >
        <img
          src="/assets/alya.jpg"
          alt="Skincare product"
          className="w-full h-full object-cover"
        />
      </div>

      <div
        className="absolute top-[2700px] left-[685px] w-[560px] h-[770px] rounded-[20px] overflow-hidden"
        ref={addToRefs}
      >
        <img
          src="/assets/ritual.jpg"
          alt="Skincare product"
          className="w-full h-full object-cover"
        />
      </div>

      <div
        className="absolute top-[2700px] left-[1270px] w-[550px] h-[770px] rounded-[20px] overflow-hidden"
        ref={addToRefs}
      >
        <img
          src="/assets/body.jpg"
          alt="Skincare product"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Cream Banner Section */}
      <div
        className="top-[3700px] left-[100px] w-[1719px] h-[1146px] rounded-[30px] overflow-hidden relative"
        ref={bannerRef}
      >
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
        <div className="absolute bottom-[50px] left-1/2 transform -translate-x-1/2 w-[1037px] text-center top-[800px]">
          <p className="font-inter font-normal text-[80px] leading-[100%] tracking-[-0.02em] text-[#FEFFF4]">
            Feel Beautiful Inside and Out
            <br />
            with Every Product.
          </p>
        </div>
        <div className="absolute top-[1000px] left-[740px] w-[180px] h-[60px] rounded-[100px] bg-[#FEFFF4] flex items-center justify-center cursor-pointer">
          <p className="font-inter font-normal text-[#2D3B36] text-[18px]">
            Shop Now
          </p>
        </div>
      </div>
    </section>
  );
};

export default Products;
