"use client";

import React, { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Products from "@/components/Products";
import SkinCare from "@/components/SkinCare";
import BodyLotion from "@/components/BodyLotion";
import Footer from "@/components/Footer";
import { gsap } from "gsap";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power2.out" } });

    tl.fromTo(
      containerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.8 }
    );

    const sections = containerRef.current.children[0].children;
    tl.fromTo(
      sections,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
      },
      "<"
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-[1920px] h-[9490px] relative bg-[#EFF5E1] opacity-0"
    >
      <Navbar />
      <Hero />
      <div className="absolute top-[1400px] w-[1920px] h-[7303px] bg-[#FEFFF4]">
        <Experience />
        <Products />
        <SkinCare />
        <BodyLotion />
        <Footer />
      </div>
    </div>
  );
}
