"use client";
import Image from "next/image";
import { useEffect } from "react";
import IPhone from "./iPhone";
import Features from "./Features";
import Faqs from "./Faqs";
import Contact from "./Contact";
import { useRouter } from "next/navigation";
import useSignupModal from "../_hooks/useSignupModal";
import { checkAccess } from "@/helper/checkAccess";

const Hero = () => {
  const router = useRouter();
  async function getUser() {
    if (await checkAccess()) router.push("/habits");
  }

  useEffect(() => {
    getUser();
  }, []);

  const { isOpen, OnOpen } = useSignupModal();

  return (
    <div className="">
      <div className="h-[30vh] md:h-[60vh] flex-center flex-col text-center tracking-tight md:text-3xl font-medium ">
        <Image
          alt="logo2"
          src={"/logo2.png"}
          height={999}
          width={999}
          className="scale-[50%] md:scale-100 drop-shadow-xl size-24 mb-1"
        />
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
        <div className="flex-center text-base my-4 md:my-10 gap-8">
          <button
            onClick={OnOpen}
            className="bg-this-grey text-black p-2 active:scale-90 rounded-xl border border-black"
          >
            Try for free
          </button>
          <button
            onClick={OnOpen}
            className="bg-black text-this-grey p-2 active:scale-90 rounded-xl border border-x-this-grey"
          >
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
