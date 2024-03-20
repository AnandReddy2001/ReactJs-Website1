import React from "react";

const Newsletter = () => {
  return (
    <div className="bg-[#2699fb] p-4 ">
      <div className="md:flex justify-between   ">
        <div className="  text-white md:py-[50px] py-[30px] mx-auto  max-w-[90%]  ">
          <h1 className="md:text-[40px] text-[20px] font-bold ">
            Want to learn latest I.T skills ?
          </h1>
          <span>Sign up our newsletter and stay up to date.</span>
        </div>
        <div className="mx-auto  md:py-[50px] pb-[30px] max-w-[90%] ">
          <input
            className="md:p-3 p-2 mr-2 text-slate-600 outline-none rounded"
            type="text"
            placeholder="Email..."
          />
          <button className="bg-black text-white md:p-3 p-2 md:mt-0 mt-2 rounded">
            Notify Me
          </button>
          <br />
          <p className="text-white mt-2 ">
            We care about the protection of your data. Read out <br />{" "}
            <a href="" className="text-black f">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
