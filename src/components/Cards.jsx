import React from "react";
import img2 from "../Assets/img2.png";
import img3 from "../Assets/img3.png";
import img4 from "../Assets/img4.png";

const Cards = () => {
  return (
    <div id="Cards">
      <div className="w-full pt-[110px] pb-[70px] px-6 bg-white">
        <div className="max-w-[1140px] mx-auto grid md:grid-cols-3 gap-8">
          <div className="w-full shadow-xl flex flex-col p-2 my-4 rounded-lg hover:scale-105 duration-300 border border-black border-opacity-5">
            <img
              className="w-20 mx-auto mt-[-3rem] bg-white"
              src={img2}
              alt="/"
            />
            <h2 className="md:text-2xl text-xl md:py-8 py-5 font-bold text-center py-8">
              Web Development
            </h2>
            <p className="text-center md:text-4xl text-3xl font-bold">
              Rs 4999
            </p>
            <div className="text-center md:font-medium">
              <p className="py-2 border-b mx-8 md:mt-8 mt-4">
                Lorem Ipsum is simply{" "}
              </p>
              <p className="py-2 border-b mx-8">
                Lorem Ipsum is simply dummy text of the printing
              </p>
              <p className="py-2 border-b mx-8">Lorem Ipsum is simply dumm.</p>
            </div>
            <button className="bg-[#023b6d] md:w-[200px] w-[150px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-white">
              Start Trial
            </button>
          </div>
          <div className="w-full shadow-xl bg-gray-100 flex flex-col p-2 md:my-0 my-8 rounded-lg hover:scale-105 duration-300 ">
            <img
              className="w-20 mx-auto mt-[-3rem] bg-transparent"
              src={img3}
              alt="/"
            />
            <h2 className="md:text-2xl text-xl md:py-8 py-5 font-bold text-center py-8">
              Frontend Development
            </h2>
            <p className="text-center md:text-4xl text-3xl font-bold">
              Rs 4999
            </p>
            <div className="text-center md:font-medium">
              <p className="py-2 border-b mx-8 md:mt-8 mt-4">
                Lorem Ipsum is simply{" "}
              </p>
              <p className="py-2 border-b mx-8">
                Lorem Ipsum is simply dummy text of the printing
              </p>
              <p className="py-2 border-b mx-8">Lorem Ipsum is simply dumm.</p>
            </div>
            <button className="bg-black text-[#00df9a] md:w-[200px] w-[150px] rounded-md font-medium my-6 mx-auto px-6 py-3">
              Start Trial
            </button>
          </div>
          <div className="w-full shadow-xl flex flex-col p-2 my-4 rounded-lg hover:scale-105 duration-300 border border-black border-opacity-5">
            <img
              className="w-20 mx-auto mt-[-3rem] bg-white"
              src={img4}
              alt="/"
            />
            <h2 className="md:text-2xl text-xl md:py-8 py-5 font-bold text-center ">
              Backend Development
            </h2>
            <p className="text-center md:text-4xl text-3xl font-bold ">
              Rs 4999
            </p>
            <div className="text-center md:font-medium">
              <p className="py-2 border-b mx-8 md:mt-8 mt-4">
                Lorem Ipsum is simply{" "}
              </p>
              <p className="py-2 border-b mx-8">
                Lorem Ipsum is simply dummy text of the printing
              </p>
              <p className="py-2 border-b mx-8">Lorem Ipsum is simply dumm.</p>
            </div>
            <button className="bg-[#023b6d] md:w-[200px] w-[150px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-white">
              Start Trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
