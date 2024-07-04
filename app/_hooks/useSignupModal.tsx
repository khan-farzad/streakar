import { create } from "zustand";

const useSignupModal = create<{
  isOpen: boolean;
  OnOpen: () => void;
  OnClose: () => void;
}>((set) => ({
  isOpen: false,
  OnOpen: () => set({ isOpen: true }),
  OnClose: () => set({ isOpen: false }),
}));

export default useSignupModal;
