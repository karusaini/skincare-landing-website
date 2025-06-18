import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const BodyLotion = () => {
  return (
    <section>
      <div className="absolute top-[6280px] left-[100px] w-[850px] h-[900px] overflow-hidden rounded-[20px]">
        <img
          src="/assets/body.jpg"
          alt="Descriptive alt text"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute top-[7060px] left-[325px] w-[306px] h-[100px] rounded-[200px] bg-[#EFF5E1]"></div>

      <div className="absolute top-[7065px] left-[331px] w-[88px] h-[88px] rounded-[50px] border border-[#2D3B36] bg-[#2D3B36] flex items-center justify-center">
        <img
          src="/assets/headphones.png"
          alt="Headphone Icon"
          className="w-[40px] h-[40px]"
          style={{ marginTop: "-5px" }}
        />
      </div>

      <div className="absolute top-[7090px] left-[449px] w-[152px] h-[39px] ">
        <p className="font-inter font-normal text-[20px] leading-[100%] tracking-[0] text-[#2D3B36] text-center">
          24/7 We’re Here
          <br />
          to Help You
        </p>
      </div>

      <div className="absolute top-[6280px] left-[1100px] w-[341px] h-[60px] rounded-[100px] bg-[#FEFFF4] border border-[#2D3B36] flex items-center pl-[20px] gap-[20px]">
        <div className="w-[20px] h-[20px] bg-[#2D3B36] rounded-full"></div>
        <p className="font-inter font-normal text-[20px] leading-[100%] tracking-[0] text-[#2D3B36]">
          Frequently Asked Question
        </p>
      </div>

      <div className="absolute top-[6400px] left-[1100px] w-[623px] h-[190px] text-[#2D3B36]">
        <p className="font-inter font-normal text-[60px] leading-[100%] tracking-[-0.02em]">
          Answers to Your
          <br />
          Skincare Questions, All
          <br />
          in One Place.
        </p>
      </div>

      <div className="absolute top-[6640px] left-[1100px] w-[600px] z-10">
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1">
            <AccordionTrigger className="flex justify-between items-center text-left bg-[#FEFFF4] border border-[#2D3B36] px-[30px] h-[70px] rounded-[5px] text-[#2D3B36] text-[20px]">
              Are your products safe for sensitive skin?
            </AccordionTrigger>
            <AccordionContent className="bg-[#FEFFF4] border border-[#2D3B36] rounded-b-[5px] px-[30px] pt-[20px] pb-[15px] text-[#525349] text-[14px] leading-[100%] tracking-[-0.05em] ">
              Absolutely! All our products are cruelty-free, and most are vegan.
              <br />
              Check individual product details for specifics.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="flex justify-between items-center text-left bg-[#FEFFF4] border border-[#2D3B36] px-[30px] h-[70px] rounded-[5px] text-[#2D3B36] text-[20px]">
              What’s your return policy?
            </AccordionTrigger>
            <AccordionContent className="bg-[#FEFFF4] border border-[#2D3B36] rounded-b-[5px] px-[30px] pt-[20px] pb-[15px] text-[#525349] text-[14px] leading-[100%] tracking-[-0.05em]">
              We offer a 30-day return policy on all unopened and unused
              products.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="flex justify-between items-center text-left bg-[#FEFFF4] border border-[#2D3B36] px-[30px] h-[70px] rounded-[5px] text-[#2D3B36] text-[20px]">
              Do you ship internationally?
            </AccordionTrigger>
            <AccordionContent className="bg-[#FEFFF4] border border-[#2D3B36] rounded-b-[5px] px-[30px] pt-[20px] pb-[15px] text-[#525349] text-[14px] leading-[100%] tracking-[-0.05em]">
              Yes, we ship worldwide! Delivery times and fees vary by location.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="flex justify-between items-center text-left bg-[#FEFFF4] border border-[#2D3B36] px-[30px] h-[70px] rounded-[5px] text-[#2D3B36] text-[20px]">
              How do I choose the right product?
            </AccordionTrigger>
            <AccordionContent className="bg-[#FEFFF4] border border-[#2D3B36] rounded-b-[5px] px-[30px] pt-[20px] pb-[15px] text-[#525349] text-[14px] leading-[100%] tracking-[-0.05em]">
              You can take our product quiz or contact our support for
              personalized recommendations.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default BodyLotion;
