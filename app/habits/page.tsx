"use client";
import Habits from "./_components/Habits";
import { checkAccess } from "@/helper/checkAccess";
import Image from "next/image";
import { useEffect, useState } from "react";
import Navbar from "../_components/Navbar";
import CreateHabitModal from "../_modals/CreateHabitModal";
import { useRouter } from "next/navigation";
import InviteModal from "../_modals/InviteModal";
import NotiModal from "../_modals/NotiModal";
import ApprovalModal from "../_modals/ApprovalModal";

const page = () => {
  let [user, setUser] = useState<string>("");
  const [avatar, setAvatar] = useState();
  const router = useRouter();
  async function getUser() {
    const x = await checkAccess();
    if (!x) {
      router.push("/");
      return;
    }
    setAvatar(x.avatar);
    setUser(x.user);
  }
  useEffect(() => {
    getUser();
  }, []);

  const handleLogout = async () => {
    try {
      const res = await fetch("/api/users/logout", { method: "POST" });
      if (res.status === 200) router.push("/");
      console.log(await res.json());
    } catch (error) {
      console.log(error);
    }
  };

  const [bro, setBro] = useState<{ username: string; avatar: number }>({
    username: "",
    avatar: 0,
  });
  return (
    <div className="bg-this-grey min-h-screen">
      <button onClick={handleLogout}>logout</button>
      {/* <ApprovalModal/> */}
      <NotiModal />
      <InviteModal bro={bro} setBro={setBro} />
      <CreateHabitModal bro={bro} setBro={setBro} />
      <Navbar habitsPage={true} />
      {user && (
        <>
          <div className="flex-center flex-col gap-2 absolute top-6 z-50 left-[50%] -translate-x-[50%]">
            <Image
              src={"/avatar" + avatar + ".png"}
              alt="avatar"
              width={50}
              height={50}
            />
            <h2 className="font-semibold text-4xl">Hi, {user}</h2>
          </div>
          <div className="mt-12">
            <Habits />
          </div>
        </>
      )}
    </div>
  );
};

export default page;
