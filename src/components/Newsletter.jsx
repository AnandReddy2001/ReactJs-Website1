import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Newsletter = () => {
  const [newData, setNewData] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const initialValues = {
    email: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .trim()
      .email("Invalid email*")
      .required("Email is required*"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log("Email submitted:", values.email);
    setNewData([...newData, values.email]);
    resetForm();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 2000);
  };

  return (
    <div className="bg-[#2699fb] md:py-[80px] py-[50px] px-[10px] md:px-0">
      <div className="md:flex justify-between">
        <div className="text-white pb-[20px] mx-auto max-w-[90%]">
          <h1 className="md:text-[40px] text-[20px] font-bold">
            Want to learn the latest I.T skills?
          </h1>
          <span>Sign up for our newsletter and stay up to date.</span>
        </div>
        <div className="mx-auto max-w-[90%]">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="md:flex">
                <div className="flex-col flex">
                  <Field
                    type="email"
                    name="email"
                    className="md:p-3 p-2 mr-1 text-slate-600 outline-none rounded md:w-56 w-64 h-10"
                    placeholder="Email@company.com"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-700 font-bold mt-1"
                  />
                  {submitted && (
                    <div className="text-green-700  font-bold mt-1 ">
                      Thank you for subscribing!
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-black text-white md:p-2 p-2 md:mt-0 mt-2 rounded h-10 w-28"
                >
                  Subscribe
                </button>
              </Form>
            )}
          </Formik>
          <br />
          <p className="text-white">
            We care about the protection of your data. Read our <br />
            <a href="#" className="text-black">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
