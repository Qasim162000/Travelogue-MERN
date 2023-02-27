import React, { useState, useContext } from "react";
import LogContext from "../context/travellog/LogContext";

function LogForm() {
  const logContext = useContext(LogContext);
  const { addLog } = logContext;
  const [log, setLog] = useState({
    title: "",
    departure_from: "",
    destination: "",
    description: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    addLog(log.title, log.departure_from, log.destination, log.description);
  };
  const onChange = (e) => {
    setLog({ ...log, [e.target.name]: e.target.value });
  };
  return (
    <form className="container flex flex-col w-1/2 m-auto mt-10">
      <h1 className="mx-auto mb-4 text-4xl font-extrabold leading-none tracking-tight text-center text-black md:text-5xl lg:text-6xl">
        Share your Travel Experience!
      </h1>
      <div className="mb-6">
        <label htmlFor="title" className="block mb-2 text-sm font-medium">
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="My Visit to ..."
          required
          onChange={onChange}
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
          onChange={onChange}
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
          onChange={onChange}
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
          onChange={onChange}
        />
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-[100px] px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={handleSubmit}
      >
        Add Post
      </button>
    </form>
  );
}

export default LogForm;
