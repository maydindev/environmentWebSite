import React, { useState } from "react";
import AddCorp from "./AddCorp";

const FarmAnalytics = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col justify-start items-center bg-white  mr-5 my-5 w-5/6 h-screen rounded-3xl">
      <div className="flex justify-between items-center w-full">
        <h1 className="text-4xl ml-10 font-bold text-[#308B34]">Farm 1</h1>

        <div className="flex justify-center items-center rounded-md text-white font-bold text-2xl mr-10 mt-10 w-[250px] h-12 bg-[#308B34]">
          <button
            onClick={() => setIsModalOpen(true)}
            className=" text-white px-4 py-2 rounded"
          >
            + Add Crop
          </button>
          <AddCorp isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
      </div>

      <div className="flex w-full px-10 mt-10 justify-between items-center ">
        <div className="flex w-1/4 border border-gray-100 m-5 justify-between items-center shadow-xl rounded-lg">
          <div className="flex flex-col justify-center items-start ">
            <span className="text-[#308B34] text-xl font-bold p-2 pl-5">
              Nitrogen:
            </span>
            <div className="flex flex-col pl-5 pb-2">
              <span className="text-xs font-bold text-green-600 border-2 px-[4px] rounded-md border-green-600">
                Good
              </span>
            </div>
          </div>
          <div>
            <span className="pr-10 text-4xl">20%</span>
          </div>
        </div>

        <div className="flex w-1/4 border border-gray-100 m-5 justify-between items-center shadow-xl rounded-lg">
          <div className="flex flex-col justify-center items-start ">
            <span className="text-[#308B34] text-xl font-bold p-2 pl-5">
              Nitrogen:
            </span>
            <div className="flex flex-col pl-5 pb-2">
              <span className="text-xs font-bold text-green-600 border-2 px-[4px] rounded-md border-green-600">
                Good
              </span>
            </div>
          </div>
          <div>
            <span className="pr-10 text-4xl">20%</span>
          </div>
        </div>

        <div className="flex w-1/4 border border-gray-100 m-5 justify-between items-center shadow-xl rounded-lg">
          <div className="flex flex-col justify-center items-start ">
            <span className="text-[#308B34] text-xl font-bold p-2 pl-5">
              Nitrogen:
            </span>
            <div className="flex flex-col pl-5 pb-2">
              <span className="text-xs font-bold text-green-600 border-2 px-[4px] rounded-md border-green-600">
                Good
              </span>
            </div>
          </div>
          <div>
            <span className="pr-10 text-4xl">20%</span>
          </div>
        </div>
      </div>

      <div className="flex w-full px-10 mt-10 justify-between items-center ">
        <div className="flex flex-col w-2/4 justify-center items-start">
          <div className="flex w-1/2 border border-gray-100 m-5 ml-20 justify-between items-center shadow-xl rounded-lg">
            <div className="flex flex-col justify-center items-start ">
              <span className="text-[#308B34] text-xl font-bold p-2 pl-5">
                Nitrogen:
              </span>
              <div className="flex flex-col pl-5 pb-2">
                <span className="text-xs font-bold text-green-600 border-2 px-[4px] rounded-md border-green-600">
                  Good
                </span>
              </div>
            </div>
            <div>
              <span className="pr-10 text-4xl">20%</span>
            </div>
          </div>

          <div className="flex w-1/2 border border-gray-100 m-5 ml-20 justify-between items-center shadow-xl rounded-lg">
            <div className="flex flex-col justify-center items-start ">
              <span className="text-[#308B34] text-xl font-bold p-2 pl-5">
                Nitrogen:
              </span>
              <div className="flex flex-col pl-5 pb-2">
                <span className="text-xs font-bold text-green-600 border-2 px-[4px] rounded-md border-green-600">
                  Good
                </span>
              </div>
            </div>
            <div>
              <span className="pr-10 text-4xl">20%</span>
            </div>
          </div>

          <div className="flex w-1/2 border border-gray-100 m-5 ml-20 justify-between items-center shadow-xl rounded-lg">
            <div className="flex flex-col justify-center items-start ">
              <span className="text-[#308B34] text-xl font-bold p-2 pl-5">
                Nitrogen:
              </span>
              <div className="flex flex-col pl-5 pb-2">
                <span className="text-xs font-bold text-green-600 border-2 px-[4px] rounded-md border-green-600">
                  Good
                </span>
              </div>
            </div>
            <div>
              <span className="pr-10 text-4xl">20%</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-2/4 h-[500px] justify-center items-center">
          <div className="flex relative justify-center items-center m-10 overflow-hidden rounded-2xl">
            <img
              src="./imageDashboardFarm.jpeg "
              alt="Farm Image"
              className=""
            />
            <img
              src="./back.png"
              alt=""
              className="absolute bottom-5 left-60"
            />
            <img
              src="./forward.png"
              alt=""
              className="absolute bottom-5 right-60"
            />
          </div>
          <div className="flex justify-around w-full items-center">
            <div className="flex justify-center items-center border-2 p-3 border-[#308B34] rounded-full">
              <img src="./crop.png" alt="" />
              <span className="pl-2 font-bold text-xl text-[#308B34] ">
                Crop: <span className="text-black text-2xl pr-2">Wheat</span>
              </span>
            </div>
            <div className="flex justify-center items-center border-2 p-3 border-[#308B34] rounded-full">
              <img src="./area.png" alt="" />
              <span className="pl-2 font-bold text-xl text-[#308B34] ">
                Area: <span className="text-black text-2xl pr-2">25Acres</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full mt-10">
        <button className="border-4 border-[#308B34] rounded-xl px-[500px] text-3xl p-3 font-bold text-[#308B34]">
          Efficacy Rating
        </button>
      </div>
    </div>
  );
};

export default FarmAnalytics;
