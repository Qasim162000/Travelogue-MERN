import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [credentials, setCredentials] = useState({ email: "", username: "", password: "" });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        username: credentials.username,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json)
    if (json.success) {
      // Save auth token and redirect
      localStorage.setItem("token", json.authtoken);
      navigate("/login")
    }
    setCredentials({ email: "", username: "", password: "" })
  }
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div className="flex flex-col mt-24 bg-grey-lighter">
      <div className="container flex flex-col items-center justify-center flex-1 max-w-sm px-2 mx-auto">
        <form onSubmit={handleSubmit} className="w-full px-6 py-8 text-black bg-white rounded shadow-md">
          <h1 className="mb-8 text-3xl text-center">Sign up</h1>
          <input
            type="text"
            className="block w-full p-3 mb-4 border rounded border-grey-light"
            name="username"
            id="username"
            minLength={3}
            onChange={onChange}
            value={credentials.username}
            placeholder="Username"
            required
          />

          <input
            type="email"
            className="block w-full p-3 mb-4 border rounded border-grey-light"
            name="email"
            id="email"
            onChange={onChange}
            value={credentials.email}
            placeholder="Email"
            required
          />

          <input
            type="password"
            className="block w-full p-3 mb-4 border rounded border-grey-light"
            name="password"
            id="password"
            value={credentials.password}
            onChange={onChange}
            minLength={5}
            placeholder="Password"
            required
          />

          <button
            type="submit"
            className="w-full py-3 my-1 text-center text-white bg-black rounded bg-green hover:bg-green-dark focus:outline-none"
          >
            Create Account
          </button>

          {/* <div className="mt-4 text-sm text-center text-black">
            By signing up, you agree to the
            <Link
              className="text-black no-underline border-b border-grey-dark"
              to="#"
            >
              {" "}
              Terms of Service
            </Link>{" "}
            and
            <span
              className="text-black no-underline border-b border-grey-dark"
              to="#"
            >
              {" "}
              Privacy Policy
            </span>
          </div> */}
        </form>

        <div className="mt-6 text-black">
          Already have an account?
          <Link
            className="no-underline border-b border-blue text-blue"
            to="/login"
          >
            {" "}
            Log in.
          </Link>

        </div>
      </div>
    </div>
  );
}

export default Signup;
