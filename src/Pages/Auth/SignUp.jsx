import React from "react";
import { memo } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="w-full flex md:justify-center items-center p-8">
      <div className="p-4">
        <h2 className="text-2xl text-center pb-6 font-semibold tracking-wide">
          Create Account
        </h2>

        <div>
          <form>
            <label
              htmlFor="firstname"
              className="text-lg font-bold leading-none text-gray-700"
            >
              First Name
            </label>{" "}
            <div className="md:w-[40vw] lg:w-[30vw] py-2 w-[80vw]">
              <input type="text" className="input-box" />
            </div>
            <label
              htmlFor="lastname"
              className="text-lg font-bold leading-none text-gray-700"
            >
              Last Name
            </label>{" "}
            <div className="md:w-[40vw] lg:w-[30vw] py-2 w-[80vw]">
              <input type="text" className="input-box" />
            </div>
            <label
              htmlFor="email"
              className="text-lg font-bold leading-none text-gray-700"
            >
              Email
            </label>{" "}
            <div className="md:w-[40vw] lg:w-[30vw] py-2 w-[80vw]">
              <input type="email" className="input-box" />
            </div>
            <label
              htmlFor="password"
              className="text-lg font-bold leading-none text-gray-700"
            >
              Password
            </label>{" "}
            <div className="md:w-[40vw] lg:w-[30vw] py-2 w-[80vw]">
              <input type="password" className="input-box" />
            </div>
            <div className="flex justify-start gap-2 items-center">
              <input type="checkbox" name="" id="sub" />
              <label htmlFor="sub" className=" font-semibold">
                Subscribe to News Letter
              </label>
            </div>
            <div className="md:w-[40vw] lg:w-[30vw] py-2 w-[80vw] ">
              <button type="submit" className="form-btn">
                Sign Up
              </button>
            </div>
          </form>
          <Link to="/login">
            <p className="text-center">
              Returning Customer?
              <button className="hover:text-gray-600 underline m-2 text-lg">
                Sign in
              </button>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default memo(SignUp);
