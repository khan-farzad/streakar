import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import useNotiModal from "../_hooks/useNotiModal";

interface Noti {
  sender: {
    avatar: string;
    username: string;
  };
  receiver: string;
  habit: any;
  proof: string;
  status: "Pending" | "Accepted" | "Rejected";
}

const Notification = ({ noti }: { noti: Noti }) => {
  const [showProof, setShowProof] = useState(false);
  const notiModal = useNotiModal();
  const updateNoti = async (accept: boolean) => {
    try {
      const response = await fetch("/api/habits/action", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ habitId: noti.habit, notiId: noti, accept }),
      });
    } catch (error) {
      console.log(error);
    } finally {
      notiModal.OnClose();
    }
  };

  return (
    <div className="flex gap-4 items-center text-sm mr-5">
      <div className="flex-center gap-1">
        <Image
          alt="avatar"
          src={"/avatar" + noti.sender.avatar + ".png"}
          width={48}
          height={49}
          className="size-6 ml-2"
        />
        <p>{noti.sender.username}</p>
      </div>
      <p className="text-this-grey/50">
        Accept my today`s progress for {noti.habit.title}{" "}
        <span>
          {noti.proof && (
            <button onClick={() => setShowProof(true)}>view proof</button>
          )}
        </span>
        {showProof && (
          <div className="absolute inset-0 z-0 size-full">
            <Image
              alt="proof"
              src={noti.proof}
              height={99}
              width={99}
              className="size-full"
            />
            <IoClose
              onClick={() => setShowProof(false)}
              className="absolute top-2 right-10 z-10 text-black size-8 cursor-pointer"
            />
          </div>
        )}
      </p>
      <div className="flex-center gap-3">
        <button onClick={() => updateNoti(true)}>
          <FaCheck color="green" />
        </button>
        <button onClick={() => updateNoti(false)}>
          <RxCross2 color="red" />
        </button>
      </div>
    </div>
  );
};

export default Notification;
