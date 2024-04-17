import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { BsInfoCircle } from "react-icons/bs";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
const NavBar = () => {
  return (
    <div className="bg-[#eaebec] md:h-[60px] h-[80px] mx-5 mr-[50px] md:w-fit  justify-center md:mx-auto flex   items-center  mb-2 rounded-xl px-5 bg-opacity-50">
      <div className="flex flex-col relative md:flex-row gap-2 w-full md:items-center md:gap-10">
        <h1 className="font-bold">Createnary</h1>
        <div className="bg-white rounded-lg md:m-2  px-2  items-center flex flex-row">
          <CiSearch />
          <input
            className="rounded-lg pl-[5px] border-none outline-none text-black "
            placeholder="Search Ceators"
          />
        </div>
        <div className=" absolute mt-1 md:hidden  right-0 items-center ">
          <RxHamburgerMenu />
        </div>

        <div className="flex-row hidden  md:flex gap-10">
          <div className="flex flex-row gap-2 items-center">
            <BsCart2 />
            <h1 className="font-normal">Cart</h1>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <BsInfoCircle />
            <h1 className="font-normal">About</h1>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <TfiHeadphoneAlt />
            <h1 className="font-normal">Contact</h1>
          </div>
          <div className="flex flex-row gap-2 items-center border rounded-lg border-black px-1">
            <button>Login</button>
            <IoIosArrowDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
