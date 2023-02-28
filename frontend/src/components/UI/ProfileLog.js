import React, { useContext, useEffect, useRef } from "react";
import LogContext from "../context/travellog/LogContext";
import LogItem from "./LogItem";
function ProfileLog() {
  const logContext = useContext(LogContext);
  const { log, getLog } = logContext;
  useEffect(() => {
    getLog();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const ref = useRef(null);
  const updateLog = (log) => {
    ref.current.click();
  };
  return (
    <>
      <button
        ref={ref}
        data-modal-target="authentication-modal"
        data-modal-toggle="authentication-modal"
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hidden"
        type="button"
      >
        Toggle modal
      </button>

      <div
        id="authentication-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
      >
        <div className="relative w-full h-full max-w-md md:h-auto">
          <div className="relative bg-white rounded-lg shadow">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              data-modal-hide="authentication-modal"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <form className="container flex flex-col w-1/2 py-16 m-auto mt-10">
              <div className="mb-6">
                <label
                  htmlFor="title"
                  className="block mb-2 text-sm font-medium"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="My Visit to ..."
                  required
                  // onChange={onChange}
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="departure_from"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Departure From
                </label>
                <input
                  type="text"
                  id="departure_from"
                  name="departure_from"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  // onChange={onChange}
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="destination"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Destination
                </label>
                <input
                  type="text"
                  id="destination"
                  name="destination"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  // onChange={onChange}
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Experience / Encounters
                </label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  // onChange={onChange}
                />
              </div>

              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-[120px] px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                // onClick={handleSubmit}
              >
                Update Log
              </button>
            </form>
          </div>
        </div>
      </div>

      <h2 className="mt-16 mb-6 text-5xl font-extrabold text-center">
        Your Experiences
      </h2>
      {log.map((logitem) => {
        return (
          <LogItem key={logitem._id} updateLog={updateLog} logitem={logitem} />
        );
      })}
    </>
  );
}

export default ProfileLog;
