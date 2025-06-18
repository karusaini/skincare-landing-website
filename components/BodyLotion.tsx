import React from "react";

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

      <div className="absolute top-[6640px] left-[1100px] w-[600px] h-[70px] rounded-[5px] border border-[#2D3B36] bg-[#FEFFF4] flex items-center justify-between px-[30px]">
        <p className="font-inter font-normal text-[20px] leading-[100%] tracking-[0] text-[#2D3B36]">
          Are your products safe for sensitive skin?
        </p>
        <div className="w-[30px] h-[30px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#2D3B36"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </div>
      </div>

      <div className="absolute top-[6740px] left-[1100px] w-[600px] h-[126px] rounded-[5px] border border-[#2D3B36] bg-[#FEFFF4] px-[30px] pt-[20px] pb-[15px]">
        <div className="flex justify-between items-start">
          <p className="font-inter font-normal text-[20px] leading-[100%] tracking-[0] text-[#2D3B36]">
            Are your products safe for sensitive skin?
          </p>
          <div className="w-[30px] h-[30px]">
            {/* Horizontal minus icon (unrotated) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#2D3B36"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </div>
        </div>

        <p className="mt-[20px] font-inter font-normal text-[14px] leading-[100%] tracking-[-0.05em] text-[#525349]">
          Absolutely! All our products are cruelty-free, and most are vegan.
          <br />
          Check individual product details for specifics.
        </p>
      </div>

      <div className="absolute top-[6900px] left-[1100px] w-[600px] h-[70px] rounded-[5px] border border-[#2D3B36] bg-[#FEFFF4] px-[30px] flex items-center justify-between">
        {/* Text */}
        <p className="font-inter font-normal text-[20px] leading-[100%] tracking-[0] text-[#2D3B36]">
          What’s your return policy?
        </p>

        {/* Plus Icon */}
        <div className="w-[30px] h-[30px] flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#2D3B36"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </div>
      </div>

      <div className="absolute top-[7000px] left-[1100px] w-[600px] h-[70px] rounded-[5px] border border-[#2D3B36] bg-[#FEFFF4] px-[30px] flex items-center justify-between">
        {/* Question Text */}
        <p className="font-inter font-normal text-[20px] leading-[100%] tracking-[0] text-[#2D3B36]">
          Do you ship internationally?
        </p>

        {/* Plus Icon */}
        <div className="w-[30px] h-[30px] flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#2D3B36"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </div>
      </div>

      <div className="absolute top-[7100px] left-[1100px] w-[600px] h-[70px] rounded-[5px] border border-[#2D3B36] bg-[#FEFFF4] px-[30px] flex items-center justify-between">
        {/* Question Text */}
        <p className="font-inter font-normal text-[20px] leading-[100%] tracking-[0] text-[#2D3B36]">
          How do I choose the right product?
        </p>

        {/* Plus Icon */}
        <div className="w-[30px] h-[30px] flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#2D3B36"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default BodyLotion;
