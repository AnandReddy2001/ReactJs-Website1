import React from "react";
import img1 from "./Assets/img1.jpg";

const Experts = () => {
  return (
    <div className="max-w-[1240px] mx-auto my-10  grid md:grid-cols-2 grid-cols-1 ">
      <div className=" w-[60%] mx-auto">
        <img src={img1} alt="" />
      </div>
      <div className="flex flex-col justify-center md:p-[0px] p-[30px]">
        <h1 className="text-[#00df9a] font-bold my-2 ">LEARN FROM EXPERTS</h1>
        <p className="my-2 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          doloremque aut iusto esse assumenda dolore deleniti porro distinctio
          illo, sit, nobis tenetur rerum ut. In quibusdam sequi et eius
          voluptatum laudantium.
        </p>
        <button className="bg-black text-white md:p-3 p-2 rounded my-2 md:w-[30%] w-[45%]">
          get started
        </button>
      </div>
    </div>
  );
};

export default Experts;
