import Image from "next/image";
import React from "react";
import { IoIosBatteryFull, IoIosWifi } from "react-icons/io";
import { TbAntennaBars5 } from "react-icons/tb";

const IPhone = () => {
  return (
    <div className="rounded-3xl h-[799px] w-[399px] relative py-6">
      {" "}
      <Image
        alt="iphone"
        src={"/iphone2.png"}
        height={799}
        width={399}
        className="top-0 absolute drop-shadow-2xl"
      />
      <div className="size-full px-10">
        <div className="flex justify-between items-center px-4 h-12">
          <div className="">9:41</div>
          <div className="flex-center gap-1">
            <TbAntennaBars5 />
            <IoIosWifi />
            <IoIosBatteryFull />
          </div>
        </div>
        <div className="flex-center">
          <Image
            alt="avatar"
            src={"/avatar1.png"}
            width={99}
            height={99}
            className="size-10"
          />
        </div>
        <h3 className="text-center text-2xl py-2">Hi, Anon👋</h3>
      </div>
    </div>
  );
};

export default IPhone;
