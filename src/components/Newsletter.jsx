import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submittedEmails, setSubmittedEmails] = useState([]);

  const handleSubmit = () => {
    console.log("Email submitted:", email);
    setSubmittedEmails([...submittedEmails, email]);
    setEmail("");
    alert("Email is submitted");
  };

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="bg-[#2699fb] md:py-[80px] py-[50px] px-[10px] md:px-0">
      <div className="md:flex justify-between ">
        <div className="text-white  pb-[20px] mx-auto max-w-[90%]">
          <h1 className="md:text-[40px] text-[20px] font-bold ">
            Want to learn latest I.T skills ?
          </h1>
          <span>Sign up our newsletter and stay up to date.</span>
        </div>
        <div className="mx-auto  max-w-[90%] ">
          <div className="md:flex ">
            <div className="flex-colflex ">
              <input
                type="email"
                value={email}
                onChange={handleChange}
                className="md:p-3 p-2 mr-1 text-slate-600 outline-none rounded w-64 h-10"
                placeholder="Email..."
              />
            </div>

            <button
              type="button"
              disabled={email === ""}
              onClick={handleSubmit}
              className="bg-black text-white md:p-2 p-2 md:mt-0 mt-2 rounded h-10 w-28 "
            >
              Notify Me
            </button>
          </div>
          <br />
          <p className="text-white ">
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
