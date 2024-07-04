import React from "react";
import NotificationIcon from "./NotificationIcon";
import NewIcon from "./NewIcon";
import Image from "next/image";

const Navbar = ({ habitsPage }: { habitsPage?: boolean }) => {
  return (
    <div className="md:p-4 p-2 flex items-center justify-between sticky top-0 backdrop-blur z-50">
      <div className="font-bold md:text-4xl flex-center gap-2">
        <h1>Streakar</h1>
      </div>
      {!habitsPage && (
        <div className="hidden md:flex items-center justify-center gap-10 text-xl">
          <a href="#features">Features</a>
          <a href="#faqs">FAQ`s</a>
          <a href="#contact">Contact</a>
        </div>
      )}
      <div className="flex-center gap-4">
        <NewIcon />
        <NotificationIcon />
      </div>
    </div>
  );
};

export default Navbar;
