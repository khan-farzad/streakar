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
      completed: ["2024-07-03", "2024-06-30", "2024-06-29"],
      streak: 3,
    },
    {
      title: "Read a book",
      completed: ["2024-07-01", "2024-06-30"],
      streak: 1,
    },
    {
      title: "Do gardening",
      completed: ["2024-07-03", "2024-07-01", "2024-06-30"],
      streak: 1,
    },
  ];
  const [resizeCount, setResizeCount] = useState(0);
  const initGSAP = () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to('#habit1', {
      x: 0,
      y: 0,
      rotate: 0,
      scrollTrigger: {
        trigger: '#iphone',
        scrub: true,
        markers: true,
        start: 'top center',
        end: 'center 70%',
      },
    });
  };

  useEffect(() => {
    initGSAP();

    const handleResize = () => {
      console.log('dsibkjc')
      setResizeCount(prevCount => prevCount + 1);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  useEffect(() => {
    initGSAP();
  }, [resizeCount]);

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
        <div className="flex flex-col items-center gap-3 *:w-[250px]">
          <div id="habit1" className="absolute -rotate-12 md:-translate-x-[50rem] md:-translate-y-[70rem]  lg:-translate-x-[65rem] lg:-translate-y-[95rem] drop-shadow-lg">
            <Habit fake prop={habits[0]} idx={0} />
          </div>
          <div className="absolute top-72 drop-shadow-lg">
            <Habit fake prop={habits[1]} idx={1} />
          </div>
          <div className="absolute top-[26rem] drop-shadow-lg">
            <Habit fake prop={habits[2]} idx={2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IPhone;
