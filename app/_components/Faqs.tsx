import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const Faqs = () => {
  const [open, setOpen] = useState(Array(4).fill(false));
  const [activeIdx, setActiveIdx] = useState(-1);

  const faqs = [
    {
      q: "How does Streaker work?",
      a: "Streaker lets you track hobbies and tasks in a fun and simple way. You can create tasks, collaborate with friends, and keep track of your progress all in one place.",
    },
    {
      q: "Can I use Streaker for both personal and collaborative tasks?",
      a: "Absolutely! Streaker is designed for both individual and collaborative use, making it perfect for managing goals and hobbies.",
    },
    {
      q: "Is Streaker free to use?",
      a: "Yes, Streaker offers a free version with all the essential features you need to track your tasks and collaborate with friends.",
    },
    {
      q: "Why should I use Streaker?",
      a: "Because tracking your hobbies, collaborating with friends, and flaunting your task streaks has never been this fun and easy!",
    },
  ];

  return (
    <div id="faqs" className="h-[80vh] md:px-40 flex items-center flex-col">
      <h2 className="text-5xl font-semibold">FAQ`s</h2>
      <div className="flex-center flex-col gap-1 my-20 md:w-[30vw] transition-all">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            onClick={() => setActiveIdx(idx)}
            className="bg-black/20 px-4 py-2 w-full rounded-md"
          >
            <div className="flex justify-between items-center">
              <p>{faq.q}</p>
              <MdKeyboardArrowDown
                className={`transition-transform duration-700 ${
                  activeIdx == idx ? "rotate-180" : ""
                }`}
              />
            </div>

            <p
              className={`text-black/60 transition-[height] duration-700 overflow-hidden ${
                activeIdx == idx ? "h-20" : "h-0"
              }`}
            >
              {faq.a}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
