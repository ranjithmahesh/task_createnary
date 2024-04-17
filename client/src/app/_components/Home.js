"use client";
import Image from "next/image";
import Hero from "../lib/Hero.png";
import MobilView from "../lib/modilview.png";
import Mobile from "../lib/mobile.png";
import NavBar from "./NavBar";
import Link from "next/link";
import { useEffect, useState } from "react";

function Home() {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobileView(window.innerWidth <= 768); // Adjust 768 as per your breakpoint
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="w-screen h-screen bg-cover bg-opacity-0"
      style={{
        backgroundImage: isMobileView
          ? `url(${MobilView.src})`
          : `url(${Hero.src})`,
      }}
    >
      <div className="pt-4">
        <NavBar />
      </div>

      <div>
        <div className="flex   mt-[50px] items-center md:items-start md:mt-[75px] w-screen h-screen   gap-[100px]  flex-col   md:flex-row  sm:px-[16px] md:px-[40px] lg:px-[70px] xl:px-[120px]">
          <div className="font-bold text-[20px]   md:text-[40px]  ">
            <h1 className="">Welcome To India’s First </h1>
            <h1 className="text-[#4a508e]">Creator’s Marketplace </h1>
            <h2 className="text-[12px] md:text-[22px] md:mt-[44px] ">
              Create your first E-Store @ Zero Cost
            </h2>
            <p className="text-[18px] hidden md:block font-normal mt-[28px] w-[500px] ">
              Empower your creativity with Createnary. Showcase, sell, and
              connect with a global audience effortlessly, turn your products
              into profits.
            </p>
            <Link href={"category"}>
              <button className="text-[14px] bg-[#4a508e] p-[10px] rounded-xl text-white mx-auto md:mx-0 block font-normal mt-[20px] mb-[20px]">
                Get Started
              </button>
            </Link>
          </div>

          <div className="">
            <Image
              src={Mobile}
              className=" md:w-[550px] w-[800px] object-cover  "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
