"use client";
import axios from "axios";
import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
function Tab2() {
  const [toggle, setToggle] = useState(false);

  const [value, setValue] = useState(0);
  const [product, setProduct] = useState(0);
  const [data, setData] = useState(0);
  const [loading, setLoading] = useState(false);

  const sendata = async () => {
    setLoading(true);
    await axios
      .post("https://task-createnary.onrender.com/", {
        followers: value,
        products: product,
      })
      .then((response) => {
        console.log("Response:", response.data);
        setData(response.data);

        setLoading(false);
      })
      .catch((error) => {
        console.error("Error sending data:", error);
        alert("Failed to send data");
        setLoading(false);
      });
  };

  const ToggeAns = (i) => {
    if (toggle === i) {
      return setToggle(false);
    }
    setToggle(i);

    console.log(i);
  };

  const FAQ = [
    {
      question: "How much does it cost to set up a store?",
      answer:
        "The cost of setting up a store can vary depending on the platform and the features you require. Many e-commerce platforms offer both free and paid plans, with additional costs for customizations and add-ons.",
    },
    {
      question: "What kind of digital products can I sell?",
      answer:
        "You can sell a wide range of digital products, including e-books, software, music, videos, courses, and more. The possibilities are virtually endless, as long as the product can be delivered digitally.",
    },
    {
      question: "Do I need technical skills to use the platform?",
      answer:
        "The level of technical skill required depends on the platform you choose. Some e-commerce platforms are designed to be user-friendly and require no technical skills, while others may require some technical knowledge for setup and customization.",
    },
    {
      question: "Is there a limit to the number of products I can list?",
      answer:
        "The limit to the number of products you can list also depends on the platform. Some platforms have a maximum number of products allowed on their plans, while others offer unlimited listings.",
    },
    {
      question: "How do I receive payments for my sales?",
      answer:
        "Most e-commerce platforms offer multiple payment options, including credit/debit cards, PayPal, and other payment gateways. You can choose the payment methods that best suit your customers.",
    },
  ];

  return (
    <div className="sm:px-[16px] md:px-[40px] lg:px-[70px] xl:px-[120px] ">
      <h1 className="font-semibold md:text-center text-[18px] md:text-[22px] pt-4 md:pt-[70px]">
        ESTIMATE EARNING POTENTIAL
      </h1>

      <div className=" flex md:flex-row  flex-col md:gap-[100px] mt-4 md:mt-[50px]">
        <div className="flex-1">
          <h3 className="pb-[15px]">What kind of influencer are you?</h3>
          <select className="border-gray-400 bg-white px-[10px] border w-full  rounded-md py-[5px]">
            <option className="text-gray-400" selected disabled>
              Select influencer type?
            </option>
            <option value="micro">Micro-Influencer</option>
            <option value="macro">Macro-Influencer</option>
            <option value="celebrity">Celebrity-Influencer</option>
            <option value="expert">Industry Expert</option>
            <option value="ambassador">Brand Ambassador</option>
            <option value="creator">Content Creator</option>
            <option value="social">Social Media Influencer</option>
          </select>
          <h3 className="py-[15px]">How many followers do you have? </h3>

          <input
            onChange={(event) => setValue(event.target.value)}
            type="range"
            min="0"
            max="100"
            step="10"
            value={value}
            className="border-gray-400y [-webkit-slider-runnable-track ]  accent-[#4a508e]  bg-[#4a508e] thumb-blue-500 px-2 border w-full rounded-md py-1"
          />

          <div className=" mx-auto w-fit rounded-lg px-2 py-1 border-[#4a508e] border-b-2">
            <p className="">{value}K</p>
          </div>

          <h3 className="py-[15px]"> How many products do you list monthly?</h3>
          <input
            onChange={(event) => setProduct(event.target.value)}
            type="range"
            min="0"
            max="10"
            step="1"
            value={product}
            className="border-gray-400 accent-[#4a508e]  px-2 border w-full rounded-md py-1 bg-[#4a508e] "
          />

          <div className="mx-auto  w-fit rounded-lg px-2 py-1 border-[#4a508e] border-b-2">
            <p className="">{product}</p>
          </div>
        </div>
        <button
          onClick={sendata}
          className="text-[14px]  md:hidden mx-auto block   bg-[#4a508e] px-[15px] py-[8px] rounded-xl text-white  font-semibold mt-[20px]"
        >
          {loading ? "Loading..." : "Calculate"}
        </button>
        <div className="w-[350px]  gap-4 md:gap-0 md:mt-0 mt-[30px] md:flex-col flex-row flex mx-auto justify-center items-center text-start  ">
          <div>
            <h1 className="font-medium md:mt-[100px]">Monthly Earning</h1>
            <div className="text-[#4a508e] font-semibold text-[30px]">
              {data && "₹ " + data.monthly}
            </div>
          </div>
          <div>
            <h1 className="font-medium md:mt-[20px]">Yearly Earning</h1>
            <div className="text-[#4a508e] font-semibold text-[30px]">
              {data && "₹ " + data.yearly}
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={sendata}
        className="text-[14px] mx-auto  md:block hidden  bg-[#4a508e] px-[15px] py-[8px] rounded-xl text-white  font-semibold mt-[50px]"
      >
        {loading ? "Loading..." : "Calculate"}
      </button>

      <h1 className="font-semibold md:text-center md:text-[22px] text-[18px] pt-[70px]">
        FREQUENTLY ASKED QUESTIONS{" "}
      </h1>
      <p className="md:text-center">
        Quick answers to questions you may have. Can’t find what you're looking
        for?
      </p>
      <p className="text-center text-blue-600 hidden md:block cursor-pointer">
        Check out our full documentation
      </p>

      <div className="mt-[50px]">
        {FAQ.map((item, i) => (
          <div
            key={i}
            className="bg-[#d6d6d6] rounded-lg  mt-[10px] md:mx-[100px] cursor-pointer"
            onClick={() => ToggeAns(i)}
          >
            <div
              className={`flex flex-row items-center justify-between border-[#c8c9c9] p-4 border-b-2 mb-4 ${
                !toggle === i ? "rounded-md" : "rounded-md"
              }`}
            >
              <h2 className="text-black font-medium  ">{item.question}</h2>

              {toggle === i ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </div>

            {toggle === i && <h2 className="mx-4 my-4">{item.answer}</h2>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tab2;
