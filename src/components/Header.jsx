import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  const handleNavItemClick = (event, target) => {
    event.preventDefault();
    const targetElement = document.querySelector(target);
    if (targetElement) {
      const targetPosition = targetElement.offsetTop;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const startTime = performance.now();
      const duration = 1000; // Duration adjustment karne ke liye
      const easing = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t); // ee Cubic easing function hai

      const scroll = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        window.scrollTo(
          0,
          startPosition + distance * easing(elapsedTime / duration)
        );
        if (elapsedTime < duration) {
          requestAnimationFrame(scroll);
        }
      };

      requestAnimationFrame(scroll);

      if (toggle) {
        toggleMenu();
      }
    }
  };

  return (
    <div className="bg-[#023b6d] sticky top-0 z-50 border-b border-white border-opacity-25 shadow-lg">
      <div className="max-w-[1240px] py-[10px] mx-auto flex justify-between items-center">
        <div className="md:text-3xl text-2xl md:ml-0 ml-4 font-bold text-white">
          <a href="#Banner">RamailoTech</a>
        </div>

        {toggle ? (
          <AiOutlineClose
            onClick={toggleMenu}
            className="text-white md:text-3xl text-2xl md:mr-0 mr-4 cursor-pointer md:hidden block"
          />
        ) : (
          <AiOutlineMenu
            onClick={toggleMenu}
            className="text-white md:text-3xl text-2xl md:mr-0 mr-4 cursor-pointer md:hidden block"
          />
        )}

        <ul className="hidden md:flex gap-10 text-white cursor-pointer font-bold">
          <li>
            <a href="#Banner" onClick={(e) => handleNavItemClick(e, "#Banner")}>
              Home
            </a>
          </li>
          <li>
            <a
              href="#experts"
              onClick={(e) => handleNavItemClick(e, "#experts")}
            >
              Experts
            </a>
          </li>
          <li>
            <a href="#Cards" onClick={(e) => handleNavItemClick(e, "#Cards")}>
              Courses
            </a>
          </li>
          <li>
            <a
              href="#Newsletter"
              onClick={(e) => handleNavItemClick(e, "#Newsletter")}
            >
              Contact
            </a>
          </li>
          <li>
            <a href="#Footer" onClick={(e) => handleNavItemClick(e, "#Footer")}>
              Footer
            </a>
          </li>
        </ul>

        {/* this is for responsive menu */}

        <ul
          className={`duration-300 md:hidden w-full h-screen text-white fixed bg-black top-[53px] cursor-pointer pl-4
          ${toggle ? "left-[50%]" : "left-[100%]"}`}
        >
          <li className="p-5">
            <a href="#Banner" onClick={(e) => handleNavItemClick(e, "#Banner")}>
              Home
            </a>
          </li>
          <li className="p-5">
            <a
              href="#experts"
              onClick={(e) => handleNavItemClick(e, "#experts")}
            >
              Experts
            </a>
          </li>
          <li className="p-5">
            <a href="#Cards" onClick={(e) => handleNavItemClick(e, "#Cards")}>
              Courses
            </a>
          </li>
          <li className="p-5">
            <a
              href="#Newsletter"
              onClick={(e) => handleNavItemClick(e, "#Newsletter")}
            >
              Contact
            </a>
          </li>
          <li className="p-5">
            <a href="#Footer" onClick={(e) => handleNavItemClick(e, "#Footer")}>
              Footer
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
