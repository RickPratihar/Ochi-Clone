import React from "react";

const About = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.1"  className="w-full py-20 px-5 md:p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl">
      <h1 className="font-['Neue_Montreal'] text-[6vw] md:text-[4vw] leading-[5.2vw] md:leading-[3.5vw]">
        Ochi is a strategic partner for fast-grow­ing tech businesses that need
        to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great
        peo­ple.
      </h1>
      <div className="w-full  border-t-[1px] border-black mt-16 grid grid-cols-1 md:grid-cols-3 pt-10 md:gap-32">
        <div className=" text-lg md:text-2xl pb-10">
          <p>What you can expect:</p>
        </div>

        <div className="text-lg md:text-2xl w-[35ch]">
          <p className="pb-10">
            We create tailored presentations to help you persuade your
            colleagues, clients, or investors. Whether it’s live or digital,
            delivered for one or a hundred people.
          </p>
          <p>
            We believe the mix of strategy and design (with a bit of coffee) is
            what makes your message clear, convincing, and captivating.
          </p>
        </div>

        <div className="text-lg md:text-2xl underline mt-32">
          <p>Instragram</p>
          <p>BEhance</p>
          <p>Facebook</p>
          <p>Linkedin</p>
        </div>
      </div>
      <div className="w-full md:flex  border-t-[1px] border-black pt-10 mt-36 md:py-10">
        <div className="w-1/2">
          <h1 className="text-4xl md:text-7xl">Our Approach :</h1>
          <button className="flex gap-10 items-center px-5 py-4 md:px-10 md:py-6 bg-black text-white rounded-full mt-10 text-xl">
            READ MORE
            <div className="w-3 h-3 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="md:w-1/2 h-[40vh] md:h-[60vh]  mt-5 md:mt-0 rounded-3xl">
        <img className="bg-gray-200 w-full max-w-full rounded-3xl" data-component="lazyload" data-animate="data-animate" src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" width="663" height="469" data-src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" data-srcset="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg 1x, https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg 2x" alt="image description" data-ll-status="loaded" srcset="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg 1x, https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg 2x"/>
        </div>
      </div>
    </div>
  );
};

export default About;
