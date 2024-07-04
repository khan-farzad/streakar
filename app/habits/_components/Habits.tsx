import Image from "next/image"
import Habit from "./Habit"

const Habits = () => {
    const user = 'Pulkit'
    const streak = 5
    const habits = [
        {
            title: "Work out for 30 minutes",
            completed: ["2024-07-03", "2024-07-02", "2024-07-01","2024-06-30"],
            streak: 33,
        },
        {
            title: "Read a book",
            completed: ["2024-07-01", "2024-06-30"],
            streak: 2,
        },
        {
            title: "Do gardening",
            completed: ["2024-07-03", "2024-07-01","2024-06-30"],
            streak: 1,
        },
        {
            title: "Read a book",
            completed: ["2024-07-01", "2024-06-29"],
            streak: 1,
        },
        {
            title: "Do gardening",
            completed: ["2024-07-01", "2024-06-29"],
            streak: 1,
        },
        {
            title: "Work out for 30 minutes",
            completed: ["2024-07-01", "2024-06-30", "2024-06-29"],
            streak: 3,
        },
        {
            title: "Read a book",
            completed: ["2024-07-01", "2024-06-29"],
            streak: 1,
        },
    ]
  return (
    <div className="bg-[#ee9ff] p-5 h-screen flex flex-col items-center gap-8">
        <div>
            <Image
            src='/avatar1.png'
            alt="avatar"
            width={50}
            height={50}
            />
        </div>
        <h2 className="font-semibold text-4xl">Hi, {user}</h2>
        <p>{streak} days in a row</p>
        <div className="flex flex-col md:flex-row items-center w-full gap-4 *:w-11/12 md:*:max-w-fit md:flex-wrap">
            {habits.map((habit, idx) => (
                <Habit key={idx+'habit'} prop={habit} idx={idx}/>
            ))}
        </div>
    </div>
  )
}

export default Habits