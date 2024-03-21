import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="Footer" className="bg-[#023b6d]">
      <div className="max-w-[1240px] mx-auto md:py-16 py-10 px-6 grid md:grid-cols-2 md:gap-40 gap-10 text-white    ">
        <div className="md:order-1 order-2 ">
          <h1 className="w-full text-3xl font-bold text-whitek">
            <a href="#Banner">RamailoTech</a>
          </h1>
          <p className="md:py-4 py-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit
            ullam iste repellat consequatur libero reiciendis, blanditiis
            accusantium.
          </p>
          <div className="flex gap-2 md:justify-between md:w-[40%]  my-2  ">
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
          </div>
        </div>
        <div className=" grid md:grid-cols-4 grid-cols-2 md:gap-14 gap-y-8 md:order-2 order-1 ">
          <div className="flex flex-col items-center">
            <h6 className=" text-black font-bold">Solutions</h6>
            <ul className="md:mt-4 mt-2 ">
              <li className="py-1 text-sm">Analytics</li>
              <li className="py-1 text-sm">Marketing</li>
              <li className="py-1 text-sm">Commerce</li>
              <li className="py-1 text-sm">Insights</li>
            </ul>
          </div>

          <div className="flex flex-col items-center ">
            <h6 className=" text-black font-bold">Company</h6>
            <ul className="md:mt-4 mt-2">
              <li className="py-1  text-sm">About</li>
              <li className="py-1  text-sm">Blog</li>
              <li className="py-1  text-sm">Jobs</li>
              <li className="py-1 text-sm">Careers</li>
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <h6 className=" text-black font-bold">Support</h6>
            <ul className="md:mt-4 mt-2">
              <li className="py-1  text-sm">Pricing</li>

              <li className="py-1  text-sm">Guides</li>
              <li className="py-1  text-sm">API Status</li>
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <h6 className=" text-black font-bold">Legal</h6>
            <ul className="md:mt-4 mt-2">
              <li className="py-1  text-sm">Claim</li>
              <li className="py-1  text-sm">Policy</li>
              <li className="py-1  text-sm">Terms</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
