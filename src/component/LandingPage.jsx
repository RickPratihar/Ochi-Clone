import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import { motion } from "framer-motion";
const LandingPage = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className=" w-full h-full pt-10">
      <div className="textstructure mt-20 md:mt-40 px-3 md:px-20">
        {["WE CREATE", "EYE OPENING", "PRESENTATIONS"].map((item, index) => {
          return (
            <div className="masker ">
              <div className=" w-fit flex items-center overflow-hidden">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1}}
                    className="w-[10vw] h-[3.6vh] md:w-[9vw] md:h-[10vh] bg-gradient-to-r from-indigo-500  rounded md:mt-1"
                  ></motion.div>
                )}
                <h1 className="text-[9vw] leading-[7vw] md:text-[7vw] md:leading-[6vw] tracking-tighter font-bold font-['Founders_Grotesk']">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-black mt-[90%] md:mt-32 flex flex-col md:flex-row md:justify-between md:items-center py-5 px-3 md:px-20 gap-10 ">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-lg  tracking-tight leading-none ">{item}</p>
        ))}
        <div className="start flex items-center gap-1">
          <button className="border-[1px] border-black rounded-full px-6 py-2  text-lg">
            START THE PROJECT
          </button>
          <div className="w-10 h-10 flex items-center justify-center border-[1px] border-black rounded-full ">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
