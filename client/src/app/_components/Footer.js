import { RiPhoneLine } from "react-icons/ri";
import { IoLocationOutline } from "react-icons/io5";
import React from "react";

function Footer() {
  const FooterList = [
    "Navigation",
    "About Createnary",
    "Contact Us",
    "Refund",
    "NewsLetter",
    "Terems & Conditions",
    "Privacy & Policy",
  ];
  return (
    <div className=" bg-[#4a508e]">
      <div
        className="w-[100%]
  sm:px-[16px] md:px-[40px] lg:px-[70px] xl:px-[120px]
  flex text-white py-10 md:flex-row  flex-col
  "
      >
        <div className=" flex flex-1 items-center text-[32px] ">Createnary</div>
        <div className="flex-1 ">
          <div className=" md:mt-0 mt-6">
            <ul>
              {FooterList.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-9 md:mt-0">
          <h1 className="text-[18px] mb-4 ">Contacts</h1>
          <div className="flex-row  flex items-center gap-1 text-[16px]">
            <IoLocationOutline size={20} />
            <h2>Delhi, India</h2>
          </div>
          <h1 className="ml-[20px]">+91 98765 43210</h1>
          <div className="flex-row  flex items-center gap-1">
            <RiPhoneLine size={20} />
            <h2>+91 99999 99999</h2>
          </div>
        </div>
      </div>
      <div className="w-full md:border-t-2 text-white pb-4 pt-[10px] text-center">
        {" "}
        &#169; Createnary 2024
      </div>
    </div>
  );
}

export default Footer;
