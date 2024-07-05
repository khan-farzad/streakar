import Image from "next/image";
import { ChangeEvent, useState } from "react";
import useApprovalModal from "../_hooks/useApprovalModa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { IoCheckmark } from "react-icons/io5";

const ApprovalModal = () => {
  const { habit, isOpen, OnClose } = useApprovalModal();
  const [src, setSrc] = useState<any>();
  const convert = (e: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    if (e.target.files) reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setSrc(reader.result); //base64encoded string
    };
  };
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const x = new Date(habit.dates[0]);
  const y = x.getDay() || 0;
  const [loading, setLoading] = useState(false);
  const [sucess, setSuccess] = useState(false);

  const createHabit = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/habits/status", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ habitId: habit._id, img: src }),
      });
      if (response.status === 200) {
        setSuccess(true);
        window.dispatchEvent(new Event("getHabits"));
        setTimeout(() => {
          OnClose();
          setSuccess(false);
          setLoading(false);
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
      className="absolute inset-0 z-[10001] flex-center backdrop-blur-[2px]"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="min-w-[40%] bg-[#ddd5f3] rounded-3xl p-1.5 flex-center flex-col relative animate-popup"
      >
        <p className="text-xl text-[#8765e8]">
          {habit.bro ? (
            <p className="m-2">
              Request {habit.broName} to log today`s progress?{" "}
            </p>
          ) : (
            "Are you sure u want to log today's progress?"
          )}
        </p>
        <div
          className={`relative rounded-3xl bg-white shadow-2xl w-full flex flex-col gap-4 transition-[height,padding] duration-700 overflow-hidden ${
            loading ? "h-0" : "min-h-48 p-10"
          }`}
        >
          <h2 className="text-3xl">{habit.title}</h2>
          <p className={`text-primary text-cnter text-sm`}>
            🔥 Streak: {habit.streak} days 🔥
          </p>
          <div className={`flex justify-between items-center gap-2`}>
            {days.map((day, idx) => (
              <div
                key={idx + day}
                className={`rounded-full size-6 p-2.5 flex justify-center items-center ${
                  habit.dates.includes(
                    new Date(new Date().valueOf() - (y - idx) * 86400000)
                      .toJSON()
                      .substring(0, 10)
                  )
                    ? "bg-[#8765e8] text-white"
                    : "border-[#8765e8] border text-[#8765e8]"
                } ${idx === new Date().getDay() && "animate-bounce"}`}
              >
                {day}
              </div>
            ))}
          </div>
          {habit.bro && (
            <div className="h-40 w-full outline-dotted my-2 rounded-xl flex-center relative">
              <input
                type="file"
                onChange={(e) => convert(e)}
                accept="image/png, image/jpeg, image/jpg"
                className="size-full absolute cursor-pointer opacity-0"
              />
              <p>
                Upload a proof {`(`}optional{`)`}
              </p>
              {src && (
                <Image
                  src={src}
                  alt="img"
                  height={300}
                  width={300}
                  className="max-h-full absolute max-w-full"
                />
              )}
            </div>
          )}
        </div>
        <div className="">
          {!loading && (
            <button
              onClick={OnClose}
              className="text-xl text-red-400 m-2 border border-this-white rounded-2xl px-2 py-1 active:translate-y-2"
            >
              Cancel
            </button>
          )}
          <button
            onClick={createHabit}
            className="text-xl text-green-500 m-2 border border-this-white rounded-2xl px-2 py-1 active:translate-y-2"
          >
            {!loading && "Confirm"}
            {loading && !sucess && (
              <AiOutlineLoading3Quarters className="animate-spin" />
            )}
            {sucess && <IoCheckmark />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApprovalModal;
