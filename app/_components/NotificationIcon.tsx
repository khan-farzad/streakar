import Image from "next/image";
import React from "react";
import useNotiModal from "../_hooks/useNotiModal";

const NotificationIcon = () => {
  const { isOpen, OnOpen } = useNotiModal();
  return (
    <div onClick={OnOpen}>
      <div className="relative size-8 rounded-xl flex-center bg-black/70 overflow-hidden">
        <div className="h-3 w-full backdrop-blur-[1px] absolute bg-black/10 bottom-0 rounded-tr-md left-0 z-10"></div>
        <div className="bg-red-100 size-[60%] rotate-12 rounded-md flex-center">
          <Image alt="dev" src={"/dev.png"} height={999} width={999} />
        </div>
        <div className="size-2 rounded-full absolute top-0 right-1 animate-ping duration-700 bg-red-500"></div>
      </div>
    </div>
  );
};

export default NotificationIcon;
