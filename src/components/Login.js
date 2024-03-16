import React, { useState } from "react";
import Header from "./Header";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
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
          <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="my-2 p-4 w-full bg-gray-700 bg-opacity-50"
            />
          )}

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
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p onClick={toggleSignInForm} className="py-4 cursor-pointer">
            {isSignInForm
              ? "New to Netflix? Sign Up Now"
              : "Already registered? Sign In Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
