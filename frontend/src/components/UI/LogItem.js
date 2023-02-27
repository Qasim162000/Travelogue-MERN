import React from "react";

const LogItem = (props) => {
  return (
    <div>
      <div className="flex justify-center mx-6 my-8 mt-3 justify-items-center">
        <img
          className="inline-block w-12 h-12 mr-3 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="User's pp"
        />
        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <div className="flex flex-col justify-between p-4 leading-normal">
            <div className="flex flex-row">
              <h5 className="mb-2 mr-24 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {props.logitem.title}
              </h5>
              <i className="ml-auto text-white rounded-lg fa-solid fa-pen-to-square" />
              <i className="ml-2 text-white rounded-lg fa-solid fa-trash" />
            </div>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {props.logitem.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogItem;
