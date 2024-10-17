import React from "react";

const Livestock = () => {
  return (
    <div className="flex flex-col justify-start items-center bg-white  mr-5 my-5 w-5/6 h-screen rounded-3xl">
      <div className="flex justify-between items-center w-full">
        <h1 className="text-4xl ml-5 font-bold text-[#308B34]">
          Manage Livestock
        </h1>
        <div className="flex">
          <div className="flex justify-center items-center rounded-md text-white font-bold text-xl mr-10 mt-10 w-[180px] h-12 bg-[#308B34] border">
            <button className="flex justify-center items-center">
              <img src="./view.png" alt="" className="mr-3" />
              View Live
            </button>
          </div>
          <div className="flex justify-center items-center rounded-md text-white font-bold text-xl mr-10 mt-10 w-[180px] h-12 bg-[#308B34] border">
            <button className="flex justify-center items-center">
              + Add Cattle
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center  w-full mb-10">
        <div className="flex"></div>
        <div className="flex justify-between items-center ">
          <div className="flex justify-center items-center rounded-md text-white font-bold text-2xl mr-10 mt-10 w-[180px] h-16 bg-[#308B34]">
            <button className="flex justify-center items-center">
              Total: <span className="ml-10 text-3xl">63</span>
            </button>
          </div>
          <div className="flex justify-center items-center rounded-md text-white font-bold text-2xl mr-10 mt-10 w-[300px] h-16 bg-[#308B34]">
            <button className="flex justify-center items-center">
              <img src="./areaWhite.png" alt="" className="mr-3" />
              <span className="flex justify-center items-center mr-3">
                Area:
              </span>
              <span className="text-white text-3xl">25Acres</span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-start items-center m-10 w-full">
        <div className="flex flex-col justify-center items-start text-[#308B34] m-3 font-bold rounded-xl shadow-2xl">
          <div className="text-2xl mx-3 mt-1 mb-5">Goat:</div>
          <div className="mb-5">
            <ul className="ml-5 text-lg">
              <li className="mb-4">Count:</li>
              <li className="mb-4">Breed:</li>
              <li className="mb-4">Males:</li>
              <li className="mb-4">Females:</li>
            </ul>
          </div>
          <div className="flex relative">
            <img src="./goat.jpeg" alt="" className="w-[320px] h-[200px] opacity-50 relative"/>
            <span className="absolute left-[125px] top-[80px] text-5xl text-white ">+5</span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start text-[#308B34] font-bold  rounded-xl shadow-2xl">
          <div className="text-2xl mx-3 mt-1 mb-5">Goat:</div>
          <div className="mb-5">
            <ul className="ml-5 text-lg">
              <li className="mb-4">Count:</li>
              <li className="mb-4">Breed:</li>
              <li className="mb-4">Males:</li>
              <li className="mb-4">Females:</li>
            </ul>
          </div>
          <div className="flex relative">
            <img src="./goat.jpeg" alt="" className="w-[320px] h-[200px] opacity-50 relative"/>
            <span className="absolute left-[125px] top-[80px] text-5xl text-white ">+5</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Livestock;
