import React from "react";

const Todo = ({ todo }) => {
  return (
    <div className="flex items-center justify-between bg-gray-600 border-b border-solid border-gray-500 p-4">
      <div className="flex items-center">
        <span className="border-solid border border-gray-500 rounded-full w-5 h-5 cursor-pointer"></span>
        <p className="pl-3">todo item</p>
        <div className="font-inter">Title</div>
      </div>
      <img
        src="./delete.svg"
        alt="Delete"
        className="w-5 h-5 cursor-pointer transition-all duration-300 ease-in "
      />
    </div>
  );
};

export default Todo;
