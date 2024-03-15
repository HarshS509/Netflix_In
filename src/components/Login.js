import React from "react";
import Header from "./Header";
const Login = () => {
  return (
    <div className="relative">
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="img"
        />
      </div>
      <div className="flex justify-center ">
        <form className="p-12 w-3/12 my-36 rounded-md absolute bg-black bg-opacity-70 text-white">
          <h1 className="font-bold text-3xl py-4">Sign in</h1>
          <input
            type="text"
            placeholder="Email Address"
            className="my-2 p-4 w-full bg-gray-700 bg-opacity-50"
          />
          <input
            type="password"
            placeholder="Password"
            className="my-2 p-4 w-full bg-gray-700 bg-opacity-50"
          />
          <button
            type="submit"
            className="my-2 p-2 w-full rounded-md bg-[#E50914]"
          >
            Sign In
          </button>
          <p className="py-4">New to Netflix? Sign Up Now</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
