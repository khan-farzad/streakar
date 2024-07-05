import { create } from "zustand";

interface finishModalProps {
  isOpen: boolean;
  OnOpen: () => void;
  habit: {
    title: string;
    dates: string[];
    streak: number;
    bro?: number;
    broName?: string;
    _id: string;
    lastUpdated: string;
  };
  setHabit: (habit: {
    title: string;
    dates: string[];
    streak: number;
    bro?: number;
    broName?: string;
    _id: string;
    lastUpdated: string;
  }) => void;
  OnClose: () => void;
}

const useApprovalModal = create<finishModalProps>((set) => ({
  isOpen: false,
  habit: {
    title: "",
    dates: [],
    streak: 0,
    bro: 0,
    _id: "",
    lastUpdated: "",
  },
  setHabit: (newHabit: any) => set({ habit: newHabit }),
  OnOpen: () => set({ isOpen: true }),
  OnClose: () => set({ isOpen: false }),
}));

export default useApprovalModal;
