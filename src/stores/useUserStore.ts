import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface UserStore {
    name: string | null;
    email: string | null;
    setUser: (user: { name: string; email: string }) => void;
    clearUser: () => void;
}

export const useUserStore = create<UserStore>()(
    persist(
        (set) => ({
            name: null,
            email: null,
            setUser: ({ name, email }) => set({ name, email }),
            clearUser: () => set({ name: null, email: null }),
        }),
        {
            name: 'user-storage',
            storage: createJSONStorage(() => AsyncStorage),
        },
    ),
);
