import { create } from "zustand";

interface finishModalProps {
  isOpen: boolean;
  OnOpen: () => void;
  OnClose: () => void;
}

const useCreateHabitModal = create<finishModalProps>((set) => ({
  isOpen: false,
  OnOpen: () => set({ isOpen: true }),
  OnClose: () => set({ isOpen: false }),
}));

export default useCreateHabitModal;
