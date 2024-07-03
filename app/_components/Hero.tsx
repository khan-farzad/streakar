import Image from "next/image";
import React from "react";
import IPhone from "./iPhone";
import Features from "./Features";
import Faqs from "./Faqs";
import Contact from "./Contact";
import { useRouter } from "next/navigation";
import Habit from "../habits/_components/Habit";

const Hero = () => {
  const router=useRouter()
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
        completed: ["2024-07-03", "2024-07-01","2024-06-30"],
        streak: 1,
    },
  ]
  return (
    <div className="">
      <div className="h-[30vh] md:h-[60vh] flex-center flex-col text-center tracking-tight md:text-3xl font-medium ">
        <Image
          alt="pointer"
          src={"/logo2.png"}
          height={999}
          width={999}
          className="scale-[50%] md:scale-100 drop-shadow-xl size-24 mb-10"
        />
        <div className="absolute left-14 top-40 -rotate-12 drop-shadow-lg"><Habit fake prop={habits[0]} idx={0} /></div>
        <div className="absolute right-14 top-40 rotate-12 drop-shadow-lg"><Habit fake prop={habits[1]} idx={0} /></div>
        <div className="absolute left-14 bottom-28 rotate-12 drop-shadow-lg"><Habit fake prop={habits[2]} idx={0} /></div>
        <div>
          Unite, Collaborate, Achieve. <br />
          Streakar : where Every Task Meets Teamwork and Individual Brilliance.
        </div>
        <Image
          alt="pointer"
          src={"/pointer.svg"}
          height={99}
          width={99}
          className="mt-72 scale-[50%] md:scale-100 hidden md:flex absolute right-[10%]"
        />
        <div className="flex-center text-base my-10 gap-8">
          <button onClick={()=>router.push('/habits')} className="bg-this-grey text-black p-2 active:scale-90 rounded-xl border border-black">
            Try for free
          </button>
          <button className="bg-black text-this-grey p-2 active:scale-90 rounded-xl border border-x-this-grey">
            Collaborate
          </button>
        </div>
      </div>
      <div className="flex-center ">
        <IPhone />{" "}
      </div>
      <Features />
      <Faqs />
      <Contact />
    </div>
  );
};

export default Hero;
