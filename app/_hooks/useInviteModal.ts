import { create } from "zustand";

interface inviteModalProps {
  isOpen: boolean;
  OnOpen: () => void;
  OnClose: () => void;
}

const useInviteModal = create<inviteModalProps>((set) => ({
  isOpen: false,
  OnOpen: () => set({ isOpen: true }),
  OnClose: () => set({ isOpen: false }),
}));

export default useInviteModal;
