import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoIosBatteryFull, IoIosWifi } from "react-icons/io";
import { TbAntennaBars5 } from "react-icons/tb";
import Habit from "../habits/_components/Habit";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const IPhone = () => {
  const habits = [
    {
      title: "Work out for 30 minutes",
      dates: ["2024-07-03", "2024-07-02", "2024-07-01", "2024-06-30"],
      streak: 33,
      maxStreak: 33,
    },
    {
      title: "Read a book",
      dates: ["2024-07-03", "2024-07-02"],
      streak: 2,
      maxStreak: 7,
    },
    {
      title: "Do gardening",
      dates: ["2024-07-03", "2024-07-01", "2024-06-30"],
      streak: 1,
      maxStreak: 9,
    },
  ];
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("#habit1", {
      x: 0,
      y: 0,
      rotate: 0,
      scrollTrigger: {
        trigger: "#iphone",
        scrub: true,
        markers: true,
        start: "top 62%",
        end: "center 70%",
      },
    });
  }, []);

  return (
    <div id="iphone" className="rounded-3xl h-[799px] w-[399px] relative py-6">
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
        <div className="flex flex-col items-center gap-3">
          <div
            id="habit1"
            className="absolute -rotate-12 -translate-x-[34rem] -translate-y-[40rem] drop-shadow-lg"
          >
            <Habit fake prop={habits[0]} idx={0} />
          </div>
          <div
            id="habit1"
            className="absolute top-80 rotate-12 translate-x-[34rem] -translate-y-[50rem] drop-shadow-lg"
          >
            <Habit fake prop={habits[1]} idx={1} />
          </div>
          <div
            id="habit1"
            className="absolute top-[30rem] -rotate-12 -translate-x-[34rem] -translate-y-[25rem] drop-shadow-lg"
          >
            <Habit fake prop={habits[2]} idx={2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IPhone;
