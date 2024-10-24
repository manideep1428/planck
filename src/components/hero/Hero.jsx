import React from "react";

const Hero = () => {
  return (
    <>
      <div className="bg-[#000f0c]">
        <div className="relative  w-[100%] h-[130vh]  flex justify-center">
          <img
            className="absolute h-[100vh] sm:flex hidden lg:h-[130vh] md:w-[100vw]"
            src="/public/assets/Images/Hero_Background Image.png"
            alt=""
          />
          <div className="z-10 absolute flex flex-col items-center mt-[177px]">
            <span
              style={{
                background:
                  "linear-gradient(193.7deg, rgba(255, 255, 255, 0.15) 10.26%, rgba(153, 153, 153, 0.15) 90.74%)",
                borderImageSource:
                  "linear-gradient(108.73deg, rgba(255, 255, 255, 0.21) 35.37%, rgba(0, 0, 0, 0) 64.63%)",
              }}
              className="w-[258px] h-[34px] text-[#BEBEBE] font-medium text-[15px] flex justify-center items-center rounded-[19.5px] border-[0.75px] "
            >
              Join the Global Planck Movement
            </span>
            <div className="md:w-[600px] sm:mb-0 mb-[12rem] lg:w-[940px] pt-[3px] flex-col gap-[8px] flex items-center h-[167px]">
              <h1
                style={{
                  background:
                    "linear-gradient(180deg, #FFFFFF 59.86%, #999999 79.82%)",
                  WebkitBackgroundClip: "text",
                }}
                className="lg:text-[67.5px] bg-clip-text text-transparent leading-[81.69px] font-semibold text-center text-[40px] md:text-[50px]" // Adjusted font size for responsiveness
              >
                Welcome to <br />
                Planck Ambassador Program
              </h1>
              <p className="text-[#BEBEBE] text-[16px] md:text-[18px] font-medium ">
                Apply to become the voice of Planck
              </p>
            </div>
            <div className="relative w-[192px] mt-[40px] md:mt-[100px] cursor-pointer transition-transform transform hover:scale-105 active:scale-95 h-[69.75px] rounded-[12.75px] flex items-center justify-center overflow-hidden">
              <div className="absolute border-top animate-border"></div>
              <div className="absolute border-right animate-border"></div>
              <div className="absolute border-bottom animate-border"></div>
              <div className="absolute border-left animate-border"></div>
              <div className="relative z-10 flex items-center justify-center h-full">
                <img src="/assets/Icons/Frame 19.svg" alt="Button Icon" />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:h-[100vh]  bg-[#000f0c]">
          <div className="pt-[60px] md:pt-[168.75px]">
            {" "}
            {/* Adjusted padding for smaller screens */}
            <div className="mb-[40px] md:mb-[66px]">
              <h1
                style={{
                  background:
                    "linear-gradient(180deg, #FFFFFF 59.86%, #999999 79.82%)",
                  WebkitBackgroundClip: "text",
                }}
                className="text-[24px] md:text-[45.5px] bg-clip-text text-transparent leading-[30px] md:leading-[81.69px] font-semibold text-center"
              >
                Why Become a Planck Ambassador
              </h1>
            </div>
            <div className="lg:w-[999px] justify-center flex flex-wrap gap-[30px] md:gap-[90.75px] mx-auto">
              {" "}
              {/* Adjusted gap for responsiveness */}
              {dataOf2ndPage.benefits.map((el, index) => {
                return (
                  <div
                    key={index}
                    className="w-[250px] md:w-[269.25px] gap-[20px] md:gap-[30px] flex h-[120px] md:h-[133.5px]" // Responsive height and width
                  >
                    <span>
                      <img src="/assets/Icons/Frame 49.svg" alt="" />
                    </span>
                    <div className="flex-col flex gap-[8px] w-[200px] md:w-[206.25px] h-[99px]">
                      <span>
                        <img
                          className="w-[18px] md:w-[19.69px] h-[18px] md:h-[19.69px]"
                          src={el.svg}
                          alt=""
                        />
                      </span>
                      <h1 className="font-semibold text-[#FFFFFF] leading-[18px] text-[14px] md:text-[15px]">
                        {el.title}
                      </h1>
                      <p className="text-[#BEBEBE] text-[10px] md:text-[11.25px] tracking-[-3%] leading-[13px] md:leading-[13.62px] font-medium">
                        {el.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="lg:h-[100vh] relative bg-[#000f0c]">
          <div className="h-[216px]">
            <div className=" w-[216px] bg-[#00FFEF] blur-[225px] absolute bottom-0 h-[216px]"></div>
          </div>

          <div className="w-[1244px] mx-auto h-[432px] border-[#666666] flex items-center  justify-center  border-[0.75px] rounded-[26.25px]">
            <div className="  w-[599.25px] pl-[50px]  h-[240.25px] flex flex-col gap-[16px] ">
              <h1
                style={{
                  background:
                    "linear-gradient(180deg, #FFFFFF 59.86%, #999999 79.82%)",
                  WebkitBackgroundClip: "text",
                }}
                className="text-[24px] md:text-[45.5px] bg-clip-text text-transparent leading-[30px] md:leading-[45.69px] font-semibold "
              >
                Join the Community
              </h1>
              <p className="w-[584px] text-[#808080] h-[66px] ">
                Fill out our application form to get started. If selected,
                you’ll join an elite group of ambassadors helping to push the
                boundaries of decentralized technology. Win exciting rewards
                when you surpassed your competitors
              </p>
              <button className=" w-[180px] h-[58px] mt-[18px] rounded-[29.25px] bg-gradient-to-b text-white font-semibold from-[rgba(0,255,242,09)] to-[#00766E] text-[18px] ">
                Apply Now
              </button>
            </div>
            <img className=" pr-[20px]" src="/public/assets/Images/Earth.png" alt="" />
          </div>
        </div>
        <div className="lg:h-[50vh]  flex justify-center items-center bg-[#000f0c]" >
          <div className=" w-[825px] text-center h-[182.25px] ">
          <h1
                style={{
                  background:
                    "linear-gradient(180deg, #FFFFFF 59.86%, #999999 79.82%)",
                  WebkitBackgroundClip: "text",
                }}
                className="text-[24px] md:text-[45.5px] bg-clip-text text-transparent leading-[30px] md:leading-[45.69px] font-semibold "
              >
                Ready to Make an Impact?
              </h1>
              <p className=" text-center text-[22.5px]  pt-[20px]  leading-[30px]  text-[#BEBEBE]  ">
              Join us on this journey to shape the future of decentralized computing. Apply now to become a <span className="text-white font-semibold">Planck Ambassador</span> and be part of something groundbreaking. This is your opportunity to help revolutionize Web3, while gaining rewards and recognition along the way. Let’s build the future together! 
              </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
