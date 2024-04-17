"use client";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import React from "react";
import Image from "next/image";
import TabImg from "../lib/link.png";

function Tab1() {
  const slideImages = [
    {
      url: "https://s3-alpha-sig.figma.com/img/2ea9/ec8a/56728b27fc191c83a04ece8440179cee?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B2IOWy~SbTj-0niPdzZHdcCqXl5fY-TlV-MU1dB0-c4BcxlNpi9O-bbJUT0NfiKfVp9lsFR4HnNFSQq0fuhOcpuqQ29VPaUH6ERqJ-63pcMyjAh0YjRNfVy~T9dcOFMXDZLnpX5SyC0Y4XBFTDhEl-palstFe~Z0Kou3SGEbKgGAv~nc3VRqI1ItiDbK0tfp4fNbJcbdAmURmaF8g9V9qyVEDjFfo~tbj2mm~oC3HM2ziC4fZT34fVT~G205ocvQ1mLIyobGBXaTueNOopqdGLdpX4MZncZKLDllgd78JWaf0oNJRI-GJXODylHLQ7nvBLqy~No61i0jtaqolz~A1Q__",
      caption: "Slide 1",
    },
    {
      url: "https://s3-alpha-sig.figma.com/img/0b8f/836b/8fafa94ac1e122566edbd2403299e191?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RcH8Z9Xpow~0jOISOC38oOPPqj4lt84sZ-8Hc~zi4TG8rRbca70h8YJg5nz9c-GvsHhfM~bAsN0opB5k~rnyaR7iasLZQ2WLgnBCdFlvNNnZ5joscoLb3qYbZWO-0Zcs3kYHnxn03wijDiB8uX2jS6LugqZSiMlujELdFTRoaKHyAN61fO7TgTzdlhrEo1sX3Gs1miv4le3XDeQvWQ9-vVi8UpbAMhcxp8iXcDPKrADHzcVlrqB94CIc3hIodNm21Jd~nULRiZmE4tMBEWlKCzIrt9U-GhGX0xY8lS5dKtl4s7ts9nFUCmXh0cPJoIdJwsKUK2yEQCdz63OwXG0QRA__",
      caption: "Slide 2",
    },
  ];

  return (
    <div
      className="w-[100%]  bg-[#4a508e] 
    sm:px-[16px] md:px-[40px] lg:px-[70px] xl:px-[120px] 
    -mt-[150px]   md:mt-0
    "
    >
      <div className="md:hidden">
        <h1 className="md:text-[35px]  text-[25px] font-semibold  text-white text-center pt-[25px]">
          Your audience wants links
        </h1>
        <p className=" text-white text-center pt-[5px] ">
          Make it easy for them by linking products to every post and video
        </p>
        <button className="text-[14px]  md:hidden  font-semibold bg-white p-[10px] rounded-xl mx-auto block mt-7 ">
          Try for free
        </button>
        <Image
          src={TabImg}
          alt="jhg"
          className=" h-[200px] md:h-[300px]  sm:w-[550px] w-[300px]  mx-auto mt-12"
        />
      </div>
      <div className="hidden  md:block">
        <Slide autoplay={true} duration={3000}>
          {slideImages.map((slideImage, index) => (
            <div key={index} className="">
              <h1 className="md:text-[35px]  text-[25px] font-semibold  text-white text-center pt-[25px]">
                Your audience wants links
              </h1>
              <p className=" text-white text-center pt-[5px] ">
                Make it easy for them by linking products to every post and
                video
              </p>
              <button className="text-[14px]  md:hidden  font-semibold bg-white p-[10px] rounded-xl mx-auto block mt-7 ">
                Try for free
              </button>

              <div
                className=" bg-cover bg-center relative  h-[200px] md:h-[300px]  sm:w-[550px] w-[300px]  mx-auto mt-12 "
                style={{ backgroundImage: `url(${slideImage.url})` }}
              ></div>
            </div>
          ))}
        </Slide>
      </div>

      <button className="text-[14px] hidden md:block font-semibold bg-white p-[10px] rounded-xl mx-auto  mt-7 ">
        Try for free
      </button>
      <div className="text-[#4a508e] "> ;;;;;;;;;;;;;;;;</div>
    </div>
  );
}

export default Tab1;
