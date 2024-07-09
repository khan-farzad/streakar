import useApprovalModal from "@/app/_hooks/useApprovalModa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Draggable from "gsap/Draggable";
import Image from "next/image";
import { useEffect, useState } from "react";

interface HabitProps {
  prop: {
    title: string;
    dates: string[];
    streak: number;
    maxStreak: number;
    bro?: number;
    _id?: string;
    lastUpdated?: string;
  };
  idx: number;
  fake?: boolean[];
}

const Habit = ({ prop, idx, fake }: HabitProps) => {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  let streak: number = 0;
  const todayDate = new Date().toJSON().substring(0, 10);
  const todayIdx = new Date().getDay();
  const x = new Date();
  const y = x.getDay() || 0;
  const bgColors = ["#feeddd", "#fbcdc5", "#e9cf8c", "#ddd5f3"];
  const [bro, setBro] = useState("Bro");
  const [avatar, setAvatar] = useState(1);
  const { OnOpen, setHabit } = useApprovalModal();

  const collaboratorInfo = async () => {
    try {
      const response = await fetch("/api/users/" + prop.bro, {
        method: "GET",
      });
      const data = await response.json();
      setBro(data.username);
      setAvatar(data.avatar || 1);
    } catch (error) {}
  };

  const updateHabit = async (date: string) => {
    try {
      const response = await fetch("/api/habits/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ habitId: prop._id, streak, lastUpdated: date }),
      });
      await response.json();
    } catch (error) {
      console.log(error);
    } finally {
      window.dispatchEvent(new Event("getHabits"));
    }
  };

  const calculateStreak = async () => {
    let { dates, lastUpdated } = prop;
    if (lastUpdated === todayDate) {
      return;
    }
    if (dates && dates.includes(todayDate)) {
      streak = prop.streak + 1;
      lastUpdated = todayDate;
    } else if (
      !dates.includes(
        new Date(Date.now() - 86400000).toJSON().substring(0, 10)
      )
    ) {
      streak = 0;
    }
    updateHabit(lastUpdated!);
  };

  useEffect(() => {
    calculateStreak();
    if (prop.bro) collaboratorInfo();
  }, []);

  gsap.registerPlugin(Draggable);

  useGSAP(() => {
    Draggable.create("#habit");
  }, []);

  return (
    <div
      id={!fake ? "habit" : ""}
      style={{ backgroundColor: `${bgColors[idx % 4]}` }}
      className={`${
        idx % 2 === 0 ? "-skew-y-1 skew-x-1" : "skew-y-1 -skew-x-1"
      } rounded-3xl w-11/12 box-content p-1.5 gap-2 flex flex-col justify-between relative items-center`}
    >
      {prop.bro && (
        <div className="absolute -top-3 -right-3">
          <Image
            alt="bro-avatar"
            src={"/avatar" + avatar + ".png"}
            height={99}
            width={99}
            className="size-10"
          />
          <p className="text-xs text-center">{bro}</p>
        </div>
      )}
      <div
        style={{
          backgroundColor: `#fff`,
        }}
        className={`rounded-3xl h-5/6 p-4 w-full ${
          fake && "text-xs"
        } gap-2 flex flex-col shadow-lg justify-between `}
      >
        <h3
          className={`${
            fake ? "text-base" : "text-xl"
          } font-medium text-[#352364]`}
        >
          {prop.title}
        </h3>
        <p
          className={`text-primary text-cnter ${fake ? "text-xs" : "text-sm"}`}
        >
          🔥 Streak: {prop.streak} days 🔥
        </p>
        <div
          className={`flex justify-between items-center ${
            fake ? "gap-1" : "gap-2"
          }`}
        >
          {days.map((day, idx) => (
            <div
              key={idx + day}
              onClick={() => {
                OnOpen(), setHabit({ ...prop });
              }}
              className={`rounded-full ${
                fake ? "size-5 p-1.5" : "size-6 p-2.5"
              }  flex justify-center items-center ${fake && fake[idx] ? "bg-[#8765e8] text-white"
                  : "border-[#8765e8] border text-[#8765e8]"}  ${
                !fake && prop.dates!.includes(
                  new Date(new Date().valueOf() - (y - idx) * 86400000)
                    .toJSON()
                    .substring(0, 10)
                )
                  ? "bg-[#8765e8] text-white"
                  : "border-[#8765e8] border text-[#8765e8]"
              } ${
                !fake && idx === todayIdx && "animate-bounce cursor-pointer"
              }`}
            >
              {day}
            </div>
          ))}
        </div>
      </div>
      <p className="text-[#352364] font-medium">MAX STREAK: {prop.maxStreak}</p>
    </div>
  );
};

export default Habit;
