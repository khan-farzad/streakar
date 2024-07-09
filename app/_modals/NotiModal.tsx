import React, { useEffect, useState } from "react";
import useNotiModal from "../_hooks/useNotiModal";
import Image from "next/image";
import Notification from "../_components/Notification";

interface Notification {
  sender: {
    avatar: string;
    username: string;
  };
  receiver: string;
  habit: string;
  proof: string;
  status: "Pending" | "Accepted" | "Rejected";
}

const NotiModal = () => {
  const { isOpen, OnClose } = useNotiModal();
  const [Noti, setNoti] = useState<Notification[]>();

  useEffect(() => {
    if (isOpen) {
      getNotis();
    }
  }, [isOpen]);

  const getNotis = async () => {
    try {
      const response = await fetch("/api/users/noti", {
        method: "GET",
      });
      const data = await response.json();
      setNoti(data.toSend);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (!isOpen) return null;
  return (
    <div
      onClick={OnClose}
      className="absolute z-[10001] inset-0 h-screen backdrop-blur flex-center overflow-hidden tracking-tigher"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="size-[30rem] bg-black rounded-[4rem] p-6 animate-popup text-this-grey relative overflow-hidden"
      >
        <div className="absolute h-10 w-1/2 bottom-[30%] left-0 bg-white/10 rounded-t-xl"></div>
        <div className="absolute bottom-0 w-full h-[30%] backdrop-blur left-0 bg-white/10"></div>
        <h2 className="text-3xl">Notifications</h2>
        <div className="flex flex-col gap-2 h-[200px] overflow-auto">
          <div className="flex gap-2 items-center text-sm mt-8">
            <div className="flex-center gap-0.5">
              <Image
                alt="dev"
                src={"/dev.png"}
                className="size-6"
                width={99}
                height={99}
              />
              <p>Devs</p>
            </div>
            <p className="text-this-grey/50">
              Welcome on board! Hope u enjoy yourself!
            </p>
          </div>
          {Noti &&
            Noti.map((notification, index) => (
              <Notification key={`noti${index}`} noti={notification} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default NotiModal;
