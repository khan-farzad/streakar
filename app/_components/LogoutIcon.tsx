import { useRouter } from "next/navigation";
import React from "react";
import { IoIosLogOut } from "react-icons/io";

const LogoutIcon = () => {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      const res = await fetch("/api/users/logout", { method: "POST" });
      if (res.status === 200)
        router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button
      onClick={handleLogout}
      className="size-8 rounded-xl flex-center bg-[#968c84] text-white"
    >
      <IoIosLogOut />
    </button>
  );
};

export default LogoutIcon;
