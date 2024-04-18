import React from "react";
import NavBar from "../_components/NavBar";
import Image from "next/image";

import image1 from "../lib/catogery1.png";
import Footer from "../_components/Footer";

function Category() {
  const arr = [1, 2, 3, 4];
  return (
    <>
      <div className="bg-[#f8fafb]] sm:px-[16px] md:px-[40px] lg:px-[70px] xl:px-[120px] mb-[50px]">
        <div className="mt-4">
          <NavBar />
        </div>
        <div className="  h-[100%] w-full flex md:flex-row flex-col  ">
          <div className=" flex-1  h-full  flex  items-center  ">
            <div className="font-bold text-[20px] md:ml-auto mr-14   mt-[50px] md:w-[48%]    ">
              <h1 className="md:hidden text-[16px] mb-3">HOW IT WORKS</h1>
              <h2 className="text-[18px]  ">
                GetSetYo handholds you at every step of the way
              </h2>
              <p className="text-[14px]   font-normal mt-[28px] ">
                You focus on helping your friends and family, we take care of
                everything else.
              </p>

              <button className="text-[14px] bg-[#4a508e] p-[10px] rounded-xl text-white   block font-normal mt-[20px] mb-[20px]">
                Get Started
              </button>
            </div>
          </div>
          <div className="flex flex-1 flex-col h-full border-l-2 gap-10 border-[#d6d6d6]  ml-5">
            {/* ///////// 1*/}

            {arr.map((item, i) => (
              <div className="w-[80%] " key={i}>
                <div className="flex flex-row gap-5 md:-ml-[20px] -ml-[20px]    ">
                  <h1 className="w-[70px] h-[35px] md:w-[50px] md:h-[34px] text-[25px]  rounded-md text-white text-center bg-[#4a508e]">
                    {item}
                  </h1>
                  <h1 className="font-semibold  ">
                    Share the holidays, stays and experiences with your friends
                    and family
                  </h1>
                </div>
                <div className="flex flex-col  ml-8 mt-4 ">
                  <p className="text-[12px] ">
                    You receive trending & curated Itineraries and Insider deals
                    on Hotels & Flights to share
                  </p>
                  <Image
                    src={image1}
                    alt="jj00"
                    className="h-[200px] w-[350px] aspect-w-1 aspect-h-1 shadow-lg rounded-2xl shadow-gray-500 mt-4"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Category;
