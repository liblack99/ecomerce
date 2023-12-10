import React from "react";

function NoFound() {
  return (
    <div className="w-[90%]">
      <div className="w-full h-[500px] flex flex-col justify-center items-center">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-40 h-40">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
            />
          </svg>
        </span>
        <h3 className="text-4xl">No Found</h3>
      </div>
    </div>
  );
}

export default NoFound;
