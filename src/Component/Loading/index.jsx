import React from "react";

function Loading() {
  return (
    <div className="grid place-content-center grid-cols-[repeat(auto-fill,minmax(230px,1fr))] grid-flow-[192px] w-[90%] mt-4">
      <div className="loading"></div>
      <div className="loading"></div>
      <div className="loading"></div>
      <div className="loading"></div>
      <div className="loading"></div>
      <div className="loading"></div>
      <div className="loading"></div>
      <div className="loading"></div>
      <div className="loading"></div>
      <div className="loading"></div>
    </div>
  );
}
export default Loading;
