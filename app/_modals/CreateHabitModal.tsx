import React, { Dispatch, SetStateAction, useState } from "react";
import useCreateHabitModal from "../_hooks/UseCreateHabitModal";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { IoCheckmark } from "react-icons/io5";

const CreateHabitModal = () => {
  const [title, setTitle] = useState("Add a title");
  const { isOpen, OnClose } = useCreateHabitModal();
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const [loading, setLoading] = useState(false);
  const [sucess, setSuccess] = useState(false);

  const createHabit = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/habits/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, bro: "Atif" }),
      });
      if (response.status === 200) {
        setSuccess(true);
        window.dispatchEvent(new Event('getHabits'))
        setTimeout(() => {
          OnClose();
          setSuccess(false)
          setLoading(false)
          setTitle('Add a title')
        }, 2000);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  if (!isOpen) return;
  return (
    <div
      onClick={OnClose}
      className="absolute z-[99] inset-0 h-full backdrop-blur-[2px] flex-center animate-popup"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className=" min-w-[40%] bg-[#ddd5f3] rounded-3xl p-1.5 flex-center flex-col"
      >
        <div
          className={`rounded-3xl bg-white shadow-2xl w-full flex flex-col gap-4 transition-[height,padding] duration-700 overflow-hidden ${
            loading ? "h-0" : "h-52 p-10"
          }`}
        >
          <input
            type="text"
            value={title}
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
            className="text-3xl focus:outline-none"
          />
          <p className={`text-primary text-cnter "text-sm"`}>
            🔥 Streak: 0 days 🔥
          </p>
          <div className="flex justify-around gap-2">
            {days.map((day, idx) => (
              <div
                key={idx + day}
                className={`rounded-full flex-center size-10 p-2.5 flex justify-center items-centerb border-[#8765e8] border text-[#8765e8]`}
              >
                {day}
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={createHabit}
          className="text-xl text-[#352364] m-2 border border-this-white rounded-2xl px-2 py-1 active:translate-y-2"
        >
          {!loading && "Create a Habit"}
          {loading && !sucess && (
            <AiOutlineLoading3Quarters className="animate-spin" />
          )}
          {sucess && <IoCheckmark />}
        </button>
      </div>
    </div>
  );
};

export default CreateHabitModal;