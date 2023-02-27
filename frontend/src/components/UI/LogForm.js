import React, { useState } from "react";

function LogForm() {
  const handleClick = () => {};
  const onChange = (e) => {
    setLog({ ...log, [e.target.name]: e.target.value });
  };

  const [log, setLog] = useState({
    title: "",
    description: "",
    departure: "",
    destination: "",
  });
  return (
    <form className="container flex flex-col w-1/2 m-auto mt-10">
      <h1 className="mx-auto mb-4 text-4xl font-extrabold leading-none tracking-tight text-center text-black md:text-5xl lg:text-6xl">
        Share your Travel Experience!
      </h1>
      <div className="mb-6">
        <label htmlFor="email" className="block mb-2 text-sm font-medium">
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
          htmlFor="departure"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Departure From
        </label>
        <input
          type="text"
          id="departure"
          name="departure"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
          onChange={onChange}
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="dest"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Destination
        </label>
        <input
          type="text"
          id="dest"
          name="dest"
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
        onClick={handleClick}
      >
        Add Post
      </button>
    </form>
  );
}

export default LogForm;
