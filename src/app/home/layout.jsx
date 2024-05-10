"use client";

// import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
// import HeaderMobile from "@/components/HeaderMobile";
import Sidebar from "@/components/Sidebar";
const Layout = ({ children }) => {
  const [showHeader, setShowHeader] = useState(false);
  const showHeaderHandler = () => setShowHeader(true);
  const closeHeaderHandler = () => setShowHeader(false);
  return (
    <div className="flex w-full max-w-3xl mx-auto">
      <div className="w-60 bg-[#f2f2f2]  ">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col">{children}</div>
    </div>
  );
};

export default Layout;
