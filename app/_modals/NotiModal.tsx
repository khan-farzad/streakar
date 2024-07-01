import React from "react";
import useNotiModal from "../_hooks/useNotiModal";
import Image from "next/image";

const NotiModal = () => {
  const { isOpen, OnClose } = useNotiModal();
  if (!isOpen) return null;
  return (
    <div
      onClick={OnClose}
      className="absolute inset-0 h-screen backdrop-blur flex-center overflow-hidden "
    >
      <div className="size-[30rem] bg-black rounded-[4rem] p-10 animate-popup text-this-grey relative overflow-hidden">
        <div className="absolute h-10 w-1/2 bottom-[30%] left-0 bg-white/10 rounded-t-xl"></div>
        <div className="absolute bottom-0 w-full h-[30%] backdrop-blur left-0 bg-white/10"></div>
        <h2 className="text-3xl">Notifications</h2>
        <div className="flex justify-between items-center text-sm mt-8">
          <div className="flex-center gap-1">
            <Image
              alt="dev"
              src={"/dev.png"}
              className="size-"
              width={48}
              height={49}
            />
            <p>Devs</p>
          </div>

          <p className="text-this-grey/50">
            Welcome on board! Hope u enjoy yourself!
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotiModal;
