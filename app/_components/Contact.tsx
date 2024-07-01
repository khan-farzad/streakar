import Image from "next/image";
import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <div id="contact" className="pb-32">
      <div className="flex gap-2 justify-center">
        <Image
          alt="pointer"
          src={"/pointer2.svg"}
          height={49}
          width={99}
          className="my-5 [transform:rotateY(180deg)]"
        />
        <h2 className="text-5xl font-semibold">Contact</h2>
        <Image
          alt="pointer"
          src={"/pointer2.svg"}
          height={49}
          width={99}
          className="my-5"
        />
      </div>
      <div className="flex-center gap-20 text-this-grey">
        <div className="bg-red-300 p-10 flex-center flex-col gap-5 rounded-3xl shadow-2xl">
          <Image
            alt="avatar"
            height={99}
            width={99}
            src={"/avatar1.png"}
            className="size-10"
          />
          <p className="text-2xl font-semibold">Farzad Khan</p>
          <div className=" flex-center gap-5">
            <a
              target="_blank"
              href="https://mail.google.com/mail/?view=cm&to=farzadk10000@gmail.com"
            >
              <BiLogoGmail size={24} />
            </a>
            <a target="_blank" href="https://x.com/farzadhimself">
              <FaXTwitter size={20} />
            </a>
          </div>
        </div>
        <div className="bg-red-300 p-10 flex-center flex-col gap-5 rounded-3xl shadow-2xl">
          <Image
            alt="avatar"
            height={99}
            width={99}
            src={"/avatar1.png"}
            className="size-10"
          />
          <p className="text-2xl font-semibold">Pulkit Jain</p>
          <div className=" flex-center gap-5">
            <a
              target="_blank"
              href="https://mail.google.com/mail/?view=cm&to=pulkitjain0906@gmail.com"
            >
              <BiLogoGmail size={24} />
            </a>
            <a target="_blank" href="https://x.com/Pulkit_Jainnn">
              <FaXTwitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
