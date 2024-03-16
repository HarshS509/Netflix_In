import React, { useRef, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import Header from "./Header";
import { checkValidData } from "../utils/Validate";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, SetErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    SetErrorMessage(message);
    if (message) return;
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/103625115?v=4",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
              // ...
            })
            .catch((error) => {
              SetErrorMessage(error.errorMessage);
              // ...
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          SetErrorMessage(errorCode + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          SetErrorMessage(errorCode + errorMessage);
        });
    }
  };
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
        <form
          onSubmit={(e) => e.preventDefault()}
          className="p-12 w-3/12 my-36 rounded-md absolute bg-black bg-opacity-70 text-white"
        >
          <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="my-2 p-4 w-full bg-gray-700 bg-opacity-50"
            />
          )}

          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="my-2 p-4 w-full bg-gray-700 bg-opacity-50"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="my-2 p-4 w-full bg-gray-700 bg-opacity-50"
          />
          <p className="text-red-500 font-bold py-2 text-lg ">{errorMessage}</p>
          <button
            onClick={handleButtonClick}
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
