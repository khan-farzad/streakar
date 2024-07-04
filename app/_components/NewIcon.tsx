import React from "react";
import { IoIosAdd } from "react-icons/io";
import useCreateHabitModal from "../_hooks/UseCreateHabitModal";

const NewIcon = () => {
  const { OnOpen } = useCreateHabitModal();
  return (
    <div
      onClick={OnOpen}
      className="size-8 rounded-lg bg-red-300 flex-center text-this-grey text-2xl"
    >
      <IoIosAdd />
    </div>
  );
};

export default NewIcon;
