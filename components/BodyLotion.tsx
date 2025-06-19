import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const BodyLotion = () => {
  return (
    <section className="w-full bg-[#FEFFF4] py-16 md:py-24 lg:py-32 px-4 md:px-8 lg:px-[100px]">
      <div className="max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="relative">
            <div className="w-full max-w-2xl mx-auto lg:max-w-none aspect-[850/900] rounded-[20px] overflow-hidden">
              <img
                src="/assets/body.jpg"
                alt="Descriptive alt text"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-8 md:-bottom-12 lg:-bottom-16 left-1/2 transform -translate-x-1/2 lg:left-1/4 lg:transform-none flex items-center gap-4 px-6 py-4 rounded-full bg-[#EFF5E1]">
              <div className="w-16 h-16 md:w-20 md:h-20 lg:w-[88px] lg:h-[88px] rounded-full border border-[#2D3B36] bg-[#2D3B36] flex items-center justify-center flex-shrink-0">
                <img
                  src="/assets/headphones.png"
                  alt="Headphone Icon"
                  className="w-8 h-8 md:w-10 md:h-10 lg:w-[40px] lg:h-[40px]"
                />
              </div>
              <p className="font-inter font-normal text-sm md:text-base lg:text-[20px] leading-[100%] text-[#2D3B36]">
                24/7 We're Here
                <br />
                to Help You
              </p>
            </div>
          </div>

          <div className="space-y-8 md:space-y-12 lg:space-y-16">
            <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-[#FEFFF4] border border-[#2D3B36]">
              <div className="w-5 h-5 bg-[#2D3B36] rounded-full"></div>
              <p className="font-inter font-normal text-lg md:text-xl lg:text-[20px] leading-[100%] text-[#2D3B36]">
                Frequently Asked Question
              </p>
            </div>

            <div className="space-y-6 md:space-y-8">
              <h2 className="font-inter font-normal text-3xl md:text-4xl lg:text-5xl xl:text-[60px] leading-[100%] tracking-[-0.02em] text-[#2D3B36]">
                Answers to Your
                <br />
                Skincare Questions, All
                <br />
                in One Place.
              </h2>

              <div className="w-full max-w-2xl">
                <Accordion type="single" collapsible className="space-y-4">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="flex justify-between items-center text-left bg-[#FEFFF4] border border-[#2D3B36] px-6 md:px-8 lg:px-[30px] py-4 md:py-5 lg:h-[70px] rounded-[5px] text-[#2D3B36] text-base md:text-lg lg:text-[20px] hover:bg-[#F5FBF0] transition-colors">
                      Are your products safe for sensitive skin?
                    </AccordionTrigger>
                    <AccordionContent className="bg-[#FEFFF4] border border-[#2D3B36] rounded-b-[5px] px-6 md:px-8 lg:px-[30px] pt-4 md:pt-5 lg:pt-[20px] pb-3 md:pb-4 lg:pb-[15px] text-[#525349] text-sm md:text-base lg:text-[14px] leading-[120%] lg:leading-[100%] tracking-[-0.05em]">
                      Absolutely! All our products are cruelty-free, and most
                      are vegan.
                      <br />
                      Check individual product details for specifics.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger className="flex justify-between items-center text-left bg-[#FEFFF4] border border-[#2D3B36] px-6 md:px-8 lg:px-[30px] py-4 md:py-5 lg:h-[70px] rounded-[5px] text-[#2D3B36] text-base md:text-lg lg:text-[20px] hover:bg-[#F5FBF0] transition-colors">
                      What's your return policy?
                    </AccordionTrigger>
                    <AccordionContent className="bg-[#FEFFF4] border border-[#2D3B36] rounded-b-[5px] px-6 md:px-8 lg:px-[30px] pt-4 md:pt-5 lg:pt-[20px] pb-3 md:pb-4 lg:pb-[15px] text-[#525349] text-sm md:text-base lg:text-[14px] leading-[120%] lg:leading-[100%] tracking-[-0.05em]">
                      We offer a 30-day return policy on all unopened and unused
                      products.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger className="flex justify-between items-center text-left bg-[#FEFFF4] border border-[#2D3B36] px-6 md:px-8 lg:px-[30px] py-4 md:py-5 lg:h-[70px] rounded-[5px] text-[#2D3B36] text-base md:text-lg lg:text-[20px] hover:bg-[#F5FBF0] transition-colors">
                      Do you ship internationally?
                    </AccordionTrigger>
                    <AccordionContent className="bg-[#FEFFF4] border border-[#2D3B36] rounded-b-[5px] px-6 md:px-8 lg:px-[30px] pt-4 md:pt-5 lg:pt-[20px] pb-3 md:pb-4 lg:pb-[15px] text-[#525349] text-sm md:text-base lg:text-[14px] leading-[120%] lg:leading-[100%] tracking-[-0.05em]">
                      Yes, we ship worldwide! Delivery times and fees vary by
                      location.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger className="flex justify-between items-center text-left bg-[#FEFFF4] border border-[#2D3B36] px-6 md:px-8 lg:px-[30px] py-4 md:py-5 lg:h-[70px] rounded-[5px] text-[#2D3B36] text-base md:text-lg lg:text-[20px] hover:bg-[#F5FBF0] transition-colors">
                      How do I choose the right product?
                    </AccordionTrigger>
                    <AccordionContent className="bg-[#FEFFF4] border border-[#2D3B36] rounded-b-[5px] px-6 md:px-8 lg:px-[30px] pt-4 md:pt-5 lg:pt-[20px] pb-3 md:pb-4 lg:pb-[15px] text-[#525349] text-sm md:text-base lg:text-[14px] leading-[120%] lg:leading-[100%] tracking-[-0.05em]">
                      You can take our product quiz or contact our support for
                      personalized recommendations.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BodyLotion;
