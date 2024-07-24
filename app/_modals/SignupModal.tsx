"use client";
import React, { useEffect, useState } from "react";
import useSignupModal from "../_hooks/useSignupModal";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa6";

const SignupModal = () => {
  const router = useRouter();
  const { isOpen, OnClose } = useSignupModal();
  const [isLogin, setIsLogin] = useState(true);
  const [validationMsg, setValidationMsg] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    password2: "",
    avatarIndex: 1,
  });
  const [avatarIndex, setAvatarIndex] = useState<number>(
    Math.floor(Math.random() * 9) + 1
  );

  useEffect(() => {
    const fn = setTimeout(() => {
      setValidationMsg("");
    }, 2000);

    return () => clearTimeout(fn);
  }, [validationMsg]);

  if (!isOpen) return null;

  const handleFormChange = (e: any) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const signUp = async () => {
    if (!isLogin && formData.password != formData.password2) {
      setValidationMsg("Passwords must match");
      return;
    }
    let url = `/api/users/${isLogin ? "login" : "signup"}`;
    try {
      formData.avatarIndex = avatarIndex;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.status === 200) router.push("/habits");
      setValidationMsg(data.msg);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleAvatarChange = (change: number) => {
    if (change > 0) {
      setAvatarIndex(Math.min(avatarIndex + 1, 10));
      return;
    }
    setAvatarIndex(Math.max(avatarIndex - 1, 1));
  };

  return (
    <div
      onClick={OnClose}
      className="absolute inset-0 h-screen backdrop-blur-[1px] flex-center overflow-hidden animate-popup"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="size[20rem] bg-white shadow-2xl rounded-[4rem] p-10 relative overflow-hidden z-0"
      >
        <div className="absolute bg-gradient-to-b from-this-white -z-10 to-white h-14 w-full top-0 left-0 bg-white/10 rounded-t-xl"></div>
        <h2 className="text-3xl text-center z-50">
          {isLogin ? "Login" : "Sign Up"}
        </h2>
        <p className="text-center text-this-blue mt-0.5 min-h-4 text-xs">
          {validationMsg}
        </p>
        {!isLogin && (
          <div className=" rounded-full flex-center mt-4 gap-2">
            {avatarIndex > 1 && (
              <FaAngleRight
                onClick={() => handleAvatarChange(-1)}
                size={10}
                className="rotate-180 text-black/20 active:scale-50 cursor-pointer"
              />
            )}
            <Image
              alt="avatar"
              src={"/avatar" + avatarIndex + ".png"}
              height={50}
              width={50}
              className="pointer-events-none select-none"
            />
            {avatarIndex < 10 && (
              <FaAngleRight
                onClick={() => handleAvatarChange(1)}
                size={10}
                className="text-black/20 active:scale-50 cursor-pointer"
              />
            )}
          </div>
        )}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            signUp();
          }}
          className="flex w-full flex-col gap-4 text-sm mt-4"
        >
          <div className="flex items-center justify-between gap-2 ">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={formData.username}
              onChange={handleFormChange}
              required
              className="rounded-xl border border-this-white active:outline-none px-2 py-1"
            />
          </div>
          <div className="flex justify-between gap-2 ">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={formData.password}
              onChange={handleFormChange}
              required
              className="rounded-xl border border-this-white active:outline-none px-2 py-1"
            />
          </div>
          {!isLogin && (
            <div className="flex items-center gap-2">
              <label htmlFor="password2">Re-enter Password</label>
              <input
                id="password2"
                type="password"
                value={formData.password2}
                required
                onChange={handleFormChange}
                className="rounded-xl border border-this-white active:outline-none px-2 py-1"
              />
            </div>
          )}
          <button
            type="submit"
            className="bg-this-white w-full rounded-2xl drop-shadow-2xl py-2 text-white active:scale-90"
          >
            Jump In!
          </button>
        </form>
        <p className="text-center">
          {isLogin ? "New here? " : "Already a user? "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="underline decoration-this-white underline-offset-1"
          >
            {isLogin ? "Sign up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignupModal;
