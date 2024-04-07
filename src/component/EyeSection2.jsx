import React, { useEffect, useState } from "react";

const EyeSection2 = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  });
  return (
    <div data-scroll data-scroll-speed="-.3" className="w-full bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl pt-40">
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-bold text-[10vw] leading-none tracking-tighter  ">
          READY{" "}
        </h1>
        <h1 className="font-bold text-[10vw] leading-none tracking-tighter ">
          {" "}
          TO START{" "}
        </h1>
        <h1 className="font-bold text-[10vw] leading-none tracking-tighter  ">
          {" "}
          THE PROJECT ?
        </h1>

        <div className="flex absolute">
          <div className="flex items-center justify-center w-[30vw] h-[30vw] md:w-[10vw] md:h-[10vw] rounded-full bg-zinc-100">
            <div className=" relative w-2/3 h-2/3 rounded-full bg-zinc-900">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
              >
                <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-[30vw] h-[30vw] md:w-[10vw] md:h-[10vw] rounded-full bg-zinc-100">
            <div className=" relative w-2/3 h-2/3 rounded-full bg-zinc-900">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
              >
                <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="buttons">
          <button className="flex gap-10 items-center px-5 py-4 md:px-10 md:py-6 bg-black text-white rounded-full mt-10 text-xl">
            START THE PROJECT
            <div className="w-3 h-3 bg-zinc-100 rounded-full"></div>
          </button>
          <span className="text-2xl flex justify-center pt-2">OR</span>
          <button className="flex gap-10 items-center px-5 py-4 md:px-10 md:py-6 bg-transparent text-black rounded-full mt-10 text-xl border-2 border-black">
            Rick@Design.com
            <div className="w-3 h-3 bg-zinc-900 rounded-full"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EyeSection2;
