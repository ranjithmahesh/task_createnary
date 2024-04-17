import React from "react";
import Home from "./_components/Home";
import Tab1 from "./_components/Tab1";
import Tab2 from "./_components/Tab2";
import Footer from "./_components/Footer";

function page() {
  return (
    <div className="overflow-x-hidden overflow-auto">
     
      <Home />
      <Tab1 />
      <Tab2 />
      <Footer />
 
    </div>
  );
}

export default page;
