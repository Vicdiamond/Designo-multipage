import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import DropDown from "./DropDown";
import { useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";

export default function AppLayout() {
  const [showDropDown, setShowDropDown] = useState(false);

  useEffect(() => {
    if (showDropDown) document.body.style.overflow = "hidden";

    if (!showDropDown) document.body.style.overflow = "";
  }, [showDropDown]);

  return (
    <div className={`max-w-[1440px] mx-auto `}>
      <ScrollRestoration />
      <Header showDropDown={showDropDown} setShowDropDown={setShowDropDown} />
      <div className="relative">
        <Outlet />
        <Footer />

        <AnimatePresence>
          {showDropDown && <DropDown setShowDropDown={setShowDropDown} />}
        </AnimatePresence>
      </div>
    </div>
  );
}
