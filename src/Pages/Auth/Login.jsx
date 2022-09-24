import React from "react";
import { memo } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full flex md:justify-center items-center p-8">
      <div className="p-4">
        <h2 className="text-2xl text-center pb-6 font-semibold tracking-wide">
          Login
        </h2>

        <div>
          <form>
            <label
              htmlFor="email"
              className="text-xl font-bold leading-none text-gray-700"
            >
              Email
            </label>{" "}
            <div className="md:w-[40vw] lg:w-[30vw] py-2 w-[80vw]">
              <input
                type="email"
                className="border  h-[3.5rem] w-full rounded-xl border-gray-500 outline-none focus:border-black"
              />
            </div>
            <label
              htmlFor="password"
              className="text-xl font-bold leading-none text-gray-700"
            >
              Password
            </label>{" "}
            <div className="md:w-[40vw] lg:w-[30vw] py-2 w-[80vw]">
              <input
                type="password"
                className="border h-[3.5rem] w-full rounded-xl  border-gray-500 outline-none focus:border-black"
              />
            </div>
            <p className="cursor-pointer">Forgot your password?</p>
            <div className="md:w-[40vw] lg:w-[30vw] py-2 w-[80vw]">
              <button
                type="submit"
                className="h-[3.5rem] w-full rounded-lg text-center text-white hover:bg-white hover:text-black hover:shadow-xl bg-black text-lg tracking-wider font-semibold"
              >
                Login
              </button>
            </div>
          </form>
          <Link to="/signup">
            <p className="text-center">
              <button className="hover:text-gray-600 underline m-2 text-lg">
                Create an account
              </button>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default memo(Login);
