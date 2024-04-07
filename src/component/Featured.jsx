import React from "react";
import { motion, useAnimation } from "framer-motion";
const Featured = () => {
  const cards = [useAnimation(), useAnimation()];

  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };
  return (
    <div className="w-full md:py-20 ">
      <div className="w-full px-10 border-b-[1px] border-zinc-700 pb-20">
        <h1 className='text-5xl md:text-7xl font-["Neue_Montreal"] '>
          Featured projects
        </h1>
      </div>
      <div className="px-3 md:px-20">
        <div className="cards w-full md:flex gap-10 mt-10">
          <div className="cardcontainer relative md:w-1/2 md:h-[70vh] mb-5 md:mb-0  ">
            <li className="text-xl pb-4 font-semibold">FYDE</li>
            <div className="card2 w-full h-full rounded-xl overflow-hidden transition-transform duration-300 transform hover:scale-95">
              <img
                className="w-full h-full bg-cover "
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
            <div className="buttons flex flex-wrap row gap-4 mt-4">
              <button
                href="#_"
                class="px-5 py-2.5 relative  group overflow-hidden font-medium inline-block border-2 border-black rounded-full"
              >
                <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-black group-hover:h-full opacity-90"></span>
                <span class="relative group-hover:text-white"> ADULT</span>
              </button>
              <button
                href="#_"
                class="px-5 py-2.5 relative  group overflow-hidden font-medium inline-block border-2 border-black rounded-full"
              >
                <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-black group-hover:h-full opacity-90"></span>
                <span class="relative group-hover:text-white">COPYWRITING</span>
              </button>
              <button
                href="#_"
                class="px-5 py-2.5 relative  group overflow-hidden font-medium inline-block border-2 border-black rounded-full"
              >
                <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-black group-hover:h-full opacity-90"></span>
                <span class="relative group-hover:text-white"> SALES DECK</span>
              </button>
              <button
                href="#_"
                class="px-5 py-2.5 relative  group overflow-hidden font-medium inline-block border-2 border-black rounded-full"
              >
                <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-black group-hover:h-full opacity-90"></span>
                <span class="relative group-hover:text-white">
                  SLIDES DESIGN
                </span>
              </button>
            </div>
          </div>
          <div className="cardcontainer relative md:w-1/2 md:h-[70vh] ">
            <li className="text-xl pb-4 font-semibold">VISE</li>
            <div className="card w-full h-full rounded-xl overflow-hidden transition-transform duration-300 transform hover:scale-95">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
            <div className="buttons flex flex-wrap gap-4 mt-4">
              <button
                href="#_"
                class="px-5 py-2.5 relative  group overflow-hidden font-medium inline-block border-2 border-black rounded-full"
              >
                <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-black group-hover:h-full opacity-90"></span>
                <span class="relative group-hover:text-white"> AGENCY</span>
              </button>
              <button
                href="#_"
                class="px-5 py-2.5 relative  group overflow-hidden font-medium inline-block border-2 border-black rounded-full"
              >
                <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-black group-hover:h-full opacity-90"></span>
                <span class="relative group-hover:text-white">
                  COMPANY PRESENTATION
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* ============================================================================================================================================= */}
        <div className="cards w-full md:flex gap-10 mt-10  md:mt-40">
          <div className="cardcontainer relative md:w-1/2 md:h-[70vh] mb-5 md:mb-0 ">
            <li className="text-xl pb-4 font-semibold">TRAWA</li>
            <div className="card w-full h-full rounded-xl overflow-hidden transition-transform duration-300 transform hover:scale-95">
              <img
                className="w-full h-full bg-cover "
                src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
                alt=""
              />
            </div>
            <div className="buttons flex flex-wrap row gap-4 mt-4">
              <button
                href="#_"
                class="px-5 py-2.5 relative  group overflow-hidden font-medium inline-block border-2 border-black rounded-full"
              >
                <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-black group-hover:h-full opacity-90"></span>
                <span class="relative group-hover:text-white">
                  BRAND IDENTITY
                </span>
              </button>
              <button
                href="#_"
                class="px-5 py-2.5 relative  group overflow-hidden font-medium inline-block border-2 border-black rounded-full"
              >
                <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-black group-hover:h-full opacity-90"></span>
                <span class="relative group-hover:text-white">
                  DESIGN RESEARCH
                </span>
              </button>
              <button
                href="#_"
                class="px-5 py-2.5 relative  group overflow-hidden font-medium inline-block border-2 border-black rounded-full"
              >
                <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-black group-hover:h-full opacity-90"></span>
                <span class="relative group-hover:text-white">
                  INVESTOR DECKK
                </span>
              </button>
            </div>
          </div>
          <div className="cardcontainer relative md:w-1/2 md:h-[70vh] ">
            <li className="text-xl pb-4 font-semibold">PREMIUM BLEND</li>
            <div className="card w-full h-full rounded-xl overflow-hidden transition-transform duration-300 transform hover:scale-95">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
                alt=""
              />
            </div>
            <div className="buttons flex flex-wrap gap-4 mt-4">
              <button
                href="#_"
                class="px-5 py-2.5 relative  group overflow-hidden font-medium inline-block border-2 border-black rounded-full"
              >
                <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-black group-hover:h-full opacity-90"></span>
                <span class="relative group-hover:text-white">
                  {" "}
                  BRANDED TEMPLATE
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-40">
        <button className="flex gap-10 items-center px-5 py-4 md:px-10 md:py-6 bg-black text-white rounded-full mt-10 text-xl">
          VIEW ALL CASE STUDIES
          <div className="w-3 h-3 bg-zinc-100 rounded-full"></div>
        </button>
      </div>
    </div>
  );
};

export default Featured;
