import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <form className="container flex flex-col w-1/2 m-auto mt-10">
        <h1 className="mx-auto mb-4 text-4xl font-extrabold leading-none tracking-tight text-center text-black md:text-5xl lg:text-6xl">
          Share your Travel Experience!
        </h1>
        <div className="mb-6">
          <label for="email" className="block mb-2 text-sm font-medium">
            Title
          </label>
          <input
            type="text"
            id="title"
            for="title"
            name="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="My Visit to ..."
            required
          />
        </div>
        <div className="mb-6">
          <label
            for="password"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
            />
          </div>
          <label
            for="remember"
            className="ml-2 text-sm font-medium text-gray-900 "
          >
            Remember me
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>

      {/* <h2 className="mt-5 text-2xl font-bold leading-7 text-center text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight">
        Your Experiences
      </h2> */}
      <h2 class="text-5xl mt-16 mb-6 font-extrabold text-center">
        Your Experiences
      </h2>

      <div className="flex justify-center mx-6 mt-3 justify-items-center">
        <Link
          to="#card"
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Home;
