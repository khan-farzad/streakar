interface HabitProps {
  prop: {
    title: string;
    completed: string[];
    streak: number;
  };
  idx: number;
  fake?: boolean;
}

const Habit = ({ prop, idx, fake }: HabitProps) => {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const streak = 4;
  const todayIdx = new Date().getDay();
  const completed = false;
  const x = new Date(prop.completed[0]);
  const y = x.getDay();
  const bgColors = ["#feeddd", "#fbcdc5", "#e9cf8c", "#ddd5f3"];

  return (
    <div
      style={{ backgroundColor: `${bgColors[idx % 4]}` }}
      className={`${
        idx % 2 === 0 ? "-skew-y-1 skew-x-1" : "skew-y-1 -skew-x-1"
      } rounded-3xl box-content p-1.5 gap-2 flex flex-col justify-between  items-center`}
    >
      <div
        style={{
          backgroundColor: `#fff`,
        }}
        className={`rounded-3xl h-5/6 p-4 ${
          fake && "text-xs w-[250px]"
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
              className={`rounded-full ${
                fake ? "size-5 p-1.5" : "size-6 p-2.5"
              }  flex justify-center items-center ${
                prop.completed.includes(
                  new Date(Date.parse(prop.completed[0]) - (y - idx) * 86400000)
                    .toJSON()
                    .substring(0, 10)
                )
                  ? "bg-[#8765e8] text-white"
                  : "border-[#8765e8] border text-[#8765e8]"
              } ${!fake && idx === todayIdx && "animate-bounce"}`}
            >
              {day}
            </div>
          ))}
        </div>
      </div>
      <p className="text-[#352364] font-medium">MAX STREAK: {streak}</p>
    </div>
  );
};

export default Habit;
