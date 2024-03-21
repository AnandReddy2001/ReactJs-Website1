import React from "react";
import Typed from "react-typed";

const Banner = () => {
  return (
    <div id="Banner" className="bg-[#023b6d] w-full md:py-[50px] py-[20px]">
      <div className="max-w-[1240px] mx-auto text-center font-bold my-[100px]">
        <div className="md:text-3xl text-xl md:p-[20px] mb-[10px]">
          Lear with us
        </div>
        <h2 className="text-white md:text-[80px] text-4xl md:p-[20px]mb-[10px]">
          Grow with us
        </h2>
        <div className="md:text-[40px] text-[20px] text-white md:p-[20px] mb-[10px]">
          Learn{" "}
          <Typed
            strings={[
              "Web dveloper",
              "Android Developer",
              "Frontend Dveloper",
              "Backend Dveloper",
              "Fullstack Dveloper",
            ]}
            typeSpeed={120}
            backSpeed={50}
            loop
          />
        </div>
        <button className="bg-black text-white md:p-3 p-2 rounded md:w-[15%] w-[35%]">
          get started
        </button>
      </div>
    </div>
  );
};

export default Banner;
