import { create } from "zustand";

interface finishModalProps {
  isOpen: boolean;
  OnOpen: () => void;
  OnClose: () => void;
}

const useNotiModal = create<finishModalProps>((set) => ({
  isOpen: false,
  OnOpen: () => set({ isOpen: true }),
  OnClose: () => set({ isOpen: false }),
}));

export default useNotiModal;
