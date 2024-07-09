import Image from "next/image";
import Habit from "./Habit";
import { useEffect, useState } from "react";
import useApprovalModal from "@/app/_hooks/useApprovalModa";

const Habits = () => {
  const [habits, setHabit] = useState([]);
  const createHabit = async () => {
    try {
      const response = await fetch("/api/habits/getHabit", {
        method: "GET",
      });
      let Rechabits = await response.json();
      setHabit(Rechabits.habits);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    createHabit();
    window.addEventListener("getHabits", () => {
      createHabit();
    });
  }, []);

  return (
    <div className="bg-[#ee9ff] p-5 h-fit flex flex-col items-center gap-8">
      <div className="flex flex-col md:flex-row items-center justify-center w-full gap-4 *:w-11/12 md:*:max-w-fit md:flex-wrap">
        {habits.map((habit, idx) => (
          <Habit key={idx + "habit"} prop={habit} idx={idx} />
        ))}
      </div>
    </div>
  );
};

export default Habits;
