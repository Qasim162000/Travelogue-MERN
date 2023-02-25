import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="flex flex-col mt-24 bg-grey-lighter">
      <div className="container flex flex-col items-center justify-center flex-1 max-w-sm px-2 mx-auto">
        <div className="w-full px-6 py-8 text-black bg-white rounded shadow-md">
          <h1 className="mb-8 text-3xl text-center">Sign up</h1>
          <input
            type="text"
            className="block w-full p-3 mb-4 border rounded border-grey-light"
            name="fullname"
            placeholder="Full Name"
          />

          <input
            type="text"
            className="block w-full p-3 mb-4 border rounded border-grey-light"
            name="email"
            placeholder="Email"
          />

          <input
            type="password"
            className="block w-full p-3 mb-4 border rounded border-grey-light"
            name="password"
            placeholder="Password"
          />
          <input
            type="password"
            className="block w-full p-3 mb-4 border rounded border-grey-light"
            name="confirm_password"
            placeholder="Confirm Password"
          />

          <button
            type="submit"
            className="w-full py-3 my-1 text-center text-white bg-black rounded bg-green hover:bg-green-dark focus:outline-none"
          >
            Create Account
          </button>

          <div className="mt-4 text-sm text-center text-black">
            By signing up, you agree to the
            <Link
              className="text-black no-underline border-b border-grey-dark"
              to="#"
            >
              {" "}
              Terms of Service
            </Link>{" "}
            and
            <Link
              className="text-black no-underline border-b border-grey-dark"
              to="#"
            >
              {" "}
              Privacy Policy
            </Link>
          </div>
        </div>

        <div className="mt-6 text-black">
          Already have an account?
          <Link
            className="no-underline border-b border-blue text-blue"
            to="/login"
          >
            {" "}
            Log in
          </Link>
          .
        </div>
      </div>
    </div>
  );
}

export default Signup;
