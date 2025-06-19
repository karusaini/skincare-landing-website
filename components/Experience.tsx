import React from "react";

const Experience = () => {
  return (
    <section className="w-full bg-[#FEFFF4] py-16 md:py-24 lg:py-32 px-4 md:px-8 lg:px-[100px]">
      <div className="max-w-[1920px] mx-auto">
        <div className="text-center mb-16 md:mb-24 lg:mb-32">
          <p className="font-inter font-normal text-2xl md:text-4xl lg:text-[53px] leading-[120%] md:leading-[140%] lg:leading-[78px] tracking-[-0.035em] text-[#2D3B36] max-w-6xl mx-auto">
            Experience the ultimate in skincare with our expertly formulated
            products, crafted to nourish, protect, and rejuvenate your skin.
            Combining the finest natural ingredients with{" "}
            <span className="text-[#BCC5BD]">
              advanced science, our collection ensures every skin type can
              achieve a radiant, healthy glow. Embrace your beauty with
              confidence every day. Experience the ultimate in skincare with our
              expertly formulated products, crafted to nourish, protect, and
              rejuvenate your skin.
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-12 md:space-y-16 lg:space-y-20">
            <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full border border-[#2D3B36] bg-[#FEFFF4]">
              <div className="w-5 h-5 bg-[#2D3B36] rounded-full"></div>
              <p className="font-inter font-normal text-lg md:text-xl lg:text-[20px] leading-[100%] text-[#2D3B36]">
                Why Our Products
              </p>
            </div>

            <div className="space-y-8 md:space-y-12">
              <h2 className="font-inter font-normal text-3xl md:text-4xl lg:text-5xl xl:text-[60px] leading-[100%] tracking-[-0.02em] text-[#2D3B36]">
                YOUR SKIN DESERVES <br />
                THE BEST CARE.
              </h2>

              <p className="font-inter font-normal text-base md:text-lg lg:text-[18px] leading-[140%] md:leading-[150%] lg:leading-[24px] tracking-[-0.02em] text-[#2D3B36] max-w-2xl">
                Discover a curated collection of skincare products designed to
                rejuvenate, protect, and pamper your skin. Explore our rage
                crafted with love backed by science, and inspired by nature.
              </p>
            </div>

            <div className="space-y-8 md:space-y-12 lg:space-y-16">
              <div className="flex gap-6 md:gap-8 lg:gap-12 items-start">
                <div className="text-3xl md:text-4xl lg:text-5xl xl:text-[60px] font-inter font-normal leading-[100%] tracking-[-0.02em] text-transparent bg-clip-text bg-gradient-to-b from-[#293330] to-[#FEFFF4] flex-shrink-0">
                  01
                </div>
                <div className="space-y-3 md:space-y-4">
                  <h3 className="font-inter font-normal text-2xl md:text-3xl lg:text-4xl xl:text-[60px] leading-[100%] tracking-[-0.02em] text-[#2D3B36]">
                    Bio Ingredients
                  </h3>
                  <p className="font-inter font-normal text-sm md:text-base lg:text-[16px] leading-[140%] lg:leading-[100%] text-[#525349]">
                    Get naturally beautiful and transform with our bio
                    ingredients creams for healthy, radiant skin.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 md:gap-8 lg:gap-12 items-start">
                <div className="text-3xl md:text-4xl lg:text-5xl xl:text-[60px] font-inter font-normal leading-[100%] tracking-[-0.02em] text-transparent bg-clip-text bg-gradient-to-b from-[#293330] to-[#FEFFF4] flex-shrink-0">
                  02
                </div>
                <div className="space-y-3 md:space-y-4">
                  <h3 className="font-inter font-normal text-2xl md:text-3xl lg:text-4xl xl:text-[60px] leading-[100%] tracking-[-0.02em] text-[#2D3B36]">
                    Everything Natural
                  </h3>
                  <p className="font-inter font-normal text-sm md:text-base lg:text-[18px] leading-[140%] lg:leading-[24px] tracking-[-0.02em] text-[#2D3B36]">
                    Pure ingredients for pure skin. The Perfect solution for
                    your skin care needs.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 md:gap-8 lg:gap-12 items-start">
                <div className="text-3xl md:text-4xl lg:text-5xl xl:text-[60px] font-inter font-normal leading-[100%] tracking-[-0.02em] text-transparent bg-clip-text bg-gradient-to-b from-[#293330] to-[#FEFFF4] flex-shrink-0">
                  03
                </div>
                <div className="space-y-3 md:space-y-4">
                  <h3 className="font-inter font-normal text-2xl md:text-3xl lg:text-4xl xl:text-[60px] leading-[100%] tracking-[-0.02em] text-[#2D3B36]">
                    All Handmade
                  </h3>
                  <p className="font-inter font-normal text-sm md:text-base lg:text-[18px] leading-[140%] lg:leading-[24px] tracking-[-0.02em] text-[#000000]">
                    Made with love and care. Just for you. Give your skin the
                    tender loving care it deserves.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 md:pt-12 lg:pt-16">
              <p className="font-inter font-normal text-lg md:text-xl lg:text-[20px] leading-[100%] tracking-[-0.02em] uppercase text-[#2D3B36]">
                since 2001
              </p>
              <p className="font-inter font-normal text-lg md:text-xl lg:text-[20px] leading-[100%] tracking-[-0.02em] uppercase text-[#000000] cursor-pointer hover:text-[#2D3B36] transition-colors">
                LEARN MORE
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="w-full max-w-2xl mx-auto lg:max-w-none aspect-[849/1081] rounded-[30px] overflow-hidden">
              <img
                src="/assets/skincare.png"
                alt="Skincare Visual"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-8 md:-bottom-12 lg:-bottom-16 left-1/2 transform -translate-x-1/2 lg:left-auto lg:right-0 lg:transform-none flex items-center gap-4 px-6 py-4 rounded-full bg-[#EFF5E1]">
              <div className="w-16 h-16 md:w-20 md:h-20 lg:w-[88px] lg:h-[88px] rounded-full border border-[#2D3B36] bg-[#EFF5E1] flex-shrink-0"></div>
              <p className="font-inter font-normal text-sm md:text-base lg:text-[20px] leading-[100%] text-[#2D3B36]">
                Best Skin Care Product
                <br />
                Award Winning
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
