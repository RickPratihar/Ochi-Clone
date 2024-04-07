import React from "react";

const Review = () => {
  return (
    <div className="px-3 md:px-20 pt-20 bg-[#F1F1F1]">
      <h1 className="text-4xl md:text-6xl border-b-2 border-black pb-5">
        Clients’ reviews
      </h1>
      <div className="grid md:grid-cols-4 pt-10">
        <p className="text-lg pb-8 md:text-2xl underline">Karman Ventures</p>
        <div className="2nd">
          <p className="text-lg md:text-2xl pb-4">Service:</p>

            <div className="flex md:flex-col gap-2">
          <div className=" md:mb-5 md:mt-36">
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
          <div>
            <button
              href="#_"
              class="px-5 py-2.5 relative  group overflow-hidden font-medium inline-block border-2 border-black rounded-full"
            >
              <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-black group-hover:h-full opacity-90"></span>
              <span class="relative group-hover:text-white">SALES DECK</span>
            </button>
            </div>
          </div>
        </div>
        <div className="3rd">
          <p className="text-lg md:text-2xl mt-4">William Barnes</p>
          <div className="mt-36">
            <img
              className="w-40 rounded-xl"
              src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png"
              alt=""
            />
          </div>
          <div className="mt-10">
            <p className="text-2xl">
              They were transparent about the time and the stages of the
              project. The end product is high quality, and I feel confident
              about how they were handholding the client through the process. I
              feel like I can introduce them to someone who needs to put a sales
              deck together from scratch, and they would be able to handhold the
              client experience from 0 to 100 very effectively from story to
              design. 5/5
            </p>
          </div>
        </div>
        <div className="4th">
            <h2 className="hidden text-2xl md:flex justify-end">READ</h2>
        </div>
      </div>
    </div>
  );
};

export default Review;
