import React from "react";
import { IoIosAdd } from "react-icons/io";
import useCreateHabitModal from "../_hooks/UseCreateHabitModal";

const NewIcon = () => {
  const { OnOpen } = useCreateHabitModal();
  return (
    <button
      onClick={OnOpen}
      className="size-8 rounded-lg bg-red-300 flex-center text-this-grey text-2xl active:scale-90"
    >
      <IoIosAdd />
    </button>
  );
};

export default NewIcon;
