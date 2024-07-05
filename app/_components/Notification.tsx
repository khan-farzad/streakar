import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

interface Noti {
  sender: {
    avatar: string;
    username: string;
  };
  receiver: string;
  habit: string;
  proof: string;
  status: "Pending" | "Accepted" | "Rejected";
}

const Notification = ({ noti }: { noti: Noti }) => {
  const [showProof, setShowProof] = useState(false);

  return (
    <div className="flex gap-4 items-center text-sm">
      <div className="flex-center gap-1">
        <Image
          alt="avatar"
          src={"/avatar" + noti.sender.avatar + ".png"}
          width={48}
          height={49}
          className="size-6"
        />
        <p>{noti.sender.username}</p>
      </div>
      <p className="text-this-grey/50">
        Accept my today`s progress for {noti.habit}{" "}
        <span>
          <button onClick={() => setShowProof(true)}>view proof</button>
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
    </div>
  );
};

export default Notification;
