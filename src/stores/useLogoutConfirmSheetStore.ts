import { create } from 'zustand';

interface LogoutConfirmSheetStore {
    isOpen: boolean;
    open: () => void;
    close: () => void;
}

export const useLogoutConfirmSheetStore = create<LogoutConfirmSheetStore>()((set) => ({
    isOpen: false,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false }),
}));
